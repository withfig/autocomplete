#compdef _stripe stripe


function _stripe {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    '(-v --version)'{-v,--version}'[Get the version of the Stripe CLI]' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "3d_secure:"
      "account_links:"
      "accounts:"
      "apple_pay_domains:"
      "application_fees:"
      "balance:"
      "balance_transactions:"
      "bank_accounts:"
      "billing_portal:"
      "capabilities:"
      "cards:"
      "charges:"
      "checkout:"
      "completion:Generate bash and zsh completion scripts"
      "config:Manually change the config values for the CLI"
      "country_specs:"
      "coupons:"
      "credit_note_line_items:"
      "credit_notes:"
      "customer_balance_transactions:"
      "customers:"
      "delete:Make a DELETE request to the Stripe API"
      "disputes:"
      "ephemeral_keys:"
      "events:"
      "exchange_rates:"
      "external_accounts:"
      "fee_refunds:"
      "feedback:Provide us with feedback on the CLI"
      "file_links:"
      "files:"
      "fixtures:Run fixtures to populate your account with data"
      "get:Retrieve resources by their ID or make GET requests"
      "help:Help about any command"
      "invoiceitems:"
      "invoices:"
      "issuing:"
      "items:"
      "line_items:"
      "listen:Listen for webhook events"
      "login:Login to your Stripe account"
      "login_links:"
      "logout:Logout of your Stripe account"
      "logs:Interact with Stripe API request logs"
      "mandates:"
      "open:Quickly open Stripe pages"
      "order_returns:"
      "orders:"
      "payment_intents:"
      "payment_methods:"
      "payment_sources:"
      "payouts:"
      "persons:"
      "plans:"
      "post:Make a POST request to the Stripe API"
      "prices:"
      "products:"
      "promotion_codes:"
      "radar:"
      "refunds:"
      "reporting:"
      "resources:List resource commands"
      "reviews:"
      "samples:Sample integrations built by Stripe"
      "scheduled_query_runs:"
      "serve:Serve static files locally"
      "setup_attempts:"
      "setup_intents:"
      "skus:"
      "sources:"
      "status:Check the status of the Stripe API"
      "subscription_items:"
      "subscription_schedules:"
      "subscriptions:"
      "tax_ids:"
      "tax_rates:"
      "terminal:"
      "tokens:"
      "topups:"
      "transfer_reversals:"
      "transfers:"
      "trigger:Trigger test webhook events"
      "usage_record_summaries:"
      "usage_records:"
      "version:Get the version of the Stripe CLI"
      "webhook_endpoints:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  3d_secure)
    _stripe_3d_secure
    ;;
  account_links)
    _stripe_account_links
    ;;
  accounts)
    _stripe_accounts
    ;;
  apple_pay_domains)
    _stripe_apple_pay_domains
    ;;
  application_fees)
    _stripe_application_fees
    ;;
  balance)
    _stripe_balance
    ;;
  balance_transactions)
    _stripe_balance_transactions
    ;;
  bank_accounts)
    _stripe_bank_accounts
    ;;
  billing_portal)
    _stripe_billing_portal
    ;;
  capabilities)
    _stripe_capabilities
    ;;
  cards)
    _stripe_cards
    ;;
  charges)
    _stripe_charges
    ;;
  checkout)
    _stripe_checkout
    ;;
  completion)
    _stripe_completion
    ;;
  config)
    _stripe_config
    ;;
  country_specs)
    _stripe_country_specs
    ;;
  coupons)
    _stripe_coupons
    ;;
  credit_note_line_items)
    _stripe_credit_note_line_items
    ;;
  credit_notes)
    _stripe_credit_notes
    ;;
  customer_balance_transactions)
    _stripe_customer_balance_transactions
    ;;
  customers)
    _stripe_customers
    ;;
  delete)
    _stripe_delete
    ;;
  disputes)
    _stripe_disputes
    ;;
  ephemeral_keys)
    _stripe_ephemeral_keys
    ;;
  events)
    _stripe_events
    ;;
  exchange_rates)
    _stripe_exchange_rates
    ;;
  external_accounts)
    _stripe_external_accounts
    ;;
  fee_refunds)
    _stripe_fee_refunds
    ;;
  feedback)
    _stripe_feedback
    ;;
  file_links)
    _stripe_file_links
    ;;
  files)
    _stripe_files
    ;;
  fixtures)
    _stripe_fixtures
    ;;
  get)
    _stripe_get
    ;;
  help)
    _stripe_help
    ;;
  invoiceitems)
    _stripe_invoiceitems
    ;;
  invoices)
    _stripe_invoices
    ;;
  issuing)
    _stripe_issuing
    ;;
  items)
    _stripe_items
    ;;
  line_items)
    _stripe_line_items
    ;;
  listen)
    _stripe_listen
    ;;
  login)
    _stripe_login
    ;;
  login_links)
    _stripe_login_links
    ;;
  logout)
    _stripe_logout
    ;;
  logs)
    _stripe_logs
    ;;
  mandates)
    _stripe_mandates
    ;;
  open)
    _stripe_open
    ;;
  order_returns)
    _stripe_order_returns
    ;;
  orders)
    _stripe_orders
    ;;
  payment_intents)
    _stripe_payment_intents
    ;;
  payment_methods)
    _stripe_payment_methods
    ;;
  payment_sources)
    _stripe_payment_sources
    ;;
  payouts)
    _stripe_payouts
    ;;
  persons)
    _stripe_persons
    ;;
  plans)
    _stripe_plans
    ;;
  post)
    _stripe_post
    ;;
  prices)
    _stripe_prices
    ;;
  products)
    _stripe_products
    ;;
  promotion_codes)
    _stripe_promotion_codes
    ;;
  radar)
    _stripe_radar
    ;;
  refunds)
    _stripe_refunds
    ;;
  reporting)
    _stripe_reporting
    ;;
  resources)
    _stripe_resources
    ;;
  reviews)
    _stripe_reviews
    ;;
  samples)
    _stripe_samples
    ;;
  scheduled_query_runs)
    _stripe_scheduled_query_runs
    ;;
  serve)
    _stripe_serve
    ;;
  setup_attempts)
    _stripe_setup_attempts
    ;;
  setup_intents)
    _stripe_setup_intents
    ;;
  skus)
    _stripe_skus
    ;;
  sources)
    _stripe_sources
    ;;
  status)
    _stripe_status
    ;;
  subscription_items)
    _stripe_subscription_items
    ;;
  subscription_schedules)
    _stripe_subscription_schedules
    ;;
  subscriptions)
    _stripe_subscriptions
    ;;
  tax_ids)
    _stripe_tax_ids
    ;;
  tax_rates)
    _stripe_tax_rates
    ;;
  terminal)
    _stripe_terminal
    ;;
  tokens)
    _stripe_tokens
    ;;
  topups)
    _stripe_topups
    ;;
  transfer_reversals)
    _stripe_transfer_reversals
    ;;
  transfers)
    _stripe_transfers
    ;;
  trigger)
    _stripe_trigger
    ;;
  usage_record_summaries)
    _stripe_usage_record_summaries
    ;;
  usage_records)
    _stripe_usage_records
    ;;
  version)
    _stripe_version
    ;;
  webhook_endpoints)
    _stripe_webhook_endpoints
    ;;
  esac
}


function _stripe_3d_secure {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_3d_secure_create
    ;;
  retrieve)
    _stripe_3d_secure_retrieve
    ;;
  esac
}

function _stripe_3d_secure_create {
  _arguments \
    '--amount[]:' \
    '--card[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--return-url[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_3d_secure_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_account_links {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_account_links_create
    ;;
  esac
}

