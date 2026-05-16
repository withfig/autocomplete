const completion: Fig.Spec = {
  name: "reservations",
  description: "Azure Reservations",
  subcommands: [
    {
      name: "calculate-exchange",
      description:
        "Calculates price for exchanging Reservations if there are no policy errors",
      options: [
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
          name: "--ris-to-exchange",
          description:
            'List of reservations that are being returned in this exchange. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "ris-to-exchange" },
        },
        {
          name: "--ris-to-purchase",
          description:
            'List of reservations that are being purchased in this exchange. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "ris-to-purchase" },
        },
        {
          name: "--sp-to-purchase",
          description:
            'List of savings plans that are being purchased in this exchange. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
          args: { name: "sp-to-purchase" },
        },
      ],
    },
    {
      name: "exchange",
      description:
        "Returns one or more Reservations in exchange for one or more Reservation purchases",
      options: [
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
          name: "--session-id",
          description: "SessionId that was returned by CalculateExchange API",
          args: { name: "session-id" },
        },
      ],
    },
    {
      name: "list",
      description:
        "List the reservations that the user has access to in the current tenant",
      options: [
        {
          name: "--filter",
          description:
            "May be used to filter by reservation properties. The filter supports 'eq', 'or', and 'and'. It does not currently support 'ne', 'gt', 'le', 'ge', or 'not'. Reservation properties include sku/name, properties/{appliedScopeType, archived, displayName, displayProvisioningState, effectiveDateTime, expiryDate, provisioningState, quantity, renew, reservedResourceType, term, userFriendlyAppliedScopeType, userFriendlyRenewState}",
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
          name: "--orderby",
          description: "May be used to sort order by reservation properties",
          args: { name: "orderby" },
        },
        {
          name: "--selected-state",
          description: "The selected provisioning state",
          args: { name: "selected-state" },
        },
      ],
    },
    {
      name: "catalog",
      description: "Reservations catalog",
      subcommands: [
        {
          name: "show",
          description: "Get catalog of available reservation",
          options: [
            {
              name: "--subscription-id",
              description: "Subscription id",
              args: { name: "subscription-id" },
              isRequired: true,
            },
            {
              name: "--filter",
              description:
                "May be used to filter by Catalog properties. The filter supports 'eq', 'or', and 'and'",
              args: { name: "filter" },
            },
            {
              name: "--location",
              description:
                "Filters the skus based on the location specified in this parameter. This can be an azure region or global",
              args: { name: "location" },
            },
            {
              name: "--offer-id",
              description: "Offer id used to get the third party products",
              args: { name: "offer-id" },
            },
            {
              name: "--plan-id",
              description: "Plan id used to get the third party products",
              args: { name: "plan-id" },
            },
            {
              name: "--publisher-id",
              description: "Publisher id used to get the third party products",
              args: { name: "publisher-id" },
            },
            {
              name: "--reserved-resource-type",
              description:
                "The type of the resource for which the skus should be provided",
              args: { name: "reserved-resource-type" },
            },
          ],
        },
      ],
    },
    {
      name: "reservation",
      description: "Reservations reservation",
      subcommands: [
        {
          name: "archive",
          description:
            "Archiving a Reservation which is in cancelled/expired state and move it to Archived state",
          options: [
            {
              name: "--reservation-id",
              description: "Id of the Reservation Item",
              args: { name: "reservation-id" },
              isRequired: true,
            },
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "list",
          description: "List Reservations within a single ReservationOrder",
          options: [
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
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
          name: "list-available-scope",
          description: "List Available Scopes for Reservation",
          options: [
            {
              name: "--reservation-id",
              description: "Id of the Reservation Item",
              args: { name: "reservation-id" },
              isRequired: true,
            },
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
              isRequired: true,
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
              name: "--scopes",
              description:
                'Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "scopes" },
            },
          ],
        },
        {
          name: "list-history",
          description: "List of all the revisions for the Reservation",
          options: [
            {
              name: "--reservation-id",
              description: "Id of the Reservation Item",
              args: { name: "reservation-id" },
              isRequired: true,
            },
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
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
          name: "merge",
          description:
            "Merge the specified Reservations into a new Reservation. The two Reservations being merged must have same properties",
          options: [
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
              isRequired: true,
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
              name: "--sources",
              description:
                'Format of the resource id should be /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId} Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "sources" },
            },
          ],
        },
        {
          name: "show",
          description: "Get specific Reservation details",
          options: [
            {
              name: "--reservation-id",
              description: "Id of the Reservation Item",
              args: { name: "reservation-id" },
              isRequired: true,
            },
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "Supported value of this query is renewProperties",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "split",
          description:
            "Split a Reservation into two Reservations with specified quantity distribution",
          options: [
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
              isRequired: true,
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
              name: "--quantities",
              description:
                'List of the quantities in the new reservations to create. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "quantities" },
            },
            {
              name: "--reservation-id",
              description:
                "Resource id of the reservation to be split. Format of the resource id should be /providers/Microsoft.Capacity/reservationOrders/{reservationOrderId}/reservations/{reservationId}",
              args: { name: "reservation-id" },
            },
          ],
        },
        {
          name: "unarchive",
          description:
            "Unarchiving a Reservation moves it to the state it was before archiving",
          options: [
            {
              name: "--reservation-id",
              description: "Id of the Reservation Item",
              args: { name: "reservation-id" },
              isRequired: true,
            },
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
              isRequired: true,
            },
          ],
        },
        {
          name: "update",
          description:
            "Update the applied scopes, renewal, name, instance-flexibility of the Reservation",
          options: [
            {
              name: "--reservation-id",
              description: "Id of the Reservation Item",
              args: { name: "reservation-id" },
              isRequired: true,
            },
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
              isRequired: true,
            },
            {
              name: "--applied-scope-property",
              description:
                'Properties specific to applied scope type. Not required if not applicable. Required and need to provide tenantId and managementGroupId if AppliedScopeType is ManagementGroup Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "applied-scope-property" },
            },
            {
              name: "--applied-scope-type",
              description: "Type of the Applied Scope",
              args: {
                name: "applied-scope-type",
                suggestions: ["ManagementGroup", "Shared", "Single"],
              },
            },
            {
              name: "--applied-scopes",
              description:
                'List of the subscriptions that the benefit will be applied. Do not specify if AppliedScopeType is Shared. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "applied-scopes" },
            },
            {
              name: "--instance-flexibility",
              description:
                "Turning this on will apply the reservation discount to other VMs in the same VM size group. Only specify for VirtualMachines reserved resource type",
              args: {
                name: "instance-flexibility",
                suggestions: ["Off", "On"],
              },
            },
            {
              name: "--name",
              description: "Name of the Reservation",
              args: { name: "name" },
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
              name: "--renew",
              description:
                "Setting this to true will automatically purchase a new reservation on the expiration date time",
            },
            {
              name: "--renewal-properties",
              description:
                'Renewal purchase properties Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "renewal-properties" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: "--reservation-id",
              description: "Id of the Reservation Item",
              args: { name: "reservation-id" },
              isRequired: true,
            },
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
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
              name: "--expand",
              description: "Supported value of this query is renewProperties",
              args: { name: "expand" },
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
      name: "reservation-order",
      description: "Reservations reservation-order",
      subcommands: [
        {
          name: "calculate",
          description: "Calculate price for placing a ReservationOrder",
          options: [
            {
              name: "--applied-scope",
              description:
                'Subscription that the benefit will be applied. Required if --applied-scope-type is Single. Do not specify if --applied-scope-type is Shared. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "applied-scope" },
            },
            {
              name: "--applied-scope-property",
              description:
                'Properties specific to applied scope type. Not required if not applicable. Required and need to provide tenantId and managementGroupId if AppliedScopeType is ManagementGroup Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "applied-scope-property" },
            },
            {
              name: "--applied-scope-type",
              description: "Type of the Applied Scope",
              args: {
                name: "applied-scope-type",
                suggestions: ["ManagementGroup", "Shared", "Single"],
              },
            },
            {
              name: "--billing-plan",
              description: "Represent the billing plans",
              args: {
                name: "billing-plan",
                suggestions: ["Monthly", "Upfront"],
              },
            },
            {
              name: "--billing-scope",
              description:
                "Subscription that will be charged for purchasing Reservation",
              args: { name: "billing-scope" },
            },
            {
              name: "--display-name",
              description: "Friendly name of the Reservation",
              args: { name: "display-name" },
            },
            {
              name: "--instance-flexibility",
              description:
                "Turning this on will apply the reservation discount to other VMs in the same VM size group. Only specify for VirtualMachines reserved resource type",
              args: {
                name: "instance-flexibility",
                suggestions: ["Off", "On"],
              },
            },
            {
              name: "--location",
              description: "The Azure Region where the reserved resource lives",
              args: { name: "location" },
            },
            {
              name: "--quantity",
              description:
                "Quantity of the SKUs that are part of the Reservation",
              args: { name: "quantity" },
            },
            {
              name: "--renew",
              description:
                "Setting this to true will automatically purchase a new reservation on the expiration date time",
            },
            {
              name: "--reserved-resource-type",
              description: "The type of the resource that is being reserved",
              args: {
                name: "reserved-resource-type",
                suggestions: [
                  "AVS",
                  "AppService",
                  "AzureDataExplorer",
                  "AzureFiles",
                  "BlockBlob",
                  "CosmosDb",
                  "DataFactory",
                  "Databricks",
                  "DedicatedHost",
                  "ManagedDisk",
                  "MariaDb",
                  "MySql",
                  "NetAppStorage",
                  "PostgreSql",
                  "RedHat",
                  "RedHatOsa",
                  "RedisCache",
                  "SapHana",
                  "SqlAzureHybridBenefit",
                  "SqlDataWarehouse",
                  "SqlDatabases",
                  "SqlEdge",
                  "SuseLinux",
                  "VMwareCloudSimple",
                  "VirtualMachineSoftware",
                  "VirtualMachines",
                ],
              },
            },
            {
              name: "--review-date-time",
              description:
                "This is the date-time when the Azure hybrid benefit needs to be reviewed",
              args: { name: "review-date-time" },
            },
            {
              name: "--sku",
              description: "Sku name for purchasing",
              args: { name: "sku" },
            },
            {
              name: "--term",
              description: "Represent the term of Reservation",
              args: { name: "term", suggestions: ["P1Y", "P3Y", "P5Y"] },
            },
          ],
        },
        {
          name: "calculate-refund",
          description:
            "Calculate price for returning Reservations if there are no policy errors",
          options: [
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
              isRequired: true,
            },
            {
              name: "--id",
              description:
                "Fully qualified identifier of the reservation order being returned",
              args: { name: "id" },
            },
            {
              name: "--quantity",
              description: "Quantity to be returned. Must be greater than zero",
              args: { name: "quantity" },
            },
            {
              name: "--reservation-id",
              description:
                "Fully qualified identifier of the Reservation being returned",
              args: { name: "reservation-id" },
            },
            {
              name: "--scope",
              description: "The scope of the refund, e.g. Reservation",
              args: { name: "scope" },
            },
          ],
        },
        {
          name: "change-directory",
          description:
            "Change directory (tenant) of ReservationOrder and all Reservation under it to specified tenant id",
          options: [
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
              isRequired: true,
            },
            {
              name: "--destination-tenant-id",
              description:
                "Tenant id GUID that reservation order is to be transferred to",
              args: { name: "destination-tenant-id" },
            },
          ],
        },
        {
          name: "list",
          description:
            "List of all the ReservationOrders that the user has access to in the current tenant",
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
          ],
        },
        {
          name: "purchase",
          description:
            "Create ReservationOrder and create resource under the specified URI",
          options: [
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
              isRequired: true,
            },
            {
              name: "--applied-scope",
              description:
                'Subscription that the benefit will be applied. Required if --applied-scope-type is Single. Do not specify if --applied-scope-type is Shared. Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "applied-scope" },
            },
            {
              name: "--applied-scope-property",
              description:
                'Properties specific to applied scope type. Not required if not applicable. Required and need to provide tenantId and managementGroupId if AppliedScopeType is ManagementGroup Support shorthand-syntax, json-file and yaml-file. Try "??" to show more',
              args: { name: "applied-scope-property" },
            },
            {
              name: "--applied-scope-type",
              description: "Type of the Applied Scope",
              args: {
                name: "applied-scope-type",
                suggestions: ["ManagementGroup", "Shared", "Single"],
              },
            },
            {
              name: "--billing-plan",
              description: "Represent the billing plans",
              args: {
                name: "billing-plan",
                suggestions: ["Monthly", "Upfront"],
              },
            },
            {
              name: "--billing-scope",
              description:
                "Subscription that will be charged for purchasing Reservation",
              args: { name: "billing-scope" },
            },
            {
              name: "--display-name",
              description: "Friendly name of the Reservation",
              args: { name: "display-name" },
            },
            {
              name: "--instance-flexibility",
              description:
                "Turning this on will apply the reservation discount to other VMs in the same VM size group. Only specify for VirtualMachines reserved resource type",
              args: {
                name: "instance-flexibility",
                suggestions: ["Off", "On"],
              },
            },
            {
              name: "--location",
              description: "The Azure Region where the reserved resource lives",
              args: { name: "location" },
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
              name: "--quantity",
              description:
                "Quantity of the SKUs that are part of the Reservation",
              args: { name: "quantity" },
            },
            {
              name: "--renew",
              description:
                "Setting this to true will automatically purchase a new reservation on the expiration date time",
            },
            {
              name: "--reserved-resource-type",
              description: "The type of the resource that is being reserved",
              args: {
                name: "reserved-resource-type",
                suggestions: [
                  "AVS",
                  "AppService",
                  "AzureDataExplorer",
                  "AzureFiles",
                  "BlockBlob",
                  "CosmosDb",
                  "DataFactory",
                  "Databricks",
                  "DedicatedHost",
                  "ManagedDisk",
                  "MariaDb",
                  "MySql",
                  "NetAppStorage",
                  "PostgreSql",
                  "RedHat",
                  "RedHatOsa",
                  "RedisCache",
                  "SapHana",
                  "SqlAzureHybridBenefit",
                  "SqlDataWarehouse",
                  "SqlDatabases",
                  "SqlEdge",
                  "SuseLinux",
                  "VMwareCloudSimple",
                  "VirtualMachineSoftware",
                  "VirtualMachines",
                ],
              },
            },
            {
              name: "--review-date-time",
              description:
                "This is the date-time when the Azure hybrid benefit needs to be reviewed",
              args: { name: "review-date-time" },
            },
            {
              name: "--sku",
              description: "Sku name for purchasing",
              args: { name: "sku" },
            },
            {
              name: "--term",
              description: "Represent the term of Reservation",
              args: { name: "term", suggestions: ["P1Y", "P3Y", "P5Y"] },
            },
          ],
        },
        {
          name: "return",
          description: "Return a reservation",
          options: [
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
              isRequired: true,
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
              name: "--quantity",
              description: "Quantity to be returned. Must be greater than zero",
              args: { name: "quantity" },
            },
            {
              name: "--reservation-id",
              description:
                "Fully qualified identifier of the Reservation being returned",
              args: { name: "reservation-id" },
            },
            {
              name: "--return-reason",
              description: "The reason of returning the reservation",
              args: { name: "return-reason" },
            },
            {
              name: "--scope",
              description: "The scope of the refund, e.g. Reservation",
              args: { name: "scope" },
            },
            {
              name: "--session-id",
              description: "SessionId that was returned by CalculateRefund API",
              args: { name: "session-id" },
            },
          ],
        },
        {
          name: "show",
          description: "Get the details of the ReservationOrder",
          options: [
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
              isRequired: true,
            },
            {
              name: "--expand",
              description: "May be used to expand the planInformation",
              args: { name: "expand" },
            },
          ],
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition is met",
          options: [
            {
              name: "--reservation-order-id",
              description: "Order Id of the reservation",
              args: { name: "reservation-order-id" },
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
              name: "--expand",
              description: "May be used to expand the planInformation",
              args: { name: "expand" },
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
      name: "reservation-order-id",
      description: "Reservations reservation-order-id",
      subcommands: [
        {
          name: "list",
          description:
            "List applicable Reservations that are applied to this subscription or a resource group under this subscription",
          options: [
            {
              name: "--subscription-id",
              description: "Subscription id",
              args: { name: "subscription-id" },
              isRequired: true,
            },
          ],
        },
      ],
    },
  ],
};

export default completion;
