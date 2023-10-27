const completion: Fig.Spec = {
  name: "sphere",
  description: "Manage Azure Sphere",
  subcommands: [
    {
      name: "ca-certificate",
      description: "Manage certificates in your Azure Sphere Catalog",
      subcommands: [
        {
          name: "download",
          description: "Download the certificate for your Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--output-file", "-of"],
              description:
                "Path and file name in which to save the certificate. Specify a relative or absolute path",
              args: { name: "output-file" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--serial-number", "-sn"],
              description: "The certificate to download. Specify serial number",
              args: { name: "serial-number" },
            },
          ],
        },
        {
          name: "download-chain",
          description:
            "Download the certificate chain for your Azure Sphere Catalog as a PKCS#7 '.p7b' file",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--output-file", "-of"],
              description:
                "Path and file name in which to save the certificate chain. Specify a relative or absolute path using a '.p7b' extension",
              args: { name: "output-file" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--serial-number", "-sn"],
              description: "The certificate to download. Specify serial number",
              args: { name: "serial-number" },
            },
          ],
        },
        {
          name: "download-proof",
          description:
            "Download a proof-of-possession certificate for your Azure Sphere Catalog for use with a provided code",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--output-file", "-of"],
              description:
                "Path and file name in which to save the certificate. Specify a relative or absolute path",
              args: { name: "output-file" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--verification-code", "-v"],
              description:
                "The verification code for the Azure Sphere Security Service to use when generating the certificate",
              args: { name: "verification-code" },
              isRequired: true,
            },
            {
              name: ["--serial-number", "-sn"],
              description: "The certificate to download. Specify serial number",
              args: { name: "serial-number" },
            },
          ],
        },
        {
          name: "list",
          description: "List all certificates in your Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "catalog",
      description: "Manage Azure Sphere Catalogs",
      subcommands: [
        {
          name: "create",
          description: "Create an Azure Sphere Catalog",
          options: [
            {
              name: ["--name", "-n"],
              description: "The Azure Sphere Catalog name",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog name. value from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "download-error-report",
          description:
            "List or download the available error reports for the selected Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--output-file", "-of"],
              description:
                "The path to the new csv file to create, containing the error report data. You can provide a relative or absolute path. If this parameter is not set, the file will be saved in the current folder with a default name. (Path)",
              args: { name: "output-file" },
            },
          ],
        },
        {
          name: "list",
          description: "List the available Azure Sphere Catalogs",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show details of an Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog name. value from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "deployment",
      description: "Manage deployments in your Azure Sphere Catalog",
      subcommands: [
        {
          name: "create",
          description: "Create a deployment",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The device group name. value from: az sphere device-group list",
              args: { name: "device-group" },
              isRequired: true,
            },
            {
              name: ["--images", "-i"],
              description:
                "Space-separated list of images to deploy. value from: az sphere image list",
              args: { name: "images" },
              isRequired: true,
            },
            {
              name: ["--product", "-p"],
              description:
                "The product in which to create a deployment. value from: az sphere product list",
              args: { name: "product" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List all deployments",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The device group name. value from: az sphere device-group list",
              args: { name: "device-group" },
              isRequired: true,
            },
            {
              name: ["--product", "-p"],
              description:
                "The product in which to list deployments. value from: az sphere product list",
              args: { name: "product" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show details of a deployment",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--deployment-id", "-di"],
              description: "The deployment ID",
              args: { name: "deployment-id" },
              isRequired: true,
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The device group name. value from: az sphere device-group list",
              args: { name: "device-group" },
              isRequired: true,
            },
            {
              name: ["--product", "-p"],
              description:
                "The product in which to list deployments. value from: az sphere product list",
              args: { name: "product" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "device",
      description: "Manage Azure Sphere devices",
      subcommands: [
        {
          name: "assign",
          description:
            "Assign a device to a device group in your Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: "--targeted-device-group",
              description:
                "The targeted device group id. value from: az sphere device-group list",
              args: { name: "targeted-device-group" },
              isRequired: true,
            },
            {
              name: ["--device", "-d"],
              description:
                "The device to target for this command. This is required when no device or multiple devices are attached, to disambiguate which device to target. If the device is attached, you may provide either Device ID, IP address, or Local Connection ID. Values from: az sphere device list-attached. Otherwise you must provide the Device ID only. value from: az sphere device list",
              args: { name: "device" },
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The current device group name. value from: az sphere device-group list",
              args: { name: "device-group" },
            },
            {
              name: ["--product", "-p"],
              description:
                "The current product name. value from: az sphere product list",
              args: { name: "product" },
            },
          ],
        },
        {
          name: "claim",
          description: "Claim a device in your Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--device", "-d"],
              description:
                "The device to target for this command. This is required when no device or multiple devices are attached, to disambiguate which device to target. If the device is attached, you may provide either Device ID, IP address, or Local Connection ID. Values from: az sphere device list-attached. Otherwise you must provide the Device ID only",
              args: { name: "device" },
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The device group name where to claim the device. value from: az sphere device-group list",
              args: { name: "device-group" },
            },
            {
              name: ["--product", "-p"],
              description:
                "The product name where to claim the device. value from: az sphere product list",
              args: { name: "product" },
            },
          ],
        },
        {
          name: "enable-cloud-test",
          description:
            "Enable a device for testing cloud loading by disabling development and debugging on the attached device, and by assigning it to a device group that enables application updates from the cloud. By default, this will be the 'Field Test' device group of the device's product, but other device groups can be specified. Not for use in manufacturing scenarios: see https://aka.ms/AzureSphereManufacturing for more information",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--device", "-d"],
              description:
                "The device to run the command. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
              args: { name: "device" },
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The device group name to which the device will be assigned. By default, this is the 'Field Test' device group of the product. value from: az sphere device-group list",
              args: { name: "device-group" },
            },
            {
              name: ["--product", "-p"],
              description:
                "The target product name. The device will be assigned to the default 'Field Test' device group of the selected product unless the device-group is also specified. value from: az sphere product list",
              args: { name: "product" },
            },
          ],
        },
        {
          name: "enable-development",
          description:
            "Enable a device for development by enabling sideloading and debugging on the attached device, and by assigning it to a device group that disables application updates from the cloud. By default, this will be the 'Development' device group of the device's product, but other device groups can be specified. Not for use in manufacturing scenarios: see https://aka.ms/AzureSphereManufacturing for more information",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--device", "-d"],
              description:
                "The device to run the command. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
              args: { name: "device" },
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The device group name to which the device will be assigned. By default, this is the 'Development' device group of the product. value from: az sphere device-group list",
              args: { name: "device-group" },
            },
            {
              name: ["--enable-rt-core-debugging", "-r"],
              description:
                "Install drivers required to debug applications running on a real-time core. Requires administrator permissions",
            },
            {
              name: ["--product", "-p"],
              description:
                "The target product name. The device will be assigned to the default 'Development' device group of the selected product unless the device-group is also specified. value from: az sphere product list",
              args: { name: "product" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List all the devices in your Azure Sphere Catalog, product, or device group",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The device group name. value from: az sphere device-group list",
              args: { name: "device-group" },
            },
            {
              name: ["--product", "-p"],
              description:
                "The product name. value from: az sphere product list",
              args: { name: "product" },
            },
          ],
        },
        {
          name: "list-attached",
          description: "List all the attached devices",
        },
        {
          name: "recover",
          description:
            "Use recovery mode to load new firmware onto the attached device",
          options: [
            {
              name: "--capability",
              description:
                "Filename of a device capability image to apply to the device during recovery. (Path)",
              args: { name: "capability" },
            },
            {
              name: ["--device", "-d"],
              description:
                "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
              args: { name: "device" },
            },
            {
              name: "--images",
              description:
                "Folder containing the image packages to write to the device. If not specified then the latest OS images are downloaded and used. (Path)",
              args: { name: "images" },
            },
          ],
        },
        {
          name: "rescan-attached",
          description: "Show the number of attached devices",
        },
        {
          name: "restart",
          description: "Restart the attached device",
          options: [
            {
              name: ["--device", "-d"],
              description:
                "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
              args: { name: "device" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of an existing device in your Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--device", "-d"],
              description:
                "The device to target for this command. This is required when no device or multiple devices are attached, to disambiguate which device to target. If the device is attached, you may provide either Device ID, IP address, or Local Connection ID. Values from: az sphere device list-attached. Otherwise you must provide the Device ID only. value from: az sphere device list",
              args: { name: "device" },
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The device group name. value from: az sphere device-group list",
              args: { name: "device-group" },
            },
            {
              name: ["--product", "-p"],
              description:
                "The product name. value from: az sphere product list",
              args: { name: "product" },
            },
          ],
        },
        {
          name: "show-attached",
          description: "Show the details of the attached device",
          options: [
            {
              name: ["--device", "-d"],
              description:
                "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
              args: { name: "device" },
            },
          ],
        },
        {
          name: "show-count",
          description:
            "Show the number of devices in your Azure Sphere Catalog, product, or device group",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The device group name. value from: az sphere device-group list",
              args: { name: "device-group" },
            },
            {
              name: ["--product", "-p"],
              description:
                "The product name. value from: az sphere product list",
              args: { name: "product" },
            },
          ],
        },
        {
          name: "show-deployment-status",
          description:
            "Show the deployment status of the operating system on a device",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--device", "-d"],
              description:
                "The device to run the command. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
              args: { name: "device" },
            },
          ],
        },
        {
          name: "show-os-version",
          description:
            "Show the operating system version on the attached device",
          options: [
            {
              name: ["--device", "-d"],
              description:
                "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
              args: { name: "device" },
            },
          ],
        },
        {
          name: "unassign",
          description:
            "Unassign a device from a device group in your Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The device group name. value from: az sphere device-group list",
              args: { name: "device-group" },
              isRequired: true,
            },
            {
              name: ["--product", "-p"],
              description:
                "The product name. value from: az sphere product list",
              args: { name: "product" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--device", "-d"],
              description:
                "The device to target for this command. This is required when no device or multiple devices are attached, to disambiguate which device to target. If the device is attached, you may provide either Device ID, IP address, or Local Connection ID. Values from: az sphere device list-attached. Otherwise you must provide the Device ID only. value from: az sphere device list",
              args: { name: "device" },
            },
          ],
        },
        {
          name: "app",
          description: "Manage applications on the attached device",
          subcommands: [
            {
              name: "show-memory-stats",
              description:
                "Show the memory statistics for applications on the attached device",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "show-quota",
              description:
                "Show the storage quota and usage for applications on the attached device",
              options: [
                {
                  name: ["--component-id", "-i"],
                  description:
                    "The ID of the component to get the quota information for. By default, gets all components. (Guid)",
                  args: { name: "component-id" },
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "show-status",
              description:
                "Show the status of applications on the attached device",
              options: [
                {
                  name: ["--component-id", "-i"],
                  description:
                    "The ID of the component to show the status of; by default, all application statuses are shown. (Guid)",
                  args: { name: "component-id" },
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "start",
              description: "Start applications on the attached device",
              options: [
                {
                  name: ["--component-id", "-i"],
                  description:
                    "The ID of the component to start; by default, all applications are started. Required if '--debug-mode' is used. (Guid)",
                  args: { name: "component-id" },
                },
                {
                  name: "--debug-mode",
                  description:
                    "Start the application in debug mode. '--component-id' must be provided",
                  args: { name: "debug-mode", suggestions: ["false", "true"] },
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "stop",
              description: "Stop applications on the attached device",
              options: [
                {
                  name: ["--component-id", "-i"],
                  description:
                    "The ID of the component to stop; by default, all applications are stopped. (Guid)",
                  args: { name: "component-id" },
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
          ],
        },
        {
          name: "capability",
          description: "Manage device capability configurations",
          subcommands: [
            {
              name: "download",
              description:
                "Download a device capability file from the Azure Sphere Security Service",
              options: [
                {
                  name: ["--catalog", "-c"],
                  description:
                    "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
                  args: { name: "catalog" },
                  isRequired: true,
                },
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to target for this command. This is required when no device or multiple devices are attached, to disambiguate which device to target. If the device is attached, you may provide either Device ID, IP address, or Local Connection ID. Values from: az sphere device list-attached. Otherwise you must provide the Device ID only. value from: az sphere device list",
                  args: { name: "device" },
                },
                {
                  name: ["--device-group", "-dg"],
                  description:
                    "The device group name. value from: az sphere device-group list",
                  args: { name: "device-group" },
                },
                {
                  name: ["--output-file", "-of"],
                  description:
                    "Path and file name in which to download capabilities. If this parameter is not set, the file will be saved in the current folder with a default name (capability-device.cap)",
                  args: { name: "output-file" },
                },
                {
                  name: ["--product", "-p"],
                  description:
                    "The product name. value from: az sphere product list",
                  args: { name: "product" },
                },
                {
                  name: ["--type", "-t"],
                  description:
                    "Space-separated list of capabilities to download. If this parameter is not set, the capability None will be applied",
                  args: {
                    name: "type",
                    suggestions: ["ApplicationDevelopment", "FieldServicing"],
                  },
                },
              ],
            },
            {
              name: "select",
              description:
                "Temporarily select the device capability session for the attached device",
              options: [
                {
                  name: "--capability-file",
                  description:
                    "The path and filename to the device capability configuration file to select. You can provide a relative or absolute path",
                  args: { name: "capability-file" },
                },
                {
                  name: ["--none", "-n"],
                  description:
                    "End the temporarily selected device capability session",
                },
              ],
            },
            {
              name: "show-attached",
              description:
                "Show the current device capability configuration of the attached device",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the device capability configuration for the attached device",
              options: [
                {
                  name: "--capability-file",
                  description:
                    "The path and filename to the device capability configuration file to apply",
                  args: { name: "capability-file" },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
          ],
        },
        {
          name: "certificate",
          description: "Manage certificates on the attached device",
          subcommands: [
            {
              name: "add",
              description:
                "Add a certificate in the attached device's certificate store",
              options: [
                {
                  name: ["--cert-type", "-t"],
                  description:
                    "The type of certificate to add. 'rootca' - a root CA certificate for use with EAP-TLS networks where the device authenticates the server. 'client' - a client certificate, containing both the public and private key, for use with EAP-TLS networks. Please see: https://aka.ms/AzureSphereCertificateStore for more details",
                  args: { name: "cert-type" },
                  isRequired: true,
                },
                {
                  name: ["--certificate", "-c"],
                  description: "The name of the certificate to add",
                  args: { name: "certificate" },
                  isRequired: true,
                },
                {
                  name: ["--public-key-file", "-p"],
                  description:
                    "The path to a public key certificate .pem file. You can provide a relative or absolute path",
                  args: { name: "public-key-file" },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Values from: az sphere device list-attached. Specify the ID, IP address, or Local Connection ID of an attached device",
                  args: { name: "device" },
                },
                {
                  name: "--private-key-file",
                  description:
                    "The path to a client private key .pem file. Required when adding a certificate of type 'client'. You can provide a relative or absolute path",
                  args: { name: "private-key-file" },
                },
                {
                  name: ["--private-key-password", "-w"],
                  description:
                    "Password for the client private key. Required when adding a client private key that is encrypted",
                  args: { name: "private-key-password" },
                },
              ],
            },
            {
              name: "delete",
              description:
                "Delete a certificate in the attached device's certificate store",
              options: [
                {
                  name: ["--certificate", "-c"],
                  description:
                    "The name of the certificate to delete. value from: az sphere device certificate list",
                  args: { name: "certificate" },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Values from: az sphere device list-attached. Specify the ID, IP address, or Local Connection ID of an attached device",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List certificates in the attached device's certificate store",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Values from: az sphere device list-attached. Specify the ID, IP address, or Local Connection ID of an attached device",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show details of a certificate in the attached device's certificate store",
              options: [
                {
                  name: ["--certificate", "-c"],
                  description:
                    "The certificate name of the certificate for which to show the details. value from: az sphere device certificate list",
                  args: { name: "certificate" },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Values from: az sphere device list-attached. Specify the ID, IP address, or Local Connection ID of an attached device",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "show-quota",
              description:
                "Show the available free space in the attached device's certificate store",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Values from: az sphere device list-attached. Specify the ID, IP address, or Local Connection ID of an attached device",
                  args: { name: "device" },
                },
              ],
            },
          ],
        },
        {
          name: "image",
          description: "Manage device images",
          subcommands: [
            {
              name: "list-installed",
              description: "List the images currently on the attached device",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
                {
                  name: ["--full", "-f"],
                  description:
                    "Lists all images on the device; rather than only applications",
                },
              ],
            },
          ],
        },
        {
          name: "manufacturing-state",
          description: "Manage the manufacturing state of attached devices",
          subcommands: [
            {
              name: "show",
              description:
                "Show the manufacturing state of the attached device",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "update",
              description:
                "Update the manufacturing state of the attached device. Caution: manufacturing state changes are permanent and irreversible",
              options: [
                {
                  name: ["--state", "-s"],
                  description: "The manufacturing state of the attached device",
                  args: {
                    name: "state",
                    suggestions: ["DeviceComplete", "Module1Complete"],
                  },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
          ],
        },
        {
          name: "network",
          description:
            "Provides information about the status of network interfaces on the attached device",
          subcommands: [
            {
              name: "disable",
              description: "Disable a network interface on the attached device",
              options: [
                {
                  name: "--interface",
                  description:
                    "The interface to enable. value from: az sphere device network list-interfaces",
                  args: { name: "interface" },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "enable",
              description: "Enable a network interface on the attached device",
              options: [
                {
                  name: "--interface",
                  description:
                    "The interface to enable. value from: az sphere device network list-interfaces",
                  args: { name: "interface" },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "list-firewall-rules",
              description: "List firewall rules for the attached device",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "list-interfaces",
              description:
                "List the network interfaces for the attached device",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "show-diagnostics",
              description:
                "Show diagnostics for one or all Wi-Fi networks on the attached device",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
                {
                  name: ["--network", "-n"],
                  description:
                    "The network for which to show diagnostics. value from: az sphere device network list-interfaces",
                  args: { name: "network" },
                },
              ],
            },
            {
              name: "show-status",
              description: "Show the network status for the attached device",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "update-interface",
              description:
                "Update the network interface configuration for the attached device",
              options: [
                {
                  name: "--hardware-address",
                  description: "Specify the device hardware address to be set",
                  args: { name: "hardware-address" },
                  isRequired: true,
                },
                {
                  name: "--interface",
                  description:
                    "The interface to update. value from: az sphere device network list-interfaces",
                  args: { name: "interface" },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "proxy",
              description: "Manage proxy address use for network connection",
              subcommands: [
                {
                  name: "apply",
                  description:
                    "Configure the network proxy on the attached device",
                  options: [
                    {
                      name: ["--address", "-a"],
                      description: "The network address of the proxy",
                      args: { name: "address" },
                      isRequired: true,
                    },
                    {
                      name: ["--authentication", "-t"],
                      description:
                        "If the proxy requires a user name and password, set this to basic, otherwise anonymous. Allowed values are anonymous, basic",
                      args: { name: "authentication" },
                      isRequired: true,
                    },
                    {
                      name: ["--port", "-r"],
                      description: "The port on the network address to be used",
                      args: { name: "port" },
                      isRequired: true,
                    },
                    {
                      name: ["--device", "-d"],
                      description:
                        "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                      args: { name: "device" },
                    },
                    {
                      name: "--disable",
                      description:
                        "Disable network proxy on the attached device",
                    },
                    {
                      name: "--enable",
                      description:
                        "Enable network proxy on the attached device",
                    },
                    {
                      name: ["--no-proxy-addresses", "-n"],
                      description:
                        "Array of space-separated network addresses the device should avoid for proxy connection",
                      args: { name: "no-proxy-addresses" },
                    },
                    {
                      name: ["--password", "-p"],
                      description:
                        "For Basic Authentication, password used for proxy authentication",
                      args: { name: "password" },
                    },
                    {
                      name: ["--username", "-u"],
                      description:
                        "For Basic Authentication, username used for proxy authentication",
                      args: { name: "username" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description: "Delete proxy connection on the attached device",
                  options: [
                    {
                      name: ["--device", "-d"],
                      description:
                        "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                      args: { name: "device" },
                    },
                  ],
                },
                {
                  name: "show",
                  description: "Show proxy connection on the attached device",
                  options: [
                    {
                      name: ["--device", "-d"],
                      description:
                        "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                      args: { name: "device" },
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "sideload",
          description: "Deploy and manage applications on the attached device",
          subcommands: [
            {
              name: "delete",
              description: "Delete applications from the attached device",
              options: [
                {
                  name: ["--component-id", "-i"],
                  description:
                    "The ID of the component to delete; by default, all applications are deleted",
                  args: { name: "component-id" },
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
                {
                  name: ["--except-component-ids", "-e"],
                  description:
                    "Space-separated IDs of components to exclude from the set of applications to be deleted",
                  args: { name: "except-component-ids" },
                },
              ],
            },
            {
              name: "deploy",
              description: "Deploy an application to the attached device",
              options: [
                {
                  name: ["--image-package", "-p"],
                  description:
                    "The path and filename of the image package file to deploy. You can provide a relative or absolute path. (Path)",
                  args: { name: "image-package" },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
                {
                  name: "--force",
                  description:
                    "Force the deployment of an image using a Beta API that may no longer be supported",
                },
                {
                  name: ["--manual-start", "-m"],
                  description:
                    "Do not automatically start the application after sideload",
                },
              ],
            },
            {
              name: "set-deployment-timeout",
              description: "Set deployment timeout in seconds",
              options: [
                {
                  name: ["--value", "-v"],
                  description: "Timeout value in seconds",
                  args: { name: "value" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show-deployment-timeout",
              description: "Show deployment timeout in seconds",
            },
          ],
        },
        {
          name: "wifi",
          description: "Manage Wi-Fi configurations for the attached device",
          subcommands: [
            {
              name: "add",
              description: "Add a Wi-Fi network on the attached device",
              options: [
                {
                  name: ["--ssid", "-s"],
                  description: "The SSID of the new network",
                  args: { name: "ssid" },
                  isRequired: true,
                },
                {
                  name: "--client-cert-id",
                  description:
                    "[EAP-TLS] - A string value (up to 16 characters) that identifies the client certificate (containing both the public and private key). Required to set up an EAP-TLS network",
                  args: { name: "client-cert-id" },
                },
                {
                  name: "--client-id",
                  description:
                    "User@domain [EAP-TLS] ID recognized for authentication by this network's RADIUS server. Required for some EAP-TLS networks",
                  args: { name: "client-id" },
                },
                {
                  name: "--config-name",
                  description:
                    "A string value (up to 16 characters) that specifies the name for this network configuration",
                  args: { name: "config-name" },
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
                {
                  name: ["--psk", "-p"],
                  description:
                    "The WPA/WPA2 PSK for the new network. Do not set this if connecting to an open network",
                  args: { name: "psk" },
                },
                {
                  name: "--root-ca-cert-id",
                  description:
                    "[EAP-TLS] - A string value (up to 16 characters) that identifies the server's root CA certificate for EAP-TLS networks where the device authenticates the server",
                  args: { name: "root-ca-cert-id" },
                },
                {
                  name: "--targeted-scan",
                  description:
                    "Attempt to connect to an SSID even if not advertised",
                  args: {
                    name: "targeted-scan",
                    suggestions: ["false", "true"],
                  },
                },
              ],
            },
            {
              name: "disable",
              description: "Disable a Wi-Fi connection on the attached device",
              options: [
                {
                  name: ["--id", "-i"],
                  description: "The ID of the network to disable",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "enable",
              description: "Enable a Wi-Fi network on the attached device",
              options: [
                {
                  name: ["--id", "-i"],
                  description: "The ID of the network to disable",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "forget",
              description: "Forget a Wi-Fi network on the attached device",
              options: [
                {
                  name: ["--id", "-i"],
                  description: "The ID of the network to disable",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List the current Wi-Fi configurations for the attached device",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "reload-config",
              description:
                "Reload the Wi-Fi network configuration on the attached device. Use this command after you add or remove a certificate (azsphere device certificate) to ensure that EAP-TLS networks use the most recent contents of the certificate store",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "scan",
              description:
                "Scan for available Wi-Fi networks visible to the attached device",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "show",
              description:
                "Show details of a Wi-Fi network on the attached device",
              options: [
                {
                  name: ["--id", "-i"],
                  description: "The ID of the network to show details for",
                  args: { name: "id" },
                  isRequired: true,
                },
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
            {
              name: "show-status",
              description:
                "Show the status of the wireless interface on the attached device",
              options: [
                {
                  name: ["--device", "-d"],
                  description:
                    "The device to run the command on when multiple devices are attached. Specify the ID, IP address, or Local Connection ID of the device. value from: az sphere device list-attached",
                  args: { name: "device" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "device-group",
      description: "Manage device groups in your Azure Sphere Catalog",
      subcommands: [
        {
          name: "create",
          description: "Create a device group",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--description", "-d"],
              description: "Description of the device group",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Alphanumeric name of the device group",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--product", "-p"],
              description:
                "The product name. value from: az sphere product list",
              args: { name: "product" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--allow-crash-dumps-collection", "-cd"],
              description:
                "Provide consent for collection of crash dumps by Microsoft for this device-group. For more information, see https://aka.ms/AzureSphereCrashDumpsCollection",
              args: {
                name: "allow-crash-dumps-collection",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--application-update", "-a"],
              description: "Application update policy for this device group",
              args: {
                name: "application-update",
                suggestions: ["No3rdPartyAppUpdates", "UpdateAll"],
              },
            },
            {
              name: ["--os-feed", "-f"],
              description: "The OS feed type to use for OS updates",
              args: { name: "os-feed", suggestions: ["Retail", "RetailEval"] },
            },
            {
              name: ["--regional-data-boundary", "-r"],
              description: "Regional data boundary for this device group",
              args: {
                name: "regional-data-boundary",
                suggestions: ["EU", "None"],
              },
            },
          ],
        },
        {
          name: "create-defaults",
          description: "Create default device groups targeting a product",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--product", "-p"],
              description:
                "The product name. value from: az sphere product list",
              args: { name: "product" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the specified device group",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The device group name. value from: az sphere device-group list",
              args: { name: "device-group" },
              isRequired: true,
            },
            {
              name: ["--product", "-p"],
              description:
                "The product for which to delete the device groups. value from: az sphere product list",
              args: { name: "product" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List all device groups in an Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--device-group", "-dg"],
              description: "List all device groups that have a specified name",
              args: { name: "device-group" },
            },
            {
              name: ["--product", "-p"],
              description:
                "List all device groups in a product. value from: az sphere product list",
              args: { name: "product" },
            },
          ],
        },
        {
          name: "show",
          description: "Show a device group's details",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The device group to show. value from: az sphere device-group list",
              args: { name: "device-group" },
              isRequired: true,
            },
            {
              name: ["--product", "-p"],
              description:
                "The product name for which to show the device group. value from: az sphere product list",
              args: { name: "product" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update a device group's details",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--device-group", "-dg"],
              description:
                "The device group name. value from: az sphere device-group list",
              args: { name: "device-group" },
              isRequired: true,
            },
            {
              name: ["--product", "-p"],
              description:
                "The product name. value from: az sphere product list",
              args: { name: "product" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--allow-crash-dumps-collection", "-cd"],
              description:
                "Provide consent for collection of crash dumps by Microsoft for this device-group. For more information, see https://aka.ms/AzureSphereCrashDumpsCollection",
              args: {
                name: "allow-crash-dumps-collection",
                suggestions: ["Disabled", "Enabled"],
              },
            },
            {
              name: ["--application-update", "-a"],
              description: "Application update policy for this device group",
              args: {
                name: "application-update",
                suggestions: ["No3rdPartyAppUpdates", "UpdateAll"],
              },
            },
            {
              name: ["--description", "-d"],
              description: "A new description of the device group",
              args: { name: "description" },
            },
            {
              name: ["--os-feed", "-f"],
              description: "The OS feed type to use for OS updates",
              args: { name: "os-feed", suggestions: ["Retail", "RetailEval"] },
            },
            {
              name: ["--regional-data-boundary", "-r"],
              description: "Regional data boundary for this device group",
              args: {
                name: "regional-data-boundary",
                suggestions: ["EU", "None"],
              },
            },
          ],
        },
      ],
    },
    {
      name: "get-support-data",
      description:
        "Gather diagnostic data about your system, cloud and device configurations",
      options: [
        {
          name: ["--catalog", "-c"],
          description:
            "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
          args: { name: "catalog" },
          isRequired: true,
        },
        {
          name: ["--output-file", "-of"],
          description:
            "The path and filename of the .zip file to save the support data in. You can provide a relative or absolute path",
          args: { name: "output-file" },
          isRequired: true,
        },
        {
          name: ["--resource-group", "-g"],
          description:
            "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
          args: { name: "resource-group" },
          isRequired: true,
        },
      ],
    },
    {
      name: "image",
      description: "Manage images in your Azure Sphere Catalog",
      subcommands: [
        {
          name: "add",
          description:
            "Add an image to your Azure Sphere Catalog from your local machine",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--image-path", "-img"],
              description: "Path to a local image file",
              args: { name: "image-path" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--regional-data-boundary", "-r"],
              description: "Regional data boundary for this image",
              args: {
                name: "regional-data-boundary",
                suggestions: ["EU", "None"],
              },
            },
          ],
        },
        {
          name: "list",
          description: "List all images in your Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list-targeted",
          description:
            "List images uploaded in your Azure Sphere Catalog that will be installed when the device is updated",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--device", "-d"],
              description:
                "The device to target for this command. This is required when no device or multiple devices are attached, to disambiguate which device to target. If the device is attached, you may provide either Device ID, IP address, or Local Connection ID. Values from: az sphere device list-attached. Otherwise you must provide the Device ID only",
              args: { name: "device" },
            },
            {
              name: ["--full", "-f"],
              description: "List all images in your Azure Sphere Catalog",
            },
          ],
        },
        {
          name: "show",
          description:
            "Show details of an existing image from your Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: "--image",
              description: "The image ID. value from: az sphere image list",
              args: { name: "image" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "image-package",
      description: "Manage image packaging",
      subcommands: [
        {
          name: "show",
          description: "Show details of a given image package",
          options: [
            {
              name: "--image-package",
              description:
                "Path to the image package file to show details for. You can provide a relative or absolute path",
              args: { name: "image-package" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "product",
      description: "Manage products in your Azure Sphere Catalog",
      subcommands: [
        {
          name: "create",
          description: "Create a new product in your Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--description", "-d"],
              description: "A description of the product",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "Alphanumeric name of the product",
              args: { name: "name" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Delete the specified product",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--product", "-p"],
              description:
                "The product name. value from: az sphere product list",
              args: { name: "product" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List all products in your Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show details of a product in your Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--product", "-p"],
              description:
                "The product name. value from: az sphere product list",
              args: { name: "product" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update a product's details in your Azure Sphere Catalog",
          options: [
            {
              name: ["--catalog", "-c"],
              description:
                "The Azure Sphere Catalog in which to perform this operation. Specify Azure Sphere Catalog name. You can configure the default Azure Sphere Catalog using az config set defaults.sphere.catalog=<name>. Values from: az sphere catalog list",
              args: { name: "catalog" },
              isRequired: true,
            },
            {
              name: ["--description", "-d"],
              description:
                "The new product description to update the product to",
              args: { name: "description" },
              isRequired: true,
            },
            {
              name: ["--product", "-p"],
              description:
                "The product name. value from: az sphere product list",
              args: { name: "product" },
              isRequired: true,
            },
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of the Azure resource group. You can configure the default group using az config set defaults.group=<name>. Values from: az group list",
              args: { name: "resource-group" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
