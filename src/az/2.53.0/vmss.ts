const completion: Fig.Spec = {
  name: "vmss",
  description:
    "Manage groupings of virtual machines in an Azure Virtual Machine Scale Set (VMSS)",
  subcommands: [
    {
      name: "application",
      description: "Manage applications for VM scale set",
      subcommands: [
        {
          name: "list",
          description: "List applications for VMSS",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: "set",
          description: "Set applications for VMSS",
          options: [
            {
              name: "--app-version-ids",
              description:
                "Space-separated application version ids to set to VM",
              args: { name: "app-version-ids" },
              isRequired: true,
            },
            {
              name: "--app-config-overrides",
              description:
                "Space-separated application configuration overrides for each application version ids. It should have the same number of items as the application version ids. Null is available for a application which does not have a configuration override",
              args: { name: "app-config-overrides" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "name" },
            },
            {
              name: "--order-applications",
              description:
                "Whether to set order index at each gallery application. If specified, the first app version id gets specified an order = 1, then the next one 2, and so on. This parameter is meant to be used when the VMApplications specified by app version ids must be installed in a particular order; the lowest order is installed first",
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
              name: "--treat-deployment-as-failure",
              description:
                "Space-separated list of true or false corresponding to the application version ids. If set to true, failure to install or update gallery application version operation will fail this operation",
              args: { name: "treat-deployment-as-failure" },
            },
          ],
        },
      ],
    },
    {
      name: "create",
      description: "Create an Azure Virtual Machine Scale Set",
      options: [
        {
          name: ["--name", "-n"],
          description: "Name of the virtual machine scale set",
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
          name: "--accelerated-networking",
          description:
            "Enable accelerated networking. Unless specified, CLI will enable it based on machine image and size",
          args: {
            name: "accelerated-networking",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--accept-term",
          description: "Accept the license agreement and privacy statement",
          args: { name: "accept-term" },
        },
        {
          name: "--admin-password",
          description:
            "Password for the VM if authentication type is 'Password'",
          args: { name: "admin-password" },
        },
        {
          name: "--admin-username",
          description:
            "Username for the VM. Default value is current username of OS. If the default value is system reserved, then default value will be set to azureuser. Please refer to https://docs.microsoft.com/rest/api/compute/virtualmachines/createorupdate#osprofile to get a full list of reserved values",
          args: { name: "admin-username" },
        },
        {
          name: "--app-gateway",
          description:
            'Name to use when creating a new application gateway (default) or referencing an existing one. Can also reference an existing application gateway by ID or specify "" for none',
          args: { name: "app-gateway" },
        },
        {
          name: "--app-gateway-capacity",
          description:
            "The number of instances to use when creating a new application gateway",
          args: { name: "app-gateway-capacity" },
        },
        {
          name: "--app-gateway-sku",
          description: "SKU when creating a new application gateway",
          args: { name: "app-gateway-sku" },
        },
        {
          name: "--app-gateway-subnet-address-prefix",
          description:
            "The subnet IP address prefix to use when creating a new application gateway in CIDR format",
          args: { name: "app-gateway-subnet-address-prefix" },
        },
        {
          name: "--asgs",
          description:
            "Space-separated list of existing application security groups to associate with the VM",
          args: { name: "asgs" },
        },
        {
          name: "--assign-identity",
          description:
            "Accept system or user assigned identities separated by spaces. Use '[system]' to refer system assigned identity, or a resource id to refer user assigned identity. Check out help for more examples",
          args: { name: "assign-identity" },
        },
        {
          name: "--authentication-type",
          description:
            'Type of authentication to use with the VM. Defaults to password for Windows and SSH public key for Linux. "all" enables both ssh and password authentication',
          args: {
            name: "authentication-type",
            suggestions: ["all", "password", "ssh"],
          },
        },
        {
          name: "--automatic-repairs-action",
          description:
            "Type of repair action that will be used for repairing unhealthy virtual machines in the scale set",
          args: {
            name: "automatic-repairs-action",
            suggestions: ["Reimage", "Replace", "Restart"],
          },
        },
        {
          name: "--automatic-repairs-grace-period",
          description:
            "The amount of time (in minutes, between 30 and 90) for which automatic repairs are suspended due to a state change on VM",
          args: { name: "automatic-repairs-grace-period" },
        },
        {
          name: "--backend-pool-name",
          description:
            "Name to use for the backend pool when creating a new load balancer or application gateway",
          args: { name: "backend-pool-name" },
        },
        {
          name: "--backend-port",
          description:
            "When creating a new load balancer, backend port to open with NAT rules (Defaults to 22 on Linux and 3389 on Windows). When creating an application gateway, the backend port to use for the backend HTTP settings",
          args: { name: "backend-port" },
        },
        {
          name: ["--capacity-reservation-group", "--crg"],
          description:
            'The ID or name of the capacity reservation group that is used to allocate. Pass in "None" to disassociate the capacity reservation group. Please note that if you want to delete a VM/VMSS that has been associated with capacity reservation group, you need to disassociate the capacity reservation group first',
          args: { name: "capacity-reservation-group" },
        },
        {
          name: "--computer-name-prefix",
          description:
            "Computer name prefix for all of the virtual machines in the scale set. Computer name prefixes must be 1 to 15 characters long",
          args: { name: "computer-name-prefix" },
        },
        {
          name: "--custom-data",
          description:
            "Custom init script file or text (cloud-init, cloud-config, etc..)",
          args: { name: "custom-data" },
        },
        {
          name: "--data-disk-caching",
          description:
            "Storage caching type for data disk(s), including 'None', 'ReadOnly', 'ReadWrite', etc. Use a singular value to apply on all disks, or use <lun>=<vaule1> <lun>=<value2> to configure individual disk",
          args: { name: "data-disk-caching" },
        },
        {
          name: "--data-disk-delete-option",
          description:
            "Specify whether data disk should be deleted or detached upon VMSS Flex deletion (This feature is only for VMSS with flexible orchestration mode)",
          args: {
            name: "data-disk-delete-option",
            suggestions: ["Delete", "Detach"],
          },
        },
        {
          name: "--data-disk-encryption-sets",
          description:
            "Names or IDs (space delimited) of disk encryption sets for data disks",
          args: { name: "data-disk-encryption-sets" },
        },
        {
          name: "--data-disk-iops",
          description:
            "Specify the Read-Write IOPS (space delimited) for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB",
          args: { name: "data-disk-iops" },
        },
        {
          name: "--data-disk-mbps",
          description:
            "Specify the bandwidth in MB per second (space delimited) for the managed disk. Should be used only when StorageAccountType is UltraSSD_LRS. If not specified, a default value would be assigned based on diskSizeGB",
          args: { name: "data-disk-mbps" },
        },
        {
          name: "--data-disk-sizes-gb",
          description:
            "Space-separated empty managed data disk sizes in GB to create",
          args: { name: "data-disk-sizes-gb" },
        },
        {
          name: "--disable-integrity-monitoring",
          description:
            "Disable the default behavior of installing guest attestation extension and enabling System Assigned Identity for Trusted Launch enabled VMs and VMSS",
        },
        {
          name: "--disable-integrity-monitoring-autoupgrade",
          description:
            "Disable auto upgrade of guest attestation extension for Trusted Launch enabled VMs and VMSS",
        },
        {
          name: "--disable-overprovision",
          description:
            "Overprovision option (see https://azure.microsoft.com/documentation/articles/virtual-machine-scale-sets-overview/ for details)",
          args: { name: "disable-overprovision" },
        },
        {
          name: "--disk-controller-type",
          description:
            "Specify the disk controller type configured for the VM or VMSS",
          args: { name: "disk-controller-type", suggestions: ["NVMe", "SCSI"] },
        },
        {
          name: "--dns-servers",
          description:
            "Space-separated IP addresses of DNS servers, e.g. 10.0.0.5 10.0.0.6",
          args: { name: "dns-servers" },
        },
        {
          name: "--edge-zone",
          description: "The name of edge zone",
          args: { name: "edge-zone" },
        },
        {
          name: "--enable-agent",
          description:
            "Indicate whether virtual machine agent should be provisioned on the virtual machine. When this property is not specified, default behavior is to set it to true. This will ensure that VM Agent is installed on the VM so that extensions can be added to the VM later",
          args: { name: "enable-agent", suggestions: ["false", "true"] },
        },
        {
          name: "--enable-auto-update",
          description:
            "Indicate whether Automatic Updates is enabled for the Windows virtual machine",
          args: { name: "enable-auto-update", suggestions: ["false", "true"] },
        },
        {
          name: "--enable-cross-zone-upgrade",
          description:
            "Set this Boolean property will allow VMSS to ignore AZ boundaries when constructing upgrade batches, and only consider Update Domain and maxBatchInstancePercent to determine the batch size",
          args: {
            name: "enable-cross-zone-upgrade",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-hibernation",
          description:
            "The flag that enable or disable hibernation capability on the VMSS",
          args: { name: "enable-hibernation", suggestions: ["false", "true"] },
        },
        {
          name: "--enable-osimage-notification",
          description:
            "Specify whether the OS Image Scheduled event is enabled or disabled",
          args: {
            name: "enable-osimage-notification",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-secure-boot",
          description: "Enable secure boot",
          args: { name: "enable-secure-boot", suggestions: ["false", "true"] },
        },
        {
          name: "--enable-spot-restore",
          description:
            "Enable the Spot-Try-Restore feature where evicted VMSS SPOT instances will be tried to be restored opportunistically based on capacity availability and pricing constraints",
          args: { name: "enable-spot-restore", suggestions: ["false", "true"] },
        },
        {
          name: "--enable-vtpm",
          description: "Enable vTPM",
          args: { name: "enable-vtpm", suggestions: ["false", "true"] },
        },
        {
          name: "--encryption-at-host",
          description:
            "Enable Host Encryption for the VM or VMSS. This will enable the encryption for all the disks including Resource/Temp disk at host itself",
          args: { name: "encryption-at-host", suggestions: ["false", "true"] },
        },
        {
          name: "--ephemeral-os-disk",
          description:
            "Allows you to create an OS disk directly on the host node, providing local disk performance and faster VM/VMSS reimage time",
          args: { name: "ephemeral-os-disk", suggestions: ["false", "true"] },
        },
        {
          name: ["--ephemeral-os-disk-placement", "--ephemeral-placement"],
          description:
            "Only applicable when used with --ephemeral-os-disk. Allows you to choose the Ephemeral OS disk provisioning location",
          args: {
            name: "ephemeral-os-disk-placement",
            suggestions: ["CacheDisk", "ResourceDisk"],
          },
        },
        {
          name: "--eviction-policy",
          description:
            "The eviction policy for virtual machines in a Spot priority scale set. Default eviction policy is Deallocate for a Spot priority scale set",
          args: {
            name: "eviction-policy",
            suggestions: ["Deallocate", "Delete"],
          },
        },
        {
          name: "--generate-ssh-keys",
          description:
            "Generate SSH public and private key files if missing. The keys will be stored in the ~/.ssh directory",
        },
        {
          name: "--health-probe",
          description:
            "Probe name from the existing load balancer, mainly used for rolling upgrade or automatic repairs",
          args: { name: "health-probe" },
        },
        {
          name: "--host-group",
          description:
            "Name or ID of dedicated host group that the virtual machine scale set resides in",
          args: { name: "host-group" },
        },
        {
          name: "--image",
          description:
            'The name of the operating system image as a URN alias, URN, custom image name or ID, or VHD blob URI. In addition, it also supports shared gallery image. Please use the image alias including the version of the distribution you want to use. For example: please use Debian11 instead of Debian.\' This parameter is required unless using --attach-os-disk. Valid URN format: "Publisher:Offer:Sku:Version". For more information, see https://docs.microsoft.com/azure/virtual-machines/linux/cli-ps-findimage. value from: az sig image-version show-shared, az vm image list, az vm image show',
          args: { name: "image" },
        },
        {
          name: "--instance-count",
          description: "Number of VMs in the scale set",
          args: { name: "instance-count" },
        },
        {
          name: ["--load-balancer", "--lb"],
          description:
            'Name to use when creating a new load balancer (default) or referencing an existing one. Can also reference an existing load balancer by ID or specify "" for none',
          args: { name: "load-balancer" },
        },
        {
          name: ["--lb-nat-rule-name", "--nat-rule-name"],
          description:
            "Name to use for the NAT rule v2 when creating a new load balancer. (NAT rule V2 is used to replace NAT pool)",
          args: { name: "lb-nat-rule-name" },
        },
        {
          name: "--lb-sku",
          description:
            "Sku of the Load Balancer to create. Default to 'Standard' when single placement group is turned off; otherwise, default to 'Basic'. The public IP is supported to be created on edge zone only when it is 'Standard'",
          args: {
            name: "lb-sku",
            suggestions: ["Basic", "Gateway", "Standard"],
          },
        },
        {
          name: "--license-type",
          description:
            "Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multi-tenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs",
          args: {
            name: "license-type",
            suggestions: [
              "None",
              "RHEL_BASE",
              "RHEL_BASESAPAPPS",
              "RHEL_BASESAPHA",
              "RHEL_BYOS",
              "RHEL_ELS_6",
              "RHEL_EUS",
              "RHEL_SAPAPPS",
              "RHEL_SAPHA",
              "SLES",
              "SLES_BYOS",
              "SLES_HPC",
              "SLES_SAP",
              "SLES_STANDARD",
              "UBUNTU",
              "UBUNTU_PRO",
              "Windows_Client",
              "Windows_Server",
            ],
          },
        },
        {
          name: ["--location", "-l"],
          description:
            "Location in which to create VM and related resources. If default location is not configured, will default to the resource group's location",
          args: { name: "location" },
        },
        {
          name: "--max-batch-instance-percent",
          description:
            "The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. Default: 20%",
          args: { name: "max-batch-instance-percent" },
        },
        {
          name: "--max-price",
          description:
            "The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons",
          args: { name: "max-price" },
        },
        {
          name: "--max-surge",
          description:
            "Specify it to create new virtual machines to upgrade the scale set, rather than updating the existing virtual machines",
          args: { name: "max-surge", suggestions: ["false", "true"] },
        },
        {
          name: "--max-unhealthy-instance-percent",
          description:
            "The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy. Default: 20%",
          args: { name: "max-unhealthy-instance-percent" },
        },
        {
          name: "--max-unhealthy-upgraded-instance-percent",
          description:
            "The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. Default: 20%",
          args: { name: "max-unhealthy-upgraded-instance-percent" },
        },
        {
          name: "--network-api-version",
          description:
            "Specify the Microsoft.Network API version used when creating networking resources in the Network Interface Configurations for Virtual Machine Scale Set with orchestration mode 'Flexible'. Default value is 2020-11-01",
          args: { name: "network-api-version" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--nsg",
          description: "Name or ID of an existing Network Security Group",
          args: { name: "nsg" },
        },
        {
          name: "--orchestration-mode",
          description:
            "Choose how virtual machines are managed by the scale set. In Uniform mode, you define a virtual machine model and Azure will generate identical instances based on that model. In Flexible mode, you manually create and add a virtual machine of any configuration to the scale set or generate identical instances based on virtual machine model defined for the scale set",
          args: {
            name: "orchestration-mode",
            suggestions: ["Flexible", "Uniform"],
          },
        },
        {
          name: "--os-disk-caching",
          description:
            "Storage caching type for the VM OS disk. Default: ReadWrite",
          args: {
            name: "os-disk-caching",
            suggestions: ["None", "ReadOnly", "ReadWrite"],
          },
        },
        {
          name: "--os-disk-delete-option",
          description:
            "Specify whether OS disk should be deleted or detached upon VMSS Flex deletion (This feature is only for VMSS with flexible orchestration mode)",
          args: {
            name: "os-disk-delete-option",
            suggestions: ["Delete", "Detach"],
          },
        },
        {
          name: "--os-disk-encryption-set",
          description: "Name or ID of disk encryption set for OS disk",
          args: { name: "os-disk-encryption-set" },
        },
        {
          name: "--os-disk-name",
          description: "The name of the new VM OS disk",
          args: { name: "os-disk-name" },
        },
        {
          name: "--os-disk-secure-vm-disk-encryption-set",
          description:
            "Specify the customer managed disk encryption set resource ID or name for the managed disk that is used for customer managed key encrypted Confidential VM OS disk and VM guest blob",
          args: { name: "os-disk-secure-vm-disk-encryption-set" },
        },
        {
          name: "--os-disk-security-encryption-type",
          description: "Specify the encryption type of the OS managed disk",
          args: {
            name: "os-disk-security-encryption-type",
            suggestions: ["DiskWithVMGuestState", "VMGuestStateOnly"],
          },
        },
        {
          name: "--os-disk-size-gb",
          description: "OS disk size in GB to create",
          args: { name: "os-disk-size-gb" },
        },
        {
          name: "--os-type",
          description:
            "Type of OS installed on a custom VHD. Do not use when specifying an URN or URN alias",
          args: { name: "os-type", suggestions: ["linux", "windows"] },
        },
        {
          name: "--patch-mode",
          description:
            "Mode of in-guest patching to IaaS virtual machine. Allowed values for Windows VM: AutomaticByOS, AutomaticByPlatform, Manual. Allowed values for Linux VM: AutomaticByPlatform, ImageDefault. Manual - You control the application of patches to a virtual machine. You do this by applying patches manually inside the VM. In this mode, automatic updates are disabled; the paramater --enable-auto-update must be false. AutomaticByOS - The virtual machine will automatically be updated by the OS. The parameter --enable-auto-update must be true. AutomaticByPlatform - the virtual machine will automatically updated by the OS. ImageDefault - The virtual machine's default patching configuration is used. The parameter --enable-agent and --enable-auto-update must be true",
          args: {
            name: "patch-mode",
            suggestions: [
              "AutomaticByOS",
              "AutomaticByPlatform",
              "ImageDefault",
              "Manual",
            ],
          },
        },
        {
          name: "--pause-time-between-batches",
          description:
            "The wait time between completing the update for all virtual machines in one batch and starting the next batch. Default: 0 seconds",
          args: { name: "pause-time-between-batches" },
        },
        {
          name: "--plan-name",
          description: "Plan name",
          args: { name: "plan-name" },
        },
        {
          name: "--plan-product",
          description: "Plan product",
          args: { name: "plan-product" },
        },
        {
          name: "--plan-promotion-code",
          description: "Plan promotion code",
          args: { name: "plan-promotion-code" },
        },
        {
          name: "--plan-publisher",
          description: "Plan publisher",
          args: { name: "plan-publisher" },
        },
        {
          name: "--platform-fault-domain-count",
          description:
            "Fault Domain count for each placement group in the availability zone",
          args: { name: "platform-fault-domain-count" },
        },
        {
          name: "--ppg",
          description:
            "The name or ID of the proximity placement group the VMSS should be associated with",
          args: { name: "ppg" },
        },
        {
          name: "--prioritize-unhealthy-instances",
          description:
            "Set this Boolean property will lead to all unhealthy instances in a scale set getting upgraded before any healthy instances",
          args: {
            name: "prioritize-unhealthy-instances",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--priority",
          description:
            "Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular",
          args: { name: "priority", suggestions: ["Low", "Regular", "Spot"] },
        },
        {
          name: "--public-ip-address",
          description:
            'Name of the public IP address when creating one (default) or referencing an existing one. Can also reference an existing public IP by ID or specify "" for None (\'""\' in Azure CLI using PowerShell or --% operator). For Azure CLI using powershell core edition 7.3.4, specify or "" (--public-ip-address or --public-ip-address "")',
          args: { name: "public-ip-address" },
        },
        {
          name: "--public-ip-address-allocation",
          description: "",
          args: {
            name: "public-ip-address-allocation",
            suggestions: ["dynamic", "static"],
          },
        },
        {
          name: "--public-ip-address-dns-name",
          description: "Globally unique DNS name for a newly created public IP",
          args: { name: "public-ip-address-dns-name" },
        },
        {
          name: "--public-ip-per-vm",
          description:
            "Each VM instance will have a public ip. For security, you can use '--nsg' to apply appropriate rules",
        },
        {
          name: "--regular-priority-count",
          description:
            "The base number of regular priority VMs that will be created in this scale set as it scales out. Must be greater than 0",
          args: { name: "regular-priority-count" },
        },
        {
          name: "--regular-priority-percentage",
          description:
            "The percentage of VM instances, after the base regular priority count has been reached, that are expected to use regular priority. Must be between 0 and 100",
          args: { name: "regular-priority-percentage" },
        },
        {
          name: "--role",
          description: "Role name or id the system assigned identity will have",
          args: { name: "role" },
        },
        {
          name: "--scale-in-policy",
          description:
            "Specify the scale-in policy (space delimited) that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in",
          args: {
            name: "scale-in-policy",
            suggestions: ["Default", "NewestVM", "OldestVM"],
          },
        },
        {
          name: "--scope",
          description: "Scope that the system assigned identity can access",
          args: { name: "scope" },
        },
        {
          name: "--secrets",
          description:
            'One or many Key Vault secrets as JSON strings or files via @{path} containing [{ "sourceVault": { "id": "value" }, "vaultCertificates": [{ "certificateUrl": "value", "certificateStore": "cert store name (only on windows)"}] }]',
          args: { name: "secrets" },
        },
        {
          name: "--security-type",
          description: "Specify the security type of the virtual machine",
          args: {
            name: "security-type",
            suggestions: ["ConfidentialVM", "Standard", "TrustedLaunch"],
          },
        },
        {
          name: "--single-placement-group",
          description:
            "Limit the scale set to a single placement group. See https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-placement-groups for details",
          args: {
            name: "single-placement-group",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--specialized",
          description: "Indicate whether the source image is specialized",
          args: { name: "specialized", suggestions: ["false", "true"] },
        },
        {
          name: "--spot-restore-timeout",
          description:
            "Timeout value expressed as an ISO 8601 time duration after which the platform will not try to restore the VMSS SPOT instances",
          args: { name: "spot-restore-timeout" },
        },
        {
          name: "--ssh-dest-key-path",
          description:
            'Destination file path on the VM for the SSH key. If the file already exists, the specified key(s) are appended to the file. Destination path for SSH public keys is currently limited to its default value "/home/username/.ssh/authorized_keys" due to a known issue in Linux provisioning agent',
          args: { name: "ssh-dest-key-path" },
        },
        {
          name: "--ssh-key-values",
          description:
            "Space-separated list of SSH public keys or public key file paths",
          args: { name: "ssh-key-values" },
        },
        {
          name: "--storage-container-name",
          description:
            "Only applicable when used with --use-unmanaged-disk. Name of the storage container for the VM OS disk. Default: vhds",
          args: { name: "storage-container-name" },
        },
        {
          name: "--storage-sku",
          description:
            'The SKU of the storage account with which to persist VM. Use a singular sku that would be applied across all disks, or specify individual disks. Usage: [--storage-sku SKU | --storage-sku ID=SKU ID=SKU ID=SKU...], where each ID is "os" or a 0-indexed lun. Allowed values: Standard_LRS, Premium_LRS, StandardSSD_LRS, UltraSSD_LRS, Premium_ZRS, StandardSSD_ZRS, PremiumV2_LRS',
          args: { name: "storage-sku" },
        },
        {
          name: "--subnet",
          description:
            "The name of the subnet when creating a new VNet or referencing an existing one. Can also reference an existing subnet by ID. If both vnet-name and subnet are omitted, an appropriate VNet and subnet will be selected automatically, or a new one will be created",
          args: { name: "subnet" },
        },
        {
          name: "--subnet-address-prefix",
          description:
            "The subnet IP address prefix to use when creating a new VNet in CIDR format",
          args: { name: "subnet-address-prefix" },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: "--terminate-notification-time",
          description:
            "Length of time (in minutes, between 5 and 15) a notification to be sent to the VM on the instance metadata server till the VM gets deleted",
          args: { name: "terminate-notification-time" },
        },
        {
          name: "--ultra-ssd-enabled",
          description:
            "Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account",
          args: { name: "ultra-ssd-enabled", suggestions: ["false", "true"] },
        },
        {
          name: "--upgrade-policy-mode",
          description: "",
          args: {
            name: "upgrade-policy-mode",
            suggestions: ["Automatic", "Manual", "Rolling"],
          },
        },
        {
          name: "--use-unmanaged-disk",
          description: "Do not use managed disk to persist VM",
        },
        {
          name: "--user-data",
          description:
            "UserData for the virtual machines in the scale set. It can be passed in as file or string",
          args: { name: "user-data" },
        },
        {
          name: "--v-cpus-available",
          description: "Specify the number of vCPUs available",
          args: { name: "v-cpus-available" },
        },
        {
          name: "--v-cpus-per-core",
          description:
            "Specify the ratio of vCPU to physical core. Setting this property to 1 also means that hyper-threading is disabled",
          args: { name: "v-cpus-per-core" },
        },
        {
          name: "--validate",
          description:
            "Generate and validate the ARM template without creating any resources",
        },
        {
          name: "--vm-domain-name",
          description:
            "Domain name of VM instances, once configured, the FQDN is vm<vm-index>.<vm-domain-name>.<..rest..>",
          args: { name: "vm-domain-name" },
        },
        {
          name: "--vm-sku",
          description:
            'Size of VMs in the scale set. Default to "Standard_DS1_v2". See https://azure.microsoft.com/pricing/details/virtual-machines/ for size info',
          args: { name: "vm-sku" },
        },
        {
          name: "--vnet-address-prefix",
          description:
            "The IP address prefix to use when creating a new VNet in CIDR format",
          args: { name: "vnet-address-prefix" },
        },
        {
          name: "--vnet-name",
          description:
            "Name of the virtual network when creating a new one or referencing an existing one",
          args: { name: "vnet-name" },
        },
        {
          name: ["--zones", "-z"],
          description:
            "Space-separated list of availability zones into which to provision the resource",
          args: { name: "zones", suggestions: ["1", "2", "3"] },
        },
      ],
    },
    {
      name: "deallocate",
      description: "Deallocate VMs within a VMSS",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: "--hibernate",
          description:
            "Hibernate a virtual machine from the VM scale set. Available for VMSS with Flexible OrchestrationMode only",
          args: { name: "hibernate", suggestions: ["false", "true"] },
        },
        {
          name: "--instance-ids",
          description:
            "Space-separated list of IDs (ex: 1 2 3 ...) or * for all instances. If not provided, the action will be applied on the scaleset itself",
          args: { name: "instance-ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a VM scale set",
      options: [
        {
          name: "--force-deletion",
          description:
            "Optional parameter to force delete a VM scale set. (Feature in Preview)",
          args: {
            name: "force-deletion",
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
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--vm-scale-set-name", "--name", "-n"],
          description: "The name of the VM scale set",
          args: { name: "vm-scale-set-name" },
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
      name: "delete-instances",
      description: "Delete VMs within a VMSS",
      options: [
        {
          name: "--instance-ids",
          description:
            "Space-separated list of IDs (ex: 1 2 3 ...) or * for all instances",
          args: { name: "instance-ids" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "get-instance-view",
      description: "View an instance of a VMSS",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--instance-id",
          description:
            'A VM instance ID or "*" to list instance view for all VMs in a scale set',
          args: { name: "instance-id" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
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
      name: "get-os-upgrade-history",
      description: "List the OS upgrades on a VM scale set instance",
      options: [
        {
          name: ["--vm-scale-set-name", "--name", "-n"],
          description: "The name of the VM scale set",
          args: { name: "vm-scale-set-name" },
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
      ],
    },
    {
      name: "list",
      description: "List all VM scale sets under a resource group",
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
      name: "list-instance-connection-info",
      description:
        "Get the IP address and port number used to connect to individual VM instances within a set",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
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
      name: "list-instance-public-ips",
      description: "List public IP addresses of VM instances within a set",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
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
      name: "list-instances",
      description: "List all virtual machines in a VM scale sets",
      options: [
        {
          name: ["--virtual-machine-scale-set-name", "--name", "-n"],
          description: "The name of the VM scale set",
          args: { name: "virtual-machine-scale-set-name" },
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
          name: "--expand",
          description:
            "The expand expression to apply to the operation. Allowed values are 'instanceView'",
          args: { name: "expand" },
        },
        {
          name: "--filter",
          description:
            "The filter to apply to the operation. Allowed values are 'startswith(instanceView/statuses/code, 'PowerState') eq true', 'properties/latestModelApplied eq true', 'properties/latestModelApplied eq false'",
          args: { name: "filter" },
        },
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
          name: "--select",
          description:
            "The list parameters. Allowed values are 'instanceView', 'instanceView/statuses'",
          args: { name: "select" },
        },
      ],
    },
    {
      name: "list-skus",
      description:
        "List SKUs available for your VM scale set, including the minimum and maximum VM instances allowed for each SKU",
      options: [
        {
          name: ["--vm-scale-set-name", "--name", "-n"],
          description: "The name of the VM scale set",
          args: { name: "vm-scale-set-name" },
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
      ],
    },
    {
      name: "perform-maintenance",
      description:
        "Perform maintenance on one or more virtual machines in a VM scale set. Operation on instances which are not eligible for perform maintenance will be failed. Please refer to best practices for more details: https://docs.microsoft.com/azure/virtual-machine-scale-sets/virtual-machine-scale-sets-maintenance-notifications",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--instance-ids",
          description:
            'The virtual machine scale set instance ids. Omitting the virtual machine scale set instance ids will result in the operation being performed on all virtual machines in the virtual machine scale set. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "instance-ids" },
        },
        {
          name: ["--vm-scale-set-name", "--name", "-n"],
          description: "The name of the VM scale set",
          args: { name: "vm-scale-set-name" },
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
      name: "reimage",
      description: "Reimage VMs within a VMSS",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--instance-ids",
          description:
            "Space-separated list of VM instance ID. If missing, reimage all instances",
          args: { name: "instance-ids" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      name: "restart",
      description: "Restart VMs within a VMSS",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: "--instance-ids",
          description:
            "Space-separated list of IDs (ex: 1 2 3 ...) or * for all instances. If not provided, the action will be applied on the scaleset itself",
          args: { name: "instance-ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "scale",
      description: "Change the number of VMs within a VMSS",
      options: [
        {
          name: "--new-capacity",
          description: "Number of VMs in the VMSS",
          args: { name: "new-capacity" },
          isRequired: true,
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      name: "set-orchestration-service-state",
      description:
        "Change ServiceState property for a given service within a VMSS",
      options: [
        {
          name: "--action",
          description: "The action to be performed",
          args: { name: "action", suggestions: ["Resume", "Suspend"] },
          isRequired: true,
        },
        {
          name: "--service-name",
          description: "The name of the orchestration service",
          args: {
            name: "service-name",
            suggestions: ["AutomaticRepairs", "DummyOrchestrationServiceName"],
          },
          isRequired: true,
        },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
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
      description: "Get details on VMs within a VMSS",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: ["--include-user-data", "-u"],
          description: "Include the user data properties in the query result",
        },
        {
          name: "--instance-id",
          description: "VM instance ID. If missing, show the VMSS",
          args: { name: "instance-id" },
        },
      ],
    },
    {
      name: "simulate-eviction",
      description:
        "Simulate the eviction of a Spot virtual machine in a VM scale set",
      options: [
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--instance-id",
          description: "The instance ID of the virtual machine",
          args: { name: "instance-id" },
        },
        {
          name: ["--vm-scale-set-name", "--name", "-n"],
          description: "The name of the VM scale set",
          args: { name: "vm-scale-set-name" },
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
      name: "start",
      description: "Start VMs within a VMSS",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: "--instance-ids",
          description:
            "Space-separated list of IDs (ex: 1 2 3 ...) or * for all instances. If not provided, the action will be applied on the scaleset itself",
          args: { name: "instance-ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "stop",
      description: "Power off (stop) VMs within a VMSS",
      options: [
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: "--instance-ids",
          description:
            "Space-separated list of IDs (ex: 1 2 3 ...) or * for all instances. If not provided, the action will be applied on the scaleset itself",
          args: { name: "instance-ids" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--skip-shutdown",
          description: "Skip shutdown and power-off immediately",
        },
      ],
    },
    {
      name: "update",
      description:
        "Update a VMSS. Run 'az vmss update-instances' command to roll out the changes to VMs if you have not configured upgrade policy",
      options: [
        {
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: "--automatic-repairs-action",
          description:
            "Type of repair action that will be used for repairing unhealthy virtual machines in the scale set",
          args: {
            name: "automatic-repairs-action",
            suggestions: ["Reimage", "Replace", "Restart"],
          },
        },
        {
          name: "--automatic-repairs-grace-period",
          description:
            "The amount of time (in minutes, between 30 and 90) for which automatic repairs are suspended due to a state change on VM",
          args: { name: "automatic-repairs-grace-period" },
        },
        {
          name: ["--capacity-reservation-group", "--crg"],
          description:
            'The ID or name of the capacity reservation group that is used to allocate. Pass in "None" to disassociate the capacity reservation group. Please note that if you want to delete a VM/VMSS that has been associated with capacity reservation group, you need to disassociate the capacity reservation group first',
          args: { name: "capacity-reservation-group" },
        },
        {
          name: "--custom-data",
          description:
            "Custom init script file or text (cloud-init, cloud-config, etc..)",
          args: { name: "custom-data" },
        },
        {
          name: "--disk-controller-type",
          description:
            "Specify the disk controller type configured for the VM or VMSS",
          args: { name: "disk-controller-type", suggestions: ["NVMe", "SCSI"] },
        },
        {
          name: "--enable-automatic-repairs",
          description: "Enable automatic repairs",
          args: {
            name: "enable-automatic-repairs",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-cross-zone-upgrade",
          description:
            "Set this Boolean property will allow VMSS to ignore AZ boundaries when constructing upgrade batches, and only consider Update Domain and maxBatchInstancePercent to determine the batch size",
          args: {
            name: "enable-cross-zone-upgrade",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-hibernation",
          description:
            "The flag that enable or disable hibernation capability on the VMSS",
          args: { name: "enable-hibernation", suggestions: ["false", "true"] },
        },
        {
          name: "--enable-osimage-notification",
          description:
            "Specify whether the OS Image Scheduled event is enabled or disabled",
          args: {
            name: "enable-osimage-notification",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-secure-boot",
          description: "Enable secure boot",
          args: { name: "enable-secure-boot", suggestions: ["false", "true"] },
        },
        {
          name: "--enable-spot-restore",
          description:
            "Enable the Spot-Try-Restore feature where evicted VMSS SPOT instances will be tried to be restored opportunistically based on capacity availability and pricing constraints",
          args: { name: "enable-spot-restore", suggestions: ["false", "true"] },
        },
        {
          name: "--enable-terminate-notification",
          description: "Enable terminate notification",
          args: {
            name: "enable-terminate-notification",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-vtpm",
          description: "Enable vTPM",
          args: { name: "enable-vtpm", suggestions: ["false", "true"] },
        },
        {
          name: ["--ephemeral-os-disk-placement", "--ephemeral-placement"],
          description:
            "Only applicable when used with --vm-sku. Allows you to choose the Ephemeral OS disk provisioning location",
          args: {
            name: "ephemeral-os-disk-placement",
            suggestions: ["CacheDisk", "ResourceDisk"],
          },
        },
        {
          name: "--force-deletion",
          description:
            "This property allow you to specify if virtual machines chosen for removal have to be force deleted when a virtual machine scale set is being scaled-in",
          args: { name: "force-deletion" },
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
          name: "--instance-id",
          description:
            "Update the VM instance with this ID. If missing, Update the VMSS",
          args: { name: "instance-id" },
        },
        {
          name: "--license-type",
          description:
            "Specifies that the Windows image or disk was licensed on-premises. To enable Azure Hybrid Benefit for Windows Server, use 'Windows_Server'. To enable Multi-tenant Hosting Rights for Windows 10, use 'Windows_Client'. For more information see the Azure Windows VM online docs",
          args: {
            name: "license-type",
            suggestions: [
              "None",
              "RHEL_BASE",
              "RHEL_BASESAPAPPS",
              "RHEL_BASESAPHA",
              "RHEL_BYOS",
              "RHEL_ELS_6",
              "RHEL_EUS",
              "RHEL_SAPAPPS",
              "RHEL_SAPHA",
              "SLES",
              "SLES_BYOS",
              "SLES_HPC",
              "SLES_SAP",
              "SLES_STANDARD",
              "UBUNTU",
              "UBUNTU_PRO",
              "Windows_Client",
              "Windows_Server",
            ],
          },
        },
        {
          name: "--max-batch-instance-percent",
          description:
            "The maximum percent of total virtual machine instances that will be upgraded simultaneously by the rolling upgrade in one batch. Default: 20%",
          args: { name: "max-batch-instance-percent" },
        },
        {
          name: "--max-price",
          description:
            "The maximum price (in US Dollars) you are willing to pay for a Spot VM/VMSS. -1 indicates that the Spot VM/VMSS should not be evicted for price reasons",
          args: { name: "max-price" },
        },
        {
          name: "--max-unhealthy-instance-percent",
          description:
            "The maximum percentage of the total virtual machine instances in the scale set that can be simultaneously unhealthy. Default: 20%",
          args: { name: "max-unhealthy-instance-percent" },
        },
        {
          name: "--max-unhealthy-upgraded-instance-percent",
          description:
            "The maximum percentage of upgraded virtual machine instances that can be found to be in an unhealthy state. Default: 20%",
          args: { name: "max-unhealthy-upgraded-instance-percent" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--pause-time-between-batches",
          description:
            "The wait time between completing the update for all virtual machines in one batch and starting the next batch. Default: 0 seconds",
          args: { name: "pause-time-between-batches" },
        },
        {
          name: "--ppg",
          description:
            "The name or ID of the proximity placement group the VMSS should be associated with",
          args: { name: "ppg" },
        },
        {
          name: "--prioritize-unhealthy-instances",
          description:
            "Set this Boolean property will lead to all unhealthy instances in a scale set getting upgraded before any healthy instances",
          args: {
            name: "prioritize-unhealthy-instances",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--priority",
          description:
            "Priority. Use 'Spot' to run short-lived workloads in a cost-effective way. 'Low' enum will be deprecated in the future. Please use 'Spot' to deploy Azure spot VM and/or VMSS. Default to Regular",
          args: { name: "priority", suggestions: ["Low", "Regular", "Spot"] },
        },
        {
          name: "--protect-from-scale-in",
          description: "Protect the VM instance from scale-in operations",
          args: {
            name: "protect-from-scale-in",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--protect-from-scale-set-actions",
          description:
            "Protect the VM instance from scale set actions (including scale-in)",
          args: {
            name: "protect-from-scale-set-actions",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--regular-priority-count",
          description:
            "The base number of regular priority VMs that will be created in this scale set as it scales out. Must be greater than 0",
          args: { name: "regular-priority-count" },
        },
        {
          name: "--regular-priority-percentage",
          description:
            "The percentage of VM instances, after the base regular priority count has been reached, that are expected to use regular priority. Must be between 0 and 100",
          args: { name: "regular-priority-percentage" },
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
          name: "--scale-in-policy",
          description:
            "Specify the scale-in policy (space delimited) that decides which virtual machines are chosen for removal when a Virtual Machine Scale Set is scaled-in",
          args: {
            name: "scale-in-policy",
            suggestions: ["Default", "NewestVM", "OldestVM"],
          },
        },
        {
          name: "--security-type",
          description:
            "Specify the security type of the virtual machine scale set",
          args: { name: "security-type", suggestions: ["TrustedLaunch"] },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
          args: { name: "set" },
        },
        {
          name: "--spot-restore-timeout",
          description:
            "Timeout value expressed as an ISO 8601 time duration after which the platform will not try to restore the VMSS SPOT instances",
          args: { name: "spot-restore-timeout" },
        },
        {
          name: "--subscription",
          description:
            "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
          args: { name: "subscription" },
        },
        {
          name: "--terminate-notification-time",
          description:
            "Length of time (in minutes, between 5 and 15) a notification to be sent to the VM on the instance metadata server till the VM gets deleted",
          args: { name: "terminate-notification-time" },
        },
        {
          name: "--ultra-ssd-enabled",
          description:
            "Enables or disables the capability to have 1 or more managed data disks with UltraSSD_LRS storage account",
          args: { name: "ultra-ssd-enabled", suggestions: ["false", "true"] },
        },
        {
          name: "--user-data",
          description:
            "UserData for the virtual machines in the scale set. It can be passed in as file or string. If empty string is passed in, the existing value will be deleted",
          args: { name: "user-data" },
        },
        {
          name: "--v-cpus-available",
          description: "Specify the number of vCPUs available",
          args: { name: "v-cpus-available" },
        },
        {
          name: "--v-cpus-per-core",
          description:
            "Specify the ratio of vCPU to physical core. Setting this property to 1 also means that hyper-threading is disabled",
          args: { name: "v-cpus-per-core" },
        },
        {
          name: "--vm-sku",
          description:
            'The new size of the virtual machine instances in the scale set. Default to "Standard_DS1_v2". See https://azure.microsoft.com/pricing/details/virtual-machines/ for size info',
          args: { name: "vm-sku" },
        },
      ],
    },
    {
      name: "update-instances",
      description: "Upgrade VMs within a VMSS",
      options: [
        {
          name: "--instance-ids",
          description:
            "Space-separated list of IDs (ex: 1 2 3 ...) or * for all instances",
          args: { name: "instance-ids" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
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
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of a scale set is met",
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
        { name: "--exists", description: "Wait until the resource exists" },
        {
          name: "--ids",
          description:
            "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
          args: { name: "ids" },
        },
        {
          name: "--instance-id",
          description:
            "Wait on the VM instance with this ID. If missing, Wait on the VMSS",
          args: { name: "instance-id" },
        },
        {
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
        },
        {
          name: ["--name", "-n"],
          description:
            "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
          args: { name: "name" },
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
    {
      name: "diagnostics",
      description:
        "Configure the Azure Virtual Machine Scale Set diagnostics extension",
      subcommands: [
        {
          name: "get-default-config",
          description:
            "Show the default config file which defines data to be collected",
          options: [
            { name: "--is-windows-os", description: "For Windows VMs" },
          ],
        },
        {
          name: "set",
          description: "Enable diagnostics on a VMSS",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--settings",
              description:
                "Json string or a file path, which defines data to be collected",
              args: { name: "settings" },
              isRequired: true,
            },
            {
              name: "--vmss-name",
              description: "Scale set name",
              args: { name: "vmss-name" },
              isRequired: true,
            },
            {
              name: "--no-auto-upgrade",
              description:
                "Option '--no-auto-upgrade' has been deprecated and will be removed in a future release. Use '--no-auto-upgrade-minor-version' instead. If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed",
            },
            {
              name: "--no-auto-upgrade-minor-version",
              description:
                "If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed",
            },
            {
              name: "--protected-settings",
              description:
                "Json string or a file path containing private configurations such as storage account keys, etc",
              args: { name: "protected-settings" },
            },
            {
              name: "--version",
              description:
                "Version of the diagnostics extension. Will use the latest if not specfied",
              args: { name: "version" },
            },
          ],
        },
      ],
    },
    {
      name: "disk",
      description: "Manage data disks of a VMSS",
      subcommands: [
        {
          name: "attach",
          description:
            "Attach managed data disks to a scale set or its instances",
          options: [
            {
              name: "--caching",
              description: "Disk caching policy",
              args: {
                name: "caching",
                suggestions: ["None", "ReadOnly", "ReadWrite"],
              },
            },
            {
              name: "--disk",
              description:
                "Existing disk name or ID to attach or detach from VM instances",
              args: { name: "disk" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--instance-id",
              description: "Scale set VM instance id",
              args: { name: "instance-id" },
            },
            {
              name: "--lun",
              description:
                "0-based logical unit number (LUN). Max value depends on the Virtual Machine instance size",
              args: { name: "lun" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
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
            {
              name: "--vmss-name",
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "vmss-name" },
            },
          ],
        },
        {
          name: "detach",
          description:
            "Detach managed data disks from a scale set or its instances",
          options: [
            {
              name: "--lun",
              description:
                "0-based logical unit number (LUN). Max value depends on the Virtual Machine instance size",
              args: { name: "lun" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--instance-id",
              description: "Scale set VM instance id",
              args: { name: "instance-id" },
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
              name: "--vmss-name",
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "vmss-name" },
            },
          ],
        },
      ],
    },
    {
      name: "encryption",
      description:
        "Manage encryption of VMSS.\n\n\t\tFor more information, see: ttps://docs.microsoft.com/azure/security/fundamentals/azure-disk-encryption-vms-vmss",
      subcommands: [
        {
          name: "disable",
          description: "Disable the encryption on a VMSS with managed disks",
          options: [
            {
              name: "--force",
              description: "Continue by ignoring client side validation errors",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "name" },
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
              name: "--volume-type",
              description:
                "Type of volume that the encryption operation is performed on",
              args: { name: "volume-type", suggestions: ["ALL", "DATA", "OS"] },
            },
          ],
        },
        {
          name: "enable",
          description: "Encrypt a VMSS with managed disks",
          options: [
            {
              name: "--disk-encryption-keyvault",
              description:
                "Name or ID of the key vault where the generated encryption key will be placed",
              args: { name: "disk-encryption-keyvault" },
              isRequired: true,
            },
            {
              name: "--force",
              description: "Continue by ignoring client side validation errors",
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--key-encryption-algorithm",
              description: "",
              args: { name: "key-encryption-algorithm" },
            },
            {
              name: "--key-encryption-key",
              description:
                "Key vault key name or URL used to encrypt the disk encryption key",
              args: { name: "key-encryption-key" },
            },
            {
              name: "--key-encryption-keyvault",
              description:
                "Name or ID of the key vault containing the key encryption key used to encrypt the disk encryption key. If missing, CLI will use --disk-encryption-keyvault",
              args: { name: "key-encryption-keyvault" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "name" },
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
              name: "--volume-type",
              description:
                "Type of volume that the encryption operation is performed on",
              args: { name: "volume-type", suggestions: ["ALL", "DATA", "OS"] },
            },
          ],
        },
        {
          name: "show",
          description: "Show encryption status",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "name" },
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
      ],
    },
    {
      name: "extension",
      description: "Manage extensions on a VM scale set",
      subcommands: [
        {
          name: "delete",
          description: "Delete an extension from a VMSS",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the extension",
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
              name: "--vmss-name",
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "vmss-name" },
              isRequired: true,
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
          ],
        },
        {
          name: "list",
          description: "List extensions associated with a VMSS",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--vmss-name",
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "vmss-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "set",
          description:
            "Add an extension to a VMSS or update an existing extension",
          options: [
            {
              name: ["--name", "-n"],
              description:
                "Name of the extension. value from: az vm extension image list",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: "--publisher",
              description: "The name of the extension publisher",
              args: { name: "publisher" },
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
              name: "--vmss-name",
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "vmss-name" },
              isRequired: true,
            },
            {
              name: "--enable-auto-upgrade",
              description:
                "Indicate the extension should be automatically upgraded by the platform if there is a newer version of the extension available",
              args: {
                name: "enable-auto-upgrade",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--extension-instance-name",
              description:
                "Name of extension instance, which can be customized. Default: name of the extension",
              args: { name: "extension-instance-name" },
            },
            {
              name: "--force-update",
              description:
                "Force to update even if the extension configuration has not changed",
            },
            {
              name: "--no-auto-upgrade",
              description:
                "Option '--no-auto-upgrade' has been deprecated and will be removed in a future release. Use '--no-auto-upgrade-minor-version' instead. If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed",
            },
            {
              name: "--no-auto-upgrade-minor-version",
              description:
                "If set, the extension service will not automatically pick or upgrade to the latest minor version, even if the extension is redeployed",
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--protected-settings",
              description:
                "Protected settings in JSON format for sensitive information like credentials. A JSON file path is also accepted",
              args: { name: "protected-settings" },
            },
            {
              name: "--provision-after-extensions",
              description:
                "Space-separated list of extension names after which this extension should be provisioned. These extensions must already be set on the vm",
              args: { name: "provision-after-extensions" },
            },
            {
              name: "--settings",
              description:
                "Extension settings in JSON format. A JSON file path is also accepted",
              args: { name: "settings" },
            },
            {
              name: "--version",
              description:
                "The version of the extension. To pin extension version to this value, please specify --no-auto-upgrade-minor-version",
              args: { name: "version" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details on a VMSS extension",
          options: [
            {
              name: ["--name", "-n"],
              description: "Name of the extension",
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
              name: "--vmss-name",
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "vmss-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "upgrade",
          description:
            "Upgrade all extensions for all VMSS instances to the latest version",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
          name: "image",
          description:
            "Find the available VM extensions for a subscription and region",
          subcommands: [
            {
              name: "list",
              description: "List the information on available extensions",
              options: [
                {
                  name: "--latest",
                  description: "Show the latest version only",
                },
                {
                  name: ["--location", "-l"],
                  description: "Image location",
                  args: { name: "location" },
                },
                {
                  name: ["--name", "-n"],
                  description: "Image name",
                  args: { name: "name" },
                },
                {
                  name: ["--publisher", "-p"],
                  description: "Image publisher name",
                  args: { name: "publisher" },
                },
                {
                  name: "--version",
                  description: "Extension version",
                  args: { name: "version" },
                },
              ],
            },
            {
              name: "list-names",
              description: "List virtual machine extension image types",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: ["--publisher-name", "--publisher", "-p"],
                  description: "Image publisher name",
                  args: { name: "publisher-name" },
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
              name: "list-versions",
              description: "List virtual machine extension image versions",
              options: [
                {
                  name: "--filter",
                  description:
                    "The filter to apply on the operation. Default value is None",
                  args: { name: "filter" },
                },
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: ["--name", "--type", "-n"],
                  description: "Name of the extension",
                  args: { name: "name" },
                },
                {
                  name: "--orderby",
                  description: "The $orderby odata query option",
                  args: { name: "orderby" },
                },
                {
                  name: ["--publisher-name", "--publisher", "-p"],
                  description: "Image publisher name",
                  args: { name: "publisher-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--top",
                  description: "The $top odata query option",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Get a virtual machine extension image",
              options: [
                {
                  name: "--ids",
                  description:
                    "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
                  args: { name: "ids" },
                },
                {
                  name: ["--location", "-l"],
                  description:
                    "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
                  args: { name: "location" },
                },
                {
                  name: ["--name", "--type", "-n"],
                  description: "Name of the extension",
                  args: { name: "name" },
                },
                {
                  name: ["--publisher-name", "--publisher", "-p"],
                  description: "Image publisher name",
                  args: { name: "publisher-name" },
                },
                {
                  name: "--subscription",
                  description:
                    "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
                  args: { name: "subscription" },
                },
                {
                  name: "--version",
                  description: "Extension version",
                  args: { name: "version" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "identity",
      description: "Manage service identities of a VM scaleset",
      subcommands: [
        {
          name: "assign",
          description: "Enable managed service identity on a VMSS",
          options: [
            {
              name: "--identities",
              description:
                "Space-separated identities to assign. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "name" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--role",
              description:
                'Role name or id the system assigned identity will have. Please note that the default value "Contributor" will be removed in the breaking change release of the fall, so please specify "--role" and "--scope" at the same time when assigning a role to the managed identity',
              args: { name: "role" },
            },
            {
              name: "--scope",
              description: "Scope that the system assigned identity can access",
              args: { name: "scope" },
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
          name: "remove",
          description: "Remove user assigned identities from a VM scaleset",
          options: [
            {
              name: "--identities",
              description:
                "Space-separated identities to remove. Use '[system]' to refer to the system assigned identity. Default: '[system]'",
              args: { name: "identities" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "name" },
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
          description: "Display VM scaleset's managed identity info",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--name", "-n"],
              description:
                "The name of the Virtual Machine. You can configure the default using az configure --defaults vm=<name>",
              args: { name: "name" },
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
      ],
    },
    {
      name: "nic",
      description: "Manage network interfaces of a VMSS",
      subcommands: [
        {
          name: "list",
          description:
            "Get all network interfaces in a virtual machine scale set",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--virtual-machine-scale-set-name", "--vmss-name"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "virtual-machine-scale-set-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-vm-nics",
          description:
            "Get information about all network interfaces in a virtual machine in a virtual machine scale set",
          options: [
            {
              name: ["--virtualmachine-index", "--instance-id"],
              description: "The virtual machine index",
              args: { name: "virtualmachine-index" },
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
              name: ["--virtual-machine-scale-set-name", "--vmss-name"],
              description: "Scale set name",
              args: { name: "virtual-machine-scale-set-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the specified network interface in a virtual machine scale set",
          options: [
            {
              name: "--expand",
              description:
                "Expands referenced resources. Default value is None",
              args: { name: "expand" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--virtualmachine-index", "--instance-id"],
              description: "The virtual machine index",
              args: { name: "virtualmachine-index" },
            },
            {
              name: ["--network-interface-name", "--name", "-n"],
              description: "The network interface (NIC)",
              args: { name: "network-interface-name" },
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
              name: ["--virtual-machine-scale-set-name", "--vmss-name"],
              description: "Scale set name",
              args: { name: "virtual-machine-scale-set-name" },
            },
          ],
        },
      ],
    },
    {
      name: "rolling-upgrade",
      description: "Manage rolling upgrades",
      subcommands: [
        {
          name: "cancel",
          description:
            "Cancel the current virtual machine scale set rolling upgrade",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: [
                "--virtual-machine-scale-set-name",
                "--vm-scale-set-name",
                "--name",
                "-n",
              ],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "virtual-machine-scale-set-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
          name: "get-latest",
          description:
            "Get the status of the latest virtual machine scale set rolling upgrade",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: [
                "--virtual-machine-scale-set-name",
                "--vm-scale-set-name",
                "--name",
                "-n",
              ],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "virtual-machine-scale-set-name" },
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
          name: "start",
          description:
            "Start a rolling upgrade to move all virtual machine scale set instances to the latest available Platform Image OS version. Instances which are already running the latest available OS version are not affected",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: [
                "--virtual-machine-scale-set-name",
                "--vm-scale-set-name",
                "--name",
                "-n",
              ],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "virtual-machine-scale-set-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
      ],
    },
    {
      name: "run-command",
      description:
        "Manage run commands on a Virtual Machine Scale Set.\n\n\t\tFor more information, see https://docs.microsoft.com/azure/virtual-machines/windows/run-command or https://docs.microsoft.com/azure/virtual-machines/linux/run-command",
      subcommands: [
        {
          name: "create",
          description: "The operation to Create the VMSS VM run command",
          options: [
            {
              name: "--instance-id",
              description: "The instance ID of the virtual machine",
              args: { name: "instance-id" },
              isRequired: true,
            },
            {
              name: ["--run-command-name", "--name"],
              description: "The name of the virtual machine run command",
              args: { name: "run-command-name" },
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
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
              isRequired: true,
            },
            {
              name: "--async-execution",
              description:
                "Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete",
              args: { name: "async-execution", suggestions: ["false", "true"] },
            },
            {
              name: "--command-id",
              description: "Specify a commandId of predefined built-in script",
              args: { name: "command-id" },
            },
            {
              name: "--error-blob-uri",
              description:
                "Uri (without SAS) to an append blob where the script error stream will be uploaded",
              args: { name: "error-blob-uri" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--output-blob-uri",
              description:
                "Uri (without SAS) to an append blob where the script output will be uploaded",
              args: { name: "output-blob-uri" },
            },
            {
              name: "--parameters",
              description: "The parameters used by the script",
              args: { name: "parameters" },
            },
            {
              name: "--protected-parameters",
              description: "The parameters used by the script",
              args: { name: "protected-parameters" },
            },
            {
              name: "--run-as-password",
              description:
                "Password if needed for using run-as-user parameter. It will be encrypted and not logged",
              args: { name: "run-as-password" },
            },
            {
              name: "--run-as-user",
              description:
                "By default script process runs under system/root user. Specify custom user to host the process",
              args: { name: "run-as-user" },
            },
            {
              name: "--script",
              description:
                "Specify the script content to be executed on the VM",
              args: { name: "script" },
            },
            {
              name: "--script-uri",
              description: "Specify the script download location",
              args: { name: "script-uri" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--timeout-in-seconds",
              description: "The timeout in seconds to execute the run command",
              args: { name: "timeout-in-seconds" },
            },
          ],
        },
        {
          name: "delete",
          description: "The operation to delete the run command",
          options: [
            {
              name: ["--run-command-name", "--name"],
              description: "The name of the virtual machine run command",
              args: { name: "run-command-name" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--instance-id",
              description: "The instance ID of the virtual machine",
              args: { name: "instance-id" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "invoke",
          description:
            "Execute a specific run command on a Virtual Machine Scale Set instance",
          options: [
            {
              name: "--command-id",
              description:
                "The command id. value from: az vmss run-command list",
              args: { name: "command-id" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--instance-id",
              description: "Scale set VM instance id",
              args: { name: "instance-id" },
            },
            {
              name: ["--name", "-n"],
              description:
                "Scale set name. You can configure the default using az configure --defaults vmss=<name>",
              args: { name: "name" },
            },
            {
              name: "--parameters",
              description:
                "Space-separated parameters in the format of '[name=]value'",
              args: { name: "parameters" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--scripts",
              description:
                "Space-separated script lines. Use @{file} to load script from a file",
              args: { name: "scripts" },
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
          description:
            "The operation to get all run commands of an instance in Virtual Machine Scaleset",
          options: [
            {
              name: "--instance-id",
              description: "The instance ID of the virtual machine",
              args: { name: "instance-id" },
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
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "The expand expression to apply on the operation",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "show",
          description: "The operation to get the VMSS run command",
          options: [
            {
              name: ["--run-command-name", "--name"],
              description: "The name of the virtual machine run command",
              args: { name: "run-command-name" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--instance-id",
              description: "The instance ID of the virtual machine",
              args: { name: "instance-id" },
            },
            {
              name: "--instance-view",
              description: "The instance view of a run command",
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
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
            },
          ],
        },
        {
          name: "update",
          description: "The operation to update the VMSS run command",
          options: [
            {
              name: ["--run-command-name", "--name"],
              description: "The name of the virtual machine run command",
              args: { name: "run-command-name" },
              isRequired: true,
            },
            {
              name: "--async-execution",
              description:
                "Optional. If set to true, provisioning will complete as soon as the script starts and will not wait for script to complete",
              args: { name: "async-execution", suggestions: ["false", "true"] },
            },
            {
              name: "--command-id",
              description: "Specify a commandId of predefined built-in script",
              args: { name: "command-id" },
            },
            {
              name: "--error-blob-uri",
              description:
                "Uri (without SAS) to an append blob where the script error stream will be uploaded",
              args: { name: "error-blob-uri" },
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--instance-id",
              description: "The instance ID of the virtual machine",
              args: { name: "instance-id" },
            },
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--output-blob-uri",
              description:
                "Uri (without SAS) to an append blob where the script output will be uploaded",
              args: { name: "output-blob-uri" },
            },
            {
              name: "--parameters",
              description: "The parameters used by the script",
              args: { name: "parameters" },
            },
            {
              name: "--protected-parameters",
              description: "The parameters used by the script",
              args: { name: "protected-parameters" },
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
            },
            {
              name: "--run-as-password",
              description:
                "Password if needed for using run-as-user parameter. It will be encrypted and not logged",
              args: { name: "run-as-password" },
            },
            {
              name: "--run-as-user",
              description:
                "By default script process runs under system/root user. Specify custom user to host the process",
              args: { name: "run-as-user" },
            },
            {
              name: "--script",
              description:
                "Specify the script content to be executed on the VM",
              args: { name: "script" },
            },
            {
              name: "--script-uri",
              description: "Specify the script download location",
              args: { name: "script-uri" },
            },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--timeout-in-seconds",
              description: "The timeout in seconds to execute the run command",
              args: { name: "timeout-in-seconds" },
            },
            {
              name: "--vmss-name",
              description: "The name of the VM scale set",
              args: { name: "vmss-name" },
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