function _stripe_account_links_create {
  _arguments \
    '--account[]:' \
    '--collect[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--refresh-url[]:' \
    '--return-url[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_accounts {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "capabilities:"
      "create:"
      "delete:"
      "list:"
      "reject:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  capabilities)
    _stripe_accounts_capabilities
    ;;
  create)
    _stripe_accounts_create
    ;;
  delete)
    _stripe_accounts_delete
    ;;
  list)
    _stripe_accounts_list
    ;;
  reject)
    _stripe_accounts_reject
    ;;
  retrieve)
    _stripe_accounts_retrieve
    ;;
  update)
    _stripe_accounts_update
    ;;
  esac
}

function _stripe_accounts_capabilities {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_accounts_create {
  _arguments \
    '--account-token[]:' \
    '--business-type[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--country[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--default-currency[]:' \
    '--email[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--external-account[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_accounts_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_accounts_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_accounts_reject {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--reason[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_accounts_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_accounts_update {
  _arguments \
    '--account-token[]:' \
    '--business-type[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--default-currency[]:' \
    '--email[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--external-account[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_apple_pay_domains {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_apple_pay_domains_create
    ;;
  delete)
    _stripe_apple_pay_domains_delete
    ;;
  list)
    _stripe_apple_pay_domains_list
    ;;
  retrieve)
    _stripe_apple_pay_domains_retrieve
    ;;
  esac
}

function _stripe_apple_pay_domains_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--domain-name[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_apple_pay_domains_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_apple_pay_domains_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--domain-name[]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_apple_pay_domains_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_application_fees {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_application_fees_list
    ;;
  retrieve)
    _stripe_application_fees_retrieve
    ;;
  esac
}

function _stripe_application_fees_list {
  _arguments \
    '--charge[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_application_fees_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_balance {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  retrieve)
    _stripe_balance_retrieve
    ;;
  esac
}

function _stripe_balance_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_balance_transactions {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_balance_transactions_list
    ;;
  retrieve)
    _stripe_balance_transactions_retrieve
    ;;
  esac
}

function _stripe_balance_transactions_list {
  _arguments \
    '--available-on[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--currency[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--payout[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--source[]:' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_balance_transactions_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_bank_accounts {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "delete:"
      "update:"
      "verify:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  delete)
    _stripe_bank_accounts_delete
    ;;
  update)
    _stripe_bank_accounts_update
    ;;
  verify)
    _stripe_bank_accounts_verify
    ;;
  esac
}

function _stripe_bank_accounts_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_bank_accounts_update {
  _arguments \
    '--account-holder-name[]:' \
    '--account-holder-type[]:' \
    '--address-city[]:' \
    '--address-country[]:' \
    '--address-line1[]:' \
    '--address-line2[]:' \
    '--address-state[]:' \
    '--address-zip[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--exp-month[]:' \
    '--exp-year[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--name[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_bank_accounts_verify {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_billing_portal {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "sessions:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  sessions)
    _stripe_billing_portal_sessions
    ;;
  esac
}


function _stripe_billing_portal_sessions {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_billing_portal_sessions_create
    ;;
  esac
}

function _stripe_billing_portal_sessions_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--return-url[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_capabilities {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_capabilities_list
    ;;
  retrieve)
    _stripe_capabilities_retrieve
    ;;
  update)
    _stripe_capabilities_update
    ;;
  esac
}

function _stripe_capabilities_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_capabilities_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_capabilities_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--requested[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_cards {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "delete:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  delete)
    _stripe_cards_delete
    ;;
  update)
    _stripe_cards_update
    ;;
  esac
}

function _stripe_cards_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_cards_update {
  _arguments \
    '--account-holder-name[]:' \
    '--account-holder-type[]:' \
    '--address-city[]:' \
    '--address-country[]:' \
    '--address-line1[]:' \
    '--address-line2[]:' \
    '--address-state[]:' \
    '--address-zip[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--exp-month[]:' \
    '--exp-year[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--name[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_charges {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "capture:"
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  capture)
    _stripe_charges_capture
    ;;
  create)
    _stripe_charges_create
    ;;
  list)
    _stripe_charges_list
    ;;
  retrieve)
    _stripe_charges_retrieve
    ;;
  update)
    _stripe_charges_update
    ;;
  esac
}

function _stripe_charges_capture {
  _arguments \
    '--amount[]:' \
    '--application-fee[]:' \
    '--application-fee-amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--receipt-email[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--statement-descriptor[]:' \
    '--statement-descriptor-suffix[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--transfer-group[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_charges_create {
  _arguments \
    '--amount[]:' \
    '--application-fee[]:' \
    '--application-fee-amount[]:' \
    '--capture[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--on-behalf-of[]:' \
    '--receipt-email[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--source[]:' \
    '--statement-descriptor[]:' \
    '--statement-descriptor-suffix[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--transfer-group[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_charges_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--payment-intent[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--transfer-group[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_charges_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_charges_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--receipt-email[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--transfer-group[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_checkout {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "sessions:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  sessions)
    _stripe_checkout_sessions
    ;;
  esac
}


function _stripe_checkout_sessions {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_checkout_sessions_create
    ;;
  list)
    _stripe_checkout_sessions_list
    ;;
  retrieve)
    _stripe_checkout_sessions_retrieve
    ;;
  esac
}

function _stripe_checkout_sessions_create {
  _arguments \
    '--allow-promotion-codes[]:' \
    '--billing-address-collection[]:' \
    '--cancel-url[]:' \
    '--client-reference-id[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--customer[]:' \
    '--customer-email[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--locale[]:' \
    '--mode[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--submit-type[]:' \
    '--success-url[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_checkout_sessions_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--payment-intent[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--subscription[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_checkout_sessions_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_completion {
  _arguments \
    '(-h --help)'{-h,--help}'[help for completion]' \
    '--shell[The shell to generate completion commands for. Supports "bash" or "zsh"]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_config {
  _arguments \
    '(-e --edit)'{-e,--edit}'[Open an editor to the config file]' \
    '--list[List configs]' \
    '--set[Set a config field to some value]' \
    '--unset[Unset a specific config field]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_country_specs {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_country_specs_list
    ;;
  retrieve)
    _stripe_country_specs_retrieve
    ;;
  esac
}

function _stripe_country_specs_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_country_specs_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_coupons {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_coupons_create
    ;;
  delete)
    _stripe_coupons_delete
    ;;
  list)
    _stripe_coupons_list
    ;;
  retrieve)
    _stripe_coupons_retrieve
    ;;
  update)
    _stripe_coupons_update
    ;;
  esac
}

function _stripe_coupons_create {
  _arguments \
    '--amount-off[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--duration[]:' \
    '--duration-in-months[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--id[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--max-redemptions[]:' \
    '--name[]:' \
    '--percent-off[]:' \
    '--redeem-by[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_coupons_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_coupons_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_coupons_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_coupons_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--name[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_credit_note_line_items {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_credit_note_line_items_list
    ;;
  esac
}

function _stripe_credit_note_line_items_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_credit_notes {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "preview:"
      "preview_lines:"
      "retrieve:"
      "update:"
      "void_credit_note:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_credit_notes_create
    ;;
  list)
    _stripe_credit_notes_list
    ;;
  preview)
    _stripe_credit_notes_preview
    ;;
  preview_lines)
    _stripe_credit_notes_preview_lines
    ;;
  retrieve)
    _stripe_credit_notes_retrieve
    ;;
  update)
    _stripe_credit_notes_update
    ;;
  void_credit_note)
    _stripe_credit_notes_void_credit_note
    ;;
  esac
}

