const completionSpec: Fig.Spec = {
  name: "iot",
  description: "Manage Internet of Things (IoT) assets",
  subcommands: [
    {
      name: "central",
      description: "Manage IoT Central resources",
      subcommands: [
        {
          name: "api-token",
          description: "Manage API tokens for your IoT Central application",
          subcommands: [
            {
              name: "create",
              description:
                "Generate an API token associated with your IoT Central application",
            },
            {
              name: "delete",
              description:
                "Delete an API token associated with your IoT Central application",
            },
            {
              name: "list",
              description:
                "Get the list of API tokens associated with your IoT Central application",
            },
            {
              name: "show",
              description:
                "Get details for an API token associated with your IoT Central application",
            },
          ],
        },
        {
          name: "app",
          description: "Manage IoT Central applications",
          subcommands: [
            {
              name: "create",
              description: "Create an IoT Central application",
            },
            {
              name: "delete",
              description: "Delete an IoT Central application",
            },
            { name: "list", description: "List IoT Central applications" },
            {
              name: "show",
              description: "Get the details of an IoT Central application",
            },
            {
              name: "update",
              description: "Update metadata for an IoT Central application",
            },
          ],
        },
        {
          name: "device",
          description: "Manage and configure IoT Central devices",
          subcommands: [
            {
              name: "command",
              description: "Run device commands",
              subcommands: [
                {
                  name: "history",
                  description:
                    "Get the details for the latest command request and response sent to the device",
                },
                {
                  name: "run",
                  description:
                    "Run a command on a device and view associated response. Does NOT monitor property updates that the command may perform",
                },
              ],
            },
            {
              name: "compute-device-key",
              description: "Generate a derived device SAS key",
            },
            { name: "create", description: "Create a device in IoT Central" },
            { name: "delete", description: "Delete a device from IoT Central" },
            {
              name: "list",
              description:
                "Get the list of devices for an IoT Central application",
            },
            {
              name: "manual-failback",
              description:
                "Reverts the previously executed failover command by moving the device back to it's original IoT Hub",
            },
            {
              name: "manual-failover",
              description:
                "Execute a manual failover of device across multiple IoT Hubs to validate device firmware's ability to reconnect using DPS to a different IoT Hub",
            },
            {
              name: "registration-info",
              description:
                "Get registration info on device(s) from IoT Central",
            },
            { name: "show", description: "Get a device from IoT Central" },
            {
              name: "show-credentials",
              description: "Get device credentials from IoT Central",
            },
            {
              name: "twin",
              description: "Manage IoT Central device twins",
              subcommands: [
                {
                  name: "show",
                  description: "Get the device twin from IoT Hub",
                },
              ],
            },
          ],
        },
        {
          name: "device-group",
          description: "Manage and configure IoT Central device groups",
          subcommands: [
            {
              name: "list",
              description:
                "Get the list of device groups for an IoT Central application",
            },
          ],
        },
        {
          name: "device-template",
          description: "Manage and configure IoT Central device templates",
          subcommands: [
            {
              name: "create",
              description: "Create a device template in IoT Central",
            },
            {
              name: "delete",
              description: "Delete a device template from IoT Central",
            },
            {
              name: "list",
              description:
                "Get the list of device templates for an IoT Central application",
            },
            {
              name: "show",
              description: "Get a device template from IoT Central",
            },
          ],
        },
        {
          name: "diagnostics",
          description: "Perform application and device level diagnostics",
          subcommands: [
            {
              name: "monitor-events",
              description:
                "View device telemetry messages sent to the IoT Central app",
            },
            {
              name: "monitor-properties",
              description:
                "View desired and reported properties sent to/from the IoT Central app",
            },
            {
              name: "registration-summary",
              description:
                "View the registration summary of all the devices in an app",
            },
            {
              name: "validate-messages",
              description:
                "Validate messages sent to the IoT Hub for an IoT Central app",
            },
            {
              name: "validate-properties",
              description:
                "Validate reported properties sent to the IoT Central application",
            },
          ],
        },
        {
          name: "file-upload-config",
          description: "Manage and configure IoT Central file upload",
          subcommands: [
            {
              name: "create",
              description: "Create file upload storage account configuration",
            },
            {
              name: "delete",
              description: "Delete file upload storage account configuration",
            },
            {
              name: "show",
              description:
                "Get the details of file upload storage account configuration",
            },
          ],
        },
        {
          name: "job",
          description:
            "Manage and configure jobs for an IoT Central application",
          subcommands: [
            {
              name: "create",
              description: "Create and execute a job via its job definition",
            },
            { name: "get-devices", description: "Get job device statuses" },
            {
              name: "list",
              description:
                "Get the list of jobs for an IoT Central application",
            },
            {
              name: "rerun",
              description: "Re-run a job on all failed devices",
            },
            { name: "resume", description: "Resume a stopped job" },
            { name: "show", description: "Get the details of a job by ID" },
            { name: "stop", description: "Stop a running job" },
          ],
        },
        {
          name: "organization",
          description:
            "Manage and configure organizations for an IoT Central application",
          subcommands: [
            {
              name: "create",
              description: "Create an organization in the application",
            },
            { name: "delete", description: "Delete an organization by ID" },
            {
              name: "list",
              description:
                "Get the list of organizations for an IoT Central application",
            },
            {
              name: "show",
              description: "Get the details of a organization by ID",
            },
          ],
        },
        {
          name: "role",
          description:
            "Manage and configure roles for an IoT Central application",
          subcommands: [
            {
              name: "list",
              description:
                "Get the list of roles for an IoT Central application",
            },
            { name: "show", description: "Get the details of a role by ID" },
          ],
        },
        {
          name: "user",
          description: "Manage and configure IoT Central users",
          subcommands: [
            { name: "create", description: "Add a user to the application" },
            {
              name: "delete",
              description: "Delete a user from the application",
            },
            {
              name: "list",
              description: "Get list of users for an IoT Central application",
            },
            { name: "show", description: "Get the details of a user by ID" },
          ],
        },
      ],
    },
    {
      name: "device",
      description:
        "Leverage device-to-cloud and cloud-to-device messaging capabilities",
      subcommands: [
        {
          name: "c2d-message",
          description: "Cloud-to-device messaging commands",
          subcommands: [
            {
              name: "abandon",
              description: "Abandon a cloud-to-device message",
            },
            {
              name: "complete",
              description: "Complete a cloud-to-device message",
            },
            {
              name: "purge",
              description:
                "Purge cloud-to-device message queue for a target device",
            },
            {
              name: "receive",
              description: "Receive a cloud-to-device message",
            },
            {
              name: "reject",
              description: "Reject or deadletter a cloud-to-device message",
            },
            { name: "send", description: "Send a cloud-to-device message" },
          ],
        },
        {
          name: "send-d2c-message",
          description:
            "Send an mqtt device-to-cloud message. The command supports sending messages with application and system properties.\n\nNote: The command only works for symmetric key auth (SAS) based devices",
        },
        {
          name: "simulate",
          description:
            "Simulate a device in an Azure IoT Hub.\n\nWhile the device simulation is running, the device will automatically receive and acknowledge cloud-to-device (c2d) messages. For mqtt simulation, all c2d messages will be acknowledged with completion. For http simulation c2d acknowledgement is based on user selection which can be complete, reject or abandon. The mqtt simulation also supports direct method invocation which can be acknowledged by a response status code and response payload.\n\nNote: MQTT simulation is only supported for symmetric key auth (SAS) based devices.\n\nNote: The command by default will set content-type to application/json and content-encoding to utf-8. This can be overriden",
        },
        {
          name: "upload-file",
          description:
            "Upload a local file as a device to a pre-configured blob storage container",
        },
      ],
    },
    {
      name: "dps",
      description: "Manage Azure IoT Hub Device Provisioning Service",
      subcommands: [
        {
          name: "access-policy",
          description:
            "Manage Azure IoT Hub Device Provisioning Service access policies",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new shared access policy in an Azure IoT Hub device provisioning service",
            },
            {
              name: "delete",
              description:
                "Delete a shared access policies in an Azure IoT Hub device provisioning service",
            },
            {
              name: "list",
              description:
                "List all shared access policies in an Azure IoT Hub device provisioning service",
            },
            {
              name: "show",
              description:
                "Show details of a shared access policies in an Azure IoT Hub device provisioning service",
            },
            {
              name: "update",
              description:
                "Update a shared access policy in an Azure IoT Hub device provisioning service",
            },
          ],
        },
        {
          name: "certificate",
          description:
            "Manage Azure IoT Hub Device Provisioning Service certificates",
          subcommands: [
            {
              name: "create",
              description:
                "Create/upload an Azure IoT Hub Device Provisioning Service certificate",
            },
            {
              name: "delete",
              description:
                "Delete an Azure IoT Hub Device Provisioning Service certificate",
            },
            {
              name: "generate-verification-code",
              description:
                "Generate a verification code for an Azure IoT Hub Device Provisioning Service certificate",
            },
            {
              name: "list",
              description:
                "List all certificates contained within an Azure IoT Hub device provisioning service",
            },
            {
              name: "show",
              description:
                "Show information about a particular Azure IoT Hub Device Provisioning Service certificate",
            },
            {
              name: "update",
              description:
                "Update an Azure IoT Hub Device Provisioning Service certificate",
            },
            {
              name: "verify",
              description:
                "Verify an Azure IoT Hub Device Provisioning Service certificate",
            },
          ],
        },
        {
          name: "compute-device-key",
          description: "Generate a derived device SAS key",
        },
        {
          name: "create",
          description: "Create an Azure IoT Hub device provisioning service",
        },
        {
          name: "delete",
          description: "Delete an Azure IoT Hub device provisioning service",
        },
        {
          name: "enrollment",
          description:
            "Manage enrollments in an Azure IoT Hub Device Provisioning Service",
          subcommands: [
            {
              name: "create",
              description:
                "Create a device enrollment in an Azure IoT Hub Device Provisioning Service",
            },
            {
              name: "delete",
              description:
                "Delete a device enrollment in an Azure IoT Hub Device Provisioning Service",
            },
            {
              name: "list",
              description:
                "List device enrollments in an Azure IoT Hub Device Provisioning Service",
            },
            {
              name: "show",
              description:
                "Get device enrollment details in an Azure IoT Hub Device Provisioning Service",
            },
            {
              name: "update",
              description:
                "Update a device enrollment in an Azure IoT Hub Device Provisioning Service",
            },
          ],
        },
        {
          name: "enrollment-group",
          description: "Manage Azure IoT Hub Device Provisioning Service",
          subcommands: [
            {
              name: "create",
              description:
                "Create an enrollment group in an Azure IoT Hub Device Provisioning Service",
            },
            {
              name: "delete",
              description:
                "Delete an enrollment group in an Azure IoT Hub Device Provisioning Service",
            },
            {
              name: "list",
              description:
                "List enrollments groups in an Azure IoT Hub Device Provisioning Service",
            },
            {
              name: "show",
              description:
                "Get the details of an enrollment group in an Azure IoT Hub Device Provisioning Service",
            },
            {
              name: "update",
              description:
                "Update an enrollment group in an Azure IoT Hub Device Provisioning Service",
            },
          ],
        },
        {
          name: "linked-hub",
          description:
            "Manage Azure IoT Hub Device Provisioning Service linked IoT hubs",
          subcommands: [
            {
              name: "create",
              description:
                "Create a linked IoT hub in an Azure IoT Hub device provisioning service",
            },
            {
              name: "delete",
              description:
                "Update a linked IoT hub in an Azure IoT Hub device provisioning service",
            },
            {
              name: "list",
              description:
                "List all linked IoT hubs in an Azure IoT Hub device provisioning service",
            },
            {
              name: "show",
              description:
                "Show details of a linked IoT hub in an Azure IoT Hub device provisioning service",
            },
            {
              name: "update",
              description:
                "Update a linked IoT hub in an Azure IoT Hub device provisioning service",
            },
          ],
        },
        {
          name: "list",
          description: "List Azure IoT Hub device provisioning services",
        },
        {
          name: "registration",
          description:
            "Manage Azure IoT Hub Device Provisioning Service registrations",
          subcommands: [
            {
              name: "delete",
              description:
                "Delete a device registration in an Azure IoT Hub Device Provisioning Service",
            },
            {
              name: "list",
              description:
                "List device registration state in an Azure IoT Hub Device Provisioning Service enrollment group",
            },
            {
              name: "show",
              description:
                "Get the device registration state in an Azure IoT Hub Device Provisioning Service",
            },
          ],
        },
        {
          name: "show",
          description:
            "Get the details of an Azure IoT Hub device provisioning service",
        },
        {
          name: "update",
          description: "Update an Azure IoT Hub device provisioning service",
        },
      ],
    },
    {
      name: "edge",
      description: "Manage IoT solutions on the Edge",
      subcommands: [
        {
          name: "deployment",
          description: "Manage IoT Edge deployments at scale",
          subcommands: [
            {
              name: "create",
              description: "Create an IoT Edge deployment in a target IoT Hub",
            },
            { name: "delete", description: "Delete an IoT Edge deployment" },
            {
              name: "list",
              description: "List IoT Edge deployments in an IoT Hub",
            },
            {
              name: "show",
              description: "Get the details of an IoT Edge deployment",
            },
            {
              name: "show-metric",
              description:
                "Evaluate a target system metric defined in an IoT Edge deployment",
            },
            {
              name: "update",
              description:
                "Update specified properties of an IoT Edge deployment.\n\nUse --set followed by property assignments for updating a deployment.\n\nNote: IoT Edge deployment content is immutable. Deployment properties that can be updated are 'labels', 'metrics', 'priority' and 'targetCondition'",
            },
          ],
        },
        {
          name: "set-modules",
          description: "Set edge modules on a single device",
        },
      ],
    },
    {
      name: "hub",
      description: "Manage Azure IoT hubs",
      subcommands: [
        {
          name: "certificate",
          description: "Manage IoT Hub certificates",
          subcommands: [
            {
              name: "create",
              description: "Create/upload an Azure IoT Hub certificate",
            },
            {
              name: "delete",
              description: "Deletes an Azure IoT Hub certificate",
            },
            {
              name: "generate-verification-code",
              description:
                "Generates a verification code for an Azure IoT Hub certificate",
            },
            {
              name: "list",
              description:
                "Lists all certificates contained within an Azure IoT Hub",
            },
            {
              name: "show",
              description:
                "Shows information about a particular Azure IoT Hub certificate",
            },
            {
              name: "update",
              description: "Update an Azure IoT Hub certificate",
            },
            {
              name: "verify",
              description: "Verifies an Azure IoT Hub certificate",
            },
          ],
        },
        {
          name: "configuration",
          description:
            "Manage IoT automatic device management configuration at scale",
          subcommands: [
            {
              name: "create",
              description:
                "Create an IoT automatic device management configuration in a target IoT Hub",
            },
            {
              name: "delete",
              description: "Delete an IoT device configuration",
            },
            {
              name: "list",
              description:
                "List IoT automatic device management configurations in an IoT Hub",
            },
            {
              name: "show",
              description:
                "Get the details of an IoT automatic device management configuration",
            },
            {
              name: "show-metric",
              description:
                "Evaluate a target user or system metric defined in an IoT device configuration",
            },
            {
              name: "update",
              description:
                "Update specified properties of an IoT automatic device management configuration.\n\nUse --set followed by property assignments for updating a configuration.\n\nNote: Configuration content is immutable. Configuration properties that can be updated are 'labels', 'metrics', 'priority' and 'targetCondition'",
            },
          ],
        },
        {
          name: "connection-string",
          description: "Manage IoT Hub connection strings",
          subcommands: [
            {
              name: "show",
              description:
                "Show the connection strings for the specified IoT Hubs using the given policy name and key",
            },
          ],
        },
        {
          name: "consumer-group",
          description: "Manage the event hub consumer groups of an IoT hub",
          subcommands: [
            {
              name: "create",
              description: "Create an event hub consumer group",
            },
            {
              name: "delete",
              description: "Delete an event hub consumer group",
            },
            { name: "list", description: "List event hub consumer groups" },
            {
              name: "show",
              description: "Get the details for an event hub consumer group",
            },
          ],
        },
        { name: "create", description: "Create an Azure IoT hub" },
        { name: "delete", description: "Delete an IoT hub" },
        {
          name: "device-identity",
          description: "Manage IoT devices",
          subcommands: [
            {
              name: "children",
              description: "Manage IoT device's children device",
              subcommands: [
                {
                  name: "add",
                  description:
                    "Add specified space-separated list of device ids as children of specified edge device",
                },
                {
                  name: "list",
                  description: "Outputs list of assigned child devices",
                },
                {
                  name: "remove",
                  description:
                    "Remove devices as children from specified edge device",
                },
              ],
            },
            {
              name: "connection-string",
              description: "Manage IoT device's connection string",
              subcommands: [
                {
                  name: "show",
                  description: "Show a given IoT Hub device connection string",
                },
              ],
            },
            { name: "create", description: "Create a device in an IoT Hub" },
            { name: "delete", description: "Delete an IoT Hub device" },
            {
              name: "export",
              description:
                "Export all device identities from an IoT Hub to an Azure Storage blob container. For inline blob container SAS uri input, please review the input rules of your environment",
            },
            {
              name: "import",
              description:
                "Import device identities to an IoT Hub from a blob. For inline blob container SAS uri input, please review the input rules of your environment",
            },
            { name: "list", description: "List devices in an IoT Hub" },
            {
              name: "parent",
              description: "Manage IoT device's parent device",
              subcommands: [
                {
                  name: "set",
                  description: "Set the parent device of the specified device",
                },
                {
                  name: "show",
                  description: "Get the parent device of the specified device",
                },
              ],
            },
            {
              name: "renew-key",
              description:
                "Renew target keys of an IoT Hub device with sas authentication",
            },
            {
              name: "show",
              description: "Get the details of an IoT Hub device",
            },
            { name: "update", description: "Update an IoT Hub device" },
          ],
        },
        {
          name: "devicestream",
          description: "Manage device streams of an IoT hub",
          subcommands: [
            {
              name: "show",
              description: "Get IoT Hub's device streams endpoints",
            },
          ],
        },
        {
          name: "device-twin",
          description: "Manage IoT device twin configuration",
          subcommands: [
            {
              name: "replace",
              description: "Replace device twin definition with target json",
            },
            { name: "show", description: "Get a device twin definition" },
            {
              name: "update",
              description: "Update device twin desired properties and tags",
            },
          ],
        },
        {
          name: "digital-twin",
          description:
            "Manipulate and interact with the digital twin of an IoT Hub device",
          subcommands: [
            {
              name: "invoke-command",
              description:
                "Invoke a root or component level command of a digital twin device",
            },
            {
              name: "show",
              description: "Show the digital twin of an IoT Hub device",
            },
            {
              name: "update",
              description:
                "Update the read-write properties of a digital twin device via JSON patch specification",
            },
          ],
        },
        {
          name: "distributed-tracing",
          description: "Manage distributed settings per-device",
          subcommands: [
            {
              name: "show",
              description: "Get the distributed tracing settings for a device",
            },
            {
              name: "update",
              description:
                "Update the distributed tracing options for a device",
            },
          ],
        },
        {
          name: "generate-sas-token",
          description:
            "Generate a SAS token for a target IoT Hub, device or module",
        },
        {
          name: "identity",
          description: "Manage identities of an Azure IoT hub",
          subcommands: [
            {
              name: "assign",
              description: "Assign managed identities to an IoT Hub",
            },
            {
              name: "remove",
              description: "Remove managed identities from an IoT Hub",
            },
            {
              name: "show",
              description: "Show the identity properties of an IoT Hub",
            },
          ],
        },
        { name: "invoke-device-method", description: "Invoke a device method" },
        {
          name: "invoke-module-method",
          description: "Invoke an Edge module method",
        },
        {
          name: "job",
          description: "Manage IoT Hub jobs (v2)",
          subcommands: [
            { name: "cancel", description: "Cancel an IoT Hub job" },
            {
              name: "create",
              description: "Create and schedule an IoT Hub job for execution",
            },
            {
              name: "list",
              description: "List the historical jobs of an IoT Hub",
            },
            {
              name: "show",
              description: "Show details of an existing IoT Hub job",
            },
          ],
        },
        { name: "list", description: "List IoT hubs" },
        { name: "list-skus", description: "List available pricing tiers" },
        {
          name: "manual-failover",
          description:
            "Initiate a manual failover for the IoT Hub to the geo-paired disaster recovery region",
        },
        {
          name: "message-enrichment",
          description: "Manage message enrichments for endpoints of an IoT Hub",
          subcommands: [
            {
              name: "create",
              description:
                "Create a message enrichment for chosen endpoints in your IoT Hub",
            },
            {
              name: "delete",
              description:
                "Delete a message enrichment in your IoT hub (by key)",
            },
            {
              name: "list",
              description:
                "Get information on all message enrichments for your IoT Hub",
            },
            {
              name: "update",
              description:
                "Update a message enrichment in your IoT hub (by key)",
            },
          ],
        },
        {
          name: "module-identity",
          description: "Manage IoT device modules",
          subcommands: [
            {
              name: "connection-string",
              description: "Manage IoT device module's connection string",
              subcommands: [
                {
                  name: "show",
                  description:
                    "Show a target IoT device module connection string",
                },
              ],
            },
            {
              name: "create",
              description:
                "Create a module on a target IoT device in an IoT Hub",
            },
            { name: "delete", description: "Delete a device in an IoT Hub" },
            {
              name: "list",
              description:
                "List modules located on an IoT device in an IoT Hub",
            },
            {
              name: "renew-key",
              description:
                "Renew target keys of an IoT Hub device module with sas authentication",
            },
            {
              name: "show",
              description:
                "Get the details of an IoT device module in an IoT Hub",
            },
            { name: "update", description: "Update an IoT Hub device module" },
          ],
        },
        {
          name: "module-twin",
          description: "Manage IoT device module twin configuration",
          subcommands: [
            {
              name: "replace",
              description: "Replace a module twin definition with target json",
            },
            { name: "show", description: "Show a module twin definition" },
            {
              name: "update",
              description: "Update module twin desired properties and tags",
            },
          ],
        },
        {
          name: "monitor-events",
          description: "Monitor device telemetry & messages sent to an IoT Hub",
        },
        {
          name: "monitor-feedback",
          description:
            "Monitor feedback sent by devices to acknowledge cloud-to-device (C2D) messages",
        },
        {
          name: "policy",
          description: "Manage shared access policies of an IoT hub",
          subcommands: [
            {
              name: "create",
              description: "Create a new shared access policy in an IoT hub",
            },
            {
              name: "delete",
              description: "Delete a shared access policy from an IoT hub",
            },
            {
              name: "list",
              description: "List shared access policies of an IoT hub",
            },
            {
              name: "renew-key",
              description:
                "Regenerate keys of a shared access policy of an IoT hub",
            },
            {
              name: "show",
              description:
                "Get the details of a shared access policy of an IoT hub",
            },
          ],
        },
        {
          name: "query",
          description: "Query an IoT Hub using a powerful SQL-like language",
        },
        {
          name: "route",
          description: "Manage routes of an IoT hub",
          subcommands: [
            { name: "create", description: "Create a route in IoT Hub" },
            {
              name: "delete",
              description: "Delete all or mentioned route for your IoT Hub",
            },
            { name: "list", description: "Get all the routes in IoT Hub" },
            {
              name: "show",
              description: "Get information about the route in IoT Hub",
            },
            {
              name: "test",
              description: "Test all routes or mentioned route in IoT Hub",
            },
            { name: "update", description: "Update a route in IoT Hub" },
          ],
        },
        {
          name: "routing-endpoint",
          description: "Manage custom endpoints of an IoT hub",
          subcommands: [
            { name: "create", description: "Add an endpoint to your IoT Hub" },
            {
              name: "delete",
              description: "Delete all or mentioned endpoint for your IoT Hub",
            },
            {
              name: "list",
              description:
                "Get information on all the endpoints for your IoT Hub",
            },
            {
              name: "show",
              description:
                "Get information on mentioned endpoint for your IoT Hub",
            },
          ],
        },
        { name: "show", description: "Get the details of an IoT hub" },
        {
          name: "show-connection-string",
          description: "Show the connection strings for an IoT hub",
        },
        {
          name: "show-quota-metrics",
          description: "Get the quota metrics for an IoT hub",
        },
        {
          name: "show-stats",
          description: "Get the statistics for an IoT hub",
        },
        { name: "update", description: "Update metadata for an IoT hub" },
      ],
    },
    {
      name: "product",
      description: "Manage device testing for product certification",
      subcommands: [
        {
          name: "requirement",
          description: "Manage product certification requirements",
          subcommands: [
            {
              name: "list",
              description:
                "Discover information about provisioning attestation methods that are supported for each badge type",
            },
          ],
        },
        {
          name: "test",
          description: "Manage device tests for product certification",
          subcommands: [
            {
              name: "case",
              description: "Manage product testing certification test cases",
              subcommands: [
                {
                  name: "list",
                  description:
                    "List the test cases of a product certification test",
                },
                {
                  name: "update",
                  description:
                    "Update the product certification test case data",
                },
              ],
            },
            {
              name: "create",
              description:
                "Create a new product test for product certification",
            },
            {
              name: "run",
              description: "Manage product testing certification test runs",
              subcommands: [
                {
                  name: "show",
                  description: "Show the status of a testing run",
                },
                {
                  name: "submit",
                  description:
                    "Submit a completed test run to the partner/product service",
                },
              ],
            },
            {
              name: "search",
              description: "Search product repository for testing data",
            },
            { name: "show", description: "View product test data" },
            {
              name: "task",
              description: "Manage product testing certification tasks",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Queue a new testing task. Only one testing task can be running at a time",
                },
                {
                  name: "delete",
                  description:
                    "Cancel a running task matching the specified --task-id",
                },
                {
                  name: "show",
                  description:
                    "Show the status of a testing task. Use --running for current running task or --task-id",
                },
              ],
            },
            {
              name: "update",
              description: "Update the product certification test data",
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
