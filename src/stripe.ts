const webhookSuggestions: Fig.Suggestion[] = [
  {
    name: "balance.available",
    description:
      "Occurs whenever your Stripe balance has been updated (e.g., when a charge is available to be paid out). By default, Stripe automatically transfers funds in your balance to your bank account on a daily basis",
  },
  {
    name: "charge.captured",
    description: "Occurs whenever a previously uncaptured charge is captured",
  },
  {
    name: "charge.dispute.created",
    description: "Occurs whenever a customer disputes a charge with their bank",
  },
  {
    name: "charge.failed",
    description: "Occurs whenever a failed charge attempt occurs",
  },
  {
    name: "charge.refunded",
    description:
      "Occurs whenever a charge is refunded, including partial refunds",
  },
  {
    name: "charge.succeeded",
    description: "Occurs whenever a new charge is created and is successful",
  },
  {
    name: "checkout.session.completed",
    description:
      "Occurs when a Checkout Session has been successfully completed",
  },
  {
    name: "customer.created",
    description: "Occurs whenever a new customer is created",
  },
  {
    name: "customer.deleted",
    description: "Occurs whenever a customer is deleted",
  },
  {
    name: "customer.source.created",
    description: "Occurs whenever a new source is created for a customer",
  },
  {
    name: "customer.source.updated",
    description: "Occurs whenever a source's details are changed",
  },
  {
    name: "customer.subscription.created",
    description: "Occurs whenever a customer is signed up for a new plan",
  },
  {
    name: "customer.subscription.deleted",
    description: "Occurs whenever a customer's subscription ends",
  },
  {
    name: "customer.subscription.updated",
    description:
      "Occurs whenever a subscription changes (e.g., switching from one plan to another, or changing the status from trial to active)",
  },
  {
    name: "customer.updated",
    description: "Occurs whenever any property of a customer changes",
  },
  {
    name: "invoice.created",
    description: "Occurs whenever a new invoice is created",
  },
  {
    name: "invoice.finalized",
    description:
      "Occurs whenever a draft invoice is finalized and updated to be an open invoice",
  },
  {
    name: "invoice.payment_failed",
    description:
      "Occurs whenever an invoice payment attempt fails, due either to a declined payment or to the lack of a stored payment method",
  },
  {
    name: "invoice.payment_succeeded",
    description: "Occurs whenever an invoice payment attempt succeeds",
  },
  {
    name: "invoice.updated",
    description:
      "Occurs whenever an invoice changes (e.g., the invoice amount)",
  },
  {
    name: "issuing_authorization.request",
    description: "Represents a synchronous request for authorization",
  },
  {
    name: "issuing_card.created",
    description: "Occurs whenever a card is created",
  },
  {
    name: "issuing_cardholder.created",
    description: "Occurs whenever a cardholder is created",
  },
  {
    name: "payment_intent.amount_capturable_updated",
    description: "Occurs when a PaymentIntent has funds to be captured",
  },
  {
    name: "payment_intent.canceled",
    description: "Occurs when a PaymentIntent is canceled",
  },
  {
    name: "payment_intent.created",
    description: "Occurs when a new PaymentIntent is created",
  },
  {
    name: "payment_intent.payment_failed",
    description:
      "Occurs when a PaymentIntent has failed the attempt to create a payment method or a payment",
  },
  {
    name: "payment_intent.succeeded",
    description:
      "Occurs when a PaymentIntent has successfully completed payment",
  },
  {
    name: "payment_method.attached",
    description:
      "Occurs whenever a new payment method is attached to a customer",
  },
  {
    name: "setup_intent.canceled",
    description: "Occurs when a SetupIntent is canceled",
  },
  {
    name: "setup_intent.created",
    description: "Occurs when a new SetupIntent is created",
  },
  {
    name: "setup_intent.setup_failed",
    description:
      "Occurs when a SetupIntent has failed the attempt to setup a payment method",
  },
  {
    name: "setup_intent.succeeded",
    description:
      "Occurs when an SetupIntent has successfully setup a payment method",
  },
];

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
      template: "filepaths",
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