function _stripe_credit_notes_create {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--credit-amount[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--invoice[]:' \
    '--live[Make a live request (default: test)]' \
    '--memo[]:' \
    '--out-of-band-amount[]:' \
    '--reason[]:' \
    '--refund[]:' \
    '--refund-amount[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_credit_notes_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--invoice[]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_credit_notes_preview {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--credit-amount[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--invoice[]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '--memo[]:' \
    '--out-of-band-amount[]:' \
    '--reason[]:' \
    '--refund[]:' \
    '--refund-amount[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_credit_notes_preview_lines {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--credit-amount[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--invoice[]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--memo[]:' \
    '--out-of-band-amount[]:' \
    '--reason[]:' \
    '--refund[]:' \
    '--refund-amount[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_credit_notes_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_credit_notes_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--memo[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_credit_notes_void_credit_note {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_customer_balance_transactions {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_customer_balance_transactions_create
    ;;
  list)
    _stripe_customer_balance_transactions_list
    ;;
  retrieve)
    _stripe_customer_balance_transactions_retrieve
    ;;
  update)
    _stripe_customer_balance_transactions_update
    ;;
  esac
}

function _stripe_customer_balance_transactions_create {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_customer_balance_transactions_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_customer_balance_transactions_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_customer_balance_transactions_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_customers {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "delete_discount:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_customers_create
    ;;
  delete)
    _stripe_customers_delete
    ;;
  delete_discount)
    _stripe_customers_delete_discount
    ;;
  list)
    _stripe_customers_list
    ;;
  retrieve)
    _stripe_customers_retrieve
    ;;
  update)
    _stripe_customers_update
    ;;
  esac
}

function _stripe_customers_create {
  _arguments \
    '--balance[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--coupon[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '--email[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--invoice-prefix[]:' \
    '--live[Make a live request (default: test)]' \
    '--name[]:' \
    '--next-invoice-sequence[]:' \
    '--payment-method[]:' \
    '--phone[]:' \
    '--promotion-code[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--source[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--tax-exempt[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_customers_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_customers_delete_discount {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_customers_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--email[]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_customers_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_customers_update {
  _arguments \
    '--balance[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--coupon[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--default-source[]:' \
    '--description[]:' \
    '--email[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--invoice-prefix[]:' \
    '--live[Make a live request (default: test)]' \
    '--name[]:' \
    '--next-invoice-sequence[]:' \
    '--phone[]:' \
    '--promotion-code[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--source[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--tax-exempt[]:' \
    '--trial-end[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_disputes {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "close:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  close)
    _stripe_disputes_close
    ;;
  list)
    _stripe_disputes_list
    ;;
  retrieve)
    _stripe_disputes_retrieve
    ;;
  update)
    _stripe_disputes_update
    ;;
  esac
}

function _stripe_disputes_close {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_disputes_list {
  _arguments \
    '--charge[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--payment-intent[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_disputes_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_disputes_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--submit[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_ephemeral_keys {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_ephemeral_keys_create
    ;;
  delete)
    _stripe_ephemeral_keys_delete
    ;;
  esac
}

function _stripe_ephemeral_keys_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--issuing-card[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_ephemeral_keys_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_events {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
      "resend:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_events_list
    ;;
  resend)
    _stripe_events_resend
    ;;
  retrieve)
    _stripe_events_retrieve
    ;;
  esac
}

function _stripe_events_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--delivery-success[]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_events_resend {
  _arguments \
    '--account[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--webhook-endpoint[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_events_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_exchange_rates {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_exchange_rates_list
    ;;
  retrieve)
    _stripe_exchange_rates_retrieve
    ;;
  esac
}

function _stripe_exchange_rates_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_exchange_rates_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_external_accounts {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_external_accounts_create
    ;;
  delete)
    _stripe_external_accounts_delete
    ;;
  list)
    _stripe_external_accounts_list
    ;;
  retrieve)
    _stripe_external_accounts_retrieve
    ;;
  update)
    _stripe_external_accounts_update
    ;;
  esac
}

function _stripe_external_accounts_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--default-for-currency[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--external-account[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_external_accounts_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_external_accounts_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_external_accounts_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_external_accounts_update {
  _arguments \
    '--account-holder-name[]:' \
    '--account-holder-type[]:' \
    '--address-city[]:' \
    '--address-country[]:' \
    '--address-line1[]:' \
    '--address-line2[]:' \
    '--address-state[]:' \
    '--address-zip[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--default-for-currency[]:' \
    '--exp-month[]:' \
    '--exp-year[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--name[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_fee_refunds {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_fee_refunds_create
    ;;
  list)
    _stripe_fee_refunds_list
    ;;
  retrieve)
    _stripe_fee_refunds_retrieve
    ;;
  update)
    _stripe_fee_refunds_update
    ;;
  esac
}

function _stripe_fee_refunds_create {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_fee_refunds_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_fee_refunds_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_fee_refunds_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_feedback {
  _arguments \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_file_links {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_file_links_create
    ;;
  list)
    _stripe_file_links_list
    ;;
  retrieve)
    _stripe_file_links_retrieve
    ;;
  update)
    _stripe_file_links_update
    ;;
  esac
}

function _stripe_file_links_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--expires-at[]:' \
    '--file[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_file_links_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--expired[]:' \
    '--file[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_file_links_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_file_links_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--expires-at[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_files {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_files_create
    ;;
  list)
    _stripe_files_list
    ;;
  retrieve)
    _stripe_files_retrieve
    ;;
  esac
}

function _stripe_files_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_files_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--purpose[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_files_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_fixtures {
  _arguments \
    '--stripe-account[Set a header identifying the connected account]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_get {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_help {
  _arguments \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_invoiceitems {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_invoiceitems_create
    ;;
  delete)
    _stripe_invoiceitems_delete
    ;;
  list)
    _stripe_invoiceitems_list
    ;;
  retrieve)
    _stripe_invoiceitems_retrieve
    ;;
  update)
    _stripe_invoiceitems_update
    ;;
  esac
}

function _stripe_invoiceitems_create {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '--discountable[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--invoice[]:' \
    '--live[Make a live request (default: test)]' \
    '--price[]:' \
    '--quantity[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--subscription[]:' \
    '--unit-amount[]:' \
    '--unit-amount-decimal[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoiceitems_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoiceitems_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--invoice[]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--pending[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoiceitems_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoiceitems_update {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '--discountable[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--price[]:' \
    '--quantity[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--unit-amount[]:' \
    '--unit-amount-decimal[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_invoices {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "finalize_invoice:"
      "list:"
      "mark_uncollectible:"
      "pay:"
      "retrieve:"
      "send_invoice:"
      "upcoming:"
      "upcomingLines:"
      "update:"
      "void_invoice:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_invoices_create
    ;;
  delete)
    _stripe_invoices_delete
    ;;
  finalize_invoice)
    _stripe_invoices_finalize_invoice
    ;;
  list)
    _stripe_invoices_list
    ;;
  mark_uncollectible)
    _stripe_invoices_mark_uncollectible
    ;;
  pay)
    _stripe_invoices_pay
    ;;
  retrieve)
    _stripe_invoices_retrieve
    ;;
  send_invoice)
    _stripe_invoices_send_invoice
    ;;
  upcoming)
    _stripe_invoices_upcoming
    ;;
  upcomingLines)
    _stripe_invoices_upcomingLines
    ;;
  update)
    _stripe_invoices_update
    ;;
  void_invoice)
    _stripe_invoices_void_invoice
    ;;
  esac
}

