const completionSpec: Fig.Spec = {
  name: "backup",
  description:
    "Backup Backup is a unified backup service designed to protect Amazon Web Services services and their associated data. Backup simplifies the creation, migration, restoration, and deletion of backups, while also providing reporting and auditing",
  subcommands: [
    {
      name: "cancel-legal-hold",
      description:
        "Removes the specified legal hold on a recovery point. This action can only be performed by a user with sufficient permissions",
      options: [
        {
          name: "--legal-hold-id",
          description: "The ID of the legal hold",
          args: {
            name: "string",
          },
        },
        {
          name: "--cancel-description",
          description:
            "A string the describes the reason for removing the legal hold",
          args: {
            name: "string",
          },
        },
        {
          name: "--retain-record-in-days",
          description:
            "The integer amount, in days, after which to remove legal hold",
          args: {
            name: "long",
          },
        },
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
      name: "create-backup-plan",
      description:
        "Creates a backup plan using a backup plan name and backup rules. A backup plan is a document that contains information that Backup uses to schedule tasks that create recovery points for resources. If you call CreateBackupPlan with a plan that already exists, you receive an AlreadyExistsException exception",
      options: [
        {
          name: "--backup-plan",
          description:
            "The body of a backup plan. Includes a BackupPlanName and one or more sets of Rules",
          args: {
            name: "structure",
          },
        },
        {
          name: "--backup-plan-tags",
          description: "The tags to assign to the backup plan",
          args: {
            name: "map",
          },
        },
        {
          name: "--creator-request-id",
          description:
            "Identifies the request and allows failed requests to be retried without the risk of running the operation twice. If the request includes a CreatorRequestId that matches an existing backup plan, that plan is returned. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters",
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
      name: "create-backup-selection",
      description:
        "Creates a JSON document that specifies a set of resources to assign to a backup plan. For examples, see Assigning resources programmatically",
      options: [
        {
          name: "--backup-plan-id",
          description: "The ID of the backup plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-selection",
          description:
            "The body of a request to assign a set of resources to a backup plan",
          args: {
            name: "structure",
          },
        },
        {
          name: "--creator-request-id",
          description:
            "A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters",
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
      name: "create-backup-vault",
      description:
        "Creates a logical container where backups are stored. A CreateBackupVault request includes a name, optionally one or more resource tags, an encryption key, and a request ID.  Do not include sensitive data, such as passport numbers, in the name of a backup vault",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of letters, numbers, and hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-vault-tags",
          description: "The tags to assign to the backup vault",
          args: {
            name: "map",
          },
        },
        {
          name: "--encryption-key-arn",
          description:
            "The server-side encryption key that is used to protect your backups; for example, arn:aws:kms:us-west-2:111122223333:key/1234abcd-12ab-34cd-56ef-1234567890ab",
          args: {
            name: "string",
          },
        },
        {
          name: "--creator-request-id",
          description:
            "A unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters",
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
      name: "create-framework",
      description:
        "Creates a framework with one or more controls. A framework is a collection of controls that you can use to evaluate your backup practices. By using pre-built customizable controls to define your policies, you can evaluate whether your backup practices comply with your policies and which resources are not yet in compliance",
      options: [
        {
          name: "--framework-name",
          description:
            "The unique name of the framework. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--framework-description",
          description:
            "An optional description of the framework with a maximum of 1,024 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--framework-controls",
          description:
            "The controls that make up the framework. Each control in the list has a name, input parameters, and scope",
          args: {
            name: "list",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A customer-chosen string that you can use to distinguish between otherwise identical calls to CreateFrameworkInput. Retrying a successful request with the same idempotency token results in a success message with no action taken",
          args: {
            name: "string",
          },
        },
        {
          name: "--framework-tags",
          description: "The tags to assign to the framework",
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
      name: "create-legal-hold",
      description:
        "Creates a legal hold on a recovery point (backup). A legal hold is a restraint on altering or deleting a backup until an authorized user cancels the legal hold. Any actions to delete or disassociate a recovery point will fail with an error if one or more active legal holds are on the recovery point",
      options: [
        {
          name: "--title",
          description: "The title of the legal hold",
          args: {
            name: "string",
          },
        },
        {
          name: "--description",
          description: "The description of the legal hold",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "This is a user-chosen string used to distinguish between otherwise identical calls. Retrying a successful request with the same idempotency token results in a success message with no action taken",
          args: {
            name: "string",
          },
        },
        {
          name: "--recovery-point-selection",
          description:
            "The criteria to assign a set of resources, such as resource types or backup vaults",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description:
            "Optional tags to include. A tag is a key-value pair you can use to manage, filter, and search for your resources. Allowed characters include UTF-8 letters, numbers, spaces, and the following characters: + - = . _ : /",
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
      name: "create-logically-air-gapped-backup-vault",
      description:
        "Creates a logical container to where backups may be copied. This request includes a name, the Region, the maximum number of retention days, the minimum number of retention days, and optionally can include tags and a creator request ID.  Do not include sensitive data, such as passport numbers, in the name of a backup vault",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Logically air-gapped backup vaults are identified by names that are unique to the account used to create them and the Region where they are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-vault-tags",
          description: "The tags to assign to the vault",
          args: {
            name: "map",
          },
        },
        {
          name: "--creator-request-id",
          description:
            "The ID of the creation request. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-retention-days",
          description:
            "This setting specifies the minimum retention period that the vault retains its recovery points. The minimum value accepted is 7 days",
          args: {
            name: "long",
          },
        },
        {
          name: "--max-retention-days",
          description:
            "The maximum retention period that the vault retains its recovery points",
          args: {
            name: "long",
          },
        },
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
      name: "create-report-plan",
      description:
        "Creates a report plan. A report plan is a document that contains information about the contents of the report and where Backup will deliver it. If you call CreateReportPlan with a plan that already exists, you receive an AlreadyExistsException exception",
      options: [
        {
          name: "--report-plan-name",
          description:
            "The unique name of the report plan. The name must be between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--report-plan-description",
          description:
            "An optional description of the report plan with a maximum of 1,024 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--report-delivery-channel",
          description:
            "A structure that contains information about where and how to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports",
          args: {
            name: "structure",
          },
        },
        {
          name: "--report-setting",
          description:
            "Identifies the report template for the report. Reports are built using a report template. The report templates are:  RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT  If the report template is RESOURCE_COMPLIANCE_REPORT or CONTROL_COMPLIANCE_REPORT, this API resource also describes the report coverage by Amazon Web Services Regions and frameworks",
          args: {
            name: "structure",
          },
        },
        {
          name: "--report-plan-tags",
          description: "The tags to assign to the report plan",
          args: {
            name: "map",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A customer-chosen string that you can use to distinguish between otherwise identical calls to CreateReportPlanInput. Retrying a successful request with the same idempotency token results in a success message with no action taken",
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
      name: "create-restore-testing-plan",
      description:
        "Creates a restore testing plan. The first of two steps to create a restore testing plan. After this request is successful, finish the procedure using CreateRestoreTestingSelection",
      options: [
        {
          name: "--creator-request-id",
          description:
            "This is a unique string that identifies the request and allows failed requests to be retriedwithout the risk of running the operation twice. This parameter is optional. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-testing-plan",
          description:
            "A restore testing plan must contain a unique RestoreTestingPlanName string you create and must contain a ScheduleExpression cron. You may optionally include a StartWindowHours integer and a CreatorRequestId string. The RestoreTestingPlanName is a unique string that is the name of the restore testing plan. This cannot be changed after creation, and it must consist of only alphanumeric characters and underscores",
          args: {
            name: "structure",
          },
        },
        {
          name: "--tags",
          description: "The tags to assign to the restore testing plan",
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
      name: "create-restore-testing-selection",
      description:
        'This request can be sent after CreateRestoreTestingPlan request returns successfully. This is the second part of creating a resource testing plan, and it must be completed sequentially. This consists of RestoreTestingSelectionName, ProtectedResourceType, and one of the following:    ProtectedResourceArns     ProtectedResourceConditions    Each protected resource type can have one single value. A restore testing selection can include a wildcard value ("*") for ProtectedResourceArns along with ProtectedResourceConditions. Alternatively, you can include up to 30 specific protected resource ARNs in ProtectedResourceArns. Cannot select by both protected resource types AND specific ARNs. Request will fail if both are included',
      options: [
        {
          name: "--creator-request-id",
          description:
            "This is an optional unique string that identifies the request and allows failed requests to be retried without the risk of running the operation twice. If used, this parameter must contain 1 to 50 alphanumeric or '-_.' characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-testing-plan-name",
          description:
            "Input the restore testing plan name that was returned from the related CreateRestoreTestingPlan request",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-testing-selection",
          description:
            'This consists of RestoreTestingSelectionName, ProtectedResourceType, and one of the following:    ProtectedResourceArns     ProtectedResourceConditions    Each protected resource type can have one single value. A restore testing selection can include a wildcard value ("*") for ProtectedResourceArns along with ProtectedResourceConditions. Alternatively, you can include up to 30 specific protected resource ARNs in ProtectedResourceArns',
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
      name: "delete-backup-plan",
      description:
        "Deletes a backup plan. A backup plan can only be deleted after all associated selections of resources have been deleted. Deleting a backup plan deletes the current version of a backup plan. Previous versions, if any, will still exist",
      options: [
        {
          name: "--backup-plan-id",
          description: "Uniquely identifies a backup plan",
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
      name: "delete-backup-selection",
      description:
        "Deletes the resource selection associated with a backup plan that is specified by the SelectionId",
      options: [
        {
          name: "--backup-plan-id",
          description: "Uniquely identifies a backup plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--selection-id",
          description:
            "Uniquely identifies the body of a request to assign a set of resources to a backup plan",
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
      name: "delete-backup-vault",
      description:
        "Deletes the backup vault identified by its name. A vault can be deleted only if it is empty",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
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
      name: "delete-backup-vault-access-policy",
      description:
        "Deletes the policy document that manages permissions on a backup vault",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created. They consist of lowercase letters, numbers, and hyphens",
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
      name: "delete-backup-vault-lock-configuration",
      description:
        "Deletes Backup Vault Lock from a backup vault specified by a backup vault name. If the Vault Lock configuration is immutable, then you cannot delete Vault Lock using API operations, and you will receive an InvalidRequestException if you attempt to do so. For more information, see Vault Lock in the Backup Developer Guide",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of the backup vault from which to delete Backup Vault Lock",
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
      name: "delete-backup-vault-notifications",
      description: "Deletes event notifications for the specified backup vault",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Region where they are created",
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
      name: "delete-framework",
      description: "Deletes the framework specified by a framework name",
      options: [
        {
          name: "--framework-name",
          description: "The unique name of a framework",
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
      name: "delete-recovery-point",
      description:
        "Deletes the recovery point specified by a recovery point ID. If the recovery point ID belongs to a continuous backup, calling this endpoint deletes the existing continuous backup and stops future continuous backup. When an IAM role's permissions are insufficient to call this API, the service sends back an HTTP 200 response with an empty HTTP body, but the recovery point is not deleted. Instead, it enters an EXPIRED state.  EXPIRED recovery points can be deleted with this API once the IAM role has the iam:CreateServiceLinkedRole action. To learn more about adding this role, see  Troubleshooting manual deletions. If the user or role is deleted or the permission within the role is removed, the deletion will not be successful and will enter an EXPIRED state",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--recovery-point-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45",
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
      name: "delete-report-plan",
      description: "Deletes the report plan specified by a report plan name",
      options: [
        {
          name: "--report-plan-name",
          description: "The unique name of a report plan",
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
      name: "delete-restore-testing-plan",
      description:
        "This request deletes the specified restore testing plan. Deletion can only successfully occur if all associated restore testing selections are deleted first",
      options: [
        {
          name: "--restore-testing-plan-name",
          description:
            "Required unique name of the restore testing plan you wish to delete",
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
      name: "delete-restore-testing-selection",
      description:
        "Input the Restore Testing Plan name and Restore Testing Selection name. All testing selections associated with a restore testing plan must be deleted before the restore testing plan can be deleted",
      options: [
        {
          name: "--restore-testing-plan-name",
          description:
            "Required unique name of the restore testing plan that contains the restore testing selection you wish to delete",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-testing-selection-name",
          description:
            "Required unique name of the restore testing selection you wish to delete",
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
      name: "describe-backup-job",
      description: "Returns backup job details for the specified BackupJobId",
      options: [
        {
          name: "--backup-job-id",
          description:
            "Uniquely identifies a request to Backup to back up a resource",
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
      name: "describe-backup-vault",
      description:
        "Returns metadata about a backup vault specified by its name",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-vault-account-id",
          description: "The account ID of the specified backup vault",
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
      name: "describe-copy-job",
      description:
        "Returns metadata associated with creating a copy of a resource",
      options: [
        {
          name: "--copy-job-id",
          description: "Uniquely identifies a copy job",
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
      name: "describe-framework",
      description:
        "Returns the framework details for the specified FrameworkName",
      options: [
        {
          name: "--framework-name",
          description: "The unique name of a framework",
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
      name: "describe-global-settings",
      description:
        "Describes whether the Amazon Web Services account is opted in to cross-account backup. Returns an error if the account is not a member of an Organizations organization. Example: describe-global-settings --region us-west-2",
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
      name: "describe-protected-resource",
      description:
        "Returns information about a saved resource, including the last time it was backed up, its Amazon Resource Name (ARN), and the Amazon Web Services service type of the saved resource",
      options: [
        {
          name: "--resource-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type",
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
      name: "describe-recovery-point",
      description:
        "Returns metadata associated with a recovery point, including ID, status, encryption, and lifecycle",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--recovery-point-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-vault-account-id",
          description: "The account ID of the specified backup vault",
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
      name: "describe-region-settings",
      description:
        "Returns the current service opt-in settings for the Region. If service opt-in is enabled for a service, Backup tries to protect that service's resources in this Region, when the resource is included in an on-demand backup or scheduled backup plan. Otherwise, Backup does not try to protect that service's resources in this Region",
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
      name: "describe-report-job",
      description:
        "Returns the details associated with creating a report as specified by its ReportJobId",
      options: [
        {
          name: "--report-job-id",
          description:
            "The identifier of the report job. A unique, randomly generated, Unicode, UTF-8 encoded string that is at most 1,024 bytes long. The report job ID cannot be edited",
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
      name: "describe-report-plan",
      description:
        "Returns a list of all report plans for an Amazon Web Services account and Amazon Web Services Region",
      options: [
        {
          name: "--report-plan-name",
          description: "The unique name of a report plan",
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
      name: "describe-restore-job",
      description:
        "Returns metadata associated with a restore job that is specified by a job ID",
      options: [
        {
          name: "--restore-job-id",
          description:
            "Uniquely identifies the job that restores a recovery point",
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
      name: "disassociate-recovery-point",
      description:
        "Deletes the specified continuous backup recovery point from Backup and releases control of that continuous backup to the source service, such as Amazon RDS. The source service will continue to create and retain continuous backups using the lifecycle that you specified in your original backup plan. Does not support snapshot backup recovery points",
      options: [
        {
          name: "--backup-vault-name",
          description: "The unique name of an Backup vault",
          args: {
            name: "string",
          },
        },
        {
          name: "--recovery-point-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies an Backup recovery point",
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
      name: "disassociate-recovery-point-from-parent",
      description:
        "This action to a specific child (nested) recovery point removes the relationship between the specified recovery point and its parent (composite) recovery point",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where the child (nested) recovery point is stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--recovery-point-arn",
          description:
            "The Amazon Resource Name (ARN) that uniquely identifies the child (nested) recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45",
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
      name: "export-backup-plan-template",
      description:
        "Returns the backup plan that is specified by the plan ID as a backup template",
      options: [
        {
          name: "--backup-plan-id",
          description: "Uniquely identifies a backup plan",
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
      name: "get-backup-plan",
      description:
        "Returns BackupPlan details for the specified BackupPlanId. The details are the body of a backup plan in JSON format, in addition to plan metadata",
      options: [
        {
          name: "--backup-plan-id",
          description: "Uniquely identifies a backup plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--version-id",
          description:
            "Unique, randomly generated, Unicode, UTF-8 encoded strings that are at most 1,024 bytes long. Version IDs cannot be edited",
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
      name: "get-backup-plan-from-json",
      description:
        "Returns a valid JSON document specifying a backup plan or an error",
      options: [
        {
          name: "--backup-plan-template-json",
          description:
            "A customer-supplied backup plan document in JSON format",
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
      name: "get-backup-plan-from-template",
      description:
        "Returns the template specified by its templateId as a backup plan",
      options: [
        {
          name: "--backup-plan-template-id",
          description: "Uniquely identifies a stored backup plan template",
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
      name: "get-backup-selection",
      description:
        "Returns selection metadata and a document in JSON format that specifies a list of resources that are associated with a backup plan",
      options: [
        {
          name: "--backup-plan-id",
          description: "Uniquely identifies a backup plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--selection-id",
          description:
            "Uniquely identifies the body of a request to assign a set of resources to a backup plan",
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
      name: "get-backup-vault-access-policy",
      description:
        "Returns the access policy document that is associated with the named backup vault",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
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
      name: "get-backup-vault-notifications",
      description: "Returns event notifications for the specified backup vault",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
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
      name: "get-legal-hold",
      description:
        "This action returns details for a specified legal hold. The details are the body of a legal hold in JSON format, in addition to metadata",
      options: [
        {
          name: "--legal-hold-id",
          description: "The ID of the legal hold",
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
      name: "get-recovery-point-restore-metadata",
      description:
        "Returns a set of metadata key-value pairs that were used to create the backup",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--recovery-point-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-vault-account-id",
          description: "The account ID of the specified backup vault",
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
      name: "get-restore-job-metadata",
      description:
        "This request returns the metadata for the specified restore job",
      options: [
        {
          name: "--restore-job-id",
          description:
            "This is a unique identifier of a restore job within Backup",
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
      name: "get-restore-testing-inferred-metadata",
      description:
        "This request returns the minimal required set of metadata needed to start a restore job with secure default settings. BackupVaultName and RecoveryPointArn are required parameters. BackupVaultAccountId is an optional parameter",
      options: [
        {
          name: "--backup-vault-account-id",
          description: "The account ID of the specified backup vault",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web ServicesRegion where they are created. They consist of letters, numbers, and hyphens",
          args: {
            name: "string",
          },
        },
        {
          name: "--recovery-point-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45",
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
      name: "get-restore-testing-plan",
      description:
        "Returns RestoreTestingPlan details for the specified RestoreTestingPlanName. The details are the body of a restore testing plan in JSON format, in addition to plan metadata",
      options: [
        {
          name: "--restore-testing-plan-name",
          description: "Required unique name of the restore testing plan",
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
      name: "get-restore-testing-selection",
      description:
        "Returns RestoreTestingSelection, which displays resources and elements of the restore testing plan",
      options: [
        {
          name: "--restore-testing-plan-name",
          description: "Required unique name of the restore testing plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-testing-selection-name",
          description: "Required unique name of the restore testing selection",
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
      name: "get-supported-resource-types",
      description:
        "Returns the Amazon Web Services resource types supported by Backup",
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
      name: "list-backup-job-summaries",
      description:
        "This is a request for a summary of backup jobs created or running within the most recent 30 days. You can include parameters AccountID, State, ResourceType, MessageCategory, AggregationPeriod, MaxResults, or NextToken to filter results. This request returns a summary that contains Region, Account, State, ResourceType, MessageCategory, StartTime, EndTime, and Count of included jobs",
      options: [
        {
          name: "--account-id",
          description:
            "Returns the job count for the specified account. If the request is sent from a member account or an account not part of Amazon Web Services Organizations, jobs within requestor's account will be returned. Root, admin, and delegated administrator accounts can use the value ANY to return job counts from every account in the organization.  AGGREGATE_ALL aggregates job counts from all accounts within the authenticated organization, then returns the sum",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "This parameter returns the job count for jobs with the specified state. The the value ANY returns count of all states.  AGGREGATE_ALL aggregates job counts for all states and returns the sum.  Completed with issues is a status found only in the Backup console. For API, this status refers to jobs with a state of COMPLETED and a MessageCategory with a value other than SUCCESS; that is, the status is completed but comes with a status message. To obtain the job count for Completed with issues, run two GET requests, and subtract the second, smaller number: GET /audit/backup-job-summaries?AggregationPeriod=FOURTEEN_DAYS&State=COMPLETED GET /audit/backup-job-summaries?AggregationPeriod=FOURTEEN_DAYS&MessageCategory=SUCCESS&State=COMPLETED",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Returns the job count for the specified resource type. Use request GetSupportedResourceTypes to obtain strings for supported resource types. The the value ANY returns count of all resource types.  AGGREGATE_ALL aggregates job counts for all resource types and returns the sum. The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-category",
          description:
            "This parameter returns the job count for the specified message category. Example accepted strings include AccessDenied, Success, and InvalidParameters. See Monitoring for a list of accepted MessageCategory strings. The the value ANY returns count of all message categories.  AGGREGATE_ALL aggregates job counts for all message categories and returns the sum",
          args: {
            name: "string",
          },
        },
        {
          name: "--aggregation-period",
          description:
            "The period for the returned results.    ONE_DAY - The daily job count for the prior 14 days.    SEVEN_DAYS - The aggregated job count for the prior 7 days.    FOURTEEN_DAYS - The aggregated job count for prior 14 days",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to be returned. The value is an integer. Range of accepted values is from 1 to 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned resources. For example, if a request is made to return MaxResults number of resources, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
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
      name: "list-backup-jobs",
      description:
        "Returns a list of existing backup jobs for an authenticated account for the last 30 days. For a longer period of time, consider using these monitoring tools",
      options: [
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--by-resource-arn",
          description:
            "Returns only backup jobs that match the specified resource Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-state",
          description:
            "Returns only backup jobs that are in the specified state.  Completed with issues is a status found only in the Backup console. For API, this status refers to jobs with a state of COMPLETED and a MessageCategory with a value other than SUCCESS; that is, the status is completed but comes with a status message. To obtain the job count for Completed with issues, run two GET requests, and subtract the second, smaller number: GET /backup-jobs/?state=COMPLETED GET /backup-jobs/?messageCategory=SUCCESS&state=COMPLETED",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-backup-vault-name",
          description:
            "Returns only backup jobs that will be stored in the specified backup vault. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-created-before",
          description:
            "Returns only backup jobs that were created before the specified date",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-created-after",
          description:
            "Returns only backup jobs that were created after the specified date",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-resource-type",
          description:
            "Returns only backup jobs for the specified resources:    Aurora for Amazon Aurora    CloudFormation for CloudFormation    DocumentDB for Amazon DocumentDB (with MongoDB compatibility)    DynamoDB for Amazon DynamoDB    EBS for Amazon Elastic Block Store    EC2 for Amazon Elastic Compute Cloud    EFS for Amazon Elastic File System    FSx for Amazon FSx    Neptune for Amazon Neptune    RDS for Amazon Relational Database Service    Redshift for Amazon Redshift    S3 for Amazon Simple Storage Service (Amazon S3)    SAP HANA on Amazon EC2 for SAP HANA databases on Amazon Elastic Compute Cloud instances    Storage Gateway for Storage Gateway    Timestream for Amazon Timestream    VirtualMachine for VMware virtual machines",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-account-id",
          description:
            "The account ID to list the jobs from. Returns only backup jobs associated with the specified account ID. If used from an Organizations management account, passing * returns all jobs across the organization",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-complete-after",
          description:
            "Returns only backup jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-complete-before",
          description:
            "Returns only backup jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-parent-job-id",
          description:
            "This is a filter to list child (nested) jobs based on parent job ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-message-category",
          description:
            "This is an optional parameter that can be used to filter out jobs with a MessageCategory which matches the value you input. Example strings may include AccessDenied, SUCCESS, AGGREGATE_ALL, and InvalidParameters. View Monitoring  The wildcard () returns count of all message categories.  AGGREGATE_ALL aggregates job counts for all message categories and returns the sum",
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
      name: "list-backup-plan-templates",
      description: "Lists the backup plan templates",
      options: [
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of items to return",
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
      name: "list-backup-plan-versions",
      description:
        "Returns version metadata of your backup plans, including Amazon Resource Names (ARNs), backup plan IDs, creation and deletion dates, plan names, and version IDs",
      options: [
        {
          name: "--backup-plan-id",
          description: "Uniquely identifies a backup plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
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
      name: "list-backup-plans",
      description: "Lists the active backup plans for the account",
      options: [
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--include-deleted",
          description:
            "A Boolean value with a default value of FALSE that returns deleted backup plans when set to TRUE",
        },
        {
          name: "--no-include-deleted",
          description:
            "A Boolean value with a default value of FALSE that returns deleted backup plans when set to TRUE",
        },
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
      name: "list-backup-selections",
      description:
        "Returns an array containing metadata of the resources associated with the target backup plan",
      options: [
        {
          name: "--backup-plan-id",
          description: "Uniquely identifies a backup plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
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
      name: "list-backup-vaults",
      description:
        "Returns a list of recovery point storage containers along with information about them",
      options: [
        {
          name: "--by-vault-type",
          description:
            "This parameter will sort the list of vaults by vault type",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-shared",
          description:
            "This parameter will sort the list of vaults by shared vaults",
        },
        {
          name: "--no-by-shared",
          description:
            "This parameter will sort the list of vaults by shared vaults",
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
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
      name: "list-copy-job-summaries",
      description:
        "This request obtains a list of copy jobs created or running within the the most recent 30 days. You can include parameters AccountID, State, ResourceType, MessageCategory, AggregationPeriod, MaxResults, or NextToken to filter results. This request returns a summary that contains Region, Account, State, RestourceType, MessageCategory, StartTime, EndTime, and Count of included jobs",
      options: [
        {
          name: "--account-id",
          description:
            "Returns the job count for the specified account. If the request is sent from a member account or an account not part of Amazon Web Services Organizations, jobs within requestor's account will be returned. Root, admin, and delegated administrator accounts can use the value ANY to return job counts from every account in the organization.  AGGREGATE_ALL aggregates job counts from all accounts within the authenticated organization, then returns the sum",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "This parameter returns the job count for jobs with the specified state. The the value ANY returns count of all states.  AGGREGATE_ALL aggregates job counts for all states and returns the sum",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Returns the job count for the specified resource type. Use request GetSupportedResourceTypes to obtain strings for supported resource types. The the value ANY returns count of all resource types.  AGGREGATE_ALL aggregates job counts for all resource types and returns the sum. The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database",
          args: {
            name: "string",
          },
        },
        {
          name: "--message-category",
          description:
            "This parameter returns the job count for the specified message category. Example accepted strings include AccessDenied, Success, and InvalidParameters. See Monitoring for a list of accepted MessageCategory strings. The the value ANY returns count of all message categories.  AGGREGATE_ALL aggregates job counts for all message categories and returns the sum",
          args: {
            name: "string",
          },
        },
        {
          name: "--aggregation-period",
          description:
            "The period for the returned results.    ONE_DAY - The daily job count for the prior 14 days.    SEVEN_DAYS - The aggregated job count for the prior 7 days.    FOURTEEN_DAYS - The aggregated job count for prior 14 days",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "This parameter sets the maximum number of items to be returned. The value is an integer. Range of accepted values is from 1 to 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned resources. For example, if a request is made to return MaxResults number of resources, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
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
      name: "list-copy-jobs",
      description: "Returns metadata about your copy jobs",
      options: [
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--by-resource-arn",
          description:
            "Returns only copy jobs that match the specified resource Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-state",
          description: "Returns only copy jobs that are in the specified state",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-created-before",
          description:
            "Returns only copy jobs that were created before the specified date",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-created-after",
          description:
            "Returns only copy jobs that were created after the specified date",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-resource-type",
          description:
            "Returns only backup jobs for the specified resources:    Aurora for Amazon Aurora    CloudFormation for CloudFormation    DocumentDB for Amazon DocumentDB (with MongoDB compatibility)    DynamoDB for Amazon DynamoDB    EBS for Amazon Elastic Block Store    EC2 for Amazon Elastic Compute Cloud    EFS for Amazon Elastic File System    FSx for Amazon FSx    Neptune for Amazon Neptune    RDS for Amazon Relational Database Service    Redshift for Amazon Redshift    S3 for Amazon Simple Storage Service (Amazon S3)    SAP HANA on Amazon EC2 for SAP HANA databases on Amazon Elastic Compute Cloud instances    Storage Gateway for Storage Gateway    Timestream for Amazon Timestream    VirtualMachine for VMware virtual machines",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-destination-vault-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies a source backup vault to copy from; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-account-id",
          description:
            "The account ID to list the jobs from. Returns only copy jobs associated with the specified account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-complete-before",
          description:
            "Returns only copy jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-complete-after",
          description:
            "Returns only copy jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-parent-job-id",
          description:
            "This is a filter to list child (nested) jobs based on parent job ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-message-category",
          description:
            "This is an optional parameter that can be used to filter out jobs with a MessageCategory which matches the value you input. Example strings may include AccessDenied, SUCCESS, AGGREGATE_ALL, and INVALIDPARAMETERS. View Monitoring for a list of accepted strings. The the value ANY returns count of all message categories.  AGGREGATE_ALL aggregates job counts for all message categories and returns the sum",
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
      name: "list-frameworks",
      description:
        "Returns a list of all frameworks for an Amazon Web Services account and Amazon Web Services Region",
      options: [
        {
          name: "--max-results",
          description:
            "The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list",
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
      name: "list-legal-holds",
      description:
        "This action returns metadata about active and previous legal holds",
      options: [
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned resources. For example, if a request is made to return MaxResults number of resources, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of resource list items to be returned",
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
      name: "list-protected-resources",
      description:
        "Returns an array of resources successfully backed up by Backup, including the time the resource was saved, an Amazon Resource Name (ARN) of the resource, and a resource type",
      options: [
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
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
      name: "list-protected-resources-by-backup-vault",
      description:
        "This request lists the protected resources corresponding to each backup vault",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The list of protected resources by backup vault within the vault(s) you specify by name",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-vault-account-id",
          description:
            "The list of protected resources by backup vault within the vault(s) you specify by account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
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
      name: "list-recovery-points-by-backup-vault",
      description:
        "Returns detailed information about the recovery points stored in a backup vault",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created.  Backup vault name might not be available when a supported service creates the backup",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-vault-account-id",
          description:
            "This parameter will sort the list of recovery points by account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--by-resource-arn",
          description:
            "Returns only recovery points that match the specified resource Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-resource-type",
          description:
            "Returns only recovery points that match the specified resource type(s):    Aurora for Amazon Aurora    CloudFormation for CloudFormation    DocumentDB for Amazon DocumentDB (with MongoDB compatibility)    DynamoDB for Amazon DynamoDB    EBS for Amazon Elastic Block Store    EC2 for Amazon Elastic Compute Cloud    EFS for Amazon Elastic File System    FSx for Amazon FSx    Neptune for Amazon Neptune    RDS for Amazon Relational Database Service    Redshift for Amazon Redshift    S3 for Amazon Simple Storage Service (Amazon S3)    SAP HANA on Amazon EC2 for SAP HANA databases on Amazon Elastic Compute Cloud instances    Storage Gateway for Storage Gateway    Timestream for Amazon Timestream    VirtualMachine for VMware virtual machines",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-backup-plan-id",
          description:
            "Returns only recovery points that match the specified backup plan ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-created-before",
          description:
            "Returns only recovery points that were created before the specified timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-created-after",
          description:
            "Returns only recovery points that were created after the specified timestamp",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-parent-recovery-point-arn",
          description:
            "This returns only recovery points that match the specified parent (composite) recovery point Amazon Resource Name (ARN)",
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
      name: "list-recovery-points-by-legal-hold",
      description:
        "This action returns recovery point ARNs (Amazon Resource Names) of the specified legal hold",
      options: [
        {
          name: "--legal-hold-id",
          description: "The ID of the legal hold",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned resources. For example, if a request is made to return MaxResults number of resources, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of resource list items to be returned",
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
      name: "list-recovery-points-by-resource",
      description:
        "The information about the recovery points of the type specified by a resource Amazon Resource Name (ARN).  For Amazon EFS and Amazon EC2, this action only lists recovery points created by Backup",
      options: [
        {
          name: "--resource-arn",
          description:
            "An ARN that uniquely identifies a resource. The format of the ARN depends on the resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The maximum number of items to be returned.  Amazon RDS requires a value of at least 20",
          args: {
            name: "integer",
          },
        },
        {
          name: "--managed-by-aws-backup-only",
          description:
            "This attribute filters recovery points based on ownership. If this is set to TRUE, the response will contain recovery points associated with the selected resources that are managed by Backup. If this is set to FALSE, the response will contain all recovery points associated with the selected resource. Type: Boolean",
        },
        {
          name: "--no-managed-by-aws-backup-only",
          description:
            "This attribute filters recovery points based on ownership. If this is set to TRUE, the response will contain recovery points associated with the selected resources that are managed by Backup. If this is set to FALSE, the response will contain all recovery points associated with the selected resource. Type: Boolean",
        },
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
      name: "list-report-jobs",
      description: "Returns details about your report jobs",
      options: [
        {
          name: "--by-report-plan-name",
          description:
            "Returns only report jobs with the specified report plan name",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-creation-before",
          description:
            "Returns only report jobs that were created before the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-creation-after",
          description:
            "Returns only report jobs that were created after the date and time specified in Unix format and Coordinated Universal Time (UTC). For example, the value 1516925490 represents Friday, January 26, 2018 12:11:30 AM",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-status",
          description:
            "Returns only report jobs that are in the specified status. The statuses are:  CREATED | RUNNING | COMPLETED | FAILED",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list",
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
      name: "list-report-plans",
      description:
        "Returns a list of your report plans. For detailed information about a single report plan, use DescribeReportPlan",
      options: [
        {
          name: "--max-results",
          description:
            "The number of desired results from 1 to 1000. Optional. If unspecified, the query will return 1 MB of data",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "An identifier that was returned from the previous call to this operation, which can be used to return the next set of items in the list",
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
      name: "list-restore-job-summaries",
      description:
        "This request obtains a summary of restore jobs created or running within the the most recent 30 days. You can include parameters AccountID, State, ResourceType, AggregationPeriod, MaxResults, or NextToken to filter results. This request returns a summary that contains Region, Account, State, RestourceType, MessageCategory, StartTime, EndTime, and Count of included jobs",
      options: [
        {
          name: "--account-id",
          description:
            "Returns the job count for the specified account. If the request is sent from a member account or an account not part of Amazon Web Services Organizations, jobs within requestor's account will be returned. Root, admin, and delegated administrator accounts can use the value ANY to return job counts from every account in the organization.  AGGREGATE_ALL aggregates job counts from all accounts within the authenticated organization, then returns the sum",
          args: {
            name: "string",
          },
        },
        {
          name: "--state",
          description:
            "This parameter returns the job count for jobs with the specified state. The the value ANY returns count of all states.  AGGREGATE_ALL aggregates job counts for all states and returns the sum",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Returns the job count for the specified resource type. Use request GetSupportedResourceTypes to obtain strings for supported resource types. The the value ANY returns count of all resource types.  AGGREGATE_ALL aggregates job counts for all resource types and returns the sum. The type of Amazon Web Services resource to be backed up; for example, an Amazon Elastic Block Store (Amazon EBS) volume or an Amazon Relational Database Service (Amazon RDS) database",
          args: {
            name: "string",
          },
        },
        {
          name: "--aggregation-period",
          description:
            "The period for the returned results.    ONE_DAY - The daily job count for the prior 14 days.    SEVEN_DAYS - The aggregated job count for the prior 7 days.    FOURTEEN_DAYS - The aggregated job count for prior 14 days",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description:
            "This parameter sets the maximum number of items to be returned. The value is an integer. Range of accepted values is from 1 to 500",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned resources. For example, if a request is made to return MaxResults number of resources, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
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
      name: "list-restore-jobs",
      description:
        "Returns a list of jobs that Backup initiated to restore a saved resource, including details about the recovery process",
      options: [
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--by-account-id",
          description:
            "The account ID to list the jobs from. Returns only restore jobs associated with the specified account ID",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-resource-type",
          description:
            "Include this parameter to return only restore jobs for the specified resources:    Aurora for Amazon Aurora    CloudFormation for CloudFormation    DocumentDB for Amazon DocumentDB (with MongoDB compatibility)    DynamoDB for Amazon DynamoDB    EBS for Amazon Elastic Block Store    EC2 for Amazon Elastic Compute Cloud    EFS for Amazon Elastic File System    FSx for Amazon FSx    Neptune for Amazon Neptune    RDS for Amazon Relational Database Service    Redshift for Amazon Redshift    S3 for Amazon Simple Storage Service (Amazon S3)    SAP HANA on Amazon EC2 for SAP HANA databases on Amazon Elastic Compute Cloud instances    Storage Gateway for Storage Gateway    Timestream for Amazon Timestream    VirtualMachine for VMware virtual machines",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-created-before",
          description:
            "Returns only restore jobs that were created before the specified date",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-created-after",
          description:
            "Returns only restore jobs that were created after the specified date",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-status",
          description:
            "Returns only restore jobs associated with the specified job status",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-complete-before",
          description:
            "Returns only copy jobs completed before a date expressed in Unix format and Coordinated Universal Time (UTC)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-complete-after",
          description:
            "Returns only copy jobs completed after a date expressed in Unix format and Coordinated Universal Time (UTC)",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-restore-testing-plan-arn",
          description:
            "This returns only restore testing jobs that match the specified resource Amazon Resource Name (ARN)",
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
      name: "list-restore-jobs-by-protected-resource",
      description:
        "This returns restore jobs that contain the specified protected resource. You must include ResourceArn. You can optionally include NextToken, ByStatus, MaxResults, ByRecoveryPointCreationDateAfter , and ByRecoveryPointCreationDateBefore",
      options: [
        {
          name: "--resource-arn",
          description:
            "Returns only restore jobs that match the specified resource Amazon Resource Name (ARN)",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-status",
          description:
            "Returns only restore jobs associated with the specified job status",
          args: {
            name: "string",
          },
        },
        {
          name: "--by-recovery-point-creation-date-after",
          description:
            "Returns only restore jobs of recovery points that were created after the specified date",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--by-recovery-point-creation-date-before",
          description:
            "Returns only restore jobs of recovery points that were created before the specified date",
          args: {
            name: "timestamp",
          },
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request ismade to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
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
      name: "list-restore-testing-plans",
      description: "Returns a list of restore testing plans",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the nexttoken",
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
      name: "list-restore-testing-selections",
      description:
        "Returns a list of restore testing selections. Can be filtered by MaxResults and RestoreTestingPlanName",
      options: [
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
          args: {
            name: "integer",
          },
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the nexttoken",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-testing-plan-name",
          description:
            "Returns restore testing selections by the specified restore testing plan name",
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
      name: "list-tags",
      description:
        "Returns the tags assigned to the resource, such as a target recovery point, backup plan, or backup vault",
      options: [
        {
          name: "--resource-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the type of resource. Valid targets for ListTags are recovery points, backup plans, and backup vaults",
          args: {
            name: "string",
          },
        },
        {
          name: "--next-token",
          description:
            "The next item following a partial list of returned items. For example, if a request is made to return MaxResults number of items, NextToken allows you to return more items in your list starting at the location pointed to by the next token",
          args: {
            name: "string",
          },
        },
        {
          name: "--max-results",
          description: "The maximum number of items to be returned",
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
      name: "put-backup-vault-access-policy",
      description:
        "Sets a resource-based policy that is used to manage access permissions on the target backup vault. Requires a backup vault name and an access policy document in JSON format",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--policy",
          description: "The backup vault access policy document in JSON format",
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
      name: "put-backup-vault-lock-configuration",
      description:
        "Applies Backup Vault Lock to a backup vault, preventing attempts to delete any recovery point stored in or created in a backup vault. Vault Lock also prevents attempts to update the lifecycle policy that controls the retention period of any recovery point currently stored in a backup vault. If specified, Vault Lock enforces a minimum and maximum retention period for future backup and copy jobs that target a backup vault.  Backup Vault Lock has been assessed by Cohasset Associates for use in environments that are subject to SEC 17a-4, CFTC, and FINRA regulations. For more information about how Backup Vault Lock relates to these regulations, see the Cohasset Associates Compliance Assessment.   For more information, see Backup Vault Lock",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The Backup Vault Lock configuration that specifies the name of the backup vault it protects",
          args: {
            name: "string",
          },
        },
        {
          name: "--min-retention-days",
          description:
            "The Backup Vault Lock configuration that specifies the minimum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to retain certain data for at least seven years (2555 days). This parameter is required when a vault lock is created through CloudFormation; otherwise, this parameter is optional. If this parameter is not specified, Vault Lock will not enforce a minimum retention period. If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or longer than the minimum retention period. If the job's retention period is shorter than that minimum retention period, then the vault fails that backup or copy job, and you should either modify your lifecycle settings or use a different vault. The shortest minimum retention period you can specify is 1 day. Recovery points already saved in the vault prior to Vault Lock are not affected",
          args: {
            name: "long",
          },
        },
        {
          name: "--max-retention-days",
          description:
            "The Backup Vault Lock configuration that specifies the maximum retention period that the vault retains its recovery points. This setting can be useful if, for example, your organization's policies require you to destroy certain data after retaining it for four years (1460 days). If this parameter is not included, Vault Lock does not enforce a maximum retention period on the recovery points in the vault. If this parameter is included without a value, Vault Lock will not enforce a maximum retention period. If this parameter is specified, any backup or copy job to the vault must have a lifecycle policy with a retention period equal to or shorter than the maximum retention period. If the job's retention period is longer than that maximum retention period, then the vault fails the backup or copy job, and you should either modify your lifecycle settings or use a different vault. The longest maximum retention period you can specify is 36500 days (approximately 100 years). Recovery points already saved in the vault prior to Vault Lock are not affected",
          args: {
            name: "long",
          },
        },
        {
          name: "--changeable-for-days",
          description:
            "The Backup Vault Lock configuration that specifies the number of days before the lock date. For example, setting ChangeableForDays to 30 on Jan. 1, 2022 at 8pm UTC will set the lock date to Jan. 31, 2022 at 8pm UTC. Backup enforces a 72-hour cooling-off period before Vault Lock takes effect and becomes immutable. Therefore, you must set ChangeableForDays to 3 or greater. Before the lock date, you can delete Vault Lock from the vault using DeleteBackupVaultLockConfiguration or change the Vault Lock configuration using PutBackupVaultLockConfiguration. On and after the lock date, the Vault Lock becomes immutable and cannot be changed or deleted. If this parameter is not specified, you can delete Vault Lock from the vault using DeleteBackupVaultLockConfiguration or change the Vault Lock configuration using PutBackupVaultLockConfiguration at any time",
          args: {
            name: "long",
          },
        },
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
      name: "put-backup-vault-notifications",
      description:
        "Turns on notifications on a backup vault for the specified topic and events",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--sns-topic-arn",
          description:
            "The Amazon Resource Name (ARN) that specifies the topic for a backup vault\u2019s events; for example, arn:aws:sns:us-west-2:111122223333:MyVaultTopic",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-vault-events",
          description:
            "An array of events that indicate the status of jobs to back up resources to the backup vault. For common use cases and code samples, see Using Amazon SNS to track Backup events. The following events are supported:    BACKUP_JOB_STARTED | BACKUP_JOB_COMPLETED     COPY_JOB_STARTED | COPY_JOB_SUCCESSFUL | COPY_JOB_FAILED     RESTORE_JOB_STARTED | RESTORE_JOB_COMPLETED | RECOVERY_POINT_MODIFIED     S3_BACKUP_OBJECT_FAILED | S3_RESTORE_OBJECT_FAILED     The list below includes both supported events and deprecated events that are no longer in use (for reference). Deprecated events do not return statuses or notifications. Refer to the list above for the supported events",
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
      name: "put-restore-validation-result",
      description:
        "This request allows you to send your independent self-run restore test validation results. RestoreJobId and ValidationStatus are required. Optionally, you can input a ValidationStatusMessage",
      options: [
        {
          name: "--restore-job-id",
          description:
            "This is a unique identifier of a restore job within Backup",
          args: {
            name: "string",
          },
        },
        {
          name: "--validation-status",
          description: "The status of your restore validation",
          args: {
            name: "string",
          },
        },
        {
          name: "--validation-status-message",
          description:
            "This is an optional message string you can input to describe the validation status for the restore test validation",
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
      name: "start-backup-job",
      description: "Starts an on-demand backup job for the specified resource",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies a resource. The format of the ARN depends on the resource type",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "Specifies the IAM role ARN used to create the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A customer-chosen string that you can use to distinguish between otherwise identical calls to StartBackupJob. Retrying a successful request with the same idempotency token results in a success message with no action taken",
          args: {
            name: "string",
          },
        },
        {
          name: "--start-window-minutes",
          description:
            "A value in minutes after a backup is scheduled before a job will be canceled if it doesn't start successfully. This value is optional, and the default is 8 hours. If this value is included, it must be at least 60 minutes to avoid errors. This parameter has a maximum value of 100 years (52,560,000 minutes). During the start window, the backup job status remains in CREATED status until it has successfully begun or until the start window time has run out. If within the start window time Backup receives an error that allows the job to be retried, Backup will automatically retry to begin the job at least every 10 minutes until the backup successfully begins (the job status changes to RUNNING) or until the job status changes to EXPIRED (which is expected to occur when the start window time is over)",
          args: {
            name: "long",
          },
        },
        {
          name: "--complete-window-minutes",
          description:
            "A value in minutes during which a successfully started backup must complete, or else Backup will cancel the job. This value is optional. This value begins counting down from when the backup was scheduled. It does not add additional time for StartWindowMinutes, or if the backup started later than scheduled. Like StartWindowMinutes, this parameter has a maximum value of 100 years (52,560,000 minutes)",
          args: {
            name: "long",
          },
        },
        {
          name: "--lifecycle",
          description:
            "The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup will transition and expire backups automatically according to the lifecycle that you define.  Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the \u201cretention\u201d setting must be 90 days greater than the \u201ctransition to cold after days\u201d setting. The \u201ctransition to cold after days\u201d setting cannot be changed after a backup has been transitioned to cold.  Resource types that can transition to cold storage are listed in the Feature availability by resource table. Backup ignores this expression for other resource types. This parameter has a maximum value of 100 years (36,500 days)",
          args: {
            name: "structure",
          },
        },
        {
          name: "--recovery-point-tags",
          description: "The tags to assign to the resources",
          args: {
            name: "map",
          },
        },
        {
          name: "--backup-options",
          description:
            'The backup option for a selected resource. This option is only available for Windows Volume Shadow Copy Service (VSS) backup jobs. Valid values: Set to "WindowsVSS":"enabled" to enable the WindowsVSS backup option and create a Windows VSS backup. Set to "WindowsVSS""disabled" to create a regular backup. The WindowsVSS option is not enabled by default',
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
      name: "start-copy-job",
      description:
        "Starts a job to create a one-time copy of the specified resource. Does not support continuous backups",
      options: [
        {
          name: "--recovery-point-arn",
          description:
            "An ARN that uniquely identifies a recovery point to use for the copy job; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45",
          args: {
            name: "string",
          },
        },
        {
          name: "--source-backup-vault-name",
          description:
            "The name of a logical source container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--destination-backup-vault-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies a destination backup vault to copy to; for example, arn:aws:backup:us-east-1:123456789012:backup-vault:aBackupVault",
          args: {
            name: "string",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "Specifies the IAM role ARN used to copy the target recovery point; for example, arn:aws:iam::123456789012:role/S3Access",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A customer-chosen string that you can use to distinguish between otherwise identical calls to StartCopyJob. Retrying a successful request with the same idempotency token results in a success message with no action taken",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle",
          description:
            "Specifies the time period, in days, before a recovery point transitions to cold storage or is deleted. Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, on the console, the retention setting must be 90 days greater than the transition to cold after days setting. The transition to cold after days setting can't be changed after a backup has been transitioned to cold. Resource types that can transition to cold storage are listed in the Feature availability by resource table. Backup ignores this expression for other resource types. To remove the existing lifecycle and retention periods and keep your recovery points indefinitely, specify -1 for MoveToColdStorageAfterDays and DeleteAfterDays",
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
      name: "start-report-job",
      description:
        "Starts an on-demand report job for the specified report plan",
      options: [
        {
          name: "--report-plan-name",
          description: "The unique name of a report plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A customer-chosen string that you can use to distinguish between otherwise identical calls to StartReportJobInput. Retrying a successful request with the same idempotency token results in a success message with no action taken",
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
      name: "start-restore-job",
      description:
        "Recovers the saved resource identified by an Amazon Resource Name (ARN)",
      options: [
        {
          name: "--recovery-point-arn",
          description:
            "An ARN that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45",
          args: {
            name: "string",
          },
        },
        {
          name: "--metadata",
          description:
            "A set of metadata key-value pairs. You can get configuration metadata about a resource at the time it was backed up by calling GetRecoveryPointRestoreMetadata. However, values in addition to those provided by GetRecoveryPointRestoreMetadata might be required to restore a resource. For example, you might need to provide a new resource name if the original already exists. For more information about the metadata for each resource, see the following:    Metadata for Amazon Aurora     Metadata for Amazon DocumentDB     Metadata for CloudFormation     Metadata for Amazon DynamoDB      Metadata for Amazon EBS     Metadata for Amazon EC2     Metadata for Amazon EFS     Metadata for Amazon FSx     Metadata for Amazon Neptune     Metadata for Amazon RDS     Metadata for Amazon Redshift     Metadata for Storage Gateway     Metadata for Amazon S3     Metadata for Amazon Timestream     Metadata for virtual machines",
          args: {
            name: "map",
          },
        },
        {
          name: "--iam-role-arn",
          description:
            "The Amazon Resource Name (ARN) of the IAM role that Backup uses to create the target resource; for example: arn:aws:iam::123456789012:role/S3Access",
          args: {
            name: "string",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A customer-chosen string that you can use to distinguish between otherwise identical calls to StartRestoreJob. Retrying a successful request with the same idempotency token results in a success message with no action taken",
          args: {
            name: "string",
          },
        },
        {
          name: "--resource-type",
          description:
            "Starts a job to restore a recovery point for one of the following resources:    Aurora - Amazon Aurora    DocumentDB - Amazon DocumentDB    CloudFormation - CloudFormation    DynamoDB - Amazon DynamoDB    EBS - Amazon Elastic Block Store    EC2 - Amazon Elastic Compute Cloud    EFS - Amazon Elastic File System    FSx - Amazon FSx    Neptune - Amazon Neptune    RDS - Amazon Relational Database Service    Redshift - Amazon Redshift    Storage Gateway - Storage Gateway    S3 - Amazon Simple Storage Service    Timestream - Amazon Timestream    VirtualMachine - Virtual machines",
          args: {
            name: "string",
          },
        },
        {
          name: "--copy-source-tags-to-restored-resource",
          description:
            "This is an optional parameter. If this equals True, tags included in the backup will be copied to the restored resource. This can only be applied to backups created through Backup",
        },
        {
          name: "--no-copy-source-tags-to-restored-resource",
          description:
            "This is an optional parameter. If this equals True, tags included in the backup will be copied to the restored resource. This can only be applied to backups created through Backup",
        },
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
      name: "stop-backup-job",
      description:
        "Attempts to cancel a job to create a one-time backup of a resource. This action is not supported for the following services: Amazon FSx for Windows File Server, Amazon FSx for Lustre, Amazon FSx for NetApp ONTAP, Amazon FSx for OpenZFS, Amazon DocumentDB (with MongoDB compatibility), Amazon RDS, Amazon Aurora, and Amazon Neptune",
      options: [
        {
          name: "--backup-job-id",
          description:
            "Uniquely identifies a request to Backup to back up a resource",
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
        "Assigns a set of key-value pairs to a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN). This API is supported for recovery points for resource types including Aurora, Amazon DocumentDB. Amazon EBS, Amazon FSx, Neptune, and Amazon RDS",
      options: [
        {
          name: "--resource-arn",
          description:
            "An ARN that uniquely identifies a resource. The format of the ARN depends on the type of the tagged resource. ARNs that do not include backup are incompatible with tagging. TagResource and UntagResource with invalid ARNs will result in an error. Acceptable ARN content can include arn:aws:backup:us-east. Invalid ARN content may look like arn:aws:ec2:us-east",
          args: {
            name: "string",
          },
        },
        {
          name: "--tags",
          description:
            'Key-value pairs that are used to help organize your resources. You can assign your own metadata to the resources you create. For clarity, this is the structure to assign tags: [{"Key":"string","Value":"string"}]',
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
      description:
        "Removes a set of key-value pairs from a recovery point, backup plan, or backup vault identified by an Amazon Resource Name (ARN) This API is not supported for recovery points for resource types including Aurora, Amazon DocumentDB. Amazon EBS, Amazon FSx, Neptune, and Amazon RDS",
      options: [
        {
          name: "--resource-arn",
          description:
            "An ARN that uniquely identifies a resource. The format of the ARN depends on the type of the tagged resource. ARNs that do not include backup are incompatible with tagging. TagResource and UntagResource with invalid ARNs will result in an error. Acceptable ARN content can include arn:aws:backup:us-east. Invalid ARN content may look like arn:aws:ec2:us-east",
          args: {
            name: "string",
          },
        },
        {
          name: "--tag-key-list",
          description:
            "The keys to identify which key-value tags to remove from a resource",
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
      name: "update-backup-plan",
      description:
        "Updates the specified backup plan. The new version is uniquely identified by its ID",
      options: [
        {
          name: "--backup-plan-id",
          description: "The ID of the backup plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--backup-plan",
          description:
            "The body of a backup plan. Includes a BackupPlanName and one or more sets of Rules",
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
      name: "update-framework",
      description: "Updates the specified framework",
      options: [
        {
          name: "--framework-name",
          description:
            "The unique name of a framework. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--framework-description",
          description:
            "An optional description of the framework with a maximum 1,024 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--framework-controls",
          description:
            "The controls that make up the framework. Each control in the list has a name, input parameters, and scope",
          args: {
            name: "list",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A customer-chosen string that you can use to distinguish between otherwise identical calls to UpdateFrameworkInput. Retrying a successful request with the same idempotency token results in a success message with no action taken",
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
      name: "update-global-settings",
      description:
        "Updates whether the Amazon Web Services account is opted in to cross-account backup. Returns an error if the account is not an Organizations management account. Use the DescribeGlobalSettings API to determine the current settings",
      options: [
        {
          name: "--global-settings",
          description:
            "A value for isCrossAccountBackupEnabled and a Region. Example: update-global-settings --global-settings isCrossAccountBackupEnabled=false --region us-west-2",
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
      name: "update-recovery-point-lifecycle",
      description:
        "Sets the transition lifecycle of a recovery point. The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define. Resource types that can transition to cold storage are listed in the Feature availability by resource table. Backup ignores this expression for other resource types. Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the \u201cretention\u201d setting must be 90 days greater than the \u201ctransition to cold after days\u201d setting. The \u201ctransition to cold after days\u201d setting cannot be changed after a backup has been transitioned to cold.  If your lifecycle currently uses the parameters DeleteAfterDays and MoveToColdStorageAfterDays, include these parameters and their values when you call this operation. Not including them may result in your plan updating with null values.  This operation does not support continuous backups",
      options: [
        {
          name: "--backup-vault-name",
          description:
            "The name of a logical container where backups are stored. Backup vaults are identified by names that are unique to the account used to create them and the Amazon Web Services Region where they are created",
          args: {
            name: "string",
          },
        },
        {
          name: "--recovery-point-arn",
          description:
            "An Amazon Resource Name (ARN) that uniquely identifies a recovery point; for example, arn:aws:backup:us-east-1:123456789012:recovery-point:1EB3B5E7-9EB0-435A-A80B-108B488B0D45",
          args: {
            name: "string",
          },
        },
        {
          name: "--lifecycle",
          description:
            "The lifecycle defines when a protected resource is transitioned to cold storage and when it expires. Backup transitions and expires backups automatically according to the lifecycle that you define.  Backups transitioned to cold storage must be stored in cold storage for a minimum of 90 days. Therefore, the \u201cretention\u201d setting must be 90 days greater than the \u201ctransition to cold after days\u201d setting. The \u201ctransition to cold after days\u201d setting cannot be changed after a backup has been transitioned to cold",
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
      name: "update-region-settings",
      description:
        "Updates the current service opt-in settings for the Region. Use the DescribeRegionSettings API to determine the resource types that are supported",
      options: [
        {
          name: "--resource-type-opt-in-preference",
          description:
            "Updates the list of services along with the opt-in preferences for the Region. If resource assignments are only based on tags, then service opt-in settings are applied. If a resource type is explicitly assigned to a backup plan, such as Amazon S3, Amazon EC2, or Amazon RDS, it will be included in the backup even if the opt-in is not enabled for that particular service. If both a resource type and tags are specified in a resource assignment, the resource type specified in the backup plan takes priority over the tag condition. Service opt-in settings are disregarded in this situation",
          args: {
            name: "map",
          },
        },
        {
          name: "--resource-type-management-preference",
          description:
            "Enables or disables full Backup management of backups for a resource type. To enable full Backup management for DynamoDB along with  Backup's advanced DynamoDB backup features, follow the procedure to  enable advanced DynamoDB backup programmatically",
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
      name: "update-report-plan",
      description: "Updates the specified report plan",
      options: [
        {
          name: "--report-plan-name",
          description:
            "The unique name of the report plan. This name is between 1 and 256 characters, starting with a letter, and consisting of letters (a-z, A-Z), numbers (0-9), and underscores (_)",
          args: {
            name: "string",
          },
        },
        {
          name: "--report-plan-description",
          description:
            "An optional description of the report plan with a maximum 1,024 characters",
          args: {
            name: "string",
          },
        },
        {
          name: "--report-delivery-channel",
          description:
            "The information about where to deliver your reports, specifically your Amazon S3 bucket name, S3 key prefix, and the formats of your reports",
          args: {
            name: "structure",
          },
        },
        {
          name: "--report-setting",
          description:
            "The report template for the report. Reports are built using a report template. The report templates are:  RESOURCE_COMPLIANCE_REPORT | CONTROL_COMPLIANCE_REPORT | BACKUP_JOB_REPORT | COPY_JOB_REPORT | RESTORE_JOB_REPORT  If the report template is RESOURCE_COMPLIANCE_REPORT or CONTROL_COMPLIANCE_REPORT, this API resource also describes the report coverage by Amazon Web Services Regions and frameworks",
          args: {
            name: "structure",
          },
        },
        {
          name: "--idempotency-token",
          description:
            "A customer-chosen string that you can use to distinguish between otherwise identical calls to UpdateReportPlanInput. Retrying a successful request with the same idempotency token results in a success message with no action taken",
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
      name: "update-restore-testing-plan",
      description:
        "This request will send changes to your specified restore testing plan. RestoreTestingPlanName cannot be updated after it is created.  RecoveryPointSelection can contain:    Algorithm     ExcludeVaults     IncludeVaults     RecoveryPointTypes     SelectionWindowDays",
      options: [
        {
          name: "--restore-testing-plan",
          description: "Specifies the body of a restore testing plan",
          args: {
            name: "structure",
          },
        },
        {
          name: "--restore-testing-plan-name",
          description: "The name of the restore testing plan name",
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
      name: "update-restore-testing-selection",
      description:
        "Updates the specified restore testing selection. Most elements except the RestoreTestingSelectionName can be updated with this request. You can use either protected resource ARNs or conditions, but not both",
      options: [
        {
          name: "--restore-testing-plan-name",
          description:
            "The restore testing plan name is required to update the indicated testing plan",
          args: {
            name: "string",
          },
        },
        {
          name: "--restore-testing-selection",
          description:
            "To update your restore testing selection, you can use either protected resource ARNs or conditions, but not both. That is, if your selection has ProtectedResourceArns, requesting an update with the parameter ProtectedResourceConditions will be unsuccessful",
          args: {
            name: "structure",
          },
        },
        {
          name: "--restore-testing-selection-name",
          description:
            "The required restore testing selection name of the restore testing selection you wish to update",
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
