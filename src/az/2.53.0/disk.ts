const completion: Fig.Spec = {
  name: "disk",
  description:
    "Manage Azure Managed Disks.\n\n\t\tAzure Virtual Machines use disks as a place to store an operating system, applications, and data. All Azure virtual machines have at least two disks: An operating system disk, and a temporary disk. The operating system disk is created from an image, and both the operating system disk and the image are actually virtual hard disks (VHDs) stored in an Azure storage account. Virtual machines also can have one or more data disks, that are also stored as VHDs.\nAzure Unmanaged Data Disks have a maximum size of 4095 GB. To use disks larger than 4095 GB use Azure Managed Disks",
  subcommands: [
    {
      name: "create",
      description: "Create a managed disk",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the managed disk",
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
          name: "--accelerated-network",
          description:
            "Customers can set on Managed Disks or Snapshots to enable the accelerated networking if the OS disk image support",
          args: { name: "accelerated-network", suggestions: ["false", "true"] },
        },
        {
          name: "--architecture",
          description: "CPU architecture",
          args: { name: "architecture", suggestions: ["Arm64", "x64"] },
        },
        {
          name: "--data-access-auth-mode",
          description:
            "Specify the auth mode when exporting or uploading to a disk or snapshot",
          args: {
            name: "data-access-auth-mode",
            suggestions: ["AzureActiveDirectory", "None"],
          },
        },
        {
          name: "--disk-access",
          description:
            "Name or ID of the disk access resource for using private endpoints on disks",
          args: { name: "disk-access" },
        },
        {
          name: "--disk-encryption-set",
          description:
            "Name or ID of disk encryption set that is used to encrypt the disk",
          args: { name: "disk-encryption-set" },
        },
        {
          name: "--disk-iops-read-only",
          description:
            "The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes",
          args: { name: "disk-iops-read-only" },
        },
        {
          name: "--disk-iops-read-write",
          description:
            "The number of IOPS allowed for this disk. Only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes",
          args: { name: "disk-iops-read-write" },
        },
        {
          name: "--disk-mbps-read-only",
          description:
            "The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10",
          args: { name: "disk-mbps-read-only" },
        },
        {
          name: "--disk-mbps-read-write",
          description:
            "The bandwidth allowed for this disk. Only settable for UltraSSD disks. MBps means millions of bytes per second with ISO notation of powers of 10",
          args: { name: "disk-mbps-read-write" },
        },
        {
          name: "--edge-zone",
          description: "The name of edge zone",
          args: { name: "edge-zone" },
        },
        {
          name: "--enable-bursting",
          description:
            "Enable on-demand bursting beyond the provisioned performance target of the disk. On-demand bursting is disabled by default, and it does not apply to Ultra disks",
          args: { name: "enable-bursting", suggestions: ["false", "true"] },
        },
        {
          name: "--encryption-type",
          description:
            "Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest",
          args: {
            name: "encryption-type",
            suggestions: [
              "EncryptionAtRestWithCustomerKey",
              "EncryptionAtRestWithPlatformAndCustomerKeys",
              "EncryptionAtRestWithPlatformKey",
            ],
          },
        },
        {
          name: "--gallery-image-reference",
          description:
            "ID of the Compute, Shared or Community Gallery image version from which to create a disk. For details about valid format, please refer to the help sample",
          args: { name: "gallery-image-reference" },
        },
        {
          name: "--gallery-image-reference-lun",
          description:
            "If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null",
          args: { name: "gallery-image-reference-lun" },
        },
        {
          name: "--hyper-v-generation",
          description:
            "The hypervisor generation of the Virtual Machine. Applicable to OS disks only",
          args: { name: "hyper-v-generation", suggestions: ["V1", "V2"] },
        },
        {
          name: "--image-reference",
          description:
            "ID or URN (publisher:offer:sku:version) of the image from which to create a disk",
          args: { name: "image-reference" },
        },
        {
          name: "--image-reference-lun",
          description:
            "If the disk is created from an image's data disk, this is an index that indicates which of the data disks in the image to use. For OS disks, this field is null",
          args: { name: "image-reference-lun" },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>. If location is not specified and no default location specified, location will be automatically set as same as the resource group",
          args: { name: "location" },
        },
        {
          name: "--logical-sector-size",
          description:
            "Logical sector size in bytes for Ultra disks. Supported values are 512 ad 4096. 4096 is the default",
          args: { name: "logical-sector-size" },
        },
        {
          name: "--max-shares",
          description:
            "The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time",
          args: { name: "max-shares" },
        },
        {
          name: "--network-access-policy",
          description: "Policy for accessing the disk via network",
          args: {
            name: "network-access-policy",
            suggestions: ["AllowAll", "AllowPrivate", "DenyAll"],
          },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--os-type",
          description: "The Operating System type of the Disk",
          args: { name: "os-type", suggestions: ["Linux", "Windows"] },
        },
        {
          name: "--performance-plus",
          description:
            "Set this flag to true to get a boost on the performance target of the disk deployed. This flag can only be set on disk creation time and cannot be disabled after enabled",
          args: { name: "performance-plus", suggestions: ["false", "true"] },
        },
        {
          name: "--public-network-access",
          description:
            "Customers can set on Managed Disks or Snapshots to control the export policy on the disk",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--secure-vm-disk-encryption-set",
          description:
            "Name or ID of disk encryption set created with ConfidentialVmEncryptedWithCustomerKey encryption type",
          args: { name: "secure-vm-disk-encryption-set" },
        },
        {
          name: "--security-data-uri",
          description:
            "Please specify the blob URI of VHD to be imported into VM guest state",
          args: { name: "security-data-uri" },
        },
        {
          name: "--security-type",
          description:
            "The security type of the VM. Applicable for OS disks only",
          args: {
            name: "security-type",
            suggestions: [
              "ConfidentialVM_DiskEncryptedWithCustomerKey",
              "ConfidentialVM_DiskEncryptedWithPlatformKey",
              "ConfidentialVM_VMGuestStateOnlyEncryptedWithPlatformKey",
              "Standard",
              "TrustedLaunch",
            ],
          },
        },
        {
          name: ["--size-gb", "-z"],
          description:
            "Size in GB. Max size: 4095 GB (certain preview disks can be larger)",
          args: { name: "size-gb" },
        },
        {
          name: "--sku",
          description: "Underlying storage SKU",
          args: {
            name: "sku",
            suggestions: [
              "PremiumV2_LRS",
              "Premium_LRS",
              "Premium_ZRS",
              "StandardSSD_LRS",
              "StandardSSD_ZRS",
              "Standard_LRS",
              "UltraSSD_LRS",
            ],
          },
        },
        {
          name: "--source",
          description:
            "Source to create the disk/snapshot from, including unmanaged blob uri, managed disk id or name, or snapshot id or name",
          args: { name: "source" },
        },
        {
          name: "--source-storage-account-id",
          description: "Used when source blob is in a different subscription",
          args: { name: "source-storage-account-id" },
        },
        {
          name: "--support-hibernation",
          description: "Indicate the OS on a disk supports hibernation",
          args: { name: "support-hibernation", suggestions: ["false", "true"] },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--tier",
          description:
            "Performance tier of the disk (e.g, P4, S10) as described here: https://azure.microsoft.com/pricing/details/managed-disks/. Does not apply to Ultra disks",
          args: { name: "tier" },
        },
        {
          name: "--upload-size-bytes",
          description:
            "The size (in bytes) of the contents of the upload including the VHD footer. Min value: 20972032. Max value: 35183298347520. This parameter is required if --upload-type is specified",
          args: { name: "upload-size-bytes" },
        },
        {
          name: "--upload-type",
          description:
            "Create the disk for upload scenario. 'Upload' is for Standard disk only upload. 'UploadWithSecurityData' is for OS Disk upload along with VM Guest State. Please note the 'UploadWithSecurityData' is not valid for data disk upload, it only to be used for OS Disk upload at present",
          args: {
            name: "upload-type",
            suggestions: ["Upload", "UploadWithSecurityData"],
          },
        },
        {
          name: "--zone",
          description: "Availability zone into which to provision the resource",
          args: { name: "zone", suggestions: ["1", "2", "3"] },
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a managed disk",
      options: [
        {
          name: ["--disk-name", "--name", "-n"],
          description:
            "The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters",
          args: { name: "disk-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
          args: {
            name: "no-wait",
            suggestions: [
              "0",
              "1",
              "f",
              "false",
              "n",
              "no",
              "t",
              "true",
              "y",
              "yes",
            ],
          },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "grant-access",
      description: "Grant a resource access to a managed disk",
      options: [
        {
          name: "--duration-in-seconds",
          description: "Time duration in seconds until the SAS access expires",
          args: { name: "duration-in-seconds" },
          isRequired: true,
        },
        {
          name: "--access-level",
          description: "Access level",
          args: { name: "access-level", suggestions: ["Read", "Write"] },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the managed disk",
          args: { name: "name" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: ["--secure-vm-guest-state-sas", "-s"],
          description:
            "Get SAS on managed disk with VM guest state. It will be used by default when the create option of disk is 'secureOSUpload'",
          args: { name: "secure-vm-guest-state-sas" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "list",
      description: "List managed disks",
      options: [
        {
          name: "--max-items",
          description:
            "Total number of items to return in the command's output. If the total number of items available is more than the value specified, a token is provided in the command's output. To resume pagination, provide the token value in --next-token argument of a subsequent command",
          args: { name: "max-items" },
        },
        {
          name: "--next-token",
          description:
            "Token to specify where to start paginating. This is the token value from a previously truncated response",
          args: { name: "next-token" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
      ],
    },
    {
      name: "revoke-access",
      description: "Revoke a resource's read access to a managed disk",
      options: [
        {
          name: ["--disk-name", "--name", "-n"],
          description:
            "The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters",
          args: { name: "disk-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
          args: {
            name: "no-wait",
            suggestions: [
              "0",
              "1",
              "f",
              "false",
              "n",
              "no",
              "t",
              "true",
              "y",
              "yes",
            ],
          },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "show",
      description: "Get information about a disk",
      options: [
        {
          name: ["--disk-name", "--name", "-n"],
          description:
            "The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters",
          args: { name: "disk-name" },
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "update",
      description: "Update a managed disk",
      options: [
        {
          name: "--accelerated-network",
          description:
            "Customers can set on Managed Disks or Snapshots to enable the accelerated networking if the OS disk image support",
          args: { name: "accelerated-network", suggestions: ["false", "true"] },
        },
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: "--architecture",
          description: "CPU architecture",
          args: { name: "architecture", suggestions: ["Arm64", "x64"] },
        },
        {
          name: "--data-access-auth-mode",
          description:
            "Specify the auth mode when exporting or uploading to a disk or snapshot",
          args: {
            name: "data-access-auth-mode",
            suggestions: ["AzureActiveDirectory", "None"],
          },
        },
        {
          name: "--disk-access",
          description:
            "Name or ID of the disk access resource for using private endpoints on disks",
          args: { name: "disk-access" },
        },
        {
          name: "--disk-encryption-set",
          description:
            "Name or ID of disk encryption set that is used to encrypt the disk",
          args: { name: "disk-encryption-set" },
        },
        {
          name: "--disk-iops-read-only",
          description:
            "The total number of IOPS that will be allowed across all VMs mounting the shared disk as ReadOnly. One operation can transfer between 4k and 256k bytes",
          args: { name: "disk-iops-read-only" },
        },
        {
          name: "--disk-iops-read-write",
          description:
            "The number of IOPS allowed for this disk. Only settable for UltraSSD disks. One operation can transfer between 4k and 256k bytes",
          args: { name: "disk-iops-read-write" },
        },
        {
          name: "--disk-mbps-read-only",
          description:
            "The total throughput (MBps) that will be allowed across all VMs mounting the shared disk as ReadOnly. MBps means millions of bytes per second - MB here uses the ISO notation, of powers of 10",
          args: { name: "disk-mbps-read-only" },
        },
        {
          name: "--disk-mbps-read-write",
          description:
            "The bandwidth allowed for this disk. Only settable for UltraSSD disks. MBps means millions of bytes per second with ISO notation of powers of 10",
          args: { name: "disk-mbps-read-write" },
        },
        {
          name: "--enable-bursting",
          description:
            "Enable on-demand bursting beyond the provisioned performance target of the disk. On-demand bursting is disabled by default, and it does not apply to Ultra disks",
          args: { name: "enable-bursting", suggestions: ["false", "true"] },
        },
        {
          name: "--encryption-type",
          description:
            "Encryption type. EncryptionAtRestWithPlatformKey: Disk is encrypted with XStore managed key at rest. It is the default encryption type. EncryptionAtRestWithCustomerKey: Disk is encrypted with Customer managed key at rest",
          args: {
            name: "encryption-type",
            suggestions: [
              "EncryptionAtRestWithCustomerKey",
              "EncryptionAtRestWithPlatformAndCustomerKeys",
              "EncryptionAtRestWithPlatformKey",
            ],
          },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--max-shares",
          description:
            "The maximum number of VMs that can attach to the disk at the same time. Value greater than one indicates a disk that can be mounted on multiple VMs at the same time",
          args: { name: "max-shares" },
        },
        {
          name: ["--name", "-n"],
          description: "The name of the managed disk",
          args: { name: "name" },
        },
        {
          name: "--network-access-policy",
          description: "Policy for accessing the disk via network",
          args: {
            name: "network-access-policy",
            suggestions: ["AllowAll", "AllowPrivate", "DenyAll"],
          },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--public-network-access",
          description:
            "Customers can set on Managed Disks or Snapshots to control the export policy on the disk",
          args: {
            name: "public-network-access",
            suggestions: ["Disabled", "Enabled"],
          },
        },
        {
          name: "--remove",
          description:
            "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
          args: { name: "remove" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
          args: { name: "set" },
        },
        {
          name: ["--size-gb", "-z"],
          description:
            "Size in GB. Max size: 4095 GB (certain preview disks can be larger)",
          args: { name: "size-gb" },
        },
        {
          name: "--sku",
          description: "Underlying storage SKU",
          args: {
            name: "sku",
            suggestions: [
              "PremiumV2_LRS",
              "Premium_LRS",
              "Premium_ZRS",
              "StandardSSD_LRS",
              "StandardSSD_ZRS",
              "Standard_LRS",
              "UltraSSD_LRS",
            ],
          },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
      ],
    },
    {
      name: "wait",
      description: "Place the CLI in a waiting state until a condition is met",
      options: [
        {
          name: "--created",
          description:
            "Wait until created with 'provisioningState' at 'Succeeded'",
        },
        {
          name: "--custom",
          description:
            "Wait until the condition satisfies a custom JMESPath query. E.g. provisioningState!='InProgress', instanceView.statuses[?code=='PowerState/running']",
          args: { name: "custom" },
        },
        { name: "--deleted", description: "Wait until deleted" },
        {
          name: ["--disk-name", "--name", "-n"],
          description:
            "The name of the managed disk that is being created. The name can't be changed after the disk is created. Supported characters for the name are a-z, A-Z, 0-9, _ and -. The maximum name length is 80 characters",
          args: { name: "disk-name" },
        },
        { name: "--exists", description: "Wait until the resource exists" },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
          args: { name: "resource-group" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: "--timeout",
          description: "Maximum wait in seconds",
          args: { name: "timeout" },
        },
        {
          name: "--updated",
          description:
            "Wait until updated with provisioningState at 'Succeeded'",
        },
      ],
    },
  ],
};

export default completion;