function _stripe_invoices_create {
  _arguments \
    '--application-fee-amount[]:' \
    '--auto-advance[]:' \
    '--collection-method[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--days-until-due[]:' \
    '--default-payment-method[]:' \
    '--default-source[]:' \
    '--description[]:' \
    '--due-date[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--footer[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--statement-descriptor[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--subscription[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoices_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoices_finalize_invoice {
  _arguments \
    '--auto-advance[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoices_list {
  _arguments \
    '--collection-method[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--due-date[]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--subscription[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoices_mark_uncollectible {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoices_pay {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--forgive[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--off-session[]:' \
    '--paid-out-of-band[]:' \
    '--payment-method[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--source[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoices_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoices_send_invoice {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoices_upcoming {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--coupon[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '--schedule[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--subscription[]:' \
    '--subscription-billing-cycle-anchor[]:' \
    '--subscription-cancel-at[]:' \
    '--subscription-cancel-at-period-end[]:' \
    '--subscription-cancel-now[]:' \
    '--subscription-proration-behavior[]:' \
    '--subscription-proration-date[]:' \
    '--subscription-start-date[]:' \
    '--subscription-trial-end[]:' \
    '--subscription-trial-from-plan[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoices_upcomingLines {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--coupon[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--schedule[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--subscription[]:' \
    '--subscription-billing-cycle-anchor[]:' \
    '--subscription-cancel-at[]:' \
    '--subscription-cancel-at-period-end[]:' \
    '--subscription-cancel-now[]:' \
    '--subscription-proration-behavior[]:' \
    '--subscription-proration-date[]:' \
    '--subscription-start-date[]:' \
    '--subscription-trial-end[]:' \
    '--subscription-trial-from-plan[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoices_update {
  _arguments \
    '--application-fee-amount[]:' \
    '--auto-advance[]:' \
    '--collection-method[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--days-until-due[]:' \
    '--default-payment-method[]:' \
    '--default-source[]:' \
    '--description[]:' \
    '--due-date[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--footer[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--statement-descriptor[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_invoices_void_invoice {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_issuing {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "authorizations:"
      "cardholders:"
      "cards:"
      "disputes:"
      "transactions:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  authorizations)
    _stripe_issuing_authorizations
    ;;
  cardholders)
    _stripe_issuing_cardholders
    ;;
  cards)
    _stripe_issuing_cards
    ;;
  disputes)
    _stripe_issuing_disputes
    ;;
  transactions)
    _stripe_issuing_transactions
    ;;
  esac
}


function _stripe_issuing_authorizations {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "approve:"
      "decline:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  approve)
    _stripe_issuing_authorizations_approve
    ;;
  decline)
    _stripe_issuing_authorizations_decline
    ;;
  list)
    _stripe_issuing_authorizations_list
    ;;
  retrieve)
    _stripe_issuing_authorizations_retrieve
    ;;
  update)
    _stripe_issuing_authorizations_update
    ;;
  esac
}

function _stripe_issuing_authorizations_approve {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_authorizations_decline {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_authorizations_list {
  _arguments \
    '--card[]:' \
    '--cardholder[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_authorizations_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_authorizations_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_issuing_cardholders {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_issuing_cardholders_create
    ;;
  list)
    _stripe_issuing_cardholders_list
    ;;
  retrieve)
    _stripe_issuing_cardholders_retrieve
    ;;
  update)
    _stripe_issuing_cardholders_update
    ;;
  esac
}

function _stripe_issuing_cardholders_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--email[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--name[]:' \
    '--phone-number[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_cardholders_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--email[]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--phone-number[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_cardholders_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_cardholders_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--email[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--phone-number[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_issuing_cards {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_issuing_cards_create
    ;;
  list)
    _stripe_issuing_cards_list
    ;;
  retrieve)
    _stripe_issuing_cards_retrieve
    ;;
  update)
    _stripe_issuing_cards_update
    ;;
  esac
}

function _stripe_issuing_cards_create {
  _arguments \
    '--cardholder[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--replacement-for[]:' \
    '--replacement-reason[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_cards_list {
  _arguments \
    '--cardholder[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '--exp-month[]:' \
    '--exp-year[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--last4[]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_cards_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_cards_update {
  _arguments \
    '--cancellation-reason[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_issuing_disputes {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
      "submit:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_issuing_disputes_create
    ;;
  list)
    _stripe_issuing_disputes_list
    ;;
  retrieve)
    _stripe_issuing_disputes_retrieve
    ;;
  submit)
    _stripe_issuing_disputes_submit
    ;;
  update)
    _stripe_issuing_disputes_update
    ;;
  esac
}

function _stripe_issuing_disputes_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--transaction[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_disputes_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--transaction[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_disputes_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_disputes_submit {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_disputes_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_issuing_transactions {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_issuing_transactions_list
    ;;
  retrieve)
    _stripe_issuing_transactions_retrieve
    ;;
  update)
    _stripe_issuing_transactions_update
    ;;
  esac
}

function _stripe_issuing_transactions_list {
  _arguments \
    '--card[]:' \
    '--cardholder[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_transactions_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_issuing_transactions_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_items {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_items_list
    ;;
  esac
}

function _stripe_items_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_line_items {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_line_items_list
    ;;
  esac
}

function _stripe_line_items_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_listen {
  _arguments \
    '*--connect-headers[A comma-separated list of custom headers to forward for Connect]:' \
    '(*-e *--events)'{\*-e,\*--events}'[A comma-separated list of specific events to listen for. For a list of all possible events, see: https://stripe.com/docs/api/events/types]:' \
    '(-c --forward-connect-to)'{-c,--forward-connect-to}'[The URL to forward Connect webhook events to (default: same as normal events)]:' \
    '(-f --forward-to)'{-f,--forward-to}'[The URL to forward webhook events to]:' \
    '(*-H *--headers)'{\*-H,\*--headers}'[A comma-separated list of custom headers to forward]:' \
    '(-l --latest)'{-l,--latest}'[Receive events formatted with the latest API version (default: your account'\''s default API version)]' \
    '--live[Receive live events (default: test)]' \
    '(-a --load-from-webhooks-api)'{-a,--load-from-webhooks-api}'[Load webhook endpoint configuration from the webhooks API]' \
    '(-j --print-json)'{-j,--print-json}'[Print full JSON objects to stdout]' \
    '--print-secret[Only print the webhook signing secret and exit]' \
    '--skip-verify[Skip certificate verification when forwarding to HTTPS endpoints]' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_login {
  _arguments \
    '(-i --interactive)'{-i,--interactive}'[Run interactive configuration mode if you cannot open a browser]' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_login_links {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_login_links_create
    ;;
  esac
}

function _stripe_login_links_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--redirect-url[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_logout {
  _arguments \
    '(-a --all)'{-a,--all}'[Clear credentials for all projects you are currently logged into.]' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_logs {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "tail:Tail API request logs from your Stripe requests."
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  tail)
    _stripe_logs_tail
    ;;
  esac
}

function _stripe_logs_tail {
  _arguments \
    '*--filter-account[*CONNECT ONLY* Filter request logs by source and destination account
Acceptable values:
	'\''connect_in'\''  - Incoming connect requests
	'\''connect_out'\'' - Outgoing connect requests
	'\''self'\''        - Non-connect requests]:' \
    '*--filter-http-method[Filter request logs by http method
Acceptable values:
	'\''GET'\''    - HTTP get requests
	'\''POST'\''   - HTTP post requests
	'\''DELETE'\'' - HTTP delete requests]:' \
    '*--filter-ip-address[Filter request logs by ip address]:' \
    '*--filter-request-path[Filter request logs by request path]:' \
    '*--filter-request-status[Filter request logs by request status
Acceptable values:
	'\''SUCCEEDED'\'' - Requests that succeeded (status codes 200, 201, 202)
	'\''FAILED'\''    - Requests that failed]:' \
    '*--filter-source[Filter request logs by source
Acceptable values:
	'\''API'\''       - Requests that came through the Stripe API
	'\''DASHBOARD'\'' - Requests that came through the Stripe Dashboard]:' \
    '*--filter-status-code[Filter request logs by status code]:' \
    '*--filter-status-code-type[Filter request logs by status code type
Acceptable values:
	'\''2XX'\'' - All 2XX status codes
	'\''4XX'\'' - All 4XX status codes
	'\''5XX'\'' - All 5XX status codes]:' \
    '--format[Specifies the output format of request logs
Acceptable values:
	'\''JSON'\'' - Output logs in JSON format]:' \
    '--live[[WARNING: experimental] Tail live logs (default: test)]' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_mandates {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  retrieve)
    _stripe_mandates_retrieve
    ;;
  esac
}

