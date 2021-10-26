const completionSpec: Fig.Spec = {
  name: "notification-hub",
  description: "Manage Notification Hubs",
  subcommands: [
    {
      name: "authorization-rule",
      description: "Commands to manage notification hubs authorization rule",
      subcommands: [
        {
          name: "create",
          description: "Create an authorization rule for a NotificationHub",
        },
        {
          name: "delete",
          description: "Delete a notificationHub authorization rule",
        },
        {
          name: "list",
          description: "List the authorization rules for a NotificationHub",
        },
        {
          name: "list-keys",
          description:
            "List the Primary and Secondary ConnectionStrings to the NotificationHub",
        },
        {
          name: "regenerate-keys",
          description:
            "Regenerate the Primary/Secondary Keys to the NotificationHub Authorization Rule",
        },
        {
          name: "show",
          description:
            "Show an authorization rule for a NotificationHub by name",
        },
      ],
    },
    {
      name: "check-availability",
      description:
        "Check the availability of the given notificationHub in a namespace",
    },
    { name: "create", description: "Create a NotificationHub in a namespace" },
    {
      name: "credential",
      description: "Commands to manage notification hub credential",
      subcommands: [
        {
          name: "adm",
          description:
            "Commands to manage notification hub credential for Amazon(ADM)",
          subcommands: [
            {
              name: "update",
              description: "Update credential for Amazon(ADM)",
            },
          ],
        },
        {
          name: "apns",
          description:
            "Commands to manage notification hub credential for Apple(APNS)",
          subcommands: [
            {
              name: "update",
              description: "Update credential for Apple(APNS)",
            },
          ],
        },
        {
          name: "baidu",
          description:
            "Commands to manage notification hub credential for Baidu(Andrioid China)",
          subcommands: [
            {
              name: "update",
              description: "Update credential for Baidu(Andrioid China)",
            },
          ],
        },
        {
          name: "gcm",
          description:
            "Commands to manage notification hub credential for Google(GCM/FCM)",
          subcommands: [
            {
              name: "update",
              description: "Update the Google GCM/FCM API key",
            },
          ],
        },
        {
          name: "list",
          description:
            "List the PNS Credentials associated with a notification hub",
        },
        {
          name: "mpns",
          description:
            "Commands to manage notification hub credential for Windows Phone(MPNS)",
          subcommands: [
            {
              name: "update",
              description: "Update credential for Windows Phone(MPNS)",
            },
          ],
        },
        {
          name: "wns",
          description:
            "Commands to manage notification hub credential for Windows(WNS)",
          subcommands: [
            {
              name: "update",
              description: "Update credential for Windows(WNS)",
            },
          ],
        },
      ],
    },
    {
      name: "delete",
      description: "Delete a notification hub associated with a namespace",
    },
    {
      name: "list",
      description: "List the notification hubs associated with a namespace",
    },
    {
      name: "namespace",
      description: "Commands to manage notification hub namespace",
      subcommands: [
        {
          name: "authorization-rule",
          description:
            "Commands to manage notification hubs namespace authorization rule",
          subcommands: [
            {
              name: "create",
              description: "Create an authorization rule for a namespace",
            },
            {
              name: "delete",
              description: "Delete a namespace authorization rule",
            },
            {
              name: "list",
              description: "List the authorization rules for a namespace",
            },
            {
              name: "list-keys",
              description:
                "List the Primary and Secondary ConnectionStrings to the namespace",
            },
            {
              name: "regenerate-keys",
              description:
                "Regenerate the Primary/Secondary Keys to the Namespace Authorization Rule",
            },
            {
              name: "show",
              description: "Show an authorization rule for a namespace by name",
            },
          ],
        },
        {
          name: "check-availability",
          description:
            "Check the availability of the given service namespace across all Azure subscriptions. This is useful because the domain name is created based on the service namespace name",
        },
        {
          name: "create",
          description:
            "Create a service namespace. Once created, this namespace's resource manifest is immutable. This operation is idempotent",
        },
        {
          name: "delete",
          description:
            "Delete an existing namespace. This operation also removes all associated notification hubs under the namespace",
        },
        { name: "list", description: "List available namespaces" },
        {
          name: "show",
          description: "Return the description for the specified namespace",
        },
        {
          name: "update",
          description:
            "Update a service namespace. The namespace's resource manifest is immutable and cannot be modified",
        },
        {
          name: "wait",
          description:
            "Place the CLI in a waiting state until a condition of the Notification Hub Namesapce is met",
        },
      ],
    },
    { name: "show", description: "Show the notification hub information" },
    { name: "test-send", description: "Test send a push notification" },
    { name: "update", description: "Update a Notification Hub in a namespace" },
  ],
};

export default completionSpec;
