const completionSpec: Fig.Spec = {
  name: "workmail",
  description:
    "WorkMail is a secure, managed business email and calendaring service with support for existing desktop and mobile email clients. You can access your email, contacts, and calendars using Microsoft Outlook, your browser, or other native iOS and Android email applications. You can integrate WorkMail with your existing corporate directory and control both the keys that encrypt your data and the location in which your data is stored. The WorkMail API is designed for the following scenarios:   Listing and describing organizations     Managing users     Managing groups     Managing resources   All WorkMail API operations are Amazon-authenticated and certificate-signed. They not only require the use of the AWS SDK, but also allow for the exclusive use of AWS Identity and Access Management users and roles to help facilitate access, trust, and permission policies. By creating a role and allowing an IAM user to access the WorkMail site, the IAM user gains full administrative visibility into the entire WorkMail organization (or as set in the IAM policy). This includes, but is not limited to, the ability to create, update, and delete users, groups, and resources. This allows developers to perform the scenarios listed above, as well as give users the ability to grant access on a selective basis using the IAM model",
  subcommands: [
    {
      name: "associate-delegate-to-resource",
      description:
        "Adds a member (user or group) to the resource's set of delegates",
      options: [
        {
          name: "--organization-id",
          description: "The organization under which the resource exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The resource for which members (users or groups) are associated. The identifier can accept ResourceId, Resourcename, or email. The following identity formats are available:   Resource ID: r-0123456789a0123456789b0123456789   Email address: resource@domain.tld   Resource name: resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The member (user or group) to associate to the resource. The entity ID can accept UserId or GroupID, Username or Groupname, or email.   Entity: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity: entity",
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
      name: "associate-member-to-group",
      description: "Adds a member (user or group) to the group's set",
      options: [
        {
          name: "--organization-id",
          description: "The organization under which the group exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description:
            "The group to which the member (user or group) is associated. The identifier can accept GroupId, Groupname, or email. The following identity formats are available:   Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: group@domain.tld   Group name: group",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description:
            "The member (user or group) to associate to the group. The member ID can accept UserID or GroupId, Username or Groupname, or email.   Member: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: member@domain.tld   Member name: member",
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
      name: "assume-impersonation-role",
      description:
        "Assumes an impersonation role for the given WorkMail organization. This method returns an authentication token you can use to make impersonated calls",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization under which the impersonation role will be assumed",
          args: {
            name: "string",
          },
        },
        {
          name: "--impersonation-role-id",
          description: "The impersonation role ID to assume",
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
      name: "cancel-mailbox-export-job",
      description:
        "Cancels a mailbox export job.  If the mailbox export job is near completion, it might not be possible to cancel it",
      options: [
        {
          name: "--client-token",
          description: "The idempotency token for the client request",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-id",
          description: "The job ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-id",
          description: "The organization ID",
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
      name: "create-alias",
      description:
        "Adds an alias to the set of a given member (user or group) of WorkMail",
      options: [
        {
          name: "--organization-id",
          description:
            "The organization under which the member (user or group) exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The member (user or group) to which this alias is added",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias",
          description: "The alias to add to the member set",
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
      name: "create-availability-configuration",
      description:
        "Creates an AvailabilityConfiguration for the given WorkMail organization and domain",
      options: [
        {
          name: "--client-token",
          description:
            "An idempotent token that ensures that an API request is executed only once",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-id",
          description:
            "The WorkMail organization for which the AvailabilityConfiguration will be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description: "The domain to which the provider applies",
          args: {
            name: "string",
          },
        },
        {
          name: "--ews-provider",
          description:
            "Exchange Web Services (EWS) availability provider definition. The request must contain exactly one provider definition, either EwsProvider or LambdaProvider",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lambda-provider",
          description:
            "Lambda availability provider definition. The request must contain exactly one provider definition, either EwsProvider or LambdaProvider",
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
      name: "create-group",
      description:
        "Creates a group that can be used in WorkMail by calling the RegisterToWorkMail operation",
      options: [
        {
          name: "--organization-id",
          description:
            "The organization under which the group is to be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the group",
          args: {
            name: "string",
          },
        },
        {
          name: "--hidden-from-global-address-list",
          description:
            "If this parameter is enabled, the group will be hidden from the address book",
        },
        {
          name: "--no-hidden-from-global-address-list",
          description:
            "If this parameter is enabled, the group will be hidden from the address book",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-identity-center-application",
      description:
        "Creates the WorkMail application in IAM Identity Center that can be used later in the WorkMail - IdC integration. For more information, see PutIdentityProviderConfiguration. This action does not affect the authentication settings for any WorkMail organizations",
      options: [
        {
          name: "--name",
          description: "The name of the IAM Identity Center application",
          args: {
            name: "string",
          },
        },
        {
          name: "--instance-arn",
          description: "The Amazon Resource Name (ARN) of the instance",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description: "The idempotency token associated with the request",
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
      name: "create-impersonation-role",
      description:
        "Creates an impersonation role for the given WorkMail organization.  Idempotency ensures that an API request completes no more than one time. With an idempotent request, if the original request completes successfully, any subsequent retries also complete successfully without performing any further actions",
      options: [
        {
          name: "--client-token",
          description: "The idempotency token for the client request",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-id",
          description:
            "The WorkMail organization to create the new impersonation role within",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the new impersonation role",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The impersonation role's type. The available impersonation role types are READ_ONLY or FULL_ACCESS",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the new impersonation role",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description: "The list of rules for the impersonation role",
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
      name: "create-mobile-device-access-rule",
      description:
        "Creates a new mobile device access rule for the specified WorkMail organization",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization under which the rule will be created",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description: "The idempotency token for the client request",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The rule name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The rule description",
          args: {
            name: "string",
          },
        },
        {
          name: "--effect",
          description:
            "The effect of the rule when it matches. Allowed values are ALLOW or DENY",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-types",
          description: "Device types that the rule will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--not-device-types",
          description:
            "Device types that the rule will not match. All other device types will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--device-models",
          description: "Device models that the rule will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--not-device-models",
          description:
            "Device models that the rule will not match. All other device models will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--device-operating-systems",
          description: "Device operating systems that the rule will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--not-device-operating-systems",
          description:
            "Device operating systems that the rule will not match. All other device operating systems will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--device-user-agents",
          description: "Device user agents that the rule will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--not-device-user-agents",
          description:
            "Device user agents that the rule will not match. All other device user agents will match",
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
      name: "create-organization",
      description:
        "Creates a new WorkMail organization. Optionally, you can choose to associate an existing AWS Directory Service directory with your organization. If an AWS Directory Service directory ID is specified, the organization alias must match the directory alias. If you choose not to associate an existing directory with your organization, then we create a new WorkMail directory for you. For more information, see Adding an organization in the WorkMail Administrator Guide. You can associate multiple email domains with an organization, then choose your default email domain from the WorkMail console. You can also associate a domain that is managed in an Amazon Route 53 public hosted zone. For more information, see Adding a domain and Choosing the default domain in the WorkMail Administrator Guide. Optionally, you can use a customer managed key from AWS Key Management Service (AWS KMS) to encrypt email for your organization. If you don't associate an AWS KMS key, WorkMail creates a default, AWS managed key for you",
      options: [
        {
          name: "--directory-id",
          description: "The AWS Directory Service directory ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias",
          description: "The organization alias",
          args: {
            name: "string",
          },
        },
        {
          name: "--client-token",
          description: "The idempotency token associated with the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--domains",
          description: "The email domains to associate with the organization",
          args: {
            name: "list",
          },
        },
        {
          name: "--kms-key-arn",
          description:
            "The Amazon Resource Name (ARN) of a customer managed key from AWS KMS",
          args: {
            name: "string",
          },
        },
        {
          name: "--enable-interoperability",
          description:
            "When true, allows organization interoperability between WorkMail and Microsoft Exchange. If true, you must include a AD Connector directory ID in the request",
        },
        {
          name: "--no-enable-interoperability",
          description:
            "When true, allows organization interoperability between WorkMail and Microsoft Exchange. If true, you must include a AD Connector directory ID in the request",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "create-resource",
      description: "Creates a new WorkMail resource",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier associated with the organization for which the resource is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the new resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description:
            "The type of the new resource. The available types are equipment and room",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "Resource description",
          args: {
            name: "string",
          },
        },
        {
          name: "--hidden-from-global-address-list",
          description:
            "If this parameter is enabled, the resource will be hidden from the address book",
        },
        {
          name: "--no-hidden-from-global-address-list",
          description:
            "If this parameter is enabled, the resource will be hidden from the address book",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Creates a user who can be used in WorkMail by calling the RegisterToWorkMail operation",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier of the organization for which the user is created",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description:
            "The name for the new user. WorkMail directory user names have a maximum length of 64. All others have a maximum length of 20",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "The display name for the new user",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description: "The password for the new user",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "The role of the new user. You cannot pass SYSTEM_USER or RESOURCE role in a single request. When a user role is not selected, the default role of USER is selected",
          args: {
            name: "string",
          },
        },
        {
          name: "--first-name",
          description: "The first name of the new user",
          args: {
            name: "string",
          },
        },
        {
          name: "--last-name",
          description: "The last name of the new user",
          args: {
            name: "string",
          },
        },
        {
          name: "--hidden-from-global-address-list",
          description:
            "If this parameter is enabled, the user will be hidden from the address book",
        },
        {
          name: "--no-hidden-from-global-address-list",
          description:
            "If this parameter is enabled, the user will be hidden from the address book",
        },
        {
          name: "--identity-provider-user-id",
          description:
            "User ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail",
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
      name: "delete-access-control-rule",
      description:
        "Deletes an access control rule for the specified WorkMail organization.  Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body",
      options: [
        {
          name: "--organization-id",
          description: "The identifier for the organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the access control rule",
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
      name: "delete-alias",
      description:
        "Remove one or more specified aliases from a set of aliases for a given user",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the user exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The identifier for the member (user or group) from which to have the aliases removed",
          args: {
            name: "string",
          },
        },
        {
          name: "--alias",
          description:
            "The aliases to be removed from the user's set of aliases. Duplicate entries in the list are collapsed into single entries (the list is transformed into a set)",
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
      name: "delete-availability-configuration",
      description:
        "Deletes the AvailabilityConfiguration for the given WorkMail organization and domain",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization for which the AvailabilityConfiguration will be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description:
            "The domain for which the AvailabilityConfiguration will be deleted",
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
      name: "delete-email-monitoring-configuration",
      description:
        "Deletes the email monitoring configuration for a specified organization",
      options: [
        {
          name: "--organization-id",
          description:
            "The ID of the organization from which the email monitoring configuration is deleted",
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
      name: "delete-group",
      description: "Deletes a group from WorkMail",
      options: [
        {
          name: "--organization-id",
          description: "The organization that contains the group",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description:
            "The identifier of the group to be deleted. The identifier can be the GroupId, or Groupname. The following identity formats are available:   Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Group name: group",
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
      name: "delete-identity-center-application",
      description:
        "Deletes the IAM Identity Center application from WorkMail. This action does not affect the authentication settings for any WorkMail organizations",
      options: [
        {
          name: "--application-arn",
          description: "The Amazon Resource Name (ARN) of the application",
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
      name: "delete-identity-provider-configuration",
      description:
        "Disables the integration between IdC and WorkMail. Authentication will continue with the directory as it was before the IdC integration. You might have to reset your directory passwords and reconfigure your desktop and mobile email clients",
      options: [
        {
          name: "--organization-id",
          description: "The Organization ID",
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
      name: "delete-impersonation-role",
      description:
        "Deletes an impersonation role for the given WorkMail organization",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization from which to delete the impersonation role",
          args: {
            name: "string",
          },
        },
        {
          name: "--impersonation-role-id",
          description: "The ID of the impersonation role to delete",
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
      name: "delete-mailbox-permissions",
      description: "Deletes permissions granted to a member (user or group)",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier of the organization under which the member (user or group) exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The identifier of the entity that owns the mailbox. The identifier can be UserId or Group Id, Username or Groupname, or email.   Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity name: entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--grantee-id",
          description:
            "The identifier of the entity for which to delete granted permissions. The identifier can be UserId, ResourceID, or Group Id, Username or Groupname, or email.   Grantee ID: 12345678-1234-1234-1234-123456789012,r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Email address: grantee@domain.tld   Grantee name: grantee",
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
      name: "delete-mobile-device-access-override",
      description:
        "Deletes the mobile device access override for the given WorkMail organization, user, and device.  Deleting already deleted and non-existing overrides does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization for which the access override will be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The WorkMail user for which you want to delete the override. Accepts the following types of user identities:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234    Email address: user@domain.tld    User name: user",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-id",
          description:
            "The mobile device for which you delete the override. DeviceId is case insensitive",
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
      name: "delete-mobile-device-access-rule",
      description:
        "Deletes a mobile device access rule for the specified WorkMail organization.  Deleting already deleted and non-existing rules does not produce an error. In those cases, the service sends back an HTTP 200 response with an empty HTTP body",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization under which the rule will be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--mobile-device-access-rule-id",
          description: "The identifier of the rule to be deleted",
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
      name: "delete-organization",
      description:
        "Deletes an WorkMail organization and all underlying AWS resources managed by WorkMail as part of the organization. You can choose whether to delete the associated directory. For more information, see Removing an organization in the WorkMail Administrator Guide",
      options: [
        {
          name: "--client-token",
          description: "The idempotency token associated with the request",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-id",
          description: "The organization ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--delete-directory",
          description:
            "If true, deletes the AWS Directory Service directory associated with the organization",
        },
        {
          name: "--no-delete-directory",
          description:
            "If true, deletes the AWS Directory Service directory associated with the organization",
        },
        {
          name: "--force-delete",
          description:
            "Deletes a WorkMail organization even if the organization has enabled users",
        },
        {
          name: "--no-force-delete",
          description:
            "Deletes a WorkMail organization even if the organization has enabled users",
        },
        {
          name: "--delete-identity-center-application",
          description:
            "Deletes IAM Identity Center application for WorkMail. This action does not affect authentication settings for any organization",
        },
        {
          name: "--no-delete-identity-center-application",
          description:
            "Deletes IAM Identity Center application for WorkMail. This action does not affect authentication settings for any organization",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "delete-personal-access-token",
      description:
        "Deletes the Personal Access Token from the provided WorkMail Organization",
      options: [
        {
          name: "--organization-id",
          description: "The Organization ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--personal-access-token-id",
          description: "The Personal Access Token ID",
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
      name: "delete-resource",
      description: "Deletes the specified resource",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier associated with the organization from which the resource is deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The identifier of the resource to be deleted. The identifier can accept ResourceId, or Resourcename. The following identity formats are available:   Resource ID: r-0123456789a0123456789b0123456789   Resource name: resource",
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
      name: "delete-retention-policy",
      description:
        "Deletes the specified retention policy from the specified organization",
      options: [
        {
          name: "--organization-id",
          description: "The organization ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The retention policy ID",
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
        "Deletes a user from WorkMail and all subsequent systems. Before you can delete a user, the user state must be DISABLED. Use the DescribeUser action to confirm the user state. Deleting a user is permanent and cannot be undone. WorkMail archives user mailboxes for 30 days before they are permanently removed",
      options: [
        {
          name: "--organization-id",
          description: "The organization that contains the user to be deleted",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier of the user to be deleted. The identifier can be the UserId or Username. The following identity formats are available:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   User name: user",
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
      name: "deregister-from-work-mail",
      description:
        "Mark a user, group, or resource as no longer used in WorkMail. This action disassociates the mailbox and schedules it for clean-up. WorkMail keeps mailboxes for 30 days before they are permanently removed. The functionality in the console is Disable",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the WorkMail entity exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The identifier for the member to be updated. The identifier can be UserId, ResourceId, or Group Id, Username, Resourcename, or Groupname, or email.   Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity name: entity",
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
      name: "deregister-mail-domain",
      description:
        "Removes a domain from WorkMail, stops email routing to WorkMail, and removes the authorization allowing WorkMail use. SES keeps the domain because other applications may use it. You must first remove any email address used by WorkMail entities before you remove the domain",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization for which the domain will be deregistered",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description: "The domain to deregister in WorkMail and SES",
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
      name: "describe-email-monitoring-configuration",
      description:
        "Describes the current email monitoring configuration for a specified organization",
      options: [
        {
          name: "--organization-id",
          description:
            "The ID of the organization for which the email monitoring configuration is described",
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
      name: "describe-entity",
      description: "Returns basic details about an entity in WorkMail",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the entity exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description: "The email under which the entity exists",
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
      name: "describe-group",
      description: "Returns the data available for the group",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the group exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description:
            "The identifier for the group to be described. The identifier can accept GroupId, Groupname, or email. The following identity formats are available:   Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: group@domain.tld   Group name: group",
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
      name: "describe-identity-provider-configuration",
      description:
        "Returns detailed information on the current IdC setup for the WorkMail organization",
      options: [
        {
          name: "--organization-id",
          description: "The Organization ID",
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
      name: "describe-inbound-dmarc-settings",
      description:
        "Lists the settings in a DMARC policy for a specified organization",
      options: [
        {
          name: "--organization-id",
          description: "Lists the ID of the given organization",
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
      name: "describe-mailbox-export-job",
      description: "Describes the current status of a mailbox export job",
      options: [
        {
          name: "--job-id",
          description: "The mailbox export job ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-id",
          description: "The organization ID",
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
      name: "describe-organization",
      description:
        "Provides more information regarding a given organization based on its identifier",
      options: [
        {
          name: "--organization-id",
          description: "The identifier for the organization to be described",
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
      description: "Returns the data available for the resource",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier associated with the organization for which the resource is described",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The identifier of the resource to be described. The identifier can accept ResourceId, Resourcename, or email. The following identity formats are available:   Resource ID: r-0123456789a0123456789b0123456789   Email address: resource@domain.tld   Resource name: resource",
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
      name: "describe-user",
      description: "Provides information regarding the user",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the user exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier for the user to be described. The identifier can be the UserId, Username, or email. The following identity formats are available:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: user@domain.tld   User name: user",
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
      name: "disassociate-delegate-from-resource",
      description: "Removes a member from the resource's set of delegates",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the resource exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The identifier of the resource from which delegates' set members are removed.  The identifier can accept ResourceId, Resourcename, or email. The following identity formats are available:   Resource ID: r-0123456789a0123456789b0123456789   Email address: resource@domain.tld   Resource name: resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The identifier for the member (user, group) to be removed from the resource's delegates. The entity ID can accept UserId or GroupID, Username or Groupname, or email.   Entity: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity: entity",
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
      name: "disassociate-member-from-group",
      description: "Removes a member from a group",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the group exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description:
            "The identifier for the group from which members are removed. The identifier can accept GroupId, Groupname, or email. The following identity formats are available:   Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: group@domain.tld   Group name: group",
          args: {
            name: "string",
          },
        },
        {
          name: "--member-id",
          description:
            "The identifier for the member to be removed from the group. The member ID can accept UserID or GroupId, Username or Groupname, or email.   Member ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: member@domain.tld   Member name: member",
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
      name: "get-access-control-effect",
      description:
        "Gets the effects of an organization's access control rules as they apply to a specified IPv4 address, access protocol action, and user ID or impersonation role ID. You must provide either the user ID or impersonation role ID. Impersonation role ID can only be used with Action EWS",
      options: [
        {
          name: "--organization-id",
          description: "The identifier for the organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-address",
          description: "The IPv4 address",
          args: {
            name: "string",
          },
        },
        {
          name: "--action",
          description:
            "The access protocol action. Valid values include ActiveSync, AutoDiscover, EWS, IMAP, SMTP, WindowsOutlook, and WebMail",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The user ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--impersonation-role-id",
          description: "The impersonation role ID",
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
      name: "get-default-retention-policy",
      description:
        "Gets the default retention policy details for the specified organization",
      options: [
        {
          name: "--organization-id",
          description: "The organization ID",
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
      name: "get-impersonation-role",
      description:
        "Gets the impersonation role details for the given WorkMail organization",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization from which to retrieve the impersonation role",
          args: {
            name: "string",
          },
        },
        {
          name: "--impersonation-role-id",
          description: "The impersonation role ID to retrieve",
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
      name: "get-impersonation-role-effect",
      description:
        "Tests whether the given impersonation role can impersonate a target user",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization where the impersonation role is defined",
          args: {
            name: "string",
          },
        },
        {
          name: "--impersonation-role-id",
          description: "The impersonation role ID to test",
          args: {
            name: "string",
          },
        },
        {
          name: "--target-user",
          description:
            "The WorkMail organization user chosen to test the impersonation role. The following identity formats are available:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234    Email address: user@domain.tld    User name: user",
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
      name: "get-mail-domain",
      description:
        "Gets details for a mail domain, including domain records required to configure your domain with recommended security",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization for which the domain is retrieved",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description: "The domain from which you want to retrieve details",
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
      name: "get-mailbox-details",
      description:
        "Requests a user's mailbox details for a specified organization and user",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization that contains the user whose mailbox details are being requested",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier for the user whose mailbox details are being requested. The identifier can be the UserId, Username, or email. The following identity formats are available:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: user@domain.tld   User name: user",
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
      name: "get-mobile-device-access-effect",
      description:
        "Simulates the effect of the mobile device access rules for the given attributes of a sample access event. Use this method to test the effects of the current set of mobile device access rules for the WorkMail organization for a particular user's attributes",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization to simulate the access effect for",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-type",
          description: "Device type the simulated user will report",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-model",
          description: "Device model the simulated user will report",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-operating-system",
          description: "Device operating system the simulated user will report",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-user-agent",
          description: "Device user agent the simulated user will report",
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
      name: "get-mobile-device-access-override",
      description:
        "Gets the mobile device access override for the given WorkMail organization, user, and device",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization to which you want to apply the override",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "Identifies the WorkMail user for the override. Accepts the following types of user identities:    User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234    Email address: user@domain.tld    User name: user",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-id",
          description:
            "The mobile device to which the override applies. DeviceId is case insensitive",
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
      name: "get-personal-access-token-metadata",
      description:
        "Requests details of a specific Personal Access Token within the WorkMail organization",
      options: [
        {
          name: "--organization-id",
          description: "The Organization ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--personal-access-token-id",
          description: "The Personal Access Token ID",
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
      name: "list-access-control-rules",
      description:
        "Lists the access control rules for the specified organization",
      options: [
        {
          name: "--organization-id",
          description: "The identifier for the organization",
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
      name: "list-aliases",
      description:
        "Creates a paginated call to list the aliases associated with a given entity",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the entity exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The identifier for the entity for which to list the aliases",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use to retrieve the next page of results. The first call does not contain any tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
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
      name: "list-availability-configurations",
      description:
        "List all the AvailabilityConfiguration's for the given WorkMail organization",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization for which the AvailabilityConfiguration's will be listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use to retrieve the next page of results. The first call does not require a token",
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
      name: "list-group-members",
      description:
        "Returns an overview of the members of a group. Users and groups can be members of a group",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the group exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description:
            "The identifier for the group to which the members (users or groups) are associated. The identifier can accept GroupId, Groupname, or email. The following identity formats are available:   Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: group@domain.tld   Group name: group",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use to retrieve the next page of results. The first call does not contain any tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
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
      name: "list-groups",
      description: "Returns summaries of the organization's groups",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the groups exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use to retrieve the next page of results. The first call does not contain any tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "Limit the search results based on the filter criteria. Only one filter per request is supported",
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
      name: "list-groups-for-entity",
      description: "Returns all the groups to which an entity belongs",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the entity exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The identifier for the entity. The entity ID can accept UserId or GroupID, Username or Groupname, or email.   Entity ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity name: entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--filters",
          description: "Limit the search results based on the filter criteria",
          args: {
            name: "structure",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use to retrieve the next page of results. The first call does not contain any tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
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
      name: "list-impersonation-roles",
      description:
        "Lists all the impersonation roles for the given WorkMail organization",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization to which the listed impersonation roles belong",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token used to retrieve the next page of results. The first call doesn't require a token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results returned in a single call",
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
      name: "list-mail-domains",
      description: "Lists the mail domains in a given WorkMail organization",
      options: [
        {
          name: "--organization-id",
          description: "The WorkMail organization for which to list domains",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use to retrieve the next page of results. The first call does not require a token",
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
      name: "list-mailbox-export-jobs",
      description:
        "Lists the mailbox export jobs started for the specified organization within the last seven days",
      options: [
        {
          name: "--organization-id",
          description: "The organization ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description: "The token to use to retrieve the next page of results",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
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
      name: "list-mailbox-permissions",
      description:
        "Lists the mailbox permissions associated with a user, group, or resource mailbox",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier of the organization under which the user, group, or resource exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The identifier of the user, or resource for which to list mailbox permissions. The entity ID can accept UserId or ResourceId, Username or Resourcename, or email.   Entity ID: 12345678-1234-1234-1234-123456789012, or r-0123456789a0123456789b0123456789   Email address: entity@domain.tld   Entity name: entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use to retrieve the next page of results. The first call does not contain any tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
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
      name: "list-mobile-device-access-overrides",
      description:
        "Lists all the mobile device access overrides for any given combination of WorkMail organization, user, or device",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization under which to list mobile device access overrides",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The WorkMail user under which you list the mobile device access overrides. Accepts the following types of user identities:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234    Email address: user@domain.tld    User name: user",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-id",
          description: "The mobile device to which the access override applies",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use to retrieve the next page of results. The first call does not require a token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
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
      name: "list-mobile-device-access-rules",
      description:
        "Lists the mobile device access rules for the specified WorkMail organization",
      options: [
        {
          name: "--organization-id",
          description: "The WorkMail organization for which to list the rules",
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
      name: "list-organizations",
      description: "Returns summaries of the customer's organizations",
      options: [
        {
          name: "--next-token",
          description:
            "The token to use to retrieve the next page of results. The first call does not contain any tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
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
      name: "list-personal-access-tokens",
      description: "Returns a summary of your Personal Access Tokens",
      options: [
        {
          name: "--organization-id",
          description: "The Organization ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description: "The WorkMail User ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token from the previous response to query the next page",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum amount of items that should be returned in a response",
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
      name: "list-resource-delegates",
      description:
        "Lists the delegates associated with a resource. Users and groups can be resource delegates and answer requests on behalf of the resource",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization that contains the resource for which delegates are listed",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The identifier for the resource whose delegates are listed. The identifier can accept ResourceId, Resourcename, or email. The following identity formats are available:   Resource ID: r-0123456789a0123456789b0123456789   Email address: resource@domain.tld   Resource name: resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token used to paginate through the delegates associated with a resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The number of maximum results in a page",
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
      name: "list-resources",
      description: "Returns summaries of the organization's resources",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the resources exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use to retrieve the next page of results. The first call does not contain any tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "Limit the resource search results based on the filter criteria. You can only use one filter per request",
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
      description:
        "Lists the tags applied to an WorkMail organization resource",
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
      name: "list-users",
      description: "Returns summaries of the organization's users",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the users exist",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The token to use to retrieve the next page of results. The first call does not contain any tokens",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of results to return in a single call",
          args: {
            name: "integer",
          },
        },
        {
          name: "--filters",
          description:
            "Limit the user search results based on the filter criteria. You can only use one filter per request",
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
      name: "put-access-control-rule",
      description:
        "Adds a new access control rule for the specified organization. The rule allows or denies access to the organization for the specified IPv4 addresses, access protocol actions, user IDs and impersonation IDs. Adding a new rule with the same name as an existing rule replaces the older rule",
      options: [
        {
          name: "--name",
          description: "The rule name",
          args: {
            name: "string",
          },
        },
        {
          name: "--effect",
          description: "The rule effect",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The rule description",
          args: {
            name: "string",
          },
        },
        {
          name: "--ip-ranges",
          description: "IPv4 CIDR ranges to include in the rule",
          args: {
            name: "list",
          },
        },
        {
          name: "--not-ip-ranges",
          description: "IPv4 CIDR ranges to exclude from the rule",
          args: {
            name: "list",
          },
        },
        {
          name: "--actions",
          description:
            "Access protocol actions to include in the rule. Valid values include ActiveSync, AutoDiscover, EWS, IMAP, SMTP, WindowsOutlook, and WebMail",
          args: {
            name: "list",
          },
        },
        {
          name: "--not-actions",
          description:
            "Access protocol actions to exclude from the rule. Valid values include ActiveSync, AutoDiscover, EWS, IMAP, SMTP, WindowsOutlook, and WebMail",
          args: {
            name: "list",
          },
        },
        {
          name: "--user-ids",
          description: "User IDs to include in the rule",
          args: {
            name: "list",
          },
        },
        {
          name: "--not-user-ids",
          description: "User IDs to exclude from the rule",
          args: {
            name: "list",
          },
        },
        {
          name: "--organization-id",
          description: "The identifier of the organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--impersonation-role-ids",
          description: "Impersonation role IDs to include in the rule",
          args: {
            name: "list",
          },
        },
        {
          name: "--not-impersonation-role-ids",
          description: "Impersonation role IDs to exclude from the rule",
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
      name: "put-email-monitoring-configuration",
      description:
        "Creates or updates the email monitoring configuration for a specified organization",
      options: [
        {
          name: "--organization-id",
          description:
            "The ID of the organization for which the email monitoring configuration is set",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM Role associated with the email monitoring configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--log-group-arn",
          description:
            "The Amazon Resource Name (ARN) of the CloudWatch Log group associated with the email monitoring configuration",
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
      name: "put-identity-provider-configuration",
      description:
        "Enables integration between IAM Identity Center (IdC) and WorkMail to proxy authentication requests for mailbox users. You can connect your IdC directory or your external directory to WorkMail through IdC and manage access to WorkMail mailboxes in a single place. For enhanced protection, you could enable Multifactor Authentication (MFA) and Personal Access Tokens",
      options: [
        {
          name: "--organization-id",
          description: "The ID of the WorkMail Organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--authentication-mode",
          description: "The authentication mode used in WorkMail",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-center-configuration",
          description: "The details of the IAM Identity Center configuration",
          args: {
            name: "structure",
          },
        },
        {
          name: "--personal-access-token-configuration",
          description: "The details of the Personal Access Token configuration",
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
      name: "put-inbound-dmarc-settings",
      description:
        "Enables or disables a DMARC policy for a given organization",
      options: [
        {
          name: "--organization-id",
          description:
            "The ID of the organization that you are applying the DMARC policy to",
          args: {
            name: "string",
          },
        },
        {
          name: "--enforced",
          description: "Enforces or suspends a policy after it's applied",
        },
        {
          name: "--no-enforced",
          description: "Enforces or suspends a policy after it's applied",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "put-mailbox-permissions",
      description:
        "Sets permissions for a user, group, or resource. This replaces any pre-existing permissions",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier of the organization under which the user, group, or resource exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The identifier of the user or resource for which to update mailbox permissions. The identifier can be UserId, ResourceID, or Group Id, Username, Resourcename, or Groupname, or email.   Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity name: entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--grantee-id",
          description:
            "The identifier of the user, group, or resource to which to grant the permissions. The identifier can be UserId, ResourceID, or Group Id, Username, Resourcename, or Groupname, or email.   Grantee ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Email address: grantee@domain.tld   Grantee name: grantee",
          args: {
            name: "string",
          },
        },
        {
          name: "--permission-values",
          description:
            "The permissions granted to the grantee. SEND_AS allows the grantee to send email as the owner of the mailbox (the grantee is not mentioned on these emails). SEND_ON_BEHALF allows the grantee to send email on behalf of the owner of the mailbox (the grantee is not mentioned as the physical sender of these emails). FULL_ACCESS allows the grantee full access to the mailbox, irrespective of other folder-level permissions set on the mailbox",
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
      name: "put-mobile-device-access-override",
      description:
        "Creates or updates a mobile device access override for the given WorkMail organization, user, and device",
      options: [
        {
          name: "--organization-id",
          description:
            "Identifies the WorkMail organization for which you create the override",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The WorkMail user for which you create the override. Accepts the following types of user identities:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234    Email address: user@domain.tld    User name: user",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-id",
          description:
            "The mobile device for which you create the override. DeviceId is case insensitive",
          args: {
            name: "string",
          },
        },
        {
          name: "--effect",
          description: "The effect of the override, ALLOW or DENY",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "A description of the override",
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
      name: "put-retention-policy",
      description: "Puts a retention policy to the specified organization",
      options: [
        {
          name: "--organization-id",
          description: "The organization ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--id",
          description: "The retention policy ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The retention policy name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The retention policy description",
          args: {
            name: "string",
          },
        },
        {
          name: "--folder-configurations",
          description: "The retention policy folder configurations",
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
      name: "register-mail-domain",
      description:
        "Registers a new domain in WorkMail and SES, and configures it for use by WorkMail. Emails received by SES for this domain are routed to the specified WorkMail organization, and WorkMail has permanent permission to use the specified domain for sending your users' emails",
      options: [
        {
          name: "--client-token",
          description: "Idempotency token used when retrying requests",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-id",
          description:
            "The WorkMail organization under which you're creating the domain",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description:
            "The name of the mail domain to create in WorkMail and SES",
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
      name: "register-to-work-mail",
      description:
        "Registers an existing and disabled user, group, or resource for WorkMail use by associating a mailbox and calendaring capabilities. It performs no change if the user, group, or resource is enabled and fails if the user, group, or resource is deleted. This operation results in the accumulation of costs. For more information, see Pricing. The equivalent console functionality for this operation is Enable. Users can either be created by calling the CreateUser API operation or they can be synchronized from your directory. For more information, see DeregisterFromWorkMail",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the user, group, or resource exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The identifier for the user, group, or resource to be updated. The identifier can accept UserId, ResourceId, or GroupId, or Username, Resourcename, or Groupname. The following identity formats are available:   Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Entity name: entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description:
            "The email for the user, group, or resource to be updated",
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
      name: "reset-password",
      description: "Allows the administrator to reset the password for a user",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier of the organization that contains the user for which the password is reset",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier of the user for whom the password is reset",
          args: {
            name: "string",
          },
        },
        {
          name: "--password",
          description: "The new password for the user",
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
      name: "start-mailbox-export-job",
      description:
        "Starts a mailbox export job to export MIME-format email messages and calendar items from the specified mailbox to the specified Amazon Simple Storage Service (Amazon S3) bucket. For more information, see Exporting mailbox content in the WorkMail Administrator Guide",
      options: [
        {
          name: "--client-token",
          description: "The idempotency token for the client request",
          args: {
            name: "string",
          },
        },
        {
          name: "--organization-id",
          description: "The identifier associated with the organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The identifier of the user or resource associated with the mailbox. The identifier can accept UserId or ResourceId, Username or Resourcename, or email. The following identity formats are available:   Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789 , or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity name: entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The mailbox export job description",
          args: {
            name: "string",
          },
        },
        {
          name: "--role-arn",
          description:
            "The ARN of the AWS Identity and Access Management (IAM) role that grants write permission to the S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--kms-key-arn",
          description:
            "The Amazon Resource Name (ARN) of the symmetric AWS Key Management Service (AWS KMS) key that encrypts the exported mailbox content",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-bucket-name",
          description: "The name of the S3 bucket",
          args: {
            name: "string",
          },
        },
        {
          name: "--s3-prefix",
          description: "The S3 bucket prefix",
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
      description:
        "Applies the specified tags to the specified WorkMailorganization resource",
      options: [
        {
          name: "--resource-arn",
          description: "The resource ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description: "The tag key-value pairs",
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
      name: "test-availability-configuration",
      description:
        "Performs a test on an availability provider to ensure that access is allowed. For EWS, it verifies the provided credentials can be used to successfully log in. For Lambda, it verifies that the Lambda function can be invoked and that the resource access policy was configured to deny anonymous access. An anonymous invocation is one done without providing either a SourceArn or SourceAccount header.  The request must contain either one provider definition (EwsProvider or LambdaProvider) or the DomainName parameter. If the DomainName parameter is provided, the configuration stored under the DomainName will be tested",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization where the availability provider will be tested",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description:
            "The domain to which the provider applies. If this field is provided, a stored availability provider associated to this domain name will be tested",
          args: {
            name: "string",
          },
        },
        {
          name: "--ews-provider",
          description:
            "Describes an EWS based availability provider. This is only used as input to the service",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lambda-provider",
          description: "Describes a Lambda based availability provider",
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
      name: "untag-resource",
      description:
        "Untags the specified tags from the specified WorkMail organization resource",
      options: [
        {
          name: "--resource-arn",
          description: "The resource ARN",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-keys",
          description: "The tag keys",
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
      name: "update-availability-configuration",
      description:
        "Updates an existing AvailabilityConfiguration for the given WorkMail organization and domain",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization for which the AvailabilityConfiguration will be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description:
            "The domain to which the provider applies the availability configuration",
          args: {
            name: "string",
          },
        },
        {
          name: "--ews-provider",
          description:
            "The EWS availability provider definition. The request must contain exactly one provider definition, either EwsProvider or LambdaProvider. The previously stored provider will be overridden by the one provided",
          args: {
            name: "structure",
          },
        },
        {
          name: "--lambda-provider",
          description:
            "The Lambda availability provider definition. The request must contain exactly one provider definition, either EwsProvider or LambdaProvider. The previously stored provider will be overridden by the one provided",
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
      name: "update-default-mail-domain",
      description:
        "Updates the default mail domain for an organization. The default mail domain is used by the WorkMail AWS Console to suggest an email address when enabling a mail user. You can only have one default domain",
      options: [
        {
          name: "--organization-id",
          description: "The WorkMail organization for which to list domains",
          args: {
            name: "string",
          },
        },
        {
          name: "--domain-name",
          description: "The domain name that will become the default domain",
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
      name: "update-group",
      description: "Updates attributes in a group",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the group exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--group-id",
          description:
            "The identifier for the group to be updated. The identifier can accept GroupId, Groupname, or email. The following identity formats are available:   Group ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: group@domain.tld   Group name: group",
          args: {
            name: "string",
          },
        },
        {
          name: "--hidden-from-global-address-list",
          description:
            "If enabled, the group is hidden from the global address list",
        },
        {
          name: "--no-hidden-from-global-address-list",
          description:
            "If enabled, the group is hidden from the global address list",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
            "Prints a JSON skeleton to standard output without sending an API request. If provided with no value or the value ``input``, prints a sample input JSON that can be used as an argument for ``--cli-input-json``. If provided with the value ``output``, it validates the command inputs and returns a sample output JSON for that command",
          args: {
            name: "string",
            suggestions: ["input", "output"],
          },
        },
      ],
    },
    {
      name: "update-impersonation-role",
      description:
        "Updates an impersonation role for the given WorkMail organization",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization that contains the impersonation role to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--impersonation-role-id",
          description: "The ID of the impersonation role to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The updated impersonation role name",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "The updated impersonation role type",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The updated impersonation role description",
          args: {
            name: "string",
          },
        },
        {
          name: "--rules",
          description: "The updated list of rules",
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
      name: "update-mailbox-quota",
      description:
        "Updates a user's current mailbox quota for a specified organization and user",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization that contains the user for whom to update the mailbox quota",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifer for the user for whom to update the mailbox quota. The identifier can be the UserId, Username, or email. The following identity formats are available:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: user@domain.tld   User name: user",
          args: {
            name: "string",
          },
        },
        {
          name: "--mailbox-quota",
          description:
            "The updated mailbox quota, in MB, for the specified user",
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
      name: "update-mobile-device-access-rule",
      description:
        "Updates a mobile device access rule for the specified WorkMail organization",
      options: [
        {
          name: "--organization-id",
          description:
            "The WorkMail organization under which the rule will be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--mobile-device-access-rule-id",
          description: "The identifier of the rule to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The updated rule name",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The updated rule description",
          args: {
            name: "string",
          },
        },
        {
          name: "--effect",
          description:
            "The effect of the rule when it matches. Allowed values are ALLOW or DENY",
          args: {
            name: "string",
          },
        },
        {
          name: "--device-types",
          description: "Device types that the updated rule will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--not-device-types",
          description:
            "Device types that the updated rule will not match. All other device types will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--device-models",
          description: "Device models that the updated rule will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--not-device-models",
          description:
            "Device models that the updated rule will not match. All other device models will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--device-operating-systems",
          description:
            "Device operating systems that the updated rule will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--not-device-operating-systems",
          description:
            "Device operating systems that the updated rule will not match. All other device operating systems will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--device-user-agents",
          description: "User agents that the updated rule will match",
          args: {
            name: "list",
          },
        },
        {
          name: "--not-device-user-agents",
          description:
            "User agents that the updated rule will not match. All other user agents will match",
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
      name: "update-primary-email-address",
      description:
        "Updates the primary email for a user, group, or resource. The current email is moved into the list of aliases (or swapped between an existing alias and the current primary email), and the email provided in the input is promoted as the primary",
      options: [
        {
          name: "--organization-id",
          description:
            "The organization that contains the user, group, or resource to update",
          args: {
            name: "string",
          },
        },
        {
          name: "--entity-id",
          description:
            "The user, group, or resource to update. The identifier can accept UseriD, ResourceId, or GroupId, Username, Resourcename, or Groupname, or email. The following identity formats are available:   Entity ID: 12345678-1234-1234-1234-123456789012, r-0123456789a0123456789b0123456789, or S-1-1-12-1234567890-123456789-123456789-1234   Email address: entity@domain.tld   Entity name: entity",
          args: {
            name: "string",
          },
        },
        {
          name: "--email",
          description: "The value of the email to be updated as primary",
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
      name: "update-resource",
      description:
        "Updates data for the resource. To have the latest information, it must be preceded by a DescribeResource call. The dataset in the request should be the one expected when performing another DescribeResource call",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier associated with the organization for which the resource is updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-id",
          description:
            "The identifier of the resource to be updated. The identifier can accept ResourceId, Resourcename, or email. The following identity formats are available:   Resource ID: r-0123456789a0123456789b0123456789   Email address: resource@domain.tld   Resource name: resource",
          args: {
            name: "string",
          },
        },
        {
          name: "--name",
          description: "The name of the resource to be updated",
          args: {
            name: "string",
          },
        },
        {
          name: "--booking-options",
          description: "The resource's booking options to be updated",
          args: {
            name: "structure",
          },
        },
        {
          name: "--description",
          description: "Updates the resource description",
          args: {
            name: "string",
          },
        },
        {
          name: "--type",
          description: "Updates the resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--hidden-from-global-address-list",
          description:
            "If enabled, the resource is hidden from the global address list",
        },
        {
          name: "--no-hidden-from-global-address-list",
          description:
            "If enabled, the resource is hidden from the global address list",
        },
        {
          name: "--cli-input-json",
          description:
            "Performs service operation based on the JSON string provided. The JSON string follows the format provided by ``--generate-cli-skeleton``. If other arguments are provided on the command line, the CLI values will override the JSON-provided values. It is not possible to pass arbitrary binary values using a JSON-provided value as the string will be taken literally",
          args: {
            name: "string",
          },
        },
        {
          name: "--generate-cli-skeleton",
          description:
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
        "Updates data for the user. To have the latest information, it must be preceded by a DescribeUser call. The dataset in the request should be the one expected when performing another DescribeUser call",
      options: [
        {
          name: "--organization-id",
          description:
            "The identifier for the organization under which the user exists",
          args: {
            name: "string",
          },
        },
        {
          name: "--user-id",
          description:
            "The identifier for the user to be updated. The identifier can be the UserId, Username, or email. The following identity formats are available:   User ID: 12345678-1234-1234-1234-123456789012 or S-1-1-12-1234567890-123456789-123456789-1234   Email address: user@domain.tld   User name: user",
          args: {
            name: "string",
          },
        },
        {
          name: "--role",
          description:
            "Updates the user role. You cannot pass SYSTEM_USER or RESOURCE",
          args: {
            name: "string",
          },
        },
        {
          name: "--display-name",
          description: "Updates the display name of the user",
          args: {
            name: "string",
          },
        },
        {
          name: "--first-name",
          description: "Updates the user's first name",
          args: {
            name: "string",
          },
        },
        {
          name: "--last-name",
          description: "Updates the user's last name",
          args: {
            name: "string",
          },
        },
        {
          name: "--hidden-from-global-address-list",
          description:
            "If enabled, the user is hidden from the global address list",
        },
        {
          name: "--no-hidden-from-global-address-list",
          description:
            "If enabled, the user is hidden from the global address list",
        },
        {
          name: "--initials",
          description: "Updates the user's initials",
          args: {
            name: "string",
          },
        },
        {
          name: "--telephone",
          description: "Updates the user's contact details",
          args: {
            name: "string",
          },
        },
        {
          name: "--street",
          description: "Updates the user's street address",
          args: {
            name: "string",
          },
        },
        {
          name: "--job-title",
          description: "Updates the user's job title",
          args: {
            name: "string",
          },
        },
        {
          name: "--city",
          description: "Updates the user's city",
          args: {
            name: "string",
          },
        },
        {
          name: "--company",
          description: "Updates the user's company",
          args: {
            name: "string",
          },
        },
        {
          name: "--zip-code",
          description: "Updates the user's zip code",
          args: {
            name: "string",
          },
        },
        {
          name: "--department",
          description: "Updates the user's department",
          args: {
            name: "string",
          },
        },
        {
          name: "--country",
          description: "Updates the user's country",
          args: {
            name: "string",
          },
        },
        {
          name: "--office",
          description: "Updates the user's office",
          args: {
            name: "string",
          },
        },
        {
          name: "--identity-provider-user-id",
          description:
            "User ID from the IAM Identity Center. If this parameter is empty it will be updated automatically when the user logs in for the first time to the mailbox associated with WorkMail",
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
