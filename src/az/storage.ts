const completionSpec: Fig.Spec = {
  name: "storage",
  description: "Manage Azure Cloud Storage resources",
  subcommands: [
    {
      name: "account",
      description: "Manage storage accounts",
      subcommands: [
        {
          name: "blob-inventory-policy",
          description: "Manage storage account Blob Inventory Policy",
          subcommands: [
            {
              name: "create",
              description: "Create Blob Inventory Policy for storage account",
            },
            {
              name: "delete",
              description:
                "Delete Blob Inventory Policy associated with the specified storage account",
            },
            {
              name: "show",
              description:
                "Show Blob Inventory Policy properties associated with the specified storage account",
            },
            {
              name: "update",
              description:
                "Update Blob Inventory Policy associated with the specified storage account",
            },
          ],
        },
        {
          name: "blob-service-properties",
          description:
            "Manage the properties of a storage account's blob service",
          subcommands: [
            {
              name: "show",
              description:
                "Show the properties of a storage account's blob service",
            },
            {
              name: "update",
              description:
                "Update the properties of a storage account's blob service",
            },
          ],
        },
        {
          name: "check-name",
          description:
            "Check that the storage account name is valid and is not already in use",
        },
        { name: "create", description: "Create a storage account" },
        { name: "delete", description: "Delete a storage account" },
        {
          name: "encryption-scope",
          description: "Manage encryption scope for a storage account",
          subcommands: [
            {
              name: "create",
              description: "Create an encryption scope within storage account",
            },
            {
              name: "list",
              description: "List encryption scopes within storage account",
            },
            {
              name: "show",
              description:
                "Show properties for specified encryption scope within storage account",
            },
            {
              name: "update",
              description:
                "Update properties for specified encryption scope within storage account",
            },
          ],
        },
        {
          name: "failover",
          description:
            "Failover request can be triggered for a storage account in case of availability issues",
        },
        {
          name: "file-service-properties",
          description:
            "Manage the properties of file service in storage account",
          subcommands: [
            {
              name: "show",
              description:
                "Show the properties of file service in storage account",
            },
            {
              name: "update",
              description:
                "Update the properties of file service in storage account",
            },
          ],
        },
        {
          name: "generate-sas",
          description:
            "Generate a shared access signature for the storage account",
        },
        {
          name: "hns-migration",
          description:
            "Manage storage account migration to enable hierarchical namespace",
          subcommands: [
            {
              name: "start",
              description:
                "Validate/Begin migrating a storage account to enable hierarchical namespace",
            },
            {
              name: "stop",
              description:
                "Stop the enabling hierarchical namespace migration of a storage account",
            },
          ],
        },
        {
          name: "keys",
          description: "Manage storage account keys",
          subcommands: [
            {
              name: "list",
              description:
                "List the access keys or Kerberos keys (if active directory enabled) for a storage account",
            },
            {
              name: "renew",
              description:
                "Regenerate one of the access keys or Kerberos keys (if active directory enabled) for a storage account",
            },
          ],
        },
        { name: "list", description: "List storage accounts" },
        {
          name: "management-policy",
          description: "Manage storage account management policies",
          subcommands: [
            {
              name: "create",
              description:
                "Create the data policy rules associated with the specified storage account",
            },
            {
              name: "delete",
              description:
                "Delete the data policy rules associated with the specified storage account",
            },
            {
              name: "show",
              description:
                "Get the data policy rules associated with the specified storage account",
            },
            {
              name: "update",
              description:
                "Update the data policy rules associated with the specified storage account",
            },
          ],
        },
        {
          name: "network-rule",
          description: "Manage network rules",
          subcommands: [
            { name: "add", description: "Add a network rule" },
            { name: "list", description: "List network rules" },
            { name: "remove", description: "Remove a network rule" },
          ],
        },
        {
          name: "or-policy",
          description: "Manage storage account Object Replication Policy",
          subcommands: [
            {
              name: "create",
              description:
                "Create Object Replication Service Policy for storage account",
            },
            {
              name: "delete",
              description:
                "Delete specified Object Replication Service Policy associated with the specified storage account",
            },
            {
              name: "list",
              description:
                "List Object Replication Service Policies associated with the specified storage account",
            },
            {
              name: "rule",
              description: "Manage Object Replication Service Policy Rules",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add rule to the specified Object Replication Service Policy",
                },
                {
                  name: "list",
                  description:
                    "List all the rules in the specified Object Replication Service Policy",
                },
                {
                  name: "remove",
                  description:
                    "Remove the specified rule from the specified Object Replication Service Policy",
                },
                {
                  name: "show",
                  description:
                    "Show the properties of specified rule in Object Replication Service Policy",
                },
                {
                  name: "update",
                  description:
                    "Update rule properties to Object Replication Service Policy",
                },
              ],
            },
            {
              name: "show",
              description:
                "Show the properties of specified Object Replication Service Policy for storage account",
            },
            {
              name: "update",
              description:
                "Update Object Replication Service Policy properties for storage account",
            },
          ],
        },
        {
          name: "private-endpoint-connection",
          description: "Manage storage account private endpoint connection",
          subcommands: [
            {
              name: "approve",
              description:
                "Approve a private endpoint connection request for storage account",
            },
            {
              name: "delete",
              description:
                "Delete a private endpoint connection request for storage account",
            },
            {
              name: "reject",
              description:
                "Reject a private endpoint connection request for storage account",
            },
            {
              name: "show",
              description:
                "Show details of a private endpoint connection request for storage account",
            },
          ],
        },
        {
          name: "private-link-resource",
          description: "Manage storage account private link resources",
          subcommands: [
            {
              name: "list",
              description:
                "Get the private link resources that need to be created for a storage account",
            },
          ],
        },
        {
          name: "revoke-delegation-keys",
          description: "Revoke all user delegation keys for a storage account",
        },
        { name: "show", description: "Show storage account properties" },
        {
          name: "show-connection-string",
          description: "Get the connection string for a storage account",
        },
        {
          name: "show-usage",
          description:
            "Show the current count and limit of the storage accounts under the subscription",
        },
        {
          name: "update",
          description: "Update the properties of a storage account",
        },
      ],
    },
    {
      name: "azcopy",
      description: "[EXPERIMENTAL] Manage storage operations utilizing AzCopy",
      subcommands: [
        {
          name: "blob",
          description:
            "Manage object storage for unstructured data (blobs) using AzCopy",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete blobs from a storage blob container using AzCopy",
            },
            {
              name: "download",
              description:
                "Download blobs from a storage blob container using AzCopy",
            },
            {
              name: "sync",
              description:
                "Sync blobs recursively to a storage blob container using AzCopy",
            },
            {
              name: "upload",
              description:
                "Upload blobs to a storage blob container using AzCopy",
            },
          ],
        },
        {
          name: "run-command",
          description:
            "Run a command directly using the AzCopy CLI. Please use SAS tokens for authentication",
        },
      ],
    },
    {
      name: "blob",
      description: "Manage object storage for unstructured data (blobs)",
      subcommands: [
        {
          name: "access",
          description:
            "Manage the access control properties of a blob when Hierarchical Namespace is enabled",
          subcommands: [
            {
              name: "set",
              description: "Set the access control properties of a blob",
            },
            {
              name: "show",
              description: "Show the access control properties of a blob",
            },
            {
              name: "update",
              description: "Update the access control properties of a blob",
            },
          ],
        },
        {
          name: "copy",
          description:
            "Manage blob copy operations. Use az storage blob show to check the status of the blobs",
          subcommands: [
            {
              name: "cancel",
              description:
                "Aborts a pending copy_blob operation, and leaves a destination blob with zero length and full metadata",
            },
            {
              name: "start",
              description:
                "Copy a blob asynchronously. Use az storage blob show to check the status of the blobs",
            },
            {
              name: "start-batch",
              description:
                "Copy multiple blobs to a blob container. Use az storage blob show to check the status of the blobs",
            },
          ],
        },
        { name: "delete", description: "Mark a blob or snapshot for deletion" },
        {
          name: "delete-batch",
          description: "Delete blobs from a blob container recursively",
        },
        {
          name: "directory",
          description: "Manage blob directories in storage account container",
          subcommands: [
            {
              name: "access",
              description:
                "Manage the access control properties of a directory when Hierarchical Namespace is enabled",
              subcommands: [
                {
                  name: "set",
                  description:
                    "Set the access control properties of a directory",
                },
                {
                  name: "show",
                  description:
                    "Show the access control properties of a directory",
                },
                {
                  name: "update",
                  description:
                    "Update the access control properties of a directory",
                },
              ],
            },
            {
              name: "create",
              description:
                "Create a storage blob directory in a storage container",
            },
            {
              name: "delete",
              description:
                "Delete a storage blob directory in a storage container",
            },
            {
              name: "download",
              description: "Download blobs to a local file path",
            },
            {
              name: "exists",
              description:
                "Check for the existence of a blob directory in a storage container",
            },
            {
              name: "list",
              description:
                "List blobs and blob subdirectories in a storage directory",
            },
            {
              name: "metadata",
              description: "Manage directory metadata",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Show all user-defined metadata for the specified blob directory",
                },
                {
                  name: "update",
                  description:
                    "Set user-defined metadata for the specified blob directory as one or more name-value pairs",
                },
              ],
            },
            {
              name: "move",
              description:
                "Move a storage directory to another storage blob directory in a storage container",
            },
            {
              name: "show",
              description:
                "Show a storage blob directory properties in a storage container",
            },
            {
              name: "upload",
              description:
                "Upload blobs or subdirectories to a storage blob directory",
            },
          ],
        },
        {
          name: "download",
          description:
            "Downloads a blob to a file path, with automatic chunking and progress notifications",
        },
        {
          name: "download-batch",
          description: "Download blobs from a blob container recursively",
        },
        {
          name: "exists",
          description: "Check for the existence of a blob in a container",
        },
        {
          name: "filter",
          description:
            "List blobs across all containers whose tags match a given search expression",
        },
        {
          name: "generate-sas",
          description: "Generate a shared access signature for the blob",
        },
        {
          name: "immutability-policy",
          description: "Manage blob immutability policy",
          subcommands: [
            {
              name: "delete",
              description: "Delete blob's immutability policy",
            },
            { name: "set", description: "Set blob's immutability policy" },
          ],
        },
        {
          name: "incremental-copy",
          description: "Manage blob incremental copy operations",
          subcommands: [
            {
              name: "cancel",
              description:
                "Aborts a pending copy_blob operation, and leaves a destination blob with zero length and full metadata",
            },
            {
              name: "start",
              description:
                "Copies an incremental copy of a blob asynchronously",
            },
          ],
        },
        {
          name: "lease",
          description: "Manage storage blob leases",
          subcommands: [
            { name: "acquire", description: "Request a new lease" },
            {
              name: "break",
              description:
                "Break the lease, if the container or blob has an active lease",
            },
            {
              name: "change",
              description: "Change the lease ID of an active lease",
            },
            { name: "release", description: "Release the lease" },
            { name: "renew", description: "Renew the lease" },
          ],
        },
        { name: "list", description: "List blobs in a given container" },
        {
          name: "metadata",
          description: "Manage blob metadata",
          subcommands: [
            {
              name: "show",
              description:
                "Returns all user-defined metadata for the specified blob or snapshot",
            },
            {
              name: "update",
              description:
                "Sets user-defined metadata for the specified blob as one or more name-value pairs",
            },
          ],
        },
        { name: "move", description: "Move a blob in a storage container" },
        {
          name: "restore",
          description: "Restore blobs in the specified blob ranges",
        },
        {
          name: "rewrite",
          description:
            "Create a new Block Blob where the content of the blob is read from a given URL",
        },
        {
          name: "service-properties",
          description: "Manage storage blob service properties",
          subcommands: [
            {
              name: "delete-policy",
              description:
                "Manage storage blob delete-policy service properties",
              subcommands: [
                {
                  name: "show",
                  description: "Show the storage blob delete-policy",
                },
                {
                  name: "update",
                  description: "Update the storage blob delete-policy",
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets the properties of a storage account's Blob service, including Azure Storage Analytics",
            },
            {
              name: "update",
              description: "Update storage blob service properties",
            },
          ],
        },
        { name: "set-legal-hold", description: "Set blob legal hold" },
        {
          name: "set-tier",
          description: "Set the block or page tiers on the blob",
        },
        { name: "show", description: "Get the details of a blob" },
        {
          name: "snapshot",
          description: "Creates a read-only snapshot of a blob",
        },
        {
          name: "sync",
          description: "Sync blobs recursively to a storage blob container",
        },
        {
          name: "tag",
          description: "Manage blob tags",
          subcommands: [
            {
              name: "list",
              description:
                "Get tags on a blob or specific blob version, or snapshot",
            },
            {
              name: "set",
              description:
                "Set tags on a blob or specific blob version, but not snapshot",
            },
          ],
        },
        {
          name: "undelete",
          description:
            "The undelete Blob operation restores the contents and metadata of soft deleted blob or snapshot",
        },
        { name: "update", description: "Sets system properties on the blob" },
        { name: "upload", description: "Upload a file to a storage blob" },
        {
          name: "upload-batch",
          description:
            "Upload files from a local directory to a blob container",
        },
        { name: "url", description: "Create the url to access a blob" },
      ],
    },
    {
      name: "container",
      description: "Manage blob storage containers",
      subcommands: [
        {
          name: "create",
          description: "Create a container in a storage account",
        },
        {
          name: "delete",
          description: "Marks the specified container for deletion",
        },
        {
          name: "exists",
          description: "Check for the existence of a storage container",
        },
        {
          name: "generate-sas",
          description: "Generate a SAS token for a storage container",
        },
        {
          name: "immutability-policy",
          description: "Manage container immutability policies",
          subcommands: [
            {
              name: "create",
              description: "Create or update an unlocked immutability policy",
            },
            {
              name: "delete",
              description: "Aborts an unlocked immutability policy",
            },
            {
              name: "extend",
              description:
                "Extend the immutabilityPeriodSinceCreationInDays of a locked immutabilityPolicy",
            },
            {
              name: "lock",
              description: "Sets the ImmutabilityPolicy to Locked state",
            },
            {
              name: "show",
              description:
                "Gets the existing immutability policy along with the corresponding ETag in response headers and body",
            },
          ],
        },
        {
          name: "lease",
          description: "Manage blob storage container leases",
          subcommands: [
            { name: "acquire", description: "Requests a new lease" },
            {
              name: "break",
              description:
                "Break the lease, if the container has an active lease",
            },
            {
              name: "change",
              description: "Change the lease ID of an active lease",
            },
            { name: "release", description: "Release the lease" },
            { name: "renew", description: "Renews the lease" },
          ],
        },
        {
          name: "legal-hold",
          description: "Manage container legal holds",
          subcommands: [
            { name: "clear", description: "Clear legal hold tags" },
            { name: "set", description: "Set legal hold tags" },
            {
              name: "show",
              description: "Get the legal hold properties of a container",
            },
          ],
        },
        { name: "list", description: "List containers in a storage account" },
        {
          name: "metadata",
          description: "Manage container metadata",
          subcommands: [
            {
              name: "show",
              description:
                "Returns all user-defined metadata for the specified container",
            },
            {
              name: "update",
              description:
                "Sets one or more user-defined name-value pairs for the specified container",
            },
          ],
        },
        {
          name: "policy",
          description: "Manage container stored access policies",
          subcommands: [
            {
              name: "create",
              description:
                "Create a stored access policy on the containing object",
            },
            {
              name: "delete",
              description:
                "Delete a stored access policy on a containing object",
            },
            {
              name: "list",
              description: "List stored access policies on a containing object",
            },
            {
              name: "show",
              description: "Show a stored access policy on a containing object",
            },
            {
              name: "update",
              description: "Set a stored access policy on a containing object",
            },
          ],
        },
        { name: "restore", description: "Restore soft-deleted container" },
        {
          name: "set-permission",
          description:
            "Sets the permissions for the specified container or stored access policies that may be used with Shared Access Signatures",
        },
        {
          name: "show",
          description:
            "Returns all user-defined metadata and system properties for the specified container",
        },
        {
          name: "show-permission",
          description: "Gets the permissions for the specified container",
        },
      ],
    },
    {
      name: "container-rm",
      description:
        "Manage Azure containers using the Microsoft.Storage resource provider",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new container under the specified storage account",
        },
        {
          name: "delete",
          description: "Delete the specified container under its account",
        },
        {
          name: "exists",
          description: "Check for the existence of a container",
        },
        {
          name: "list",
          description:
            "List all containers under the specified storage account",
        },
        {
          name: "migrate-vlw",
          description:
            "Migrate a blob container from container level WORM to object level immutability enabled container",
        },
        {
          name: "show",
          description: "Show the properties for a specified container",
        },
        {
          name: "update",
          description: "Update the properties for a container",
        },
      ],
    },
    {
      name: "copy",
      description: "Copy files or directories to or from Azure storage",
    },
    {
      name: "cors",
      description:
        "Manage storage service Cross-Origin Resource Sharing (CORS)",
      subcommands: [
        { name: "add", description: "Add a CORS rule to a storage account" },
        {
          name: "clear",
          description: "Remove all CORS rules from a storage account",
        },
        {
          name: "list",
          description: "List all CORS rules for a storage account",
        },
      ],
    },
    {
      name: "directory",
      description: "Manage file storage directories",
      subcommands: [
        {
          name: "create",
          description:
            "Creates a new directory under the specified share or parent directory",
        },
        {
          name: "delete",
          description: "Deletes the specified empty directory",
        },
        {
          name: "exists",
          description: "Check for the existence of a storage directory",
        },
        { name: "list", description: "List directories in a share" },
        {
          name: "metadata",
          description: "Manage file storage directory metadata",
          subcommands: [
            {
              name: "show",
              description:
                "Returns all user-defined metadata for the specified directory",
            },
            {
              name: "update",
              description:
                "Sets one or more user-defined name-value pairs for the specified directory",
            },
          ],
        },
        {
          name: "show",
          description:
            "Returns all user-defined metadata and system properties for the specified directory",
        },
      ],
    },
    {
      name: "entity",
      description: "Manage table storage entities",
      subcommands: [
        {
          name: "delete",
          description: "Deletes an existing entity in a table",
        },
        { name: "insert", description: "Insert an entity into a table" },
        {
          name: "merge",
          description:
            "Updates an existing entity by merging the entity's properties",
        },
        { name: "query", description: "List entities which satisfy a query" },
        {
          name: "replace",
          description: "Updates an existing entity in a table",
        },
        { name: "show", description: "Get an entity from the specified table" },
      ],
    },
    {
      name: "file",
      description: "Manage file shares that use the SMB 3.0 protocol",
      subcommands: [
        {
          name: "copy",
          description: "Manage file copy operations",
          subcommands: [
            {
              name: "cancel",
              description:
                "Aborts a pending copy_file operation, and leaves a destination file with zero length and full metadata",
            },
            { name: "start", description: "Copy a file asynchronously" },
            {
              name: "start-batch",
              description: "Copy multiple files or blobs to a file share",
            },
          ],
        },
        {
          name: "delete",
          description: "Marks the specified file for deletion",
        },
        {
          name: "delete-batch",
          description: "Delete files from an Azure Storage File Share",
        },
        {
          name: "download",
          description:
            "Downloads a file to a file path, with automatic chunking and progress notifications",
        },
        {
          name: "download-batch",
          description:
            "Download files from an Azure Storage File Share to a local directory in a batch operation",
        },
        { name: "exists", description: "Check for the existence of a file" },
        {
          name: "generate-sas",
          description: "Generates a shared access signature for the file",
        },
        { name: "list", description: "List files and directories in a share" },
        {
          name: "metadata",
          description: "Manage file metadata",
          subcommands: [
            {
              name: "show",
              description:
                "Returns all user-defined metadata for the specified file",
            },
            {
              name: "update",
              description:
                "Sets user-defined metadata for the specified file as one or more name-value pairs",
            },
          ],
        },
        { name: "resize", description: "Resizes a file to the specified size" },
        {
          name: "show",
          description:
            "Returns all user-defined metadata, standard HTTP properties, and system properties for the file",
        },
        { name: "update", description: "Sets system properties on the file" },
        {
          name: "upload",
          description:
            "Upload a file to a share that uses the SMB 3.0 protocol",
        },
        {
          name: "upload-batch",
          description:
            "Upload files from a local directory to an Azure Storage File Share in a batch operation",
        },
        { name: "url", description: "Create the url to access a file" },
      ],
    },
    {
      name: "fs",
      description:
        "Manage file systems in Azure Data Lake Storage Gen2 account",
      subcommands: [
        {
          name: "access",
          description:
            "Manage file system access and permissions for Azure Data Lake Storage Gen2 account",
          subcommands: [
            {
              name: "remove-recursive",
              description:
                "Remove the Access Control on a path and sub-paths in Azure Data Lake Storage Gen2 account",
            },
            {
              name: "set",
              description:
                "Set the access control properties of a path(directory or file) in Azure Data Lake Storage Gen2 account",
            },
            {
              name: "set-recursive",
              description:
                "Set the Access Control on a path and sub-paths in Azure Data Lake Storage Gen2 account",
            },
            {
              name: "show",
              description:
                "Show the access control properties of a path (directory or file) in Azure Data Lake Storage Gen2 account",
            },
            {
              name: "update-recursive",
              description:
                "Modify the Access Control on a path and sub-paths in Azure Data Lake Storage Gen2 account",
            },
          ],
        },
        {
          name: "create",
          description:
            "Create file system for Azure Data Lake Storage Gen2 account",
        },
        {
          name: "delete",
          description: "Delete a file system in ADLS Gen2 account",
        },
        {
          name: "directory",
          description:
            "Manage directories in Azure Data Lake Storage Gen2 account",
          subcommands: [
            {
              name: "create",
              description: "Create a directory in ADLS Gen2 file system",
            },
            {
              name: "delete",
              description: "Delete a directory in ADLS Gen2 file system",
            },
            {
              name: "download",
              description:
                "Download files from the directory in ADLS Gen2 file system to a local file path",
            },
            {
              name: "exists",
              description:
                "Check for the existence of a directory in ADLS Gen2 file system",
            },
            {
              name: "list",
              description: "List directories in ADLS Gen2 file system",
            },
            {
              name: "metadata",
              description: "Manage the metadata for directory in file system",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Return all user-defined metadata for the specified directory",
                },
                {
                  name: "update",
                  description:
                    "Sets one or more user-defined name-value pairs for the specified file system",
                },
              ],
            },
            {
              name: "move",
              description: "Move a directory in ADLS Gen2 file system",
            },
            {
              name: "show",
              description:
                "Show properties of a directory in ADLS Gen2 file system",
            },
            {
              name: "upload",
              description:
                "Upload files or subdirectories to a directory in ADLS Gen2 file system",
            },
          ],
        },
        {
          name: "exists",
          description:
            "Check for the existence of a file system in ADLS Gen2 account",
        },
        {
          name: "file",
          description: "Manage files in Azure Data Lake Storage Gen2 account",
          subcommands: [
            {
              name: "append",
              description: "Append content to a file in ADLS Gen2 file system",
            },
            {
              name: "create",
              description: "Create a new file in ADLS Gen2 file system",
            },
            {
              name: "delete",
              description: "Delete a file in ADLS Gen2 file system",
            },
            {
              name: "download",
              description:
                "Download a file from the specified path in ADLS Gen2 file system",
            },
            {
              name: "exists",
              description:
                "Check for the existence of a file in ADLS Gen2 file system",
            },
            {
              name: "list",
              description:
                "List files and directories in ADLS Gen2 file system",
            },
            {
              name: "metadata",
              description: "Manage the metadata for file in file system",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Return all user-defined metadata for the specified file",
                },
                {
                  name: "update",
                  description:
                    "Sets one or more user-defined name-value pairs for the specified file system",
                },
              ],
            },
            { name: "move", description: "Move a file in ADLS Gen2 Account" },
            {
              name: "show",
              description: "Show properties of file in ADLS Gen2 file system",
            },
            {
              name: "upload",
              description:
                "Upload a file to a file path in ADLS Gen2 file system",
            },
          ],
        },
        {
          name: "generate-sas",
          description:
            "Generate a SAS token for file system in ADLS Gen2 account",
        },
        { name: "list", description: "List file systems in ADLS Gen2 account" },
        {
          name: "list-deleted-path",
          description:
            "List the deleted (file or directory) paths under the specified file system",
        },
        {
          name: "metadata",
          description: "Manage the metadata for file system",
          subcommands: [
            {
              name: "show",
              description:
                "Return all user-defined metadata for the specified file system",
            },
            {
              name: "update",
              description:
                "Sets one or more user-defined name-value pairs for the specified file system",
            },
          ],
        },
        {
          name: "service-properties",
          description: "Manage storage datalake service properties",
          subcommands: [
            {
              name: "show",
              description:
                "Show the properties of a storage account's datalake service, including Azure Storage Analytics",
            },
            {
              name: "update",
              description:
                "Update the properties of a storage account's datalake service, including Azure Storage Analytics",
            },
          ],
        },
        {
          name: "show",
          description: "Show properties of file system in ADLS Gen2 account",
        },
        { name: "undelete-path", description: "Restore soft-deleted path" },
      ],
    },
    {
      name: "logging",
      description: "Manage storage service logging information",
      subcommands: [
        { name: "off", description: "Turn off logging for a storage account" },
        {
          name: "show",
          description: "Show logging settings for a storage account",
        },
        {
          name: "update",
          description: "Update logging settings for a storage account",
        },
      ],
    },
    {
      name: "message",
      description: "Manage queue storage messages",
      subcommands: [
        {
          name: "clear",
          description: "Deletes all messages from the specified queue",
        },
        { name: "delete", description: "Deletes the specified message" },
        {
          name: "get",
          description:
            "Retrieves one or more messages from the front of the queue",
        },
        {
          name: "peek",
          description:
            "Retrieves one or more messages from the front of the queue, but does not alter the visibility of the message",
        },
        {
          name: "put",
          description: "Adds a new message to the back of the message queue",
        },
        {
          name: "update",
          description: "Updates the visibility timeout of a message",
        },
      ],
    },
    {
      name: "metrics",
      description: "Manage storage service metrics",
      subcommands: [
        {
          name: "show",
          description: "Show metrics settings for a storage account",
        },
        {
          name: "update",
          description: "Update metrics settings for a storage account",
        },
      ],
    },
    {
      name: "queue",
      description: "Manage storage queues",
      subcommands: [
        {
          name: "create",
          description: "Creates a queue under the given account",
        },
        {
          name: "delete",
          description:
            "Deletes the specified queue and any messages it contains",
        },
        {
          name: "exists",
          description: "Returns a boolean indicating whether the queue exists",
        },
        {
          name: "generate-sas",
          description: "Generates a shared access signature for the queue",
        },
        { name: "list", description: "List queues in a storage account" },
        {
          name: "metadata",
          description: "Manage the metadata for a storage queue",
          subcommands: [
            {
              name: "show",
              description:
                "Retrieves user-defined metadata and queue properties on the specified queue",
            },
            {
              name: "update",
              description: "Sets user-defined metadata on the specified queue",
            },
          ],
        },
        {
          name: "policy",
          description: "Manage shared access policies for a storage queue",
          subcommands: [
            {
              name: "create",
              description:
                "Create a stored access policy on the containing object",
            },
            {
              name: "delete",
              description:
                "Delete a stored access policy on a containing object",
            },
            {
              name: "list",
              description: "List stored access policies on a containing object",
            },
            {
              name: "show",
              description: "Show a stored access policy on a containing object",
            },
            {
              name: "update",
              description: "Set a stored access policy on a containing object",
            },
          ],
        },
        {
          name: "stats",
          description:
            "Retrieves statistics related to replication for the Queue service",
        },
      ],
    },
    { name: "remove", description: "Delete blobs or files from Azure Storage" },
    {
      name: "share",
      description: "Manage file shares",
      subcommands: [
        {
          name: "create",
          description: "Creates a new share under the specified account",
        },
        {
          name: "delete",
          description: "Marks the specified share for deletion",
        },
        {
          name: "exists",
          description: "Check for the existence of a file share",
        },
        {
          name: "generate-sas",
          description: "Generates a shared access signature for the share",
        },
        {
          name: "list",
          description: "List the file shares in a storage account",
        },
        {
          name: "metadata",
          description: "Manage the metadata of a file share",
          subcommands: [
            {
              name: "show",
              description:
                "Returns all user-defined metadata for the specified share",
            },
            {
              name: "update",
              description:
                "Sets one or more user-defined name-value pairs for the specified share",
            },
          ],
        },
        {
          name: "policy",
          description: "Manage shared access policies of a storage file share",
          subcommands: [
            {
              name: "create",
              description:
                "Create a stored access policy on the containing object",
            },
            {
              name: "delete",
              description:
                "Delete a stored access policy on a containing object",
            },
            {
              name: "list",
              description: "List stored access policies on a containing object",
            },
            {
              name: "show",
              description: "Show a stored access policy on a containing object",
            },
            {
              name: "update",
              description: "Set a stored access policy on a containing object",
            },
          ],
        },
        {
          name: "show",
          description:
            "Returns all user-defined metadata and system properties for the specified share",
        },
        {
          name: "snapshot",
          description:
            "Creates a snapshot of an existing share under the specified account",
        },
        {
          name: "stats",
          description:
            "Gets the approximate size of the data stored on the share, rounded up to the nearest gigabyte",
        },
        {
          name: "update",
          description:
            "Sets service-defined properties for the specified share",
        },
        { name: "url", description: "Create a URI to access a file share" },
      ],
    },
    {
      name: "share-rm",
      description:
        "Manage Azure file shares using the Microsoft.Storage resource provider",
      subcommands: [
        {
          name: "create",
          description:
            "Create a new Azure file share under the specified storage account",
        },
        {
          name: "delete",
          description:
            "Delete the specified Azure file share or share snapshot",
        },
        {
          name: "exists",
          description: "Check for the existence of an Azure file share",
        },
        {
          name: "list",
          description:
            "List the Azure file shares under the specified storage account",
        },
        {
          name: "restore",
          description:
            "Restore a file share within a valid retention days if share soft delete is enabled",
        },
        {
          name: "show",
          description:
            "Show the properties for a specified Azure file share or share snapshot",
        },
        {
          name: "snapshot",
          description:
            "Create a snapshot of an existing share under the specified account",
        },
        {
          name: "stats",
          description: "Get the usage bytes of the data stored on the share",
        },
        {
          name: "update",
          description: "Update the properties for an Azure file share",
        },
      ],
    },
    {
      name: "table",
      description: "Manage NoSQL key-value storage",
      subcommands: [
        {
          name: "create",
          description: "Creates a new table in the storage account",
        },
        {
          name: "delete",
          description: "Deletes the specified table and any data it contains",
        },
        {
          name: "exists",
          description: "Returns a boolean indicating whether the table exists",
        },
        {
          name: "generate-sas",
          description: "Generates a shared access signature for the table",
        },
        { name: "list", description: "List tables in a storage account" },
        {
          name: "policy",
          description: "Manage shared access policies of a storage table",
          subcommands: [
            {
              name: "create",
              description:
                "Create a stored access policy on the containing object",
            },
            {
              name: "delete",
              description:
                "Delete a stored access policy on a containing object",
            },
            {
              name: "list",
              description: "List stored access policies on a containing object",
            },
            {
              name: "show",
              description: "Show a stored access policy on a containing object",
            },
            {
              name: "update",
              description: "Set a stored access policy on a containing object",
            },
          ],
        },
        {
          name: "stats",
          description:
            "Retrieves statistics related to replication for the Table service",
        },
      ],
    },
  ],
};

export default completionSpec;