const sharedOptions: Fig.Option[] = [
  {
    name: ["-s", "--show-headers"],
    description: "Shows response HTTP headers",
  },
  {
    name: ["-c", "--confirm"],
    description:
      "Skips the warning prompt and automatically confirms the command being entered",
    isDangerous: true,
  },
  {
    name: "--dark-style",
    description: "Uses a darker color scheme",
  },
  {
    name: ["-d", "--data"],
    description: "Additional data to send with an API request",
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
];

const completionSpec: Fig.Spec = {
  name: "stripe",
  description: "CLI interface for Stripe.com",
  subcommands: [
    {
      name: "login",
      description: "Connects to your Stripe account",
      args: {
        isVariadic: true,
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
            isVariadic: true,
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
            isVariadic: true,
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
            isVariadic: true,
            name: "values",
          },
        },
        {
          name: "--filter-request-path",
          description:
            "Filters request logs that directly match any Stripe path",
          args: {
            isVariadic: true,
            name: "values",
          },
        },
        {
          name: "--filter-request-status",
          description: "Filters request logs by the response status",
          args: {
            isVariadic: true,
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
            isVariadic: true,
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
            isVariadic: true,
            name: "values",
          },
        },
        {
          name: "--filter-status-code-type",
          description: "Filters request logs by the type of HTTP status code",
          args: {
            isVariadic: true,
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
            "A comma-separated list of custom HTTP headers to any connected accounts",
          args: {
            isVariadic: true,
            name: "values",
            description: "Key1:Value1, Key2:Value2",
          },
        },
        {
          name: ["-e", "--events"],
          description: "A comma-separated list of which events to listen for",
          args: {
            isVariadic: true,
            name: "events types",
            suggestions: [
              {
                name: "account.updated",
                description:
                  "Occurs whenever an account status or property has changed",
              },
              {
                name: "account.application.authorized",
                description:
                  "Occurs whenever a user authorizes an application. Sent to the related application only",
              },
              {
                name: "account.application.deauthorized",
                description:
                  "Occurs whenever a user deauthorizes an application. Sent to the related application only",
              },
              {
                name: "account.external_account.created",
                description: "Occurs whenever an external account is created",
              },
              {
                name: "account.external_account.deleted",
                description: "Occurs whenever an external account is deleted",
              },
              {
                name: "account.external_account.updated",
                description: "Occurs whenever an external account is updated",
              },
              {
                name: "application_fee.created",
                description:
                  "Occurs whenever an application fee is created on a charge",
              },
              {
                name: "application_fee.refunded",
                description:
                  "Occurs whenever an application fee is refunded, whether from refunding a charge or from refunding the application fee directly. This includes partial refunds",
              },
              {
                name: "application_fee.refund.updated",
                description:
                  "Occurs whenever an application fee refund is updated",
              },
              {
                name: "billing_portal.configuration.created",
                description:
                  "Occurs whenever a portal configuration is created",
              },
              {
                name: "billing_portal.configuration.updated",
                description:
                  "Occurs whenever a portal configuration is updated",
              },
              {
                name: "capability.updated",
                description:
                  "Occurs whenever a capability has new requirements or a new status",
              },
              {
                name: "charge.expired",
                description: "Occurs whenever an uncaptured charge expires",
              },
              {
                name: "charge.pending",
                description: "Occurs whenever a pending charge is created",
              },
              {
                name: "charge.updated",
                description:
                  "Occurs whenever a charge description or metadata is updated",
              },
              {
                name: "charge.dispute.closed",
                description:
                  "Occurs when a dispute is closed and the dispute status changes to lost, warning_closed, or won",
              },
              {
                name: "charge.dispute.funds_reinstated",
                description:
                  "Occurs when funds are reinstated to your account after a dispute is closed. This includes partially refunded payments",
              },
              {
                name: "charge.dispute.funds_withdrawn",
                description:
                  "Occurs when funds are removed from your account due to a dispute",
              },
              {
                name: "charge.dispute.updated",
                description:
                  "Occurs when the dispute is updated (usually with evidence)",
              },
              {
                name: "charge.refund.updated",
                description:
                  "Occurs whenever a refund is updated, on selected payment methods",
              },
              {
                name: "checkout.session.async_payment_failed",
                description:
                  "Occurs when a payment intent using a delayed payment method fails",
              },
              {
                name: "checkout.session.async_payment_succeeded",
                description:
                  "Occurs when a payment intent using a delayed payment method finally succeeds",
              },
              {
                name: "coupon.created",
                description: "Occurs whenever a coupon is created",
              },
              {
                name: "coupon.deleted",
                description: "Occurs whenever a coupon is deleted",
              },
              {
                name: "coupon.updated",
                description: "Occurs whenever a coupon is updated",
              },
              {
                name: "credit_note.created",
                description: "Occurs whenever a credit note is created",
              },
              {
                name: "credit_note.updated",
                description: "Occurs whenever a credit note is updated",
              },
              {
                name: "credit_note.voided",
                description: "Occurs whenever a credit note is voided",
              },
              {
                name: "customer.discount.created",
                description:
                  "Occurs whenever a coupon is attached to a customer",
              },
              {
                name: "customer.discount.deleted",
                description:
                  "Occurs whenever a coupon is removed from a customer",
              },
              {
                name: "customer.discount.updated",
                description:
                  "Occurs whenever a customer is switched from one coupon to another",
              },
              {
                name: "customer.source.deleted",
                description:
                  "Occurs whenever a source is removed from a customer",
              },
              {
                name: "customer.source.expiring",
                description:
                  "Occurs whenever a card or source will expire at the end of the month",
              },
              {
                name: "customer.subscription.pending_update_applied",
                description:
                  "Occurs whenever a customer's subscription's pending update is applied, and the subscription is updated",
              },
              {
                name: "customer.subscription.pending_update_expired",
                description:
                  "Occurs whenever a customer's subscription's pending update expires before the related invoice is paid",
              },
              {
                name: "customer.subscription.trial_will_end",
                description:
                  "Occurs three days before a subscription's trial period is scheduled to end, or when a trial is ended immediately (using trial_end=now)",
              },
              {
                name: "customer.tax_id.created",
                description:
                  "Occurs whenever a tax ID is created for a customer",
              },
              {
                name: "customer.tax_id.deleted",
                description:
                  "Occurs whenever a tax ID is deleted from a customer",
              },
              {
                name: "customer.tax_id.updated",
                description: "Occurs whenever a customer's tax ID is updated",
              },
              {
                name: "file.created",
                description:
                  "Occurs whenever a new Stripe-generated file is available for your account",
              },
              {
                name: "identity.verification_session.canceled",
                description:
                  "Occurs whenever a VerificationSession is canceled",
              },
              {
                name: "identity.verification_session.created",
                description: "Occurs whenever a VerificationSession is created",
              },
              {
                name: "identity.verification_session.processing",
                description:
                  "Occurs whenever a VerificationSession transitions to processing",
              },
              {
                name: "identity.verification_session.redacted",
                description:
                  "Occurs whenever a VerificationSession is redacted. You must create a webhook endpoint which explicitly subscribes to this event type to access it. Webhook endpoints which subscribe to all events will not include this event type",
              },
              {
                name: "identity.verification_session.requires_input",
                description:
                  "Occurs whenever a VerificationSession transitions to require user input",
              },
              {
                name: "identity.verification_session.verified",
                description:
                  "Occurs whenever a VerificationSession transitions to verified",
              },
              {
                name: "invoice.deleted",
                description: "Occurs whenever a draft invoice is deleted",
              },
              {
                name: "invoice.finalization_failed",
                description:
                  "Occurs whenever a draft invoice cannot be finalized. See the invoice’s last finalization error for details",
              },
              {
                name: "invoice.marked_uncollectible",
                description:
                  "Occurs whenever an invoice is marked uncollectible",
              },
              {
                name: "invoice.paid",
                description:
                  "Occurs whenever an invoice payment attempt succeeds or an invoice is marked as paid out-of-band",
              },
              {
                name: "invoice.payment_action_required",
                description:
                  "Occurs whenever an invoice payment attempt requires further user action to complete",
              },
              {
                name: "invoice.sent",
                description: "Occurs whenever an invoice email is sent out",
              },
              {
                name: "invoice.upcoming",
                description:
                  "Occurs X number of days before a subscription is scheduled to create an invoice that is automatically charged—where X is determined by your subscriptions settings. Note: The received Invoice object will not have an invoice ID",
              },
              {
                name: "invoice.voided",
                description: "Occurs whenever an invoice is voided",
              },
              {
                name: "invoiceitem.created",
                description: "Occurs whenever an invoice item is created",
              },
              {
                name: "invoiceitem.deleted",
                description: "Occurs whenever an invoice item is deleted",
              },
              {
                name: "invoiceitem.updated",
                description: "Occurs whenever an invoice item is updated",
              },
              {
                name: "issuing_authorization.created",
                description: "Occurs whenever an authorization is created",
              },
              {
                name: "issuing_authorization.updated",
                description: "Occurs whenever an authorization is updated",
              },
              {
                name: "issuing_card.updated",
                description: "Occurs whenever a card is updated",
              },
              {
                name: "issuing_cardholder.updated",
                description: "Occurs whenever a cardholder is updated",
              },
              {
                name: "issuing_dispute.closed",
                description:
                  "Occurs whenever a dispute is won, lost or expired",
              },
              {
                name: "issuing_dispute.created",
                description: "Occurs whenever a dispute is created",
              },
              {
                name: "issuing_dispute.funds_reinstated",
                description:
                  "Occurs whenever funds are reinstated to your account for an Issuing dispute",
              },
              {
                name: "issuing_dispute.submitted",
                description: "Occurs whenever a dispute is submitted",
              },
              {
                name: "issuing_dispute.updated",
                description: "Occurs whenever a dispute is updated",
              },
              {
                name: "issuing_transaction.created",
                description:
                  "Occurs whenever an issuing transaction is created",
              },
              {
                name: "issuing_transaction.updated",
                description:
                  "Occurs whenever an issuing transaction is updated",
              },
              {
                name: "mandate.updated",
                description: "Occurs whenever a Mandate is updated",
              },
              {
                name: "order.created",
                description: "Occurs whenever an order is created",
              },
              {
                name: "order.payment_failed",
                description: "Occurs whenever an order payment attempt fails",
              },
              {
                name: "order.payment_succeeded",
                description:
                  "Occurs whenever an order payment attempt succeeds",
              },
              {
                name: "order.updated",
                description: "Occurs whenever an order is updated",
              },
              {
                name: "order_return.created",
                description: "Occurs whenever an order return is created",
              },
              {
                name: "payment_intent.processing",
                description:
                  "Occurs when a PaymentIntent has started processing",
              },
              {
                name: "payment_intent.requires_action",
                description:
                  "Occurs when a PaymentIntent transitions to requires_action state",
              },
              {
                name: "payment_method.automatically_updated",
                description:
                  "Occurs whenever a payment method's details are automatically updated by the network",
              },
              {
                name: "payment_method.detached",
                description:
                  "Occurs whenever a payment method is detached from a customer",
              },
              {
                name: "payment_method.updated",
                description:
                  "Occurs whenever a payment method is updated via the PaymentMethod update API",
              },
              {
                name: "payout.canceled",
                description: "Occurs whenever a payout is canceled",
              },
              {
                name: "payout.created",
                description: "Occurs whenever a payout is created",
              },
              {
                name: "payout.failed",
                description: "Occurs whenever a payout attempt fails",
              },
              {
                name: "payout.paid",
                description:
                  "Occurs whenever a payout is expected to be available in the destination account. If the payout fails, a payout.failed notification is also sent, at a later time",
              },
              {
                name: "payout.updated",
                description: "Occurs whenever a payout is updated",
              },
              {
                name: "person.created",
                description:
                  "Occurs whenever a person associated with an account is created",
              },
              {
                name: "person.deleted",
                description:
                  "Occurs whenever a person associated with an account is deleted",
              },
              {
                name: "person.updated",
                description:
                  "Occurs whenever a person associated with an account is updated",
              },
              {
                name: "plan.created",
                description: "Occurs whenever a plan is created",
              },
              {
                name: "plan.deleted",
                description: "Occurs whenever a plan is deleted",
              },
              {
                name: "plan.updated",
                description: "Occurs whenever a plan is updated",
              },
              {
                name: "price.created",
                description: "Occurs whenever a price is created",
              },
              {
                name: "price.deleted",
                description: "Occurs whenever a price is deleted",
              },
              {
                name: "price.updated",
                description: "Occurs whenever a price is updated",
              },
              {
                name: "product.created",
                description: "Occurs whenever a product is created",
              },
              {
                name: "product.deleted",
                description: "Occurs whenever a product is deleted",
              },
              {
                name: "product.updated",
                description: "Occurs whenever a product is updated",
              },
              {
                name: "promotion_code.created",
                description: "Occurs whenever a promotion code is created",
              },
              {
                name: "promotion_code.updated",
                description: "Occurs whenever a promotion code is updated",
              },
              {
                name: "radar.early_fraud_warning.created",
                description:
                  "Occurs whenever an early fraud warning is created",
              },
              {
                name: "radar.early_fraud_warning.updated",
                description:
                  "Occurs whenever an early fraud warning is updated",
              },
              {
                name: "recipient.created",
                description: "Occurs whenever a recipient is created",
              },
              {
                name: "recipient.deleted",
                description: "Occurs whenever a recipient is deleted",
              },
              {
                name: "recipient.updated",
                description: "Occurs whenever a recipient is updated",
              },
              {
                name: "reporting.report_run.failed",
                description:
                  "Occurs whenever a requested ReportRun failed to complete",
              },
              {
                name: "reporting.report_run.succeeded",
                description:
                  "Occurs whenever a requested ReportRun completed successfully",
              },
              {
                name: "reporting.report_type.updated",
                description:
                  "Occurs whenever a ReportType is updated (typically to indicate that a new day's data has come available). You must create a webhook endpoint which explicitly subscribes to this event type to access it. Webhook endpoints which subscribe to all events will not include this event type",
              },
              {
                name: "review.closed",
                description:
                  "Occurs whenever a review is closed. The review's reason field indicates why: approved, disputed, refunded, or refunded_as_fraud",
              },
              {
                name: "review.opened",
                description: "Occurs whenever a review is opened",
              },
              {
                name: "setup_intent.requires_action",
                description:
                  "Occurs when a SetupIntent is in requires_action state",
              },
              {
                name: "sigma.scheduled_query_run.created",
                description:
                  "Occurs whenever a Sigma scheduled query run finishes",
              },
              {
                name: "sku.created",
                description: "Occurs whenever a SKU is created",
              },
              {
                name: "sku.deleted",
                description: "Occurs whenever a SKU is deleted",
              },
              {
                name: "sku.updated",
                description: "Occurs whenever a SKU is updated",
              },
              {
                name: "source.canceled",
                description: "Occurs whenever a source is canceled",
              },
              {
                name: "source.chargeable",
                description:
                  "Occurs whenever a source transitions to chargeable",
              },
              {
                name: "source.failed",
                description: "Occurs whenever a source fails",
              },
              {
                name: "source.mandate_notification",
                description:
                  "Occurs whenever a source mandate notification method is set to manual",
              },
              {
                name: "source.refund_attributes_required",
                description:
                  "Occurs whenever the refund attributes are required on a receiver source to process a refund or a mispayment",
              },
              {
                name: "source.transaction.created",
                description: "Occurs whenever a source transaction is created",
              },
              {
                name: "source.transaction.updated",
                description: "Occurs whenever a source transaction is updated",
              },
              {
                name: "subscription_schedule.aborted",
                description:
                  "Occurs whenever a subscription schedule is canceled due to the underlying subscription being canceled because of delinquency",
              },
              {
                name: "subscription_schedule.canceled",
                description:
                  "Occurs whenever a subscription schedule is canceled",
              },
              {
                name: "subscription_schedule.completed",
                description:
                  "Occurs whenever a new subscription schedule is completed",
              },
              {
                name: "subscription_schedule.created",
                description:
                  "Occurs whenever a new subscription schedule is created",
              },
              {
                name: "subscription_schedule.expiring",
                description:
                  "Occurs 7 days before a subscription schedule will expire",
              },
              {
                name: "subscription_schedule.released",
                description:
                  "Occurs whenever a new subscription schedule is released",
              },
              {
                name: "subscription_schedule.updated",
                description:
                  "Occurs whenever a subscription schedule is updated",
              },
              {
                name: "tax_rate.created",
                description: "Occurs whenever a new tax rate is created",
              },
              {
                name: "tax_rate.updated",
                description: "Occurs whenever a tax rate is updated",
              },
              {
                name: "topup.canceled",
                description: "Occurs whenever a top-up is canceled",
              },
              {
                name: "topup.created",
                description: "Occurs whenever a top-up is created",
              },
              {
                name: "topup.failed",
                description: "Occurs whenever a top-up fails",
              },
              {
                name: "topup.reversed",
                description: "Occurs whenever a top-up is reversed",
              },
              {
                name: "topup.succeeded",
                description: "Occurs whenever a top-up succeeds",
              },
              {
                name: "transfer.created",
                description: "Occurs whenever a transfer is created",
              },
              {
                name: "transfer.failed",
                description: "Occurs whenever a transfer failed",
              },
              {
                name: "transfer.paid",
                description:
                  "Occurs after a transfer is paid. For Instant Payouts, the event will typically be sent within 30 minutes",
              },
              {
                name: "transfer.reversed",
                description:
                  "Occurs whenever a transfer is reversed, including partial reversals",
              },
              {
                name: "transfer.updated",
                description:
                  "Occurs whenever a transfer's description or metadata is updated",
              },
              ...webhookSuggestions,
            ],
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
            isVariadic: true,
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
          isDangerous: true,
        },
        ...globalOptions,
      ],
    },
    {
      name: "trigger",
      description: "Triggers webhook events to conduct local testing",
      args: {
        name: "event",
        description: "Webhook events",
        suggestions: [...webhookSuggestions],
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
          name: "--param",
          description: "Key-value data to send along with the API request",
          args: {
            name: "value",
          },
        },
        {
          name: "-webhook-endpoint",
          description: "Resends the event to the given webhook endpoint ID",
          args: {
            name: "endpoint id",
          },
        },
        ...sharedOptions,
        ...globalOptions,
      ],
    },
    {
      name: "get",
      description:
        "Makes GET HTTP requests to retrieve an individual API object",
      args: {
        name: "id or path",
        description: "ID or URL path of the API object to retrieve",
      },
      options: [
        {
          name: ["-b", "--ending-before"],
          description: "Retrieves the previous page in the list",
          args: {
            name: "object id",
          },
        },
        {
          name: ["-l", "--limit"],
          description: "Number of objects to return",
          args: {
            name: "number",
            description: "Number between 1 - 100 (default)",
          },
        },
        {
          name: ["-a", "--starting-after"],
          description: "Retrieves the next page in the list",
          args: {
            name: "object id",
          },
        },
        ...sharedOptions,
        ...globalOptions,
      ],
    },
    {
      name: "post",
      description: "Makes POST HTTP requests to the Stripe API",
      args: {
        name: "path",
        description: "URL path of the API object to create or update",
      },
      options: [...sharedOptions, ...globalOptions],
    },
    {
      name: "delete",
      description: "Makes DELETE HTTP requests to the Stripe API",
      args: {
        name: "path",
        description: "URL path of the API object to delete",
      },
      options: [...sharedOptions, ...globalOptions],
    },
    {
      name: "samples",
      description: "Creates a local copy of a sample",
      subcommands: [
        {
          name: "create",
          args: [
            {
              name: "sample",
              description: "Name of the sample used to create a local copy",
            },
            {
              name: "path",
              description: "Destination path for the created sample",
              isOptional: true,
            },
          ],
          options: [
            {
              name: "--force-refresh",
              description:
                "Force a refresh of the chaced list of Stripe Samples",
            },
            ...globalOptions,
          ],
        },
        {
          name: "list",
          description: "Lists available Stripe Samples",
          options: [
            {
              name: "--force-refresh",
              description:
                "Force a refresh of the chaced list of Stripe Samples",
            },
            ...globalOptions,
          ],
        },
      ],
      options: [...globalOptions],
    },
    {
      name: "serve",
      description: "Starts an HTTP server to serve static files",
      args: {
        name: "base path",
        description: "Path of the directory to serve files from",
      },
      options: [
        {
          name: "--port",
          description: "Port the HTTP server should use",
          args: {
            name: "port number",
          },
        },
        ...globalOptions,
      ],
    },
    {
      name: "terminal quickstart",
      description: "Starts up Stripe Terminal",
      options: [
        {
          name: "--api-key",
          args: {
            name: "api key",
          },
        },
      ],
    },
    {
      name: "logout",
      description: "Removes all credentials",
      options: [
        {
          name: ["-a", "--all"],
          description:
            "Removes credentials for all projects listed in your config",
        },
        ...globalOptions,
      ],
    },
    {
      name: "feedback",
      description: "Prints info about how to provide feedback",
      options: [...globalOptions],
    },
    {
      name: "help",
      description: "Gets help for any command",
      args: {
        name: "command",
        isOptional: true,
      },
    },
    {
      name: "version",
      description: "Gets the version and checks or updates",
      args: {
        name: "command",
        isOptional: true,
      },
    },
  ],
  options: [...globalOptions],
};

export default completionSpec;