function _stripe_mandates_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_open {
  _arguments \
    '--list[List all supported short cuts]' \
    '--live[Open the Stripe Dashboard for your live integration]' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    '1: :("api" "dashboard/billing" "dashboard/connect/accounts" "dashboard/coupons" "dashboard/disputes" "dashboard/payments" "dashboard/topups" "dashboard/connect/collected-fees" "dashboard/logs" "dashboard/orders" "dashboard/payouts" "dashboard/radar" "dashboard/settings" "dashboard" "dashboard/atlas" "dashboard/connect/transfers" "dashboard/terminal/locations" "dashboard/webhooks" "dashboard/developers" "dashboard/tax-rates" "dashboard/connect" "dashboard/invoices" "dashboard/radar/list" "dashboard/radar/reviews" "dashboard/terminal/hardware_orders" "dashboard/transactions" "docs" "dashboard/apikeys" "dashboard/orders/products" "dashboard/subscriptions/products" "apiref" "dashboard/balance" "dashboard/customers" "dashboard/subscriptions" "dashboard/terminal" "cliref" "dashboard/events" "dashboard/radar/rules")'
}


function _stripe_order_returns {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_order_returns_list
    ;;
  retrieve)
    _stripe_order_returns_retrieve
    ;;
  esac
}

function _stripe_order_returns_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--order[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_order_returns_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_orders {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "pay:"
      "retrieve:"
      "return_order:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_orders_create
    ;;
  list)
    _stripe_orders_list
    ;;
  pay)
    _stripe_orders_pay
    ;;
  retrieve)
    _stripe_orders_retrieve
    ;;
  return_order)
    _stripe_orders_return_order
    ;;
  update)
    _stripe_orders_update
    ;;
  esac
}

function _stripe_orders_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--coupon[]:' \
    '--currency[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--email[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_orders_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_orders_pay {
  _arguments \
    '--application-fee[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--email[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--source[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_orders_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_orders_return_order {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_orders_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--coupon[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--selected-shipping-method[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_payment_intents {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "cancel:"
      "capture:"
      "confirm:"
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  cancel)
    _stripe_payment_intents_cancel
    ;;
  capture)
    _stripe_payment_intents_capture
    ;;
  confirm)
    _stripe_payment_intents_confirm
    ;;
  create)
    _stripe_payment_intents_create
    ;;
  list)
    _stripe_payment_intents_list
    ;;
  retrieve)
    _stripe_payment_intents_retrieve
    ;;
  update)
    _stripe_payment_intents_update
    ;;
  esac
}

function _stripe_payment_intents_cancel {
  _arguments \
    '--cancellation-reason[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payment_intents_capture {
  _arguments \
    '--amount-to-capture[]:' \
    '--application-fee-amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--statement-descriptor[]:' \
    '--statement-descriptor-suffix[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payment_intents_confirm {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--error-on-requires-action[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--mandate[]:' \
    '--off-session[]:' \
    '--payment-method[]:' \
    '--receipt-email[]:' \
    '--return-url[]:' \
    '--setup-future-usage[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--use-stripe-sdk[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payment_intents_create {
  _arguments \
    '--amount[]:' \
    '--application-fee-amount[]:' \
    '--capture-method[]:' \
    '--confirm[]:' \
    '--confirmation-method[]:' \
    '--currency[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '--error-on-requires-action[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--mandate[]:' \
    '--off-session[]:' \
    '--on-behalf-of[]:' \
    '--payment-method[]:' \
    '--receipt-email[]:' \
    '--return-url[]:' \
    '--setup-future-usage[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--statement-descriptor[]:' \
    '--statement-descriptor-suffix[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--transfer-group[]:' \
    '--use-stripe-sdk[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payment_intents_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payment_intents_retrieve {
  _arguments \
    '--client-secret[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payment_intents_update {
  _arguments \
    '--amount[]:' \
    '--application-fee-amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--payment-method[]:' \
    '--receipt-email[]:' \
    '--setup-future-usage[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--statement-descriptor[]:' \
    '--statement-descriptor-suffix[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--transfer-group[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_payment_methods {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "attach:"
      "create:"
      "detach:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  attach)
    _stripe_payment_methods_attach
    ;;
  create)
    _stripe_payment_methods_create
    ;;
  detach)
    _stripe_payment_methods_detach
    ;;
  list)
    _stripe_payment_methods_list
    ;;
  retrieve)
    _stripe_payment_methods_retrieve
    ;;
  update)
    _stripe_payment_methods_update
    ;;
  esac
}

function _stripe_payment_methods_attach {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payment_methods_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--payment-method[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payment_methods_detach {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payment_methods_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payment_methods_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payment_methods_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_payment_sources {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_payment_sources_create
    ;;
  list)
    _stripe_payment_sources_list
    ;;
  retrieve)
    _stripe_payment_sources_retrieve
    ;;
  esac
}

function _stripe_payment_sources_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--source[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payment_sources_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--object[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payment_sources_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_payouts {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "cancel:"
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  cancel)
    _stripe_payouts_cancel
    ;;
  create)
    _stripe_payouts_create
    ;;
  list)
    _stripe_payouts_list
    ;;
  retrieve)
    _stripe_payouts_retrieve
    ;;
  update)
    _stripe_payouts_update
    ;;
  esac
}

function _stripe_payouts_cancel {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payouts_create {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '--destination[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--method[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--source-type[]:' \
    '--statement-descriptor[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payouts_list {
  _arguments \
    '--arrival-date[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--destination[]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payouts_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_payouts_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_persons {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_persons_create
    ;;
  delete)
    _stripe_persons_delete
    ;;
  list)
    _stripe_persons_list
    ;;
  retrieve)
    _stripe_persons_retrieve
    ;;
  update)
    _stripe_persons_update
    ;;
  esac
}

