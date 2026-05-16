const completion: Fig.Spec = {
  name: "apim",
  description: "Manage Azure API Management services",
  subcommands: [
    {
      name: "api",
      description: "Manage Azure API Management API's",
      subcommands: [
        {
          name: "create",
          description: "Create an API Management API",
          options: [
            {
              name: "--api-id",
              description: "Unique name of the api to be created",
              args: { name: "api-id" },
              isRequired: true,
            },
            {
              name: "--display-name",
              description: "Display name of the API to be created",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--path",
              description: "Path to the API",
              args: { name: "path" },
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
              name: ["--service-name", "-n"],
              description: "The name of the API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--api-type",
              description: "The type of the API",
              args: {
                name: "api-type",
                suggestions: ["graphql", "http", "soap", "websocket"],
              },
            },
            {
              name: "--authorization-scope",
              description: "Specifies the OAuth operations scope",
              args: { name: "authorization-scope" },
            },
            {
              name: "--authorization-server-id",
              description: "Specifies the OAuth authorization server ID",
              args: { name: "authorization-server-id" },
            },
            {
              name: "--bearer-token-sending-methods",
              description: "Specifies the sending methods for bearer token",
              args: { name: "bearer-token-sending-methods" },
            },
            {
              name: "--description",
              description:
                "Description of the API. May include HTML formatting tags",
              args: { name: "description" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--open-id-provider-id",
              description: "Specifies the openid in the authentication setting",
              args: { name: "open-id-provider-id" },
            },
            {
              name: "--protocols",
              description:
                "Describes on which protocols the operations in this API can be invoked",
              args: {
                name: "protocols",
                suggestions: ["http", "https", "ws", "wss"],
              },
            },
            {
              name: "--service-url",
              description:
                "Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long",
              args: { name: "service-url" },
            },
            {
              name: "--subscription-key-header-name",
              description: "Specifies the subscription key header name",
              args: { name: "subscription-key-header-name" },
            },
            {
              name: "--subscription-key-query-param-name",
              description:
                "Specifies the subscription key query string parameter name",
              args: { name: "subscription-key-query-param-name" },
            },
            {
              name: "--subscription-key-required",
              description:
                "Specifies whether subscription key is required during call to this API, true - API is included into closed products only, false - API is included into open products alone, null - there is a mix of products",
              args: { name: "subscription-key-required" },
            },
            {
              name: "--subscription-required",
              description:
                "If true, the API requires a subscription key on requests",
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an API Management API",
          options: [
            {
              name: "--api-id",
              description:
                "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
              args: { name: "api-id" },
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
              name: ["--service-name", "-n"],
              description: "The name of the API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--delete-revisions",
              description: "Delete all revisions of the Api",
              args: { name: "delete-revisions" },
            },
            {
              name: "--if-match",
              description: "ETag of the Entity",
              args: { name: "if-match" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "import",
          description: "Import an API Management API",
          options: [
            {
              name: "--path",
              description:
                "Required. Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance",
              args: { name: "path" },
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
              name: ["--service-name", "-n"],
              description: "The name of the api management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--specification-format",
              description: "Specify the format of the imported API",
              args: {
                name: "specification-format",
                suggestions: [
                  "GraphQL",
                  "OpenApi",
                  "OpenApiJson",
                  "Swagger",
                  "Wadl",
                  "Wsdl",
                ],
              },
              isRequired: true,
            },
            {
              name: "--api-id",
              description:
                "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
              args: { name: "api-id" },
            },
            {
              name: "--api-revision",
              description:
                "Describes the Revision of the Api. If no value is provided, default revision 1 is created",
              args: { name: "api-revision" },
            },
            {
              name: "--api-type",
              description: "The type of the API",
              args: {
                name: "api-type",
                suggestions: ["graphql", "http", "soap", "websocket"],
              },
            },
            {
              name: "--api-version",
              description:
                "Describes the Version of the Api. If you add a version to a non-versioned API, an Original version will be automatically created and will respond on the default URL",
              args: { name: "api-version" },
            },
            {
              name: "--api-version-set-id",
              description: "Describes the Version Set to be used with the API",
              args: { name: "api-version-set-id" },
            },
            {
              name: "--description",
              description:
                "Description of the API. May include HTML formatting tags",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "Display name of this API",
              args: { name: "display-name" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--protocols",
              description:
                "Describes on which protocols(one or more) the operations in this API can be invoked",
              args: {
                name: "protocols",
                suggestions: ["http", "https", "ws", "wss"],
              },
            },
            {
              name: "--service-url",
              description:
                "Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long",
              args: { name: "service-url" },
            },
            {
              name: "--soap-api-type",
              description: "The type of API when file format is WSDL",
              args: { name: "soap-api-type" },
            },
            {
              name: "--specification-path",
              description: "File path specified to import the API",
              args: { name: "specification-path" },
            },
            {
              name: "--specification-url",
              description: "Url specified to import the API",
              args: { name: "specification-url" },
            },
            {
              name: "--subscription-key-header-name",
              description: "Specifies the subscription key header name",
              args: { name: "subscription-key-header-name" },
            },
            {
              name: "--subscription-key-query-param-name",
              description:
                "Specifies the subscription key query string parameter name",
              args: { name: "subscription-key-query-param-name" },
            },
            {
              name: "--subscription-required",
              description:
                "If true, the API requires a subscription key on requests",
              args: {
                name: "subscription-required",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--wsdl-endpoint-name",
              description: "Local name of WSDL Endpoint (port) to be imported",
              args: { name: "wsdl-endpoint-name" },
            },
            {
              name: "--wsdl-service-name",
              description: "Local name of WSDL Service to be imported",
              args: { name: "wsdl-service-name" },
            },
          ],
        },
        {
          name: "list",
          description: "List API Management API's",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service-name", "-n"],
              description: "The name of the API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--filter-display-name",
              description: "Filter of APIs by displayName",
              args: { name: "filter-display-name" },
            },
            {
              name: "--skip",
              description: "Number of records to skip",
              args: { name: "skip" },
            },
            {
              name: "--top",
              description: "Number of records to return",
              args: { name: "top" },
            },
          ],
        },
        {
          name: "show",
          description: "Show details of an API Management API",
          options: [
            {
              name: "--api-id",
              description:
                "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
              args: { name: "api-id" },
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
              name: "--service-name",
              description: "The name of the API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update an API Management API",
          options: [
            {
              name: "--api-id",
              description: "Unique name of the api to be created",
              args: { name: "api-id" },
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
              name: ["--service-name", "-n"],
              description: "The name of the API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--api-type",
              description: "The type of the API",
              args: {
                name: "api-type",
                suggestions: ["graphql", "http", "soap", "websocket"],
              },
            },
            {
              name: "--description",
              description:
                "Description of the API. May include HTML formatting tags",
              args: { name: "description" },
            },
            {
              name: "--display-name",
              description: "API name. Must be 1 to 300 characters long",
              args: { name: "display-name" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--if-match",
              description:
                "ETag of the Entity. Not required when creating an entity, but required when updating an entity. Default value is None",
              args: { name: "if-match" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--path",
              description:
                "Required. Relative URL uniquely identifying this API and all of its resource paths within the API Management service instance",
              args: { name: "path" },
            },
            {
              name: "--protocols",
              description:
                "Describes on which protocols the operations in this API can be invoked",
              args: {
                name: "protocols",
                suggestions: ["http", "https", "ws", "wss"],
              },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--service-url",
              description:
                "Absolute URL of the backend service implementing this API. Cannot be more than 2000 characters long",
              args: { name: "service-url" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--subscription-key-header-name",
              description: "Specifies the subscription key header name",
              args: { name: "subscription-key-header-name" },
            },
            {
              name: "--subscription-key-query-param-name",
              description:
                "Specifies the subscription key query string parameter name",
              args: { name: "subscription-key-query-param-name" },
            },
            {
              name: "--subscription-required",
              description:
                "If true, the API requires a subscription key on requests",
              args: {
                name: "subscription-required",
                suggestions: ["false", "true"],
              },
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
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of an apim api is met",
          options: [
            {
              name: "--api-id",
              description:
                "API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. Required",
              args: { name: "api-id" },
              isRequired: true,
            },
            {
              name: ["--name", "-n"],
              description: "The name of the api management service instance",
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
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
          name: "operation",
          description: "Manage Azure API Management API Operations",
          subcommands: [
            {
              name: "create",
              description: "Creates a new operation in the API",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "Required. Operation Name",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--method",
                  description:
                    "Required. A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them",
                  args: { name: "method" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--url-template",
                  description:
                    "Relative URL template identifying the target resource for this operation. May include parameters",
                  args: { name: "url-template" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description:
                    "Description of the operation. May include HTML formatting tags",
                  args: { name: "description" },
                },
                {
                  name: "--if-match",
                  description: "ETag of the Entity",
                  args: { name: "if-match" },
                },
                {
                  name: "--operation-id",
                  description:
                    "Operation identifier within an API. Must be unique in the current API Management service instance",
                  args: { name: "operation-id" },
                },
                {
                  name: ["--template-parameters", "--params", "-p"],
                  description: "Collection of URL template parameters",
                  args: { name: "template-parameters" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes the specified operation in the API",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--operation-id",
                  description:
                    "Operation identifier within an API. Must be unique in the current API Management service instance",
                  args: { name: "operation-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--if-match",
                  description: "ETag of the Entity",
                  args: { name: "if-match" },
                },
              ],
            },
            {
              name: "list",
              description:
                "List a collection of the operations for the specified API",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets the details of the API Operation specified by its identifier",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--operation-id",
                  description:
                    "Operation identifier within an API. Must be unique in the current API Management service instance",
                  args: { name: "operation-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Updates the details of the operation in the API specified by its identifier",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--operation-id",
                  description:
                    "Operation identifier within an API. Must be unique in the current API Management service instance",
                  args: { name: "operation-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--description",
                  description:
                    "Description of the operation. May include HTML formatting tags",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "Required. Operation Name",
                  args: { name: "display-name" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--if-match",
                  description: "ETag of the Entity",
                  args: { name: "if-match" },
                },
                {
                  name: "--method",
                  description:
                    "Required. A Valid HTTP Operation Method. Typical Http Methods like GET, PUT, POST but not limited by only them",
                  args: { name: "method" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                  args: { name: "remove" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--url-template",
                  description:
                    "Relative URL template identifying the target resource for this operation. May include parameters",
                  args: { name: "url-template" },
                },
              ],
            },
          ],
        },
        {
          name: "release",
          description: "Manage Azure API Management API Release",
          subcommands: [
            {
              name: "create",
              description: "Creates a new Release for the API",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--api-revision",
                  description: "API revision number",
                  args: { name: "api-revision" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--if-match",
                  description: "ETag of the Entity",
                  args: { name: "if-match" },
                },
                {
                  name: "--notes",
                  description: "Release Notes",
                  args: { name: "notes" },
                },
                {
                  name: "--release-id",
                  description:
                    "Release identifier within an API. Must be unique in the current API Management service instance",
                  args: { name: "release-id" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes the specified release in the API",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--release-id",
                  description:
                    "Release identifier within an API. Must be unique in the current API Management service instance",
                  args: { name: "release-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--if-match",
                  description: "ETag of the Entity",
                  args: { name: "if-match" },
                },
              ],
            },
            {
              name: "list",
              description: "Lists all releases of an API",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description: "Returns the details of an API release",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--release-id",
                  description:
                    "Release identifier within an API. Must be unique in the current API Management service instance",
                  args: { name: "release-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Updates the details of the release of the API specified by its identifier",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--release-id",
                  description:
                    "Release identifier within an API. Must be unique in the current API Management service instance",
                  args: { name: "release-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--if-match",
                  description: "ETag of the Entity",
                  args: { name: "if-match" },
                },
                {
                  name: "--notes",
                  description: "Release Notes",
                  args: { name: "notes" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                  args: { name: "remove" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
              ],
            },
          ],
        },
        {
          name: "revision",
          description: "Manage Azure API Management API Revision",
          subcommands: [
            {
              name: "create",
              description: "Create API revision",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--api-revision",
                  description: "Describes the Revision of the Api",
                  args: { name: "api-revision" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: ["--api-revision-description", "--rev-description"],
                  description: "Description of the Api Revision",
                  args: { name: "api-revision-description" },
                },
              ],
            },
            {
              name: "list",
              description: "Lists all revisions of an API",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
        {
          name: "schema",
          description: "Manage Azure API Management API Schema's",
          subcommands: [
            {
              name: "create",
              description: "Create an API Management API Schema",
              options: [
                {
                  name: "--api-id",
                  description:
                    "Unique name of the api for which schema needs to be created",
                  args: { name: "api-id" },
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
                  name: "--schema-id",
                  description: "Unique name of the api schema to be created",
                  args: { name: "schema-id" },
                  isRequired: true,
                },
                {
                  name: "--schema-type",
                  description:
                    "Schema type (e.g. application/json, application/vnd.ms-azure-apim.graphql.schema)",
                  args: { name: "schema-type" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: "--resource-type",
                  description:
                    'The type of the resource. E.g. "Microsoft.Compute/virtualMachines" or "Microsoft.Storage/storageAccounts"',
                  args: { name: "resource-type" },
                },
                {
                  name: "--schema-content",
                  description:
                    "Json escaped string defining the document representing the Schema",
                  args: { name: "schema-content" },
                },
                {
                  name: "--schema-name",
                  description: "The name of the schema resource",
                  args: { name: "schema-name" },
                },
                {
                  name: "--schema-path",
                  description:
                    "File path specified to import schema of the API",
                  args: { name: "schema-path" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete an API Management API Schema",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
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
                  name: "--schema-id",
                  description:
                    "Schema identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "schema-id" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--if-match",
                  description: "ETag of the Entity",
                  args: { name: "if-match" },
                },
                {
                  name: "--no-wait",
                  description:
                    "Do not wait for the long-running operation to finish",
                },
                {
                  name: ["--yes", "-y"],
                  description: "Do not prompt for confirmation",
                },
              ],
            },
            {
              name: "get-etag",
              description: "Get etag of an API Management API schema",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
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
                  name: "--schema-id",
                  description:
                    "Schema identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "schema-id" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description: "List API Management API schema's",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--filter-display-name",
                  description: "Filter of APIs by displayName",
                  args: { name: "filter-display-name" },
                },
                {
                  name: "--skip",
                  description: "Number of records to skip",
                  args: { name: "skip" },
                },
                {
                  name: "--top",
                  description: "Number of records to return",
                  args: { name: "top" },
                },
              ],
            },
            {
              name: "show",
              description: "Show details of an API Management API Schema",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
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
                  name: "--schema-id",
                  description:
                    "Schema identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "schema-id" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "wait",
              description:
                "Place the CLI in a waiting state until a condition of an apim api schema is met",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API revision identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number. Required",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: ["--name", "-n"],
                  description:
                    "The name of the api management service instance",
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
                  name: "--schema-id",
                  description:
                    "Schema id identifier. Must be unique in the current API Management service instance. Required",
                  args: { name: "schema-id" },
                  isRequired: true,
                },
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
                  name: "--exists",
                  description: "Wait until the resource exists",
                },
                {
                  name: "--interval",
                  description: "Polling interval in seconds",
                  args: { name: "interval" },
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
        },
        {
          name: "versionset",
          description: "Manage Azure API Management API Version Set",
          subcommands: [
            {
              name: "create",
              description: "Creates a Api Version Set",
              options: [
                {
                  name: "--display-name",
                  description: "Required. Name of API Version Set",
                  args: { name: "display-name" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--versioning-scheme",
                  description:
                    "Required. An value that determines where the API Version identifer will be located in a HTTP request. Possible values include: 'Segment', 'Query', 'Header'",
                  args: { name: "versioning-scheme" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description: "Description of API Version Set",
                  args: { name: "description" },
                },
                {
                  name: "--if-match",
                  description: "ETag of the Entity",
                  args: { name: "if-match" },
                },
                {
                  name: "--version-header-name",
                  description:
                    "Name of HTTP header parameter that indicates the API Version if versioningScheme is set to header",
                  args: { name: "version-header-name" },
                },
                {
                  name: "--version-query-name",
                  description:
                    "Name of query parameter that indicates the API Version if versioningScheme is set to query",
                  args: { name: "version-query-name" },
                },
                {
                  name: "--version-set-id",
                  description:
                    "A resource identifier for the related ApiVersionSet",
                  args: { name: "version-set-id" },
                },
              ],
            },
            {
              name: "delete",
              description: "Deletes specific Api Version Set",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--version-set-id",
                  description:
                    "A resource identifier for the related ApiVersionSet",
                  args: { name: "version-set-id" },
                  isRequired: true,
                },
                {
                  name: "--if-match",
                  description: "ETag of the Entity",
                  args: { name: "if-match" },
                },
              ],
            },
            {
              name: "list",
              description:
                "Lists a collection of API Version Sets in the specified service instance",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Gets the details of the Api Version Set specified by its identifier",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--version-set-id",
                  description:
                    "A resource identifier for the related ApiVersionSet",
                  args: { name: "version-set-id" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "update",
              description:
                "Updates the details of the Api VersionSet specified by its identifier",
              options: [
                {
                  name: ["--resource-group", "-g"],
                  description:
                    "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
                  args: { name: "resource-group" },
                  isRequired: true,
                },
                {
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--version-set-id",
                  description:
                    "A resource identifier for the related ApiVersionSet",
                  args: { name: "version-set-id" },
                  isRequired: true,
                },
                {
                  name: "--add",
                  description:
                    "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
                  args: { name: "add" },
                },
                {
                  name: "--description",
                  description: "Description of API Version Set",
                  args: { name: "description" },
                },
                {
                  name: "--display-name",
                  description: "Required. Name of API Version Set",
                  args: { name: "display-name" },
                },
                {
                  name: "--force-string",
                  description:
                    "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
                },
                {
                  name: "--if-match",
                  description: "ETag of the Entity",
                  args: { name: "if-match" },
                },
                {
                  name: "--remove",
                  description:
                    "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
                  args: { name: "remove" },
                },
                {
                  name: "--set",
                  description:
                    "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
                  args: { name: "set" },
                },
                {
                  name: "--version-header-name",
                  description:
                    "Name of HTTP header parameter that indicates the API Version if versioningScheme is set to header",
                  args: { name: "version-header-name" },
                },
                {
                  name: "--version-query-name",
                  description:
                    "Name of query parameter that indicates the API Version if versioningScheme is set to query",
                  args: { name: "version-query-name" },
                },
                {
                  name: "--versioning-scheme",
                  description:
                    "Required. An value that determines where the API Version identifer will be located in a HTTP request. Possible values include: 'Segment', 'Query', 'Header'",
                  args: { name: "versioning-scheme" },
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "apply-network-updates",
      description:
        "Update the API Management resource running in the virtual network to pick the updated network settings",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the api management service instance",
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
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "backup",
      description:
        "Creates a backup of the API Management service to the given Azure Storage Account. This is long running operation and could take several minutes to complete",
      options: [
        {
          name: "--backup-name",
          description: "The name of the backup file to create",
          args: { name: "backup-name" },
          isRequired: true,
        },
        {
          name: ["--storage-account-container", "--container-name"],
          description:
            "The name of the storage account container used to place the backup",
          args: { name: "storage-account-container" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "The name of the api management service instance",
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
          name: "--storage-account-key",
          description:
            "The access key of the storage account used to place the backup",
          args: { name: "storage-account-key" },
          isRequired: true,
        },
        {
          name: "--storage-account-name",
          description:
            "The name of the storage account used to place the backup",
          args: { name: "storage-account-name" },
          isRequired: true,
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "check-name",
      description: "Checks to see if a service name is available to use",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the api management service instance",
          args: { name: "name" },
          isRequired: true,
        },
      ],
    },
    {
      name: "create",
      description: "Create an API Management service instance",
      options: [
        {
          name: ["--name", "-n"],
          description: "Unique name of the service instance to be created",
          args: { name: "name" },
          isRequired: true,
        },
        {
          name: "--publisher-email",
          description: "The e-mail address to receive all system notifications",
          args: { name: "publisher-email" },
          isRequired: true,
        },
        {
          name: "--publisher-name",
          description:
            "The name of your organization for use in the developer portal and e-mail notifications",
          args: { name: "publisher-name" },
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
          name: "--disable-gateway",
          description:
            "Disable gateway in the master region. Only valid for an Api Management service deployed in multiple locations",
          args: { name: "disable-gateway", suggestions: ["false", "true"] },
        },
        {
          name: "--enable-client-certificate",
          description:
            "Enforces a client certificate to be presented on each request to the gateway and also enables the ability to authenticate the certificate in the policy on the gateway",
          args: {
            name: "enable-client-certificate",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-managed-identity",
          description:
            "Create a managed identity for the API Management service to access other Azure resources. Only meant to be used for Consumption SKU Service",
        },
        {
          name: ["--location", "-l"],
          description:
            "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
          args: { name: "location" },
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--public-network-access",
          description:
            "Whether or not public endpoint access is allowed for this API Management service. If set to true, private endpoints are the exclusive access method",
          args: {
            name: "public-network-access",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--sku-capacity",
          description: "The number of deployed units of the SKU",
          args: { name: "sku-capacity" },
        },
        {
          name: "--sku-name",
          description: "The sku of the api management instance",
          args: {
            name: "sku-name",
            suggestions: [
              "Basic",
              "Consumption",
              "Developer",
              "Isolated",
              "Premium",
              "Standard",
            ],
          },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: ["--virtual-network", "-v"],
          description: "The virtual network type",
          args: {
            name: "virtual-network",
            suggestions: ["External", "Internal", "None"],
          },
        },
      ],
    },
    {
      name: "delete",
      description: "Deletes an API Management service",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the api management service instance",
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
        {
          name: ["--yes", "-y"],
          description: "Do not prompt for confirmation",
        },
      ],
    },
    {
      name: "list",
      description: "List API Management service instances",
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
      name: "restore",
      description:
        "Restores a backup of an API Management service created using the ApiManagementService_Backup operation on the current service. This is a long running operation and could take several minutes to complete",
      options: [
        {
          name: "--backup-name",
          description: "The name of the backup file to restore",
          args: { name: "backup-name" },
          isRequired: true,
        },
        {
          name: ["--storage-account-container", "--container-name"],
          description:
            "The name of the storage account container used to retrieve the backup from",
          args: { name: "storage-account-container" },
          isRequired: true,
        },
        {
          name: ["--name", "-n"],
          description: "The name of the api management service instance",
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
          name: "--storage-account-key",
          description:
            "The access key of the storage account used to retrieve the backup from",
          args: { name: "storage-account-key" },
          isRequired: true,
        },
        {
          name: "--storage-account-name",
          description:
            "The name of the storage account used to retrieve the backup from",
          args: { name: "storage-account-name" },
          isRequired: true,
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
      ],
    },
    {
      name: "show",
      description: "Show details of an API Management service instance",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the api management service instance",
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
      description: "Update an API Management service instance",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the api management service instance",
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
          name: "--add",
          description:
            "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
          args: { name: "add" },
        },
        {
          name: "--disable-gateway",
          description:
            "Disable gateway in the master region. Only valid for an Api Management service deployed in multiple locations",
          args: { name: "disable-gateway", suggestions: ["false", "true"] },
        },
        {
          name: "--enable-client-certificate",
          description:
            "Enforces a client certificate to be presented on each request to the gateway and also enables the ability to authenticate the certificate in the policy on the gateway",
          args: {
            name: "enable-client-certificate",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--enable-managed-identity",
          description:
            "Create a managed identity for the API Management service to access other Azure resources. Only meant to be used for Consumption SKU Service",
          args: {
            name: "enable-managed-identity",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--force-string",
          description:
            "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
        },
        {
          name: "--no-wait",
          description: "Do not wait for the long-running operation to finish",
        },
        {
          name: "--public-network-access",
          description:
            "Whether or not public endpoint access is allowed for this API Management service. If set to true, private endpoints are the exclusive access method",
          args: {
            name: "public-network-access",
            suggestions: ["false", "true"],
          },
        },
        {
          name: "--publisher-email",
          description: "The e-mail address to receive all system notifications",
          args: { name: "publisher-email" },
        },
        {
          name: "--publisher-name",
          description:
            "The name of your organization for use in the developer portal and e-mail notifications",
          args: { name: "publisher-name" },
        },
        {
          name: "--remove",
          description:
            "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
          args: { name: "remove" },
        },
        {
          name: "--set",
          description:
            "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
          args: { name: "set" },
        },
        {
          name: "--sku-capacity",
          description: "The number of deployed units of the SKU",
          args: { name: "sku-capacity" },
        },
        {
          name: "--sku-name",
          description: "The sku of the api management instance",
          args: {
            name: "sku-name",
            suggestions: [
              "Basic",
              "Consumption",
              "Developer",
              "Isolated",
              "Premium",
              "Standard",
            ],
          },
        },
        {
          name: "--tags",
          description:
            'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
          args: { name: "tags" },
        },
        {
          name: ["--virtual-network", "-v"],
          description: "The virtual network type",
          args: {
            name: "virtual-network",
            suggestions: ["External", "Internal", "None"],
          },
        },
      ],
    },
    {
      name: "wait",
      description:
        "Place the CLI in a waiting state until a condition of an apim is met",
      options: [
        {
          name: ["--name", "-n"],
          description: "The name of the api management service instance",
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
          name: "--interval",
          description: "Polling interval in seconds",
          args: { name: "interval" },
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
      name: "deletedservice",
      description: "Manage soft-deleted Azure API Management services",
      subcommands: [
        {
          name: "list",
          description:
            "List all soft-deleted Api Management services instances available for undelete for the given subscription",
        },
        {
          name: "purge",
          description:
            "Purge soft-deleted Api Management service instance (deletes it with no option to undelete)",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--service-name", "-n"],
              description:
                "The name of the soft deleted API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Get soft-deleted Api Management service instances available for undelete by name",
          options: [
            {
              name: ["--location", "-l"],
              description:
                "Location. Values from: az account list-locations. You can configure the default location using az configure --defaults location=<location>",
              args: { name: "location" },
              isRequired: true,
            },
            {
              name: ["--service-name", "-n"],
              description:
                "The name of the soft deleted API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
      ],
    },
    {
      name: "graphql",
      description: "Manage Azure API Management GraphQL API's",
      subcommands: [
        {
          name: "resolver",
          description: "Manage Azure API Management GraphQL API's Resolvers",
          subcommands: [
            {
              name: "create",
              description:
                "Create a new resolver in the GraphQL API or updates an existing one",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--display-name",
                  description: "Resolver Name",
                  args: { name: "display-name" },
                  isRequired: true,
                },
                {
                  name: "--path",
                  description:
                    "Resolver identifier within a GraphQL API. Must be unique in the current API Management service instance",
                  args: { name: "path" },
                  isRequired: true,
                },
                {
                  name: "--resolver-id",
                  description:
                    "Resolver identifier within a GraphQL API. Must be unique in the current API Management service instance",
                  args: { name: "resolver-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--description",
                  description:
                    "Description of the resolver. May include HTML formatting tags",
                  args: { name: "description" },
                },
              ],
            },
            {
              name: "delete",
              description: "Delete the specified resolver in the GraphQL API",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--resolver-id",
                  description:
                    "Resolver identifier within a GraphQL API. Must be unique in the current API Management service instance",
                  args: { name: "resolver-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
                {
                  name: "--if-match",
                  description: "ETag of the Entity",
                  args: { name: "if-match" },
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
                "List a collection of the resolvers for the specified GraphQL API",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "show",
              description:
                "Get the details of the GraphQL API Resolver specified by its identifier",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--resolver-id",
                  description:
                    "Resolver identifier within a GraphQL API. Must be unique in the current API Management service instance",
                  args: { name: "resolver-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the API Management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "policy",
              description:
                "Manage Azure API Management GraphQL API's Resolvers Policies",
              subcommands: [
                {
                  name: "create",
                  description:
                    "Create or updates policy configuration for the GraphQL API Resolver level",
                  options: [
                    {
                      name: "--api-id",
                      description:
                        "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                      args: { name: "api-id" },
                      isRequired: true,
                    },
                    {
                      name: "--resolver-id",
                      description:
                        "Resolver identifier within a GraphQL API. Must be unique in the current API Management service instance",
                      args: { name: "resolver-id" },
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
                      name: ["--service-name", "-n"],
                      description:
                        "The name of the API Management service instance",
                      args: { name: "service-name" },
                      isRequired: true,
                    },
                    {
                      name: "--value-path",
                      description:
                        "Contents of the Policy as defined by the format",
                      args: { name: "value-path" },
                      isRequired: true,
                    },
                    {
                      name: "--policy-format",
                      description: "Format of the policyContent",
                      args: { name: "policy-format" },
                    },
                  ],
                },
                {
                  name: "delete",
                  description:
                    "Delete the policy configuration at the GraphQL Api Resolver",
                  options: [
                    {
                      name: "--api-id",
                      description:
                        "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                      args: { name: "api-id" },
                      isRequired: true,
                    },
                    {
                      name: "--resolver-id",
                      description:
                        "Resolver identifier within a GraphQL API. Must be unique in the current API Management service instance",
                      args: { name: "resolver-id" },
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
                      name: ["--service-name", "-n"],
                      description:
                        "The name of the API Management service instance",
                      args: { name: "service-name" },
                      isRequired: true,
                    },
                    {
                      name: "--if-match",
                      description: "ETag of the Entity",
                      args: { name: "if-match" },
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
                    "Get the list of policy configuration at the GraphQL API Resolver level",
                  options: [
                    {
                      name: "--api-id",
                      description:
                        "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                      args: { name: "api-id" },
                      isRequired: true,
                    },
                    {
                      name: "--resolver-id",
                      description:
                        "Resolver identifier within a GraphQL API. Must be unique in the current API Management service instance",
                      args: { name: "resolver-id" },
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
                      name: ["--service-name", "-n"],
                      description:
                        "The name of the API Management service instance",
                      args: { name: "service-name" },
                      isRequired: true,
                    },
                  ],
                },
                {
                  name: "show",
                  description:
                    "Get the policy configuration at the GraphQL API Resolver level",
                  options: [
                    {
                      name: "--api-id",
                      description:
                        "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                      args: { name: "api-id" },
                      isRequired: true,
                    },
                    {
                      name: "--resolver-id",
                      description:
                        "Resolver identifier within a GraphQL API. Must be unique in the current API Management service instance",
                      args: { name: "resolver-id" },
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
                      name: ["--service-name", "-n"],
                      description:
                        "The name of the API Management service instance",
                      args: { name: "service-name" },
                      isRequired: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "nv",
      description: "Manage Azure API Management Named Values",
      subcommands: [
        {
          name: "create",
          description: "Create an API Management Named Value",
          options: [
            {
              name: "--display-name",
              description: "The Display name of the Named Value",
              args: { name: "display-name" },
              isRequired: true,
            },
            {
              name: "--named-value-id",
              description: "Unique name for the Named Value to be created",
              args: { name: "named-value-id" },
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
              name: ["--service-name", "-n"],
              description: "The name of the API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--if-match",
              description: "ETag of the Entity",
              args: { name: "if-match" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--secret",
              description:
                "Determines whether the value is a secret and should be encrypted or not. Default value is false",
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--value",
              description: "The value of the Named Value",
              args: { name: "value" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete an API Management Named Value",
          options: [
            {
              name: "--named-value-id",
              description: "Identifier of the NamedValue",
              args: { name: "named-value-id" },
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
              name: ["--service-name", "-n"],
              description: "The name of the API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: ["--yes", "-y"],
              description: "Do not prompt for confirmation",
            },
          ],
        },
        {
          name: "list",
          description: "List API Management Named Values",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service-name", "-n"],
              description: "The name of the API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description: "Show details of an API Management Named Value",
          options: [
            {
              name: "--named-value-id",
              description: "Identifier of the NamedValue",
              args: { name: "named-value-id" },
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
              name: ["--service-name", "-n"],
              description: "The name of the API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show-secret",
          description: "Gets the secret of an API Management Named Value",
          options: [
            {
              name: "--named-value-id",
              description: "Identifier of the NamedValue",
              args: { name: "named-value-id" },
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
              name: ["--service-name", "-n"],
              description: "The name of the API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update an API Management Named Value",
          options: [
            {
              name: "--named-value-id",
              description: "Unique name of the api to be created",
              args: { name: "named-value-id" },
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
              name: ["--service-name", "-n"],
              description: "The name of the API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--if-match",
              description: "ETag of the Entity",
              args: { name: "if-match" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--secret",
              description:
                "Determines whether the value is a secret and should be encrypted or not. Default value is false",
              args: { name: "secret", suggestions: ["false", "true"] },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--tags",
              description:
                'Space-separated tags: key[=value] [key[=value] ...]. Use "" to clear existing tags',
              args: { name: "tags" },
            },
            {
              name: "--value",
              description: "The value of the Named Value",
              args: { name: "value" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of an apim named value is met",
          options: [
            {
              name: "--named-value-id",
              description: "Identifier of the NamedValue",
              args: { name: "named-value-id" },
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
              name: ["--service-name", "-n"],
              description: "The name of the API Management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
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
    },
    {
      name: "product",
      description: "Manage Azure API Management Product's",
      subcommands: [
        {
          name: "create",
          description: "Creates a product",
          options: [
            {
              name: "--product-name",
              description: "Product name",
              args: { name: "product-name" },
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
              name: ["--service-name", "-n"],
              description: "The name of the api management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--approval-required",
              description:
                "Whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can use any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false",
              args: {
                name: "approval-required",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--description",
              description:
                "Product description. May include HTML formatting tags",
              args: { name: "description" },
            },
            {
              name: "--legal-terms",
              description:
                "Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process",
              args: { name: "legal-terms" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--product-id",
              description:
                "Product identifier. Must be unique in the current API Management service instance",
              args: { name: "product-id" },
            },
            {
              name: "--state",
              description:
                "Whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished. Possible values include: 'notPublished', 'published'",
              args: {
                name: "state",
                suggestions: ["notPublished", "published"],
              },
            },
            {
              name: ["--subscription-required", "-s"],
              description:
                "Whether a product subscription is required for accessing APIs included in this product",
              args: {
                name: "subscription-required",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--subscriptions-limit",
              description:
                "Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false",
              args: { name: "subscriptions-limit" },
            },
          ],
        },
        {
          name: "delete",
          description: "Delete product",
          options: [
            {
              name: "--product-id",
              description:
                "Product identifier. Must be unique in the current API Management service instance",
              args: { name: "product-id" },
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
              name: ["--service-name", "-n"],
              description: "The name of the api management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--delete-subscriptions",
              description:
                "Delete existing subscriptions associated with the product or not",
              args: { name: "delete-subscriptions" },
            },
            {
              name: "--if-match",
              description: "ETag of the Entity",
              args: { name: "if-match" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
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
            "Lists a collection of products in the specified service instance",
          options: [
            {
              name: ["--resource-group", "-g"],
              description:
                "Name of resource group. You can configure the default group using az configure --defaults group=<name>",
              args: { name: "resource-group" },
              isRequired: true,
            },
            {
              name: ["--service-name", "-n"],
              description: "The name of the api management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "show",
          description:
            "Gets the details of the product specified by its identifier",
          options: [
            {
              name: "--product-id",
              description:
                "Product identifier. Must be unique in the current API Management service instance",
              args: { name: "product-id" },
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
              name: ["--service-name", "-n"],
              description: "The name of the api management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description: "Update existing product details",
          options: [
            {
              name: "--product-id",
              description:
                "Product identifier. Must be unique in the current API Management service instance",
              args: { name: "product-id" },
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
              name: ["--service-name", "-n"],
              description: "The name of the api management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
            {
              name: "--add",
              description:
                "Add an object to a list of objects by specifying a path and key value pairs. Example: --add property.listProperty <key=value, string or JSON string>",
              args: { name: "add" },
            },
            {
              name: "--approval-required",
              description:
                "Whether subscription approval is required. If false, new subscriptions will be approved automatically enabling developers to call the product’s APIs immediately after subscribing. If true, administrators must manually approve the subscription before the developer can use any of the product’s APIs. Can be present only if subscriptionRequired property is present and has a value of false",
              args: {
                name: "approval-required",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--description",
              description:
                "Product description. May include HTML formatting tags",
              args: { name: "description" },
            },
            {
              name: "--force-string",
              description:
                "When using 'set' or 'add', preserve string literals instead of attempting to convert to JSON",
            },
            {
              name: "--if-match",
              description: "ETag of the Entity",
              args: { name: "if-match" },
            },
            {
              name: "--legal-terms",
              description:
                "Product terms of use. Developers trying to subscribe to the product will be presented and required to accept these terms before they can complete the subscription process",
              args: { name: "legal-terms" },
            },
            {
              name: "--no-wait",
              description:
                "Do not wait for the long-running operation to finish",
            },
            {
              name: "--product-name",
              description: "Product name",
              args: { name: "product-name" },
            },
            {
              name: "--remove",
              description:
                "Remove a property or an element from a list. Example: --remove property.list OR --remove propertyToRemove",
              args: { name: "remove" },
            },
            {
              name: "--set",
              description:
                "Update an object by specifying a property path and value to set. Example: --set property1.property2=",
              args: { name: "set" },
            },
            {
              name: "--state",
              description:
                "Whether product is published or not. Published products are discoverable by users of developer portal. Non published products are visible only to administrators. Default state of Product is notPublished. Possible values include: 'notPublished', 'published'",
              args: {
                name: "state",
                suggestions: ["notPublished", "published"],
              },
            },
            {
              name: ["--subscription-required", "-s"],
              description:
                "Whether a product subscription is required for accessing APIs included in this product",
              args: {
                name: "subscription-required",
                suggestions: ["false", "true"],
              },
            },
            {
              name: "--subscriptions-limit",
              description:
                "Whether the number of subscriptions a user can have to this product at the same time. Set to null or omit to allow unlimited per user subscriptions. Can be present only if subscriptionRequired property is present and has a value of false",
              args: { name: "subscriptions-limit" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of an apim product is met",
          options: [
            {
              name: "--product-id",
              description:
                "Product identifier. Must be unique in the current API Management service instance",
              args: { name: "product-id" },
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
              name: ["--service-name", "-n"],
              description: "The name of the api management service instance",
              args: { name: "service-name" },
              isRequired: true,
            },
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
              name: "--interval",
              description: "Polling interval in seconds",
              args: { name: "interval" },
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
          name: "api",
          description: "Manage Azure API Management Product's APIs",
          subcommands: [
            {
              name: "add",
              description: "Add an API to the specified product",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--product-id",
                  description:
                    "Product identifier. Must be unique in the current API Management service instance",
                  args: { name: "product-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the api management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "check",
              description:
                "Checks that API entity specified by identifier is associated with the Product entity",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--product-id",
                  description:
                    "Product identifier. Must be unique in the current API Management service instance",
                  args: { name: "product-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the api management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "delete",
              description:
                "Deletes the specified API from the specified product",
              options: [
                {
                  name: "--api-id",
                  description:
                    "API identifier. Must be unique in the current API Management service instance. Non-current revision has ;rev=n as a suffix where n is the revision number",
                  args: { name: "api-id" },
                  isRequired: true,
                },
                {
                  name: "--product-id",
                  description:
                    "Product identifier. Must be unique in the current API Management service instance",
                  args: { name: "product-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the api management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
            {
              name: "list",
              description:
                "Lists a collection of the APIs associated with a product",
              options: [
                {
                  name: "--product-id",
                  description:
                    "Product identifier. Must be unique in the current API Management service instance",
                  args: { name: "product-id" },
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
                  name: ["--service-name", "-n"],
                  description:
                    "The name of the api management service instance",
                  args: { name: "service-name" },
                  isRequired: true,
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
