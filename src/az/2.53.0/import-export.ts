const completion: Fig.Spec = {
  name: "import-export",
  description: "Manage Import Export",
  subcommands: [
    {
      name: "bit-locker-key",
      description: "Import-export bit-locker-key",
      subcommands: [
        {
          name: "list",
          description:
            "Returns the BitLocker Keys for all drives in the specified job",
          options: [
            {
              name: "--job-name",
              description: "The name of the import/export job",
              args: { name: "job-name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description:
        "Creates a new job or updates an existing job in the specified subscription",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the import/export job",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--backup-drive-manifest",
          description:
            "Default value is false. Indicates whether the manifest files on the drives should be copied to block blobs",
          args: {
            name: "backup-drive-manifest",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--cancel-requested",
          description:
            "Indicates whether a request has been submitted to cancel the job",
          args: { name: "cancel-requested", suggestions: ["false", "true"] },
        },
        {
          name: "--client-tenant-id",
          description: "The tenant ID of the client making the request",
          args: { name: "client-tenant-id" },
        },
        {
          name: "--delivery-package",
          description:
            "Contains information about the package being shipped by the customer to the Microsoft data center",
          args: { name: "delivery-package" },
        },
        {
          name: "--diagnostics-path",
          description:
            "The virtual blob directory to which the copy logs and backups of drive manifest files (if enabled) will be stored",
          args: { name: "diagnostics-path" },
        },
        {
          name: "--drive-list",
          description:
            "List of up to ten drives that comprise the job. The drive list is a required element for an import job; it is not specified for export jobs",
          args: { name: "drive-list" },
        },
        {
          name: "--export",
          description:
            "A property containing information about the blobs to be exported for an export job. This property is required for export jobs, but must not be specified for import jobs",
          args: { name: "export" },
        },
        {
          name: "--incomplete-blob-list-uri",
          description:
            "A blob path that points to a block blob containing a list of blob names that were not exported due to insufficient drive space. If all blobs were exported successfully, then this element is not included in the response",
          args: { name: "incomplete-blob-list-uri" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--log-level",
          description:
            "Default value is Error. Indicates whether error logging or verbose logging will be enabled",
          args: { name: "log-level" },
        },
        {
          name: "--percent-complete",
          description: "Overall percentage completed for the job",
          args: { name: "percent-complete" },
        },
        {
          name: "--return-address",
          description: "Specifies the return address information for the job",
          args: { name: "return-address" },
        },
        {
          name: "--return-package",
          description:
            "Contains information about the package being shipped by the customer to the Microsoft data center",
          args: { name: "return-package" },
        },
        {
          name: "--return-shipping",
          description:
            "Specifies the return carrier and customer's account with the carrier",
          args: { name: "return-shipping" },
        },
        {
          name: "--shipping-information",
          description:
            "Contains information about the Microsoft datacenter to which the drives should be shipped",
          args: { name: "shipping-information" },
        },
        {
          name: "--state",
          description: "Current state of the job",
          args: { name: "state" },
        },
        {
          name: "--storage-account",
          description:
            "Name or ID of the storage account where data will be imported to or exported from",
          args: { name: "storage-account" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--type",
          description: "The type of job",
          args: { name: "type" },
        },
      ],
    },
    {
      name: "delete",
      description:
        "Deletes an existing job. Only jobs in the Creating or Completed states can be deleted",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the import/export job",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
      ],
    },
    {
      name: "list",
      description: "Returns all active and completed jobs in a subscription",
      options: [
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "show",
      description: "Gets information about an existing job",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the import/export job",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
      ],
    },
    {
      name: "update",
      description:
        "Updates specific properties of a job. You can call this operation to notify the Import/Export service that the hard drives comprising the import or export job have been shipped to the Microsoft data center. It can also be used to cancel an existing job",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the import/export job",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
          isRequired: true,
        },
        {
          name: "--backup-drive-manifest",
          description:
            "Indicates whether the manifest files on the drives should be copied to block blobs",
          args: {
            name: "backup-drive-manifest",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--cancel-requested",
          description:
            "If specified, the value must be true. The service will attempt to cancel the job",
          args: { name: "cancel-requested", suggestions: ["false", "true"] },
        },
        {
          name: "--delivery-package",
          description:
            "Contains information about the package being shipped by the customer to the Microsoft data center",
          args: { name: "delivery-package" },
        },
        {
          name: "--drive-list",
          description: "List of drives that comprise the job",
          args: { name: "drive-list" },
        },
        {
          name: "--log-level",
          description:
            "Indicates whether error logging or verbose logging is enabled",
          args: { name: "log-level" },
        },
        {
          name: "--return-address",
          description: "Specifies the return address information for the job",
          args: { name: "return-address" },
        },
        {
          name: "--return-shipping",
          description:
            "Specifies the return carrier and customer's account with the carrier",
          args: { name: "return-shipping" },
        },
        {
          name: "--state",
          description:
            "If specified, the value must be Shipping, which tells the Import/Export service that the package for the job has been shipped. The ReturnAddress and DeliveryPackage properties must have been set either in this request or in a previous request, otherwise the request will fail",
          args: { name: "state" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
      ],
    },
    {
      name: "location",
      description: "Import-export location",
      subcommands: [
        {
          name: "list",
          description:
            "Returns a list of locations to which you can ship the disks associated with an import or export job. A location is a Microsoft data center region",
        },
        {
          name: "show",
          description:
            "Returns the details about a location to which you can ship the disks associated with an import or export job. A location is an Azure region",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az import-export location list",
              args: { name: "location" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