function _stripe_persons_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--email[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--first-name[]:' \
    '--first-name-kana[]:' \
    '--first-name-kanji[]:' \
    '--gender[]:' \
    '--id-number[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--last-name[]:' \
    '--last-name-kana[]:' \
    '--last-name-kanji[]:' \
    '--live[Make a live request (default: test)]' \
    '--maiden-name[]:' \
    '--person-token[]:' \
    '--phone[]:' \
    '--political-exposure[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--ssn-last-4[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_persons_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_persons_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_persons_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_persons_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--email[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--first-name[]:' \
    '--first-name-kana[]:' \
    '--first-name-kanji[]:' \
    '--gender[]:' \
    '--id-number[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--last-name[]:' \
    '--last-name-kana[]:' \
    '--last-name-kanji[]:' \
    '--live[Make a live request (default: test)]' \
    '--maiden-name[]:' \
    '--person-token[]:' \
    '--phone[]:' \
    '--political-exposure[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--ssn-last-4[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_plans {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_plans_create
    ;;
  delete)
    _stripe_plans_delete
    ;;
  list)
    _stripe_plans_list
    ;;
  retrieve)
    _stripe_plans_retrieve
    ;;
  update)
    _stripe_plans_update
    ;;
  esac
}

function _stripe_plans_create {
  _arguments \
    '--active[]:' \
    '--aggregate-usage[]:' \
    '--amount[]:' \
    '--amount-decimal[]:' \
    '--billing-scheme[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--id[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--interval[]:' \
    '--interval-count[]:' \
    '--live[Make a live request (default: test)]' \
    '--nickname[]:' \
    '--product[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--tiers-mode[]:' \
    '--trial-period-days[]:' \
    '--usage-type[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_plans_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_plans_list {
  _arguments \
    '--active[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--product[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_plans_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_plans_update {
  _arguments \
    '--active[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--nickname[]:' \
    '--product[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--trial-period-days[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_post {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_prices {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_prices_create
    ;;
  list)
    _stripe_prices_list
    ;;
  retrieve)
    _stripe_prices_retrieve
    ;;
  update)
    _stripe_prices_update
    ;;
  esac
}

function _stripe_prices_create {
  _arguments \
    '--active[]:' \
    '--billing-scheme[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--lookup-key[]:' \
    '--nickname[]:' \
    '--product[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--tiers-mode[]:' \
    '--transfer-lookup-key[]:' \
    '--unit-amount[]:' \
    '--unit-amount-decimal[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_prices_list {
  _arguments \
    '--active[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--currency[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--product[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_prices_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_prices_update {
  _arguments \
    '--active[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--lookup-key[]:' \
    '--nickname[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--transfer-lookup-key[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_products {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_products_create
    ;;
  delete)
    _stripe_products_delete
    ;;
  list)
    _stripe_products_list
    ;;
  retrieve)
    _stripe_products_retrieve
    ;;
  update)
    _stripe_products_update
    ;;
  esac
}

function _stripe_products_create {
  _arguments \
    '--active[]:' \
    '--caption[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--id[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--name[]:' \
    '--shippable[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--statement-descriptor[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--unit-label[]:' \
    '--url[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_products_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_products_list {
  _arguments \
    '--active[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--shippable[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--url[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_products_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_products_update {
  _arguments \
    '--active[]:' \
    '--caption[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--name[]:' \
    '--shippable[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--statement-descriptor[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--unit-label[]:' \
    '--url[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_promotion_codes {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_promotion_codes_create
    ;;
  list)
    _stripe_promotion_codes_list
    ;;
  retrieve)
    _stripe_promotion_codes_retrieve
    ;;
  update)
    _stripe_promotion_codes_update
    ;;
  esac
}

function _stripe_promotion_codes_create {
  _arguments \
    '--active[]:' \
    '--code[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--coupon[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--expires-at[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--max-redemptions[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_promotion_codes_list {
  _arguments \
    '--active[]:' \
    '--code[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--coupon[]:' \
    '--created[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_promotion_codes_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_promotion_codes_update {
  _arguments \
    '--active[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_radar {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "early_fraud_warnings:"
      "value_list_items:"
      "value_lists:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  early_fraud_warnings)
    _stripe_radar_early_fraud_warnings
    ;;
  value_list_items)
    _stripe_radar_value_list_items
    ;;
  value_lists)
    _stripe_radar_value_lists
    ;;
  esac
}


function _stripe_radar_early_fraud_warnings {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_radar_early_fraud_warnings_list
    ;;
  retrieve)
    _stripe_radar_early_fraud_warnings_retrieve
    ;;
  esac
}

function _stripe_radar_early_fraud_warnings_list {
  _arguments \
    '--charge[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_radar_early_fraud_warnings_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_radar_value_list_items {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_radar_value_list_items_create
    ;;
  delete)
    _stripe_radar_value_list_items_delete
    ;;
  list)
    _stripe_radar_value_list_items_list
    ;;
  retrieve)
    _stripe_radar_value_list_items_retrieve
    ;;
  esac
}

function _stripe_radar_value_list_items_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--value[]:' \
    '--value-list[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_radar_value_list_items_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_radar_value_list_items_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--value[]:' \
    '--value-list[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_radar_value_list_items_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_radar_value_lists {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_radar_value_lists_create
    ;;
  delete)
    _stripe_radar_value_lists_delete
    ;;
  list)
    _stripe_radar_value_lists_list
    ;;
  retrieve)
    _stripe_radar_value_lists_retrieve
    ;;
  update)
    _stripe_radar_value_lists_update
    ;;
  esac
}

function _stripe_radar_value_lists_create {
  _arguments \
    '--alias[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--item-type[]:' \
    '--live[Make a live request (default: test)]' \
    '--name[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_radar_value_lists_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_radar_value_lists_list {
  _arguments \
    '--alias[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--contains[]:' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_radar_value_lists_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_radar_value_lists_update {
  _arguments \
    '--alias[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--name[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_refunds {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_refunds_create
    ;;
  list)
    _stripe_refunds_list
    ;;
  retrieve)
    _stripe_refunds_retrieve
    ;;
  update)
    _stripe_refunds_update
    ;;
  esac
}

function _stripe_refunds_create {
  _arguments \
    '--amount[]:' \
    '--charge[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--payment-intent[]:' \
    '--reason[]:' \
    '--refund-application-fee[]:' \
    '--reverse-transfer[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_refunds_list {
  _arguments \
    '--charge[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--payment-intent[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_refunds_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_refunds_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_reporting {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "report_runs:"
      "report_types:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  report_runs)
    _stripe_reporting_report_runs
    ;;
  report_types)
    _stripe_reporting_report_types
    ;;
  esac
}


function _stripe_reporting_report_runs {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_reporting_report_runs_create
    ;;
  list)
    _stripe_reporting_report_runs_list
    ;;
  retrieve)
    _stripe_reporting_report_runs_retrieve
    ;;
  esac
}

function _stripe_reporting_report_runs_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--report-type[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_reporting_report_runs_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_reporting_report_runs_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_reporting_report_types {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_reporting_report_types_list
    ;;
  retrieve)
    _stripe_reporting_report_types_retrieve
    ;;
  esac
}

function _stripe_reporting_report_types_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_reporting_report_types_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_resources {
  _arguments \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_reviews {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "approve:"
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  approve)
    _stripe_reviews_approve
    ;;
  list)
    _stripe_reviews_list
    ;;
  retrieve)
    _stripe_reviews_retrieve
    ;;
  esac
}

function _stripe_reviews_approve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_reviews_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_reviews_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_samples {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:Setup and bootstrap a Stripe Sample"
      "list:List Stripe Samples supported by the CLI"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_samples_create
    ;;
  list)
    _stripe_samples_list
    ;;
  esac
}

function _stripe_samples_create {
  _arguments \
    '--force-refresh[Forcefully refresh the local samples cache]' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_samples_list {
  _arguments \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_scheduled_query_runs {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_scheduled_query_runs_list
    ;;
  retrieve)
    _stripe_scheduled_query_runs_retrieve
    ;;
  esac
}

function _stripe_scheduled_query_runs_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_scheduled_query_runs_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_serve {
  _arguments \
    '--port[Provide a custom port to serve content from.]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_setup_attempts {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_setup_attempts_list
    ;;
  esac
}

function _stripe_setup_attempts_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--setup-intent[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_setup_intents {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "cancel:"
      "confirm:"
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  cancel)
    _stripe_setup_intents_cancel
    ;;
  confirm)
    _stripe_setup_intents_confirm
    ;;
  create)
    _stripe_setup_intents_create
    ;;
  list)
    _stripe_setup_intents_list
    ;;
  retrieve)
    _stripe_setup_intents_retrieve
    ;;
  update)
    _stripe_setup_intents_update
    ;;
  esac
}

