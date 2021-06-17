const globalOptions: Fig.Option[] = [
  {
    name: "--api-key",
    description: "Sets your API key to use for the command",
    args: {
      name: "stripe api key",
    },
  },
  {
    name: "--color",
    description: "Enables or disables color output",
    args: {
      name: "setting",
      suggestions: ["on", "off", "auto"],
    },
  },
  {
    name: "--config",
    description: "Sets your config file",
    args: {
      name: "config filepath",
    },
  },
  {
    name: "--device-name",
    description: "Runs command on behlaf of another device",
    args: {
      name: "name",
    },
  },
  {
    name: ["-h", "--help"],
    description:
      "Provides the help documentation for commands, flags, and arguments",
  },
  {
    name: "--log-level",
    description: "Set the level of detail for log messages",
    args: {
      name: "level",
      suggestions: ["info", "debug", "warn", "error"],
    },
  },
  {
    name: ["-v", "--version"],
    description: "Prints the version of the Stripe CLI",
  },
];

export const completion: Fig.Spec = {
  name: "stripe",
  description: "CLI interface for Stripe.com",
  subcommands: [
    {
      name: "login",
      description: "Connects to your Stripe account",
      args: {
        variadic: true,
        name: "tool | tool@version",
      },
      options: [
        {
          name: ["-i", "--interactive"],
          description:
            "Manually provide an API key if you can't access a browser",
        },
        ...globalOptions,
      ],
    },
    {
      name: "config",
      description: "Installs a tool in your toolchain",
      options: [
        {
          name: ["-e", "--edit"],
          description: "Opens the configuration file in your default editor",
        },
        {
          name: "--list",
          description: "List all configured options",
        },
        {
          name: "--set",
          description: "Set a value for the specified configuration option",
          args: [
            {
              name: "option",
              description: "Config option",
            },
            {
              name: "value",
              description: "Value for config option",
            },
          ],
        },
        {
          name: "--unset",
          description: "Remove a key-value pair from the config file",
          args: {
            name: "option",
            description: "Config option",
          },
        },
        ...globalOptions,
      ],
    },
    {
      name: "completion",
      description: "Generates shell autocompletions",
      options: [
        {
          name: "--shell",
          description: "Opens the configuration file in your default editor",
          args: {
            name: "platform",
            description: "The shell to generate completion commands for",
            suggestions: ["zsh", "bash"],
          },
        },
        ...globalOptions,
      ],
    },
    {
      name: "logs tail",
      description: "Logs from your Stripe requests",
      options: [
        {
          name: "--filter-account",
          description:
            "Filters request logs by the source and destination account",
          args: {
            name: "values",
            variadic: true,
            suggestions: [
              {
                name: "connect_in",
                description: "Incoming Connect requests",
              },
              {
                name: "connect_out",
                description: "Outgoing Connect requests",
              },
              {
                name: "self",
                description: "Non-Connect requests",
              },
            ],
          },
        },
        {
          name: "--filter-http-method",
          description: "Filters request logs by HTTP method",
          args: {
            variadic: true,
            name: "values",
            suggestions: [
              {
                name: "GET",
                description: "HTTP GET requests",
              },
              {
                name: "POST",
                description: "HTTP POST requests",
              },
              {
                name: "DELETE",
                description: "HTTP DELETE requests",
              },
            ],
          },
        },
        {
          name: "--filter-ip-address",
          description: "Filters request logs by IP address",
          args: {
            variadic: true,
            name: "values",
          },
        },
        {
          name: "--filter-request-path",
          description:
            "Filters request logs that directly match any Stripe path",
          args: {
            variadic: true,
            name: "values",
          },
        },
        {
          name: "--filter-request-status",
          description: "Filters request logs by the response status",
          args: {
            variadic: true,
            name: "values",
            suggestions: [
              {
                name: "SUCCEEDED",
                description: "Requests that succeeded",
              },
              {
                name: "FAILED",
                description: "Requests that failed",
              },
            ],
          },
        },
        {
          name: "--filter-source",
          description: "Filters request logs by the source of each request",
          args: {
            variadic: true,
            name: "values",
            suggestions: [
              {
                name: "API",
                description: "Requests created with the Stripe API",
              },
              {
                name: "DASHBOARD",
                description: "Requests created from the Dashboard",
              },
            ],
          },
        },
        {
          name: "--filter-status-code",
          description: "Filters request logs by HTTP status code",
          args: {
            variadic: true,
            name: "values",
          },
        },
        {
          name: "--filter-status-code-type",
          description: "Filters request logs by the type of HTTP status code",
          args: {
            variadic: true,
            name: "values",
            suggestions: [
              {
                name: "2XX",
                description: "HTTP 2xx status codes",
              },
              {
                name: "4XX",
                description: "HTTP 4xx status codes",
              },
              {
                name: "5XX",
                description: "HTTP 5xx status codes",
              },
            ],
          },
        },
        {
          name: "--format",
          description: "Specify the output format for request logs",
          args: {
            name: "value",
            suggestions: [
              {
                name: "JSON",
                description: "Output logs in JSON format",
              },
            ],
          },
        },
        ...globalOptions,
      ],
    },
    {
      name: "status",
      description: "Displays Stripe's system status and service availability",
      options: [
        {
          name: "--format",
          description: "Formats used to display status",
          args: {
            name: "value",
            suggestions: [
              {
                name: "default",
                description: "Render the status using standard output",
              },
              {
                name: "JSON",
                description: "Render status as JSON",
              },
            ],
          },
        },
        {
          name: "--hide-spinner",
          description: "Hides the loading spinner when polling",
        },
        {
          name: "--poll",
          description: "Keeps polling for status updates",
        },
        {
          name: "--poll-rate",
          description:
            "The number of seconds (min 5) to wait between status updates",
          args: {
            name: "seconds",
            description: "Min: 5, default: 60",
          },
        },
        {
          name: "--verbose",
          description: "Shows the status of all Stripe systems",
        },
        ...globalOptions,
      ],
    },
    {
      name: "open",
      description: "Displays Stripe's system status and service availability",
      args: {
        name: "shortcut",
        suggestions: [
          "api",
          "apiref",
          "cliref",
          "dashboard",
          "dashboard/apikeys",
          "dashboard/atlas",
          "dashboard/balance",
          "dashboard/billing",
          "dashboard/connect",
          "dashboard/connect/accounts",
          "dashboard/connect/collected",
          "dashboard/connect/transfers",
          "dashboard/coupons",
          "dashboard/customers",
          "dashboard/developers",
          "dashboard/disputes",
          "dashboard/events",
          "dashboard/invoices",
          "dashboard/logs",
          "dashboard/orders",
          "dashboard/orders/products",
          "dashboard/payments",
          "dashboard/radar",
          "dashboard/radar/list",
          "dashboard/radar/reviews",
          "dashboard/radar/rules",
          "dashboard/settings",
          "dashboard/subscriptions",
          "dashboard/products",
          "dashboard/tax",
          "dashboard/terminal",
          "dashbaord/terminal/hardware/orders",
          "dashboard/terminal/locations",
          "dashboard/topups",
          "dashboard/transactions",
          "dashboard/webhooks",
          "docs",
        ],
      },
      options: [
        {
          name: "--list",
          description: "Lists all supported shortcuts",
        },
        {
          name: "--live",
          description: "Opens the Dashboard for your live integrations",
        },
        ...globalOptions,
      ],
    },
    {
      name: "listen",
      description: "Receives webhook events from Stripe locally",
      options: [
        {
          name: "--connect-headers",
          description:
            "A comma-seperated list of custom HTTP headers to any connected accounts",
          args: {
            variadic: true,
            name: "values",
            description: "Key1:Value1, Key2:Value2",
          },
        },
        {
          name: ["-e", "--events"],
          description: "A comma-seperated list of which events to listen for",
          args: {
            variadic: true,
            name: "events types",
          },
        },
        {
          name: ["-c", "--forward-connect-to"],
          description:
            "The URL that Connect webhook events will be forwarded to",
          args: {
            name: "url",
          },
        },
        {
          name: ["-f", "--forward-to"],
          description: "The URL that webhook events will be forwarded to",
          args: {
            name: "url",
          },
        },
        {
          name: ["-H", "--headers"],
          description:
            "A comma-separated list of custom HTTP headers to forward",
          args: {
            variadic: true,
            name: "values",
            description: "Key1:Value1, Key2:Value2",
          },
        },
        {
          name: ["-l", "--latest"],
          description: "Receive events used in the latest API version",
        },
        {
          name: "--live",
          description: "Make a live request",
        },
        {
          name: ["-a", "--load-from-webhooks-api"],
          description:
            "Listen for all webhook events based on existing webhook endpoints",
        },
        {
          name: ["-j", "--print-json"],
          description: "Print JSON objects to stdout",
        },
        {
          name: "--skip-verify",
          description:
            "Skip certificate verification when forwarding to HTTPS endpoints",
        },
        ...globalOptions,
      ],
    },
    {
      name: "trigger",
      description: "Triggers webhook events to conduct local testing",
      args: {
        name: "event",
        description: "webhook events",
        suggestions: [
          "account.updated",
          "balance.available",
          "charge.captured",
          "charge.dispute.created",
          "charge.failed",
          "charge.refunded",
          "charge.succeeded",
          "checkout.session.async_payment_failed",
          "checkout.session.async_payment_succeeded",
          "checkout.session.completed",
          "customer.created",
          "customer.deleted",
          "customer.source.created",
          "customer.source.updated",
          "customer.subscription.created",
          "customer.subscription.deleted",
          "customer.subscription.updated",
          "customer.updated",
          "invoice.created",
          "invoice.finalized",
          "invoice.payment_action_required",
          "invoice.payment_failed",
          "invoice.payment_succeeded",
          "invoice.updated",
          "issuing_authorization.request",
          "issuing_card.created",
          "issuing_cardholder.created",
          "payment_intent.amount_capturable_updated",
          "payment_intent.canceled",
          "payment_intent.created",
          "payment_intent.payment_failed",
          "payment_intent.succeeded",
          "payment_method.attached",
          "plan.created",
          "plan.deleted",
          "plan.updated",
          "product.created",
          "product.deleted",
          "product.updated",
          "setup_intent.canceled",
          "setup_intent.created",
          "setup_intent.setup_failed",
          "setup_intent.succeeded",
          "subscription_schedule.canceled",
          "subscription_schedule.created",
          "subscription_schedule.released",
          "subscription_schedule.updated",
        ],
      },
      options: [
        {
          name: "--stripe-account",
          description: "Sets a header identifying the connected account",
        },
        ...globalOptions,
      ],
    },
    {
      name: "events resend",
      description: "Resend an event to test a webhook endpoint",
      args: {
        name: "event id",
        description: "The ID of the event to resend",
      },
      options: [
        {
          name: "--account",
          description: "Resend the event to the given Stripe account",
          args: {
            name: "account id",
          },
        },
        {
          name: ["-c", "--confirm"],
          description:
            "Skips the warning prompt and automatically confirms the command being entered",
        },
        {
          name: "--dark-style",
          description: "Uses a darker color scheme",
        },
        {
          name: ["-d", "--data"],
          description: "Additional data ot send with an API request",
          args: {
            name: "value",
          },
        },
        {
          name: ["-e", "--expand"],
          description: "Response attributes to expand inline",
          args: {
            name: "value",
          },
        },
        {
          name: ["-i", "--idempotency"],
          description:
            "Sets an idempotency key for the request, preventing the same request from replaying within 24 hours",
          args: {
            name: "key",
          },
        },
        {
          name: "--live",
          description: "Makes a live request",
        },
        {
          name: "--param",
          description: "Key-value data to send along with the API request",
          args: {
            name: "value",
          },
        },
        {
          name: ["-s", "--show-headers"],
          description: "Shows response HTTP headers",
        },
        {
          name: "--stripe-account",
          description: "Specify the Stripe account to use for this request",
          args: {
            name: "account id",
          },
        },
        {
          name: ["-v", "--stripe-version"],
          description: "Specify the Stripe API version to use for this request",
          args: {
            name: "version",
          },
        },
        {
          name: "-webhook-endpoint",
          description: "Resends the event to the given webhook endpoint ID",
          args: {
            name: "endpoint id",
          },
        },
        ...globalOptions,
      ],
    },
  ],
  options: [...globalOptions],
};
