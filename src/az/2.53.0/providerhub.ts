const completion: Fig.Spec = {
  name: "providerhub",
  description: "Manage resources with ProviderHub",
  subcommands: [
    {
      name: "custom-rollout",
      description: "Manage custom rollout with providerhub",
      subcommands: [
        {
          name: "create",
          description: "Create the rollout details",
          options: [
            {
              name: "--canary",
              description: "The canary regions to apply the manifest",
              args: { name: "canary" },
              isRequired: true,
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
            {
              name: "--rollout-name",
              description: "The rollout name",
              args: { name: "rollout-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description:
            "Gets the list of the custom rollouts for the given provider",
          options: [
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Gets the custom rollout details",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
            },
            {
              name: "--rollout-name",
              description: "The rollout name",
              args: { name: "rollout-name" },
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
      name: "default-rollout",
      description: "Manage default rollout with providerhub",
      subcommands: [
        {
          name: "create",
          description: "Create the rollout details",
          options: [
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
            {
              name: "--rollout-name",
              description: "The rollout name",
              args: { name: "rollout-name" },
              isRequired: true,
            },
            {
              name: "--canary",
              description: "The canary regions to skip",
              args: { name: "canary" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--rest-of-the-world-group-two", "--row2"],
              description: "DefaultRollout rest of the world group two",
              args: { name: "rest-of-the-world-group-two" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes the rollout resource. Rollout must be in terminal state",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
            },
            {
              name: "--rollout-name",
              description: "The rollout name",
              args: { name: "rollout-name" },
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
          name: "list",
          description: "Gets the list of the rollouts for the given provider",
          options: [
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Gets the default rollout details",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
            },
            {
              name: "--rollout-name",
              description: "The rollout name",
              args: { name: "rollout-name" },
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
          name: "stop",
          description: "Stops or cancels the rollout, if in progress",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
            },
            {
              name: "--rollout-name",
              description: "The rollout name",
              args: { name: "rollout-name" },
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
      name: "manifest",
      description: "Manage with providerhub manifest operations",
      subcommands: [
        {
          name: "checkin",
          description: "Checkin the manifest",
          options: [
            {
              name: [
                "--baseline-arm-manifest-location",
                "--arm-manifest-location",
                "--location",
              ],
              description:
                "The baseline ARM manifest location supplied to the checkin manifest operation",
              args: { name: "baseline-arm-manifest-location" },
              isRequired: true,
            },
            {
              name: "--environment",
              description:
                "The environment supplied to the checkin manifest operation",
              args: { name: "environment" },
              isRequired: true,
            },
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
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
          name: "generate",
          description: "Generates the manifest for the given provider",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
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
      name: "notification-registration",
      description: "Manage notification registration with providerhub",
      subcommands: [
        {
          name: "create",
          description: "Create a notification registration",
          options: [
            {
              name: ["--notification-registration-name", "--name", "-n"],
              description: "The notification registration",
              args: { name: "notification-registration-name" },
              isRequired: true,
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
            {
              name: "--included-events",
              description:
                "These are the events that the RP should be messaged on. The message format is in the form {RP Namespace}/{Resource Type}/{action}. The availabe actions are: write, delete and move/action",
              args: { name: "included-events" },
            },
            {
              name: "--message-scope",
              description:
                "Limits the messages that are sent to the RP. The default value is RegisteredSubscriptions. The available values are Global (all messages in Azure) and RegisteredSubscriptions (only messages in subscriptions registered by RP)",
              args: {
                name: "message-scope",
                suggestions: ["NotSpecified", "RegisteredSubscriptions"],
              },
            },
            {
              name: "--notification-endpoints",
              description:
                "These are the locations for the notification messages. Notifications will be sent to the region of the event resource's location (e.g. VM in East Us will send message to the specified endpoint in East US)",
              args: { name: "notification-endpoints" },
            },
            {
              name: "--notification-mode",
              description:
                "Determines how the notifications are sent to the RP. The two available modes are EventHub and Webhook",
              args: {
                name: "notification-mode",
                suggestions: ["EventHub", "NotSpecified", "WebHook"],
              },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a notification registration",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--notification-registration-name", "--name", "-n"],
              description: "The notification registration",
              args: { name: "notification-registration-name" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
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
          name: "list",
          description:
            "Gets the list of the notification registrations for the given provider",
          options: [
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Gets the notification registration details",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--notification-registration-name", "--name", "-n"],
              description: "The notification registration",
              args: { name: "notification-registration-name" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
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
      name: "operation",
      description: "Manage operation with providerhub",
      subcommands: [
        {
          name: "create",
          description: "Create the operation supported by the given provider",
          options: [
            {
              name: "--contents",
              description: "Expected value: json-string/@json-file",
              args: { name: "contents" },
              isRequired: true,
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes an operation",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
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
          name: "list",
          description: "Gets the operations supported by the given provider",
          options: [
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "provider-registration",
      description: "Manage provider registration with providerhub",
      subcommands: [
        {
          name: "create",
          description: "Create the provider registration",
          options: [
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
            {
              name: "--capabilities",
              description: "The resource provider capabilities",
              args: { name: "capabilities" },
            },
            {
              name: "--incident-contact-email",
              description:
                "The email address of contacts for incidents related to the RP",
              args: { name: "incident-contact-email" },
            },
            {
              name: ["--incident-routing-service", "--incident-service"],
              description:
                "The service in IcM when creating or transferring incidents to the RP",
              args: { name: "incident-routing-service" },
            },
            {
              name: ["--incident-routing-team", "--incident-team"],
              description:
                "The team in IcM when creating or transferring incidents to the RP",
              args: { name: "incident-routing-team" },
            },
            {
              name: ["--lighthouse-authorizations", "--lighthouse-auth"],
              description: "The lighthouse authorizations",
              args: { name: "lighthouse-authorizations" },
            },
            {
              name: "--managed-by-tenant-id",
              description: "The managed by tenant ID",
              args: { name: "managed-by-tenant-id" },
            },
            {
              name: "--manifest-owners",
              description:
                "Specifies an array of required ACIS claims to modify the resource provider's manifest content via ACIS",
              args: { name: "manifest-owners" },
            },
            {
              name: "--metadata",
              description: "The metadata",
              args: { name: "metadata" },
            },
            {
              name: [
                "--providerhub-metadata-authentication",
                "--metadata-authn",
              ],
              description: "The ProviderHub metadata authentication",
              args: { name: "providerhub-metadata-authentication" },
            },
            {
              name: [
                "--providerhub-metadata-authorizations",
                "--metadata-authz",
              ],
              description: "The ProviderHub metadata authorizations",
              args: { name: "providerhub-metadata-authorizations" },
            },
            {
              name: "--namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "namespace" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--opt-in-headers",
              description: "The opt-in headers",
              args: {
                name: "opt-in-headers",
                suggestions: [
                  "ClientGroupMembership",
                  "NotSpecified",
                  "SignedAuxiliaryTokens",
                  "SignedUserToken",
                  "UnboundedClientGroupMembership",
                ],
              },
            },
            {
              name: [
                "--subscription-state-override-actions",
                "--override-actions",
              ],
              description: "The subscription state override actions",
              args: { name: "subscription-state-override-actions" },
            },
            {
              name: ["--provider-authentication", "--provider-authn"],
              description:
                "Used to set alternative audiences or resources that ARM should accept from the token while authenticating requests for the provider",
              args: { name: "provider-authentication" },
            },
            {
              name: ["--provider-authorizations", "--provider-authz"],
              description: "The resource provider authorizations",
              args: { name: "provider-authorizations" },
            },
            {
              name: "--provider-type",
              description: "The provider type",
              args: { name: "provider-type" },
            },
            {
              name: "--provider-version",
              description: "The provider version",
              args: { name: "provider-version" },
            },
            {
              name: ["--required-features-policy", "--req-features-policy"],
              description:
                'The accepted values are "Any" or "All". If the value is "All", then only the subscriptions registered to all the corresponding feature flag will be allowed.​',
              args: {
                name: "required-features-policy",
                suggestions: ["All", "Any"],
              },
            },
            {
              name: "--required-features",
              description: "The required features",
              args: { name: "required-features" },
            },
            {
              name: "--resource-access-policy",
              description: "The resource access policy",
              args: {
                name: "resource-access-policy",
                suggestions: [
                  "AcisActionAllowed",
                  "AcisReadAllowed",
                  "NotSpecified",
                ],
              },
            },
            {
              name: "--resource-access-roles",
              description:
                "The resource access roles. Expected value: json-string/@json-file",
              args: { name: "resource-access-roles" },
            },
            {
              name: "--schema-owners",
              description:
                "Specifies an array of needed ACIS claims to modify the resource provider schema via ACIS",
              args: { name: "schema-owners" },
            },
            {
              name: "--service-tree-infos",
              description:
                "The ServiceTree information for the resource provider",
              args: { name: "service-tree-infos" },
            },
            {
              name: "--soft-delete-ttl",
              description: "The soft delete time to live",
              args: { name: "soft-delete-ttl" },
            },
            {
              name: ["--template-deployment-options", "--tmplt-deploy-opt"],
              description: "The template deployment options",
              args: { name: "template-deployment-options" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a provider registration",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
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
          name: "generate-operation",
          description: "Generates the operations api for the given provider",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
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
            "Gets the list of the provider registrations in the subscription",
        },
        {
          name: "show",
          description: "Gets the provider registration details",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
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
      name: "resource-type-registration",
      description: "Manage resource type registration with providerhub",
      subcommands: [
        {
          name: "create",
          description: "Create a resource type",
          options: [
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "The resource type",
              args: { name: "resource-type" },
              isRequired: true,
            },
            {
              name: ["--allowed-unauthorized-actions", "--aua"],
              description: "The allowed unauthorized actions",
              args: { name: "allowed-unauthorized-actions" },
            },
            {
              name: ["--authorization-action-mappings", "--auth-mappings"],
              description:
                "Allows RP to override action verb for RBAC purposes at ARM",
              args: { name: "authorization-action-mappings" },
            },
            {
              name: [
                "--check-name-availability-specifications",
                "--checkname-specs",
              ],
              description:
                "Name availability checks feature at the platform level",
              args: { name: "check-name-availability-specifications" },
            },
            {
              name: ["--resource-creation-begin", "--creation-begin"],
              description:
                "Extension options for handling the resource creation begin extension request",
              args: { name: "resource-creation-begin" },
            },
            {
              name: ["--disallowed-action-verbs", "--dav"],
              description: "The disallowed action verbs",
              args: { name: "disallowed-action-verbs" },
            },
            {
              name: "--default-api-version",
              description: "The default API version for the endpoint",
              args: { name: "default-api-version" },
            },
            {
              name: ["--resource-deletion-policy", "--deletion-policy"],
              description: "The resource deletion policy",
              args: {
                name: "resource-deletion-policy",
                suggestions: [
                  "CascadeDeleteAll",
                  "CascadeDeleteProxyOnlyChildren",
                  "NotSpecified",
                ],
              },
            },
            {
              name: "--enable-async-operation",
              description:
                "Indicates whether the async operation is enabled for this resource type",
              args: {
                name: "enable-async-operation",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--enable-third-party-s2s",
              description:
                "Indicates whether third party s2s is enabled for this resource type",
              args: {
                name: "enable-third-party-s2s",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--endpoints",
              description: "The resource type endpoints",
              args: { name: "endpoints" },
            },
            {
              name: "--extended-locations",
              description: "The extended location options",
              args: { name: "extended-locations" },
            },
            {
              name: "--identity-management",
              description: "MSI related settings",
              args: { name: "identity-management" },
            },
            {
              name: "--is-pure-proxy",
              description:
                "Indicates whether this is a PureProxy resource type",
              args: { name: "is-pure-proxy", suggestions: ["false", "true"] },
            },
            {
              name: "--linked-access-checks",
              description:
                "Enables additional Role Based Access Control (RBAC) checks on related resources",
              args: { name: "linked-access-checks" },
            },
            {
              name: "--logging-rules",
              description: "The logging rules",
              args: { name: "logging-rules" },
            },
            {
              name: "--marketplace-type",
              description:
                "The type of marketplace behavior for the resource type",
              args: {
                name: "marketplace-type",
                suggestions: ["AddOn", "Bypass", "NotSpecified", "Store"],
              },
            },
            {
              name: "--opt-in-headers",
              description: "The opt-in headers",
              args: {
                name: "opt-in-headers",
                suggestions: [
                  "ClientGroupMembership",
                  "NotSpecified",
                  "SignedAuxiliaryTokens",
                  "SignedUserToken",
                  "UnboundedClientGroupMembership",
                ],
              },
            },
            {
              name: [
                "--subscription-state-override-actions",
                "--override-actions",
              ],
              description: "The subscription state override actions",
              args: { name: "subscription-state-override-actions" },
            },
            {
              name: ["--resource-patch-begin", "--patch-begin"],
              description:
                "Extension options for handling the resource patch begin extension request",
              args: { name: "resource-patch-begin" },
            },
            {
              name: "--regionality",
              description: "The regionality of the resource type",
              args: {
                name: "regionality",
                suggestions: ["Global", "NotSpecified", "Regional"],
              },
            },
            {
              name: ["--required-features-policy", "--req-features-policy"],
              description:
                'The accepted values are "Any" or "All". If the value is "All", then only the subscriptions registered to all the corresponding feature flag will be allowed.​',
              args: {
                name: "required-features-policy",
                suggestions: ["All", "Any"],
              },
            },
            {
              name: "--required-features",
              description: "The required features",
              args: { name: "required-features" },
            },
            {
              name: "--resource-move-policy",
              description: "The resource move policy",
              args: { name: "resource-move-policy" },
            },
            {
              name: "--routing-type",
              description: "The resource routing type.​",
              args: { name: "routing-type" },
            },
            {
              name: "--service-tree-infos",
              description:
                "The ServiceTree information for the resource provider",
              args: { name: "service-tree-infos" },
            },
            {
              name: "--soft-delete-ttl",
              description: "The soft delete time to live",
              args: { name: "soft-delete-ttl" },
            },
            {
              name: ["--subscription-state-rules", "--sub-state-rules"],
              description: "The subscription state rules",
              args: { name: "subscription-state-rules" },
            },
            {
              name: "--swagger-specifications",
              description: "The Swagger spec of the resource type",
              args: { name: "swagger-specifications" },
            },
            {
              name: ["--template-deployment-options", "--tmplt-deploy-opt"],
              description: "The template deployment options",
              args: { name: "template-deployment-options" },
            },
            {
              name: "--throttling-rules",
              description:
                "Enables setting individual limits for different actions in terms of number of requests or number of resources (for collection read requests only)",
              args: { name: "throttling-rules" },
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a resource type",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
            },
            {
              name: "--resource-type",
              description: "The resource type",
              args: { name: "resource-type" },
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
          name: "list",
          description:
            "Gets the list of the resource types for the given provider",
          options: [
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets a resource type details in the given subscription and provider",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
            },
            {
              name: "--resource-type",
              description: "The resource type",
              args: { name: "resource-type" },
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
      name: "sku",
      description: "Manage sku with providerhub",
      subcommands: [
        {
          name: "create",
          description:
            "Creates or updates the resource type skus in the given resource type. And Creates or updates the resource type skus in the given resource type. And Creates or updates the resource type skus in the given resource type. And Create the resource type skus in the given resource type",
          options: [
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "The resource type",
              args: { name: "resource-type" },
              isRequired: true,
            },
            {
              name: "--sku",
              description: "The SKU",
              args: { name: "sku" },
              isRequired: true,
            },
            {
              name: "--sku-settings",
              description: "Expected value: json-string/@json-file",
              args: { name: "sku-settings" },
              isRequired: true,
            },
            {
              name: ["--nested-resource-type-first", "--nested-first"],
              description: "The first child resource type",
              args: { name: "nested-resource-type-first" },
            },
            {
              name: ["--nested-resource-type-second", "--nested-second"],
              description: "The second child resource type",
              args: { name: "nested-resource-type-second" },
            },
            {
              name: ["--nested-resource-type-third", "--nested-third"],
              description: "The third child resource type",
              args: { name: "nested-resource-type-third" },
            },
          ],
        },
        {
          name: "delete",
          description:
            "Deletes a resource type sku. And Deletes a resource type sku. And Deletes a resource type sku. And Deletes a resource type sku",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--nested-resource-type-first", "--nested-first"],
              description: "The first child resource type",
              args: { name: "nested-resource-type-first" },
            },
            {
              name: ["--nested-resource-type-second", "--nested-second"],
              description: "The second child resource type",
              args: { name: "nested-resource-type-second" },
            },
            {
              name: ["--nested-resource-type-third", "--nested-third"],
              description: "The third child resource type",
              args: { name: "nested-resource-type-third" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
            },
            {
              name: "--resource-type",
              description: "The resource type",
              args: { name: "resource-type" },
            },
            { name: "--sku", description: "The SKU", args: { name: "sku" } },
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
          name: "list",
          description:
            "Gets the list of skus for the given resource type. And Gets the list of skus for the given resource type. And Gets the list of skus for the given resource type. And Gets the list of skus for the given resource type",
          options: [
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
              isRequired: true,
            },
            {
              name: "--resource-type",
              description: "The resource type",
              args: { name: "resource-type" },
              isRequired: true,
            },
            {
              name: ["--nested-resource-type-first", "--nested-first"],
              description: "The first child resource type",
              args: { name: "nested-resource-type-first" },
            },
            {
              name: ["--nested-resource-type-second", "--nested-second"],
              description: "The second child resource type",
              args: { name: "nested-resource-type-second" },
            },
            {
              name: ["--nested-resource-type-third", "--nested-third"],
              description: "The third child resource type",
              args: { name: "nested-resource-type-third" },
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets the sku details for the given resource type and sku name",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
            },
            {
              name: "--resource-type",
              description: "The resource type",
              args: { name: "resource-type" },
            },
            { name: "--sku", description: "The SKU", args: { name: "sku" } },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "show-nested-resource-type-first",
          description:
            "Gets the sku details for the given resource type and sku name",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--nested-resource-type-first", "--nested-first"],
              description: "The first child resource type",
              args: { name: "nested-resource-type-first" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
            },
            {
              name: "--resource-type",
              description: "The resource type",
              args: { name: "resource-type" },
            },
            { name: "--sku", description: "The SKU", args: { name: "sku" } },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "show-nested-resource-type-second",
          description:
            "Gets the sku details for the given resource type and sku name",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--nested-resource-type-first", "--nested-first"],
              description: "The first child resource type",
              args: { name: "nested-resource-type-first" },
            },
            {
              name: ["--nested-resource-type-second", "--nested-second"],
              description: "The second child resource type",
              args: { name: "nested-resource-type-second" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
            },
            {
              name: "--resource-type",
              description: "The resource type",
              args: { name: "resource-type" },
            },
            { name: "--sku", description: "The SKU", args: { name: "sku" } },
            {
              name: "--subscription",
              description:
                "Name or ID of subscription. You can configure the default subscription using az account set -s NAME_OR_ID",
              args: { name: "subscription" },
            },
          ],
        },
        {
          name: "show-nested-resource-type-third",
          description:
            "Gets the sku details for the given resource type and sku name",
          options: [
            {
              name: "--ids",
              description:
                "One or more resource IDs (space-delimited). It should be a complete resource ID containing all information of 'Resource Id' arguments. You should provide either --ids or other 'Resource Id' arguments",
              args: { name: "ids" },
            },
            {
              name: ["--nested-resource-type-first", "--nested-first"],
              description: "The first child resource type",
              args: { name: "nested-resource-type-first" },
            },
            {
              name: ["--nested-resource-type-second", "--nested-second"],
              description: "The second child resource type",
              args: { name: "nested-resource-type-second" },
            },
            {
              name: ["--nested-resource-type-third", "--nested-third"],
              description: "The third child resource type",
              args: { name: "nested-resource-type-third" },
            },
            {
              name: "--provider-namespace",
              description:
                "The name of the resource provider hosted within ProviderHub",
              args: { name: "provider-namespace" },
            },
            {
              name: "--resource-type",
              description: "The resource type",
              args: { name: "resource-type" },
            },
            { name: "--sku", description: "The SKU", args: { name: "sku" } },
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
  ],
};

export default completion;