function _stripe_setup_intents_cancel {
  _arguments \
    '--cancellation-reason[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_setup_intents_confirm {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--payment-method[]:' \
    '--return-url[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_setup_intents_create {
  _arguments \
    '--confirm[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--on-behalf-of[]:' \
    '--payment-method[]:' \
    '--return-url[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--usage[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_setup_intents_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--payment-method[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_setup_intents_retrieve {
  _arguments \
    '--client-secret[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_setup_intents_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--payment-method[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_skus {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_skus_create
    ;;
  delete)
    _stripe_skus_delete
    ;;
  list)
    _stripe_skus_list
    ;;
  retrieve)
    _stripe_skus_retrieve
    ;;
  update)
    _stripe_skus_update
    ;;
  esac
}

function _stripe_skus_create {
  _arguments \
    '--active[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--id[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--image[]:' \
    '--live[Make a live request (default: test)]' \
    '--price[]:' \
    '--product[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_skus_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_skus_list {
  _arguments \
    '--active[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--in-stock[]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--product[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_skus_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_skus_update {
  _arguments \
    '--active[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--image[]:' \
    '--live[Make a live request (default: test)]' \
    '--price[]:' \
    '--product[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_sources {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "detach:"
      "retrieve:"
      "source_transactions:"
      "update:"
      "verify:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_sources_create
    ;;
  detach)
    _stripe_sources_detach
    ;;
  retrieve)
    _stripe_sources_retrieve
    ;;
  source_transactions)
    _stripe_sources_source_transactions
    ;;
  update)
    _stripe_sources_update
    ;;
  verify)
    _stripe_sources_verify
    ;;
  esac
}

function _stripe_sources_create {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--flow[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--original-source[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--statement-descriptor[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--token[]:' \
    '--type[]:' \
    '--usage[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_sources_detach {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_sources_retrieve {
  _arguments \
    '--client-secret[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_sources_source_transactions {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_sources_update {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_sources_verify {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_status {
  _arguments \
    '--format[The format to print the status as (either '\''default'\'' or '\''json'\'')]:' \
    '--hide-spinner[Hide the loading spinner when polling]' \
    '--poll[Keep polling for status updates]' \
    '--poll-rate[How many seconds to wait between status updates (minimum: 5)]:' \
    '--verbose[Show status for all Stripe systems]' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_subscription_items {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
      "update:"
      "usage_record_summaries:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_subscription_items_create
    ;;
  delete)
    _stripe_subscription_items_delete
    ;;
  list)
    _stripe_subscription_items_list
    ;;
  retrieve)
    _stripe_subscription_items_retrieve
    ;;
  update)
    _stripe_subscription_items_update
    ;;
  usage_record_summaries)
    _stripe_subscription_items_usage_record_summaries
    ;;
  esac
}

function _stripe_subscription_items_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--payment-behavior[]:' \
    '--plan[]:' \
    '--price[]:' \
    '--proration-behavior[]:' \
    '--proration-date[]:' \
    '--quantity[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--subscription[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscription_items_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscription_items_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--subscription[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscription_items_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscription_items_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--off-session[]:' \
    '--payment-behavior[]:' \
    '--plan[]:' \
    '--price[]:' \
    '--proration-behavior[]:' \
    '--proration-date[]:' \
    '--quantity[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscription_items_usage_record_summaries {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_subscription_schedules {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "cancel:"
      "create:"
      "list:"
      "release:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  cancel)
    _stripe_subscription_schedules_cancel
    ;;
  create)
    _stripe_subscription_schedules_create
    ;;
  list)
    _stripe_subscription_schedules_list
    ;;
  release)
    _stripe_subscription_schedules_release
    ;;
  retrieve)
    _stripe_subscription_schedules_retrieve
    ;;
  update)
    _stripe_subscription_schedules_update
    ;;
  esac
}

function _stripe_subscription_schedules_cancel {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--invoice-now[]:' \
    '--live[Make a live request (default: test)]' \
    '--prorate[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscription_schedules_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--end-behavior[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '--from-subscription[]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--start-date[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscription_schedules_list {
  _arguments \
    '--canceled-at[]:' \
    '--completed-at[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--released-at[]:' \
    '--scheduled[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscription_schedules_release {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--preserve-cancel-date[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscription_schedules_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscription_schedules_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--end-behavior[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--proration-behavior[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_subscriptions {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "cancel:"
      "create:"
      "delete_discount:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  cancel)
    _stripe_subscriptions_cancel
    ;;
  create)
    _stripe_subscriptions_create
    ;;
  delete_discount)
    _stripe_subscriptions_delete_discount
    ;;
  list)
    _stripe_subscriptions_list
    ;;
  retrieve)
    _stripe_subscriptions_retrieve
    ;;
  update)
    _stripe_subscriptions_update
    ;;
  esac
}

function _stripe_subscriptions_cancel {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscriptions_create {
  _arguments \
    '--application-fee-percent[]:' \
    '--backdate-start-date[]:' \
    '--billing-cycle-anchor[]:' \
    '--cancel-at[]:' \
    '--cancel-at-period-end[]:' \
    '--collection-method[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--coupon[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--days-until-due[]:' \
    '--default-payment-method[]:' \
    '--default-source[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--off-session[]:' \
    '--payment-behavior[]:' \
    '--promotion-code[]:' \
    '--proration-behavior[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--trial-end[]:' \
    '--trial-from-plan[]:' \
    '--trial-period-days[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscriptions_delete_discount {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscriptions_list {
  _arguments \
    '--collection-method[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--current-period-end[]:' \
    '--current-period-start[]:' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--plan[]:' \
    '--price[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscriptions_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_subscriptions_update {
  _arguments \
    '--application-fee-percent[]:' \
    '--billing-cycle-anchor[]:' \
    '--cancel-at[]:' \
    '--cancel-at-period-end[]:' \
    '--collection-method[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--coupon[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--days-until-due[]:' \
    '--default-payment-method[]:' \
    '--default-source[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--off-session[]:' \
    '--payment-behavior[]:' \
    '--promotion-code[]:' \
    '--proration-behavior[]:' \
    '--proration-date[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--trial-end[]:' \
    '--trial-from-plan[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_tax_ids {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_tax_ids_create
    ;;
  delete)
    _stripe_tax_ids_delete
    ;;
  list)
    _stripe_tax_ids_list
    ;;
  retrieve)
    _stripe_tax_ids_retrieve
    ;;
  esac
}

function _stripe_tax_ids_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--type[]:' \
    '--value[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_tax_ids_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_tax_ids_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_tax_ids_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_tax_rates {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_tax_rates_create
    ;;
  list)
    _stripe_tax_rates_list
    ;;
  retrieve)
    _stripe_tax_rates_retrieve
    ;;
  update)
    _stripe_tax_rates_update
    ;;
  esac
}

