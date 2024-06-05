const completionSpec: Fig.Spec = {
  name: "workdocs",
  description:
    "The Amazon WorkDocs API is designed for the following use cases:   File Migration: File migration applications are supported for users who want to migrate their files from an on-premises or off-premises file system or service. Users can insert files into a user directory structure, as well as allow for basic metadata changes, such as modifications to the permissions of files.   Security: Support security applications are supported for users who have additional security needs, such as antivirus or data loss prevention. The API actions, along with CloudTrail, allow these applications to detect when changes occur in Amazon WorkDocs. Then, the application can take the necessary actions and replace the target file. If the target file violates the policy, the application can also choose to email the user.   eDiscovery/Analytics: General administrative applications are supported, such as eDiscovery and analytics. These applications can choose to mimic or record the actions in an Amazon WorkDocs site, along with CloudTrail, to replicate data for eDiscovery, backup, or analytical applications.   All Amazon WorkDocs API actions are Amazon authenticated and certificate-signed. They not only require the use of the Amazon Web Services SDK, but also allow for the exclusive use of IAM users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the Amazon WorkDocs site, the IAM user gains full administrative visibility into the entire Amazon WorkDocs site (or as set in the IAM policy). This includes, but is not limited to, the ability to modify file permissions and upload any file to any user. This allows developers to perform the three use cases above, as well as give users the ability to grant access on a selective basis using the IAM model.  The pricing for Amazon WorkDocs APIs varies depending on the API call type for these actions:    READ (Get*)     WRITE (Activate*, Add*, Create*, Deactivate*, Initiate*, Update*)     LIST (Describe*)     DELETE*, CANCEL    For information about Amazon WorkDocs API pricing, see Amazon WorkDocs Pricing",
  subcommands: [
    {
      name: "abort-document-version-upload",
      description:
        "Aborts the upload of the specified document version that was previously initiated by InitiateDocumentVersionUpload. The client should make this call only when it no longer intends to upload the document version, or fails to do so",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id",
          description: "The ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description: "The ID of the version",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "activate-user",
      description:
        "Activates the specified user. Only active users can access Amazon WorkDocs",
      options: [
        {
          name: "--user-id",
          description: "The ID of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "add-resource-permissions",
      description:
        "Creates a set of permissions for the specified folder or document. The resource permissions are overwritten if the principals already have different permissions",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The ID of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--principals",
          description:
            "The users, groups, or organization being granted permission",
          args: {
            name: "list",
          },
        },
        {
          name: "--notification-options",
          description: "The notification options",
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
      name: "create-comment",
      description: "Adds a new comment to the specified document version",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id",
          description: "The ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description: "The ID of the document version",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-id",
          description: "The ID of the parent comment",
          args: {
            name: "string",
          },
        },
        {
          name: "--thread-id",
          description: "The ID of the root comment in the thread",
          args: {
            name: "string",
          },
        },
        {
          name: "--text",
          description: "The text of the comment",
          args: {
            name: "string",
          },
        },
        {
          name: "--visibility",
          description:
            "The visibility of the comment. Options are either PRIVATE, where the comment is visible only to the comment author and document owner and co-owners, or PUBLIC, where the comment is visible to document owners, co-owners, and contributors",
          args: {
            name: "string",
          },
        },
        {
          name: "--notify-collaborators",
          description:
            "Set this parameter to TRUE to send an email out to the document collaborators after the comment is created",
        },
        {
          name: "--no-notify-collaborators",
          description:
            "Set this parameter to TRUE to send an email out to the document collaborators after the comment is created",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-custom-metadata",
      description:
        "Adds one or more custom properties to the specified resource (a folder, document, or version)",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The ID of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The ID of the version, if the custom metadata is being added to a document version",
          args: {
            name: "string",
          },
        },
        {
          name: "--custom-metadata",
          description: "Custom metadata in the form of name-value pairs",
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
      name: "create-folder",
      description: "Creates a folder with the specified name and parent folder",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the new folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-folder-id",
          description: "The ID of the parent folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-labels",
      description:
        "Adds the specified list of labels to the given resource (a document or folder)",
      options: [
        {
          name: "--resource-id",
          description: "The ID of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--labels",
          description: "List of labels to add to the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-notification-subscription",
      description:
        "Configure Amazon WorkDocs to use Amazon SNS notifications. The endpoint receives a confirmation message, and must confirm the subscription. For more information, see Setting up notifications for an IAM user or role in the Amazon WorkDocs Developer Guide",
      options: [
        {
          name: "--organization-id",
          description: "The ID of the organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--protocol",
          description:
            "The protocol to use. The supported value is https, which delivers JSON-encoded messages using HTTPS POST",
          args: {
            name: "string",
          },
        },
        {
          name: "--subscription-type",
          description: "The notification type",
          args: {
            name: "string",
          },
        },
        {
          name: "--notification-endpoint",
          description:
            "The endpoint to receive the notifications. If the protocol is HTTPS, the endpoint is a URL that begins with https",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
      description:
        'Creates a user in a Simple AD or Microsoft AD directory. The status of a newly created user is "ACTIVE". New users can access Amazon WorkDocs',
      options: [
        {
          name: "--organization-id",
          description: "The ID of the organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--username",
          description: "The login name of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--email-address",
          description: "The email address of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--given-name",
          description: "The given name of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--surname",
          description: "The surname of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description: "The password of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--time-zone-id",
          description: "The time zone ID of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-rule",
          description: "The amount of storage for the user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "deactivate-user",
      description:
        "Deactivates the specified user, which revokes the user's access to Amazon WorkDocs",
      options: [
        {
          name: "--user-id",
          description: "The ID of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-comment",
      description: "Deletes the specified comment from the document version",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id",
          description: "The ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description: "The ID of the document version",
          args: {
            name: "string",
          },
        },
        {
          name: "--comment-id",
          description: "The ID of the comment",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-custom-metadata",
      description: "Deletes custom metadata from the specified resource",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The ID of the resource, either a document or folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "The ID of the version, if the custom metadata is being deleted from a document version",
          args: {
            name: "string",
          },
        },
        {
          name: "--keys",
          description: "List of properties to remove",
          args: {
            name: "list",
          },
        },
        {
          name: "--delete-all",
          description:
            "Flag to indicate removal of all custom metadata properties from the specified resource",
        },
        {
          name: "--no-delete-all",
          description:
            "Flag to indicate removal of all custom metadata properties from the specified resource",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-document",
      description:
        "Permanently deletes the specified document and its associated metadata",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id",
          description: "The ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-document-version",
      description: "Deletes a specific version of a document",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id",
          description:
            "The ID of the document associated with the version being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description: "The ID of the version being deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--delete-prior-versions",
          description:
            "Deletes all versions of a document prior to the current version",
        },
        {
          name: "--no-delete-prior-versions",
          description:
            "Deletes all versions of a document prior to the current version",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-folder",
      description: "Permanently deletes the specified folder and its contents",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-folder-contents",
      description: "Deletes the contents of the specified folder",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-labels",
      description: "Deletes the specified list of labels from a resource",
      options: [
        {
          name: "--resource-id",
          description: "The ID of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--labels",
          description: "List of labels to delete from the resource",
          args: {
            name: "list",
          },
        },
        {
          name: "--delete-all",
          description:
            "Flag to request removal of all labels from the specified resource",
        },
        {
          name: "--no-delete-all",
          description:
            "Flag to request removal of all labels from the specified resource",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-notification-subscription",
      description:
        "Deletes the specified subscription from the specified organization",
      options: [
        {
          name: "--subscription-id",
          description: "The ID of the subscription",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-id",
          description: "The ID of the organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-user",
      description:
        "Deletes the specified user from a Simple AD or Microsoft AD directory.  Deleting a user immediately and permanently deletes all content in that user's folder structure. Site retention policies do NOT apply to this type of deletion",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Do not set this field when using administrative API actions, as in accessing the API using Amazon Web Services credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The ID of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "describe-activities",
      description: "Describes the user activities in a specified time period",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-time",
          description:
            "The timestamp that determines the starting time of the activities. The response includes the activities performed after the specified timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--end-time",
          description:
            "The timestamp that determines the end time of the activities. The response includes the activities performed before the specified timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--organization-id",
          description:
            "The ID of the organization. This is a mandatory parameter when using administrative API (SigV4) requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--activity-types",
          description:
            "Specifies which activity types to include in the response. If this field is left empty, all activity types are returned",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The document or folder ID for which to describe activity types",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The ID of the user who performed the action. The response includes activities pertaining to this user. This is an optional parameter and is only applicable for administrative API (SigV4) requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-indirect-activities",
          description:
            "Includes indirect activities. An indirect activity results from a direct activity performed on a parent resource. For example, sharing a parent folder (the direct activity) shares all of the subfolders and documents within the parent folder (the indirect activity)",
        },
        {
          name: "--no-include-indirect-activities",
          description:
            "Includes indirect activities. An indirect activity results from a direct activity performed on a parent resource. For example, sharing a parent folder (the direct activity) shares all of the subfolders and documents within the parent folder (the indirect activity)",
        },
        {
          name: "--limit",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description: "The marker for the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "describe-comments",
      description: "List all the comments for the specified document version",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id",
          description: "The ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description: "The ID of the document version",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "The marker for the next set of results. This marker was received from a previous call",
          args: {
            name: "string",
          },
        },
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
      name: "describe-document-versions",
      description:
        "Retrieves the document versions for the specified document. By default, only active versions are returned",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id",
          description: "The ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description:
            "The marker for the next set of results. (You received this marker from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of versions to return with this call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--include",
          description:
            'A comma-separated list of values. Specify "INITIALIZED" to include incomplete versions',
          args: {
            name: "string",
          },
        },
        {
          name: "--fields",
          description:
            'Specify "SOURCE" to include initialized versions and a URL for the source document',
          args: {
            name: "string",
          },
        },
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
      name: "describe-folder-contents",
      description:
        "Describes the contents of the specified folder, including its documents and subfolders. By default, Amazon WorkDocs returns the first 100 active document and folder metadata items. If there are more results, the response includes a marker that you can use to request the next set of results. You can also request initialized documents",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort",
          description: "The sorting criteria",
          args: {
            name: "string",
          },
        },
        {
          name: "--order",
          description: "The order for the contents of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of items to return with this call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "The marker for the next set of results. This marker was received from a previous call",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of items",
          args: {
            name: "string",
          },
        },
        {
          name: "--include",
          description:
            'The contents to include. Specify "INITIALIZED" to include initialized documents',
          args: {
            name: "string",
          },
        },
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
      name: "describe-groups",
      description:
        "Describes the groups specified by the query. Groups are defined by the underlying Active Directory",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--search-query",
          description: "A query to describe groups by group name",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-id",
          description: "The ID of the organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description:
            "The marker for the next set of results. (You received this marker from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of items to return with this call",
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
      name: "describe-notification-subscriptions",
      description: "Lists the specified notification subscriptions",
      options: [
        {
          name: "--organization-id",
          description: "The ID of the organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description:
            "The marker for the next set of results. (You received this marker from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of items to return with this call",
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
      name: "describe-resource-permissions",
      description: "Describes the permissions of a specified resource",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The ID of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description: "The ID of the principal to filter permissions by",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of items to return with this call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "The marker for the next set of results. (You received this marker from a previous call)",
          args: {
            name: "string",
          },
        },
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
      name: "describe-root-folders",
      description:
        "Describes the current user's special folders; the RootFolder and the RecycleBin. RootFolder is the root of user's files and folders and RecycleBin is the root of recycled items. This is not a valid action for SigV4 (administrative API) clients. This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see Authentication and Access Control for User Applications in the Amazon WorkDocs Developer Guide",
      options: [
        {
          name: "--authentication-token",
          description: "Amazon WorkDocs authentication token",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "The marker for the next set of results. (You received this marker from a previous call.)",
          args: {
            name: "string",
          },
        },
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
      name: "describe-users",
      description:
        "Describes the specified users. You can describe all users or filter the results (for example, by status or organization). By default, Amazon WorkDocs returns the first 24 active or pending users. If there are more results, the response includes a marker that you can use to request the next set of results",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-id",
          description: "The ID of the organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-ids",
          description: "The IDs of the users",
          args: {
            name: "string",
          },
        },
        {
          name: "--include",
          description:
            'The state of the users. Specify "ALL" to include inactive users',
          args: {
            name: "string",
          },
        },
        {
          name: "--order",
          description: "The order for the results",
          args: {
            name: "string",
          },
        },
        {
          name: "--sort",
          description: "The sorting criteria",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description:
            "The marker for the next set of results. (You received this marker from a previous call.)",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of items to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--fields",
          description:
            'A comma-separated list of values. Specify "STORAGE_METADATA" to include the user storage quota and utilization information',
          args: {
            name: "string",
          },
        },
        {
          name: "--user-query",
          description:
            'A query to filter users by user name. Remember the following about the Userids and Query parameters:   If you don\'t use either parameter, the API returns a paginated list of all users on the site.   If you use both parameters, the API ignores the Query parameter.   The Userid parameter only returns user names that match a corresponding user ID.   The Query parameter runs a "prefix" search for users by the GivenName, SurName, or UserName fields included in a CreateUser API call. For example, querying on Ma returns M\u00e1rcia Oliveira, Mar\u00eda Garc\u00eda, and Mateo Jackson. If you use multiple characters, the API only returns data that matches all characters. For example, querying on Ma J only returns Mateo Jackson',
          args: {
            name: "string",
          },
        },
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
      name: "get-current-user",
      description:
        "Retrieves details of the current user for whom the authentication token was generated. This is not a valid action for SigV4 (administrative API) clients. This action requires an authentication token. To get an authentication token, register an application with Amazon WorkDocs. For more information, see Authentication and Access Control for User Applications in the Amazon WorkDocs Developer Guide",
      options: [
        {
          name: "--authentication-token",
          description: "Amazon WorkDocs authentication token",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-document",
      description: "Retrieves details of a document",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id",
          description: "The ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-custom-metadata",
          description:
            "Set this to TRUE to include custom metadata in the response",
        },
        {
          name: "--no-include-custom-metadata",
          description:
            "Set this to TRUE to include custom metadata in the response",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-document-path",
      description:
        "Retrieves the path information (the hierarchy from the root folder) for the requested document. By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested document and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the names of the parent folders",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id",
          description: "The ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of levels in the hierarchy to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--fields",
          description:
            "A comma-separated list of values. Specify NAME to include the names of the parent folders",
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description: "This value is not supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-document-version",
      description: "Retrieves version metadata for the specified document",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id",
          description: "The ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description: "The version ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--fields",
          description:
            'A comma-separated list of values. Specify "SOURCE" to include a URL for the source document',
          args: {
            name: "string",
          },
        },
        {
          name: "--include-custom-metadata",
          description:
            "Set this to TRUE to include custom metadata in the response",
        },
        {
          name: "--no-include-custom-metadata",
          description:
            "Set this to TRUE to include custom metadata in the response",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-folder",
      description: "Retrieves the metadata of the specified folder",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--include-custom-metadata",
          description: "Set to TRUE to include custom metadata in the response",
        },
        {
          name: "--no-include-custom-metadata",
          description: "Set to TRUE to include custom metadata in the response",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-folder-path",
      description:
        "Retrieves the path information (the hierarchy from the root folder) for the specified folder. By default, Amazon WorkDocs returns a maximum of 100 levels upwards from the requested folder and only includes the IDs of the parent folders in the path. You can limit the maximum number of levels. You can also request the parent folder names",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description:
            "The maximum number of levels in the hierarchy to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--fields",
          description:
            'A comma-separated list of values. Specify "NAME" to include the names of the parent folders',
          args: {
            name: "string",
          },
        },
        {
          name: "--marker",
          description: "This value is not supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "get-resources",
      description:
        "Retrieves a collection of resources, including folders and documents. The only CollectionType supported is SHARED_WITH_ME",
      options: [
        {
          name: "--authentication-token",
          description:
            "The Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The user ID for the resource collection. This is a required field for accessing the API operation using IAM credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--collection-type",
          description: "The collection type",
          args: {
            name: "string",
          },
        },
        {
          name: "--limit",
          description: "The maximum number of resources to return",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description:
            "The marker for the next set of results. This marker was received from a previous call",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "initiate-document-version-upload",
      description:
        "Creates a new document object and version object. The client specifies the parent folder ID and name of the document to upload. The ID is optionally specified when creating a new version of an existing document. This is the first step to upload a document. Next, upload the document to the URL returned from the call, and then call UpdateDocumentVersion. To cancel the document upload, call AbortDocumentVersionUpload",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--content-created-timestamp",
          description:
            "The timestamp when the content of the document was originally created",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--content-modified-timestamp",
          description:
            "The timestamp when the content of the document was modified",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--content-type",
          description: "The content type of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-size-in-bytes",
          description: "The size of the document, in bytes",
          args: {
            name: "long",
          },
        },
        {
          name: "--parent-folder-id",
          description: "The ID of the parent folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "remove-all-resource-permissions",
      description: "Removes all the permissions from the specified resource",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The ID of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "remove-resource-permission",
      description:
        "Removes the permission for the specified principal from the specified resource",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description: "The ID of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-id",
          description: "The principal ID of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--principal-type",
          description: "The principal type of the resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "restore-document-versions",
      description: "Recovers a deleted version of an Amazon WorkDocs document",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id",
          description: "The ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "search-resources",
      description:
        "Searches metadata and the content of folders, documents, document versions, and comments",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-text",
          description:
            "The String to search for. Searches across different text fields based on request parameters. Use double quotes around the query string for exact phrase matches",
          args: {
            name: "string",
          },
        },
        {
          name: "--query-scopes",
          description:
            "Filter based on the text field type. A Folder has only a name and no content. A Comment has only content and no name. A Document or Document Version has a name and content",
          args: {
            name: "list",
          },
        },
        {
          name: "--organization-id",
          description:
            "Filters based on the resource owner OrgId. This is a mandatory parameter when using Admin SigV4 credentials",
          args: {
            name: "string",
          },
        },
        {
          name: "--additional-response-fields",
          description:
            "A list of attributes to include in the response. Used to request fields that are not normally returned in a standard response",
          args: {
            name: "list",
          },
        },
        {
          name: "--filters",
          description: "Filters results based on entity metadata",
          args: {
            name: "structure",
          },
        },
        {
          name: "--order-by",
          description: "Order by results in one or more categories",
          args: {
            name: "list",
          },
        },
        {
          name: "--limit",
          description: "Max results count per page",
          args: {
            name: "integer",
          },
        },
        {
          name: "--marker",
          description: "The marker for the next set of results",
          args: {
            name: "string",
          },
        },
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
      name: "update-document",
      description:
        "Updates the specified attributes of a document. The user must have access to both the document and its parent folder, if applicable",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id",
          description: "The ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-folder-id",
          description: "The ID of the parent folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-state",
          description:
            "The resource state of the document. Only ACTIVE and RECYCLED are supported",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-document-version",
      description:
        "Changes the status of the document version to ACTIVE.  Amazon WorkDocs also sets its document container to ACTIVE. This is the last step in a document upload, after the client uploads the document to an S3-presigned URL returned by InitiateDocumentVersionUpload",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--document-id",
          description: "The ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description: "The version ID of the document",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-status",
          description: "The status of the version",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-folder",
      description:
        "Updates the specified attributes of the specified folder. The user must have access to both the folder and its parent folder, if applicable",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-id",
          description: "The ID of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--parent-folder-id",
          description: "The ID of the parent folder",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-state",
          description:
            "The resource state of the folder. Only ACTIVE and RECYCLED are accepted values from the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Updates the specified attributes of the specified user, and grants or revokes administrative privileges to the Amazon WorkDocs site",
      options: [
        {
          name: "--authentication-token",
          description:
            "Amazon WorkDocs authentication token. Not required when using Amazon Web Services administrator credentials to access the API",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The ID of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--given-name",
          description: "The given name of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--surname",
          description: "The surname of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The type of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--storage-rule",
          description: "The amount of storage for the user",
          args: {
            name: "structure",
          },
        },
        {
          name: "--time-zone-id",
          description: "The time zone ID of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--locale",
          description: "The locale of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--grant-poweruser-privileges",
          description:
            "Boolean value to determine whether the user is granted Power user privileges",
          args: {
            name: "string",
          },
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
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