function _stripe_tax_rates_create {
  _arguments \
    '--active[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '--display-name[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--inclusive[]:' \
    '--jurisdiction[]:' \
    '--live[Make a live request (default: test)]' \
    '--percentage[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_tax_rates_list {
  _arguments \
    '--active[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--inclusive[]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_tax_rates_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_tax_rates_update {
  _arguments \
    '--active[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '--display-name[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--jurisdiction[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_terminal {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "connection_tokens:"
      "locations:"
      "quickstart:Set up a Terminal reader and take a test payment"
      "readers:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  connection_tokens)
    _stripe_terminal_connection_tokens
    ;;
  locations)
    _stripe_terminal_locations
    ;;
  quickstart)
    _stripe_terminal_quickstart
    ;;
  readers)
    _stripe_terminal_readers
    ;;
  esac
}


function _stripe_terminal_connection_tokens {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_terminal_connection_tokens_create
    ;;
  esac
}

function _stripe_terminal_connection_tokens_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--location[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_terminal_locations {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_terminal_locations_create
    ;;
  delete)
    _stripe_terminal_locations_delete
    ;;
  list)
    _stripe_terminal_locations_list
    ;;
  retrieve)
    _stripe_terminal_locations_retrieve
    ;;
  update)
    _stripe_terminal_locations_update
    ;;
  esac
}

function _stripe_terminal_locations_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--display-name[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_terminal_locations_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_terminal_locations_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_terminal_locations_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_terminal_locations_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--display-name[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_terminal_quickstart {
  _arguments \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_terminal_readers {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_terminal_readers_create
    ;;
  delete)
    _stripe_terminal_readers_delete
    ;;
  list)
    _stripe_terminal_readers_list
    ;;
  retrieve)
    _stripe_terminal_readers_retrieve
    ;;
  update)
    _stripe_terminal_readers_update
    ;;
  esac
}

function _stripe_terminal_readers_create {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--label[]:' \
    '--live[Make a live request (default: test)]' \
    '--location[]:' \
    '--registration-code[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_terminal_readers_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_terminal_readers_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--device-type[]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '--location[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_terminal_readers_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_terminal_readers_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--label[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_tokens {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "retrieve:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_tokens_create
    ;;
  retrieve)
    _stripe_tokens_retrieve
    ;;
  esac
}

function _stripe_tokens_create {
  _arguments \
    '--card[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--customer[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_tokens_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_topups {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "cancel:"
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  cancel)
    _stripe_topups_cancel
    ;;
  create)
    _stripe_topups_create
    ;;
  list)
    _stripe_topups_list
    ;;
  retrieve)
    _stripe_topups_retrieve
    ;;
  update)
    _stripe_topups_update
    ;;
  esac
}

function _stripe_topups_cancel {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_topups_create {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--source[]:' \
    '--statement-descriptor[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--transfer-group[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_topups_list {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--status[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_topups_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_topups_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_transfer_reversals {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_transfer_reversals_create
    ;;
  list)
    _stripe_transfer_reversals_list
    ;;
  retrieve)
    _stripe_transfer_reversals_retrieve
    ;;
  update)
    _stripe_transfer_reversals_update
    ;;
  esac
}

function _stripe_transfer_reversals_create {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--refund-application-fee[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_transfer_reversals_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_transfer_reversals_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_transfer_reversals_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_transfers {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_transfers_create
    ;;
  list)
    _stripe_transfers_list
    ;;
  retrieve)
    _stripe_transfers_retrieve
    ;;
  update)
    _stripe_transfers_update
    ;;
  esac
}

function _stripe_transfers_create {
  _arguments \
    '--amount[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--currency[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '--destination[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--source-transaction[]:' \
    '--source-type[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--transfer-group[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_transfers_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--created[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--destination[]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--transfer-group[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_transfers_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_transfers_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_trigger {
  _arguments \
    '--stripe-account[Set a header identifying the connected account]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    '1: :("balance.available" "charge.captured" "charge.dispute.created" "charge.failed" "charge.refunded" "charge.succeeded" "checkout.session.async_payment_failed" "checkout.session.async_payment_succeeded" "checkout.session.completed" "customer.created" "customer.deleted" "customer.source.created" "customer.source.updated" "customer.subscription.created" "customer.subscription.deleted" "customer.subscription.updated" "customer.updated" "invoice.created" "invoice.finalized" "invoice.payment_failed" "invoice.payment_succeeded" "invoice.updated" "issuing_authorization.request" "issuing_card.created" "issuing_cardholder.created" "payment_intent.amount_capturable_updated" "payment_intent.canceled" "payment_intent.created" "payment_intent.payment_failed" "payment_intent.succeeded" "payment_method.attached" "plan.created" "plan.deleted" "plan.updated" "product.created" "product.deleted" "product.updated" "setup_intent.canceled" "setup_intent.created" "setup_intent.setup_failed" "setup_intent.succeeded" "subscription_schedule.canceled" "subscription_schedule.created" "subscription_schedule.released" "subscription_schedule.updated")'
}


function _stripe_usage_record_summaries {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "list:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  list)
    _stripe_usage_record_summaries_list
    ;;
  esac
}

function _stripe_usage_record_summaries_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_usage_records {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_usage_records_create
    ;;
  esac
}

function _stripe_usage_records_create {
  _arguments \
    '--action[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '--quantity[]:' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--timestamp[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_version {
  _arguments \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}


function _stripe_webhook_endpoints {
  local -a commands

  _arguments -C \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:' \
    "1: :->cmnds" \
    "*::arg:->args"

  case $state in
  cmnds)
    commands=(
      "create:"
      "delete:"
      "list:"
      "retrieve:"
      "update:"
    )
    _describe "command" commands
    ;;
  esac

  case "$words[1]" in
  create)
    _stripe_webhook_endpoints_create
    ;;
  delete)
    _stripe_webhook_endpoints_delete
    ;;
  list)
    _stripe_webhook_endpoints_list
    ;;
  retrieve)
    _stripe_webhook_endpoints_retrieve
    ;;
  update)
    _stripe_webhook_endpoints_update
    ;;
  esac
}

function _stripe_webhook_endpoints_create {
  _arguments \
    '--api-version[]:' \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--connect[]:' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--url[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_webhook_endpoints_delete {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_webhook_endpoints_list {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--ending-before[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--limit[]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--starting-after[]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_webhook_endpoints_retrieve {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '(-b --ending-before)'{-b,--ending-before}'[Retrieve the previous page in the list. This is a cursor for pagination and should be an object ID]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '(-l --limit)'{-l,--limit}'[How many objects to be return, between 1 and 100 (default is 10)]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '(-a --starting-after)'{-a,--starting-after}'[Retrieve the next page in the list. This is a cursor for pagination and should be an object ID]:' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

function _stripe_webhook_endpoints_update {
  _arguments \
    '(-c --confirm)'{-c,--confirm}'[Skip the warning prompt and automatically confirm the command being entered]' \
    '--dark-style[Use a darker color scheme better suited for lighter command-lines]' \
    '(*-d *--data)'{\*-d,\*--data}'[Data for the API request]:' \
    '--description[]:' \
    '--disabled[]:' \
    '(*-e *--expand)'{\*-e,\*--expand}'[Response attributes to expand inline]:' \
    '(-i --idempotency)'{-i,--idempotency}'[Set the idempotency key for the request, prevents replaying the same requests within 24 hours]:' \
    '--live[Make a live request (default: test)]' \
    '(-s --show-headers)'{-s,--show-headers}'[Show response headers]' \
    '--stripe-account[Set a header identifying the connected account]:' \
    '(-v --stripe-version)'{-v,--stripe-version}'[Set the Stripe API version to use for your request]:' \
    '--url[]:' \
    '--api-key[Your API key to use for the command]:' \
    '--color[turn on/off color output (on, off, auto)]:' \
    '--config[config file (default is $HOME/.config/stripe/config.toml)]:' \
    '--device-name[device name]:' \
    '--log-level[log level (debug, info, warn, error)]:' \
    '(-p --project-name)'{-p,--project-name}'[the project name to read from for config]:'
}

