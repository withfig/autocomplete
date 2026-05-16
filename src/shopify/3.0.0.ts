const completion: Fig.Subcommand = {
  name: "shopify",
  options: [
    {
      name: ["--help", "-h"],
      icon: "fig://icon?type=option",
      description: "Show help for this command",
      priority: 1,
      isPersistent: true,
    },
  ],
  description:
    "Shopify CLI is a command-line interface tool that helps you build Shopify apps and themes. It quickly generates Shopify apps, themes, and custom storefronts. You can also use it to automate many common development tasks. Visit https://shopify.dev/apps/tools/cli to know more",
  icon: "https://avatars.githubusercontent.com/u/8085?s=16&v=4",
  subcommands: [
    {
      name: "theme",
      priority: 100,
      options: [
        {
          name: "--verbose",
          isPersistent: true,
          description: "Provide more detailed output in the logs",
          priority: 1,
        },
      ],
      description: "Suite of commands for developing Shopify themes",
      subcommands: [
        {
          name: "init",
          priority: 75,
          description:
            "Clones a Git repository to your local machine to use as the starting point for building a theme",
          args: {
            name: "NAME",
            description:
              "The name that you want to give your theme. Cloned files are stored in a folder with this name",
          },
          options: [
            {
              name: ["--clone-url", "-u"],
              icon: "fig://icon?type=github",
              description:
                "The URL of the Git repository that you want to clone. If no URL is specified, then https://github.com/Shopify/dawn.git is used",
              args: {
                name: "URL",
              },
            },
            {
              name: "--latest",
              icon: "fig://icon?type=github",
              description:
                "Clone the latest release from the repository, rather than the content of the repository's main branch",
            },
            {
              name: "--path",
              description: "The path to your theme directory",
              args: {
                name: "path",
                template: ["folders"],
              },
            },
          ],
        },
        {
          name: "dev",
          priority: 100,
          description:
            "Uploads the current theme as the specified theme, or a development theme, to a store so you can preview it",
          options: [
            {
              name: ["--store", "-s"],
              description:
                "The development store that you want to use to preview your theme",
              args: {
                name: "store",
              },
            },
            {
              name: "--password",
              description: "Your Theme Access password for the store",
            },
            {
              name: ["--theme", "-t"],
              description:
                "The ID or name of the theme that you want to preview. If you don't use this flag, then the theme is previewed using a new or existing development theme",
              args: {
                name: "NAME_OR_ID",
              },
            },
            {
              name: "--live-reload",
              description:
                "The level at which content is reloaded when changes are made to the theme",
              args: {
                name: "MODE",
                suggestions: [
                  {
                    name: "hot-reload",
                    description:
                      "Hot reloads local changes to CSS and sections (default)",
                  },
                  {
                    name: "full-page",
                    description:
                      "Refreshes the entire page when a file is modified",
                  },
                  {
                    name: "off",
                    description: "Deactivate live reload",
                  },
                ],
              },
            },
            {
              name: "--host",
              description:
                "The network interface the web server listens on. The default value is 127.0.0.1",
              args: {
                name: "IP",
                description:
                  "The network interface the web server listens on. The default value is 127.0.0.1",
              },
            },
            {
              name: "--port",
              description: "The local port to serve the theme preview from",
              args: {
                name: "PORT",
              },
            },
            {
              name: "--poll",
              description:
                "Force the polling adapter to watch file changes. You can try this option if live reload isn't working as expected",
            },
            {
              name: ["--theme-editor-sync", "-e"],
              description:
                "Enables two-way sync for theme JSON files. When this option is enabled, changes made in the theme editor in the Shopify admin are applied to the local copy of the theme",
            },
            {
              name: ["--ignore", "-x"],
              description:
                "Skips hot reloading any files that match the specified pattern. Specify multiple patterns to ignore by using the flag multiple times in a single command",
              args: {
                name: "pattern",
                description: "Pattern to match files",
              },
            },
            {
              name: ["--only", "-o"],
              description:
                "Hot reloads only files that match the specified pattern. Specify multiple patterns by using the flag multiple times in a single command",
              args: {
                name: "pattern",
                description: "Pattern to match files",
              },
            },
          ],
        },
        {
          name: "check",
          icon: "fig://icon?type=alert",
          description:
            "Calls and runs Theme Check to analyze your theme code for errors and to ensure that it follows theme and Liquid best practices. Learn more about the checks that Theme Check runs",
          options: [
            {
              name: ["--config", "-C"],
              description:
                "The path to your custom Theme Check config. This config overrides .theme-check.yml, if it is present in the directory being analyzed",
              args: {
                name: "PATH",
                template: "filepaths",
              },
            },
            {
              name: ["--category", "-c"],
              description:
                "Run only the specified category of checks. You can specify multiple categories using multiple instances of this flag",
              args: {
                name: "CATEGORY",
                suggestions: [
                  "html",
                  "json",
                  "liquid",
                  "performance",
                  "translation",
                ],
              },
            },
            {
              name: ["--exclude-category", "-x"],
              description:
                "Run all checks other than those in the specified category. You can specify multiple categories using multiple instances of this flag",
              args: {
                name: "CATEGORY",
                suggestions: [
                  "html",
                  "json",
                  "liquid",
                  "performance",
                  "translation",
                ],
              },
            },
            {
              name: "--fail-level",
              description:
                "Configure the severity level that causes a run of theme check to fail (exit code 1). Options include error, suggestion, and style",
              args: {
                name: "LEVEL",
                suggestions: ["error", "suggestion", "style"],
              },
            },
            {
              name: ["--auto-correct", "-a"],
              description: "Automatically fix correctable offenses",
            },
            {
              name: "--init",
              description: "Generate a new Theme Check config file",
            },
            {
              name: ["--output", "-o"],
              description:
                "Output the results of the check to a file. Options include json and text (default)",
              args: {
                name: "type",
                suggestions: ["json", "text"],
              },
            },
            {
              name: "--print",
              description: "Output the active config to STDOUT",
            },
            {
              name: ["--list", "-l"],
              description: "List the active checks",
            },
            {
              name: ["--version", "-v"],
              description: "Print the version of Theme Check being used",
            },
            {
              name: "--path",
              description: "The path to your theme directory",
              args: {
                name: "path",
                description: "The path to your theme directory",
                template: ["folders"],
              },
            },
          ],
        },
        {
          name: "open",
          description: "Returns links that let you preview the specified theme",
          options: [
            {
              name: ["--theme", "-t"],
              description:
                "The name or ID of the theme that you want to overwrite",
              args: {
                name: "NAME_OR_ID",
              },
            },
            {
              name: ["--store", "-s"],
              description:
                "The development store that you want to use to preview your theme",
              args: {
                name: "store",
              },
            },
            {
              name: ["--live", "-l"],
              description:
                "Returns links for the live (published) theme. This option doesn't require --theme",
            },
            {
              name: ["--development", "-d"],
              description:
                "Returns links for your development theme. This option doesn't require --theme",
            },
            {
              name: ["--editor", "-e"],
              description:
                "Opens the theme editor for the specified theme in your browser",
            },
          ],
        },
        {
          name: "delete",
          description: "Deletes a theme from your store",
          args: {
            name: "THEME_ID",
            description:
              "The ID of the theme that you want to delete. You can specify multiple theme IDs separated by spaces",
          },
          options: [
            {
              name: ["--store", "-s"],
              description:
                "The development store that you want to delete your theme from",
              args: {
                name: "store",
              },
            },
            {
              name: ["--development", "-d"],
              description: "Deletes your development theme",
            },
            {
              name: ["--force", "-f"],
              description: "Deletes the theme without confirming with the user",
            },
            {
              name: ["--show-all", "-a"],
              description:
                "Shows development themes created by others in the theme list",
            },
            {
              name: ["--theme", "-t"],
              description:
                "The name or ID of the theme that you want to delete",
              args: {
                name: "NAME_OR_ID",
              },
            },
          ],
        },
        {
          name: "package",
          icon: "fig://icon?type=box",
          description:
            "Packages your local theme files into a ZIP file that can be uploaded to Shopify",
          options: [
            {
              name: "--path",
              description: "The path to your theme directory",
              args: {
                name: "path",
                template: ["folders"],
              },
            },
          ],
        },
        {
          name: "publish",
          description: "Publishes an unpublished theme from your theme library",
          options: [
            {
              name: ["--force", "-f"],
              description: "Publish the theme without confirming with the user",
            },
            {
              name: ["--store", "-s"],
              description:
                "The development store that you want to use to preview your theme",
              args: {
                name: "store",
              },
            },
            {
              name: ["--theme", "-t"],
              description:
                "The name or ID of the theme that you want to publish",
              args: {
                name: "NAME_OR_ID",
              },
            },
          ],
        },
        {
          name: "share",
          description:
            "Uploads your theme as a new, unpublished theme in your theme library. The theme is given a randomized name",
          options: [
            {
              name: ["--store", "-s"],
              description:
                "The development store that you want to use to preview your theme",
              args: {
                name: "store",
              },
            },
            {
              name: "--path",
              description: "The path to your theme directory",
              args: {
                name: "path",
                template: ["folders"],
              },
            },
          ],
        },
        {
          name: "pull",
          description: "Retrieves theme files from Shopify",
          options: [
            {
              name: ["--theme", "-t"],
              description:
                "The name or ID of the theme that you want to overwrite",
              args: {
                name: "NAME_OR_ID",
              },
            },
            {
              name: "--path",
              description: "The path to your theme directory",
              args: {
                name: "path",
                template: ["folders"],
              },
            },
            {
              name: ["--store", "-s"],
              description:
                "The development store that you want to use to preview your theme",
              args: {
                name: "store",
              },
            },
            {
              name: ["--live", "-l"],
              description:
                "Pulls the live (published) theme. This option doesn't require --theme",
            },
            {
              name: ["--development", "-d"],
              description:
                "Downloads theme files from your remote development theme. You might use this command to copy changes made to the development theme in the theme editor to your local copy of the theme. This option doesn't require --theme",
            },
            {
              name: ["--nodelete", "-n"],
              description: "Runs the pull command without deleting local files",
            },
            {
              name: ["--ignore", "-x"],
              description:
                "Skips downloading the specified files from Shopify. Specify multiple patterns to ignore by using the flag multiple times in a single command. If files are excluded using .shopifyignore, then both the contents of .shopifyignore and the --ignore flag are respected",
            },
            {
              name: ["--only", "-o"],
              description:
                "Downloads only the specified files from Shopify. Specify multiple patterns by using the flag multiple times in a single command",
            },
          ],
        },
        {
          name: "push",
          description:
            "Uploads your local theme files to Shopify, overwriting the remote theme if specified",
          options: [
            {
              name: ["--theme", "-t"],
              description:
                "The name or ID of the theme that you want to overwrite",
              args: {
                name: "NAME_OR_ID",
              },
            },
            {
              name: ["--store", "-s"],
              description:
                "The development store that you want to use to preview your theme",
              args: {
                name: "store",
              },
            },
            {
              name: "--path",
              description: "The path to your theme directory",
              args: {
                name: "path",
                template: ["folders"],
              },
            },
            {
              name: ["--development", "-d"],
              description:
                "Pushes to your development theme. If you don't have a development theme, then one is created. This option doesn't require --theme",
            },
            {
              name: ["--nodelete", "-n"],
              description:
                "Pushes your local files without deleting remote files from Shopify",
            },
            {
              name: ["--json", "-j"],
              description:
                "Returns information about the pushed theme as a JSON object",
            },
            {
              name: ["--allow-live", "-a"],
              description:
                "Allows Shopify CLI to overwrite the live (published) theme",
            },
            {
              name: ["--live", "-l"],
              description:
                "Pushes to the live (published) theme. This option doesn't require --theme or --allow-live",
            },
            {
              name: ["--publish", "-p"],
              description:
                "After the theme is pushed, publishes the theme so it is live in the store",
            },
            {
              name: ["--unpublished", "-u"],
              description:
                "Uploads the theme to the theme library as a new unpublished theme.You're prompted to provide a name for the theme. Use the --theme flag to provide a name as a part of the command",
            },
            {
              name: ["--ignore", "-x"],
              description:
                "Skips uploading the specified files to Shopify. Specify multiple patterns to ignore by using the flag multiple times in a single command. If files are excluded using .shopifyignore, then both the contents of .shopifyignore and the --ignore flag are respected",
            },
            {
              name: ["--only", "-o"],
              description:
                "Uploads only the specified files to Shopify. Specify multiple patterns by using the flag multiple times in a single command",
            },
          ],
        },
        {
          name: "list",
          description:
            "Lists the themes in your store, along with their IDs and statuses",
          options: [
            {
              name: ["--store", "-s"],
              description:
                "The development store that you want to list your themes from",
              args: {
                name: "store",
              },
            },
            {
              name: "--id",
              description: "Only list the theme with the given ID",
              args: {
                name: "ID",
              },
            },
            {
              name: "--role",
              description: "Only list themes with the given role",
              args: {
                name: "role",
                suggestions: ["live", "unpublished", "development"],
              },
            },
            {
              name: "--name",
              description:
                "Only list themes that contain the given string in their name",
              args: {
                name: "name",
              },
            },
          ],
        },
        {
          name: "info",
          description:
            "Displays information about your theme environment, including your current store",
        },
        {
          name: "language-server",
          description: "Starts a Language Server Protocol server",
        },
      ],
    },
    {
      name: "app",
      priority: 90,
      description: "This reference lists the Shopify CLI commands for apps",
      options: [
        {
          name: "--verbose",
          isPersistent: true,
          description: "Provide more detailed output in the logs",
          priority: 1,
        },
      ],
      subcommands: [
        {
          name: "dev",
          priority: 100,
          description:
            "Builds the app and lets you preview it on a development store or Plus sandbox store",
          options: [
            {
              name: "--tunnel-url",
              description:
                "The URL of a tunnel that you've started using your own local tunneling software. Shopify recommends Cloudflare tunnel for use with Shopify CLI",
            },
            {
              name: ["--store", "-s"],
              description:
                "The development store or Plus sandbox store that you want to use to preview your app",
              args: {
                name: "store",
              },
            },
            {
              name: "--api-key",
              description:
                "The client ID of your app. Use this flag to specify the app that you want connect your project with",
              args: {
                name: "key",
              },
            },
            {
              name: "--no-update",
              description:
                "Skip the prompt to update the app URLs that are set in the Partner Dashboard. Your URLs won't be updated",
            },
            {
              name: "--path",
              description: "The path to your app directory",
              args: {
                name: "path",
                template: ["folders"],
              },
            },
            {
              name: "--skip-dependencies-installation",
              description:
                "Skip checking and installing missing dependencies for your app",
            },
            {
              name: "--reset",
              description:
                "Reset all of your dev settings and send an uninstall request for the store to the default webhook endpoint (/api/webhooks), or the endpoint defined in shopify.web.toml",
            },
            {
              name: "--checkout-cart-url",
              description:
                "A partial link with a product variant ID and quantity to be used to create a test checkout for checkout UI extensions",
            },
            {
              name: "--subscription-product-url",
              description:
                "A partial link with a product ID. Use this flag to specify the product to use when testing a purchase option extension",
            },
            {
              name: "--theme-app-extension-port",
              description:
                "The local port to be used to test a theme app extension",
              args: {
                name: "port",
              },
            },
            {
              name: ["--theme", "-t"],
              description:
                "The ID or name of the theme to be used to test a theme app extension",
              args: {
                name: "ID or name",
              },
            },
          ],
        },
        {
          name: "generate",
          description: "Generates a new app extension or GraphQL schema",
          requiresSubcommand: true,
          subcommands: [
            {
              name: "extension",
              description: "Creates a new app extension for your app",
              options: [
                {
                  name: ["--name", "-n"],
                  description: "The name of your extension",
                  args: {
                    name: "name",
                  },
                },
                {
                  name: "--path",
                  description: "The path to your app directory",
                  args: {
                    name: "path",
                    template: ["folders"],
                  },
                },
                {
                  name: ["--type", "-t"],
                  description: "The extension type",
                  args: {
                    name: "type",
                    suggestions: [
                      "checkout_ui",
                      "post_purchase_ui",
                      "subscription_ui",
                      "theme_app_extension",
                      "web_pixel",
                      "order_discount",
                      "product_discount",
                      "shipping_discount",
                      "delivery_customization",
                      "payment_customization",
                      "order_routing_location_rule",
                      "cart_checkout_validation",
                      "cart_transform",
                    ],
                  },
                },
              ],
            },
            {
              name: "schema",
              description:
                "Generates the GraphQL schema for a function in your app",
              options: [
                {
                  name: "--path",
                  description: "The path to your app directory",
                  args: {
                    name: "path",
                    template: ["folders"],
                  },
                },
                {
                  name: "--api-key",
                  description: "The client ID of your app",
                  args: {
                    name: "key",
                  },
                },
              ],
            },
          ],
        },
        {
          name: "deploy",
          priority: 80,
          description:
            "Builds the app and deploys all of the extensions in your app",
          options: [
            {
              name: "--api-key",
              description: "The API key of your app",
              args: {
                name: "key",
              },
            },
            {
              name: ["--force", "-f"],
              description:
                "Skip the deploy summary confirmation prompt. Critical prompts will still be shown",
            },
            {
              name: "--reset",
              description: "Reset all of your deploy settings",
            },
            {
              name: "--path",
              description: "The path to your app directory",
              args: {
                name: "path",
                template: ["folders"],
              },
            },
          ],
        },
        {
          name: "build",
          description: "Builds the app, including extensions",
          options: [
            {
              name: "--api-key",
              description:
                "Specify the client ID to use when building the app. This client ID is set as an environment variable, which is used by App Bridge",
            },
            {
              name: "--path",
              description: "The path to your app directory",
              args: {
                name: "path",
                template: ["folders"],
              },
            },
            {
              name: "--skip-dependencies-installation",
              description:
                "Skip checking and installing missing dependencies for your app",
            },
          ],
        },
        {
          name: "env",
          description: "List of environment commands for your app",
          requiresSubcommand: true,
          subcommands: [
            {
              name: "pull",
              description:
                "Creates or updates an .env files that contains app and app extension environment variables",
              options: [
                {
                  name: "--env-file",
                  description:
                    "Specify the file where environment variables are saved. If the file doesn't exist, then it will be created",
                },
                {
                  name: "--path",
                  description: "The path to your app directory",
                  args: {
                    name: "path",
                    template: ["folders"],
                  },
                },
              ],
            },
            {
              name: "show",
              description:
                "Displays environment variables that can be used to deploy apps and app extensions",
              options: [
                {
                  name: "--path",
                  description: "The path to your app directory",
                  args: {
                    name: "path",
                    template: ["folders"],
                  },
                },
              ],
            },
          ],
        },
        {
          name: "update-url",
          description:
            "Updates the app URL and allowed redirection URLs for your app. When you specify URLs using this command, the current URLs are overwritten",
          options: [
            {
              name: "--path",
              description: "The path to your app directory",
              args: {
                name: "path",
                template: ["folders"],
              },
            },
            {
              name: "--redirect-urls",
              description:
                "A comma-separated list of the new allowed redirection URL or URLs for the app",
            },
            {
              name: "--app-url",
              description: "The new app URL for the app",
            },
            {
              name: "--api-key",
              description:
                "The Client ID of your app. Use this flag to specify the app that you want to update",
            },
          ],
        },
      ],
    },
    {
      name: "auth",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "logout",
          description:
            "Logs you out of the Shopify account or Partner account and store",
        },
      ],
    },
    {
      name: "config",
      description:
        "Enables or disables command autocorrection. By default, autocorrect is off",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "on",
          description: "Enable autocorrect",
        },
        {
          name: "off",
          description: "Disable autocorrect",
        },
        {
          name: "status",
          description: "Check whether autocorrect is enabled or disabled",
        },
      ],
    },
    {
      name: "ngrok",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "auth",
          description: "Saves a token to authenticate against ngrok",
          args: {
            name: "TOKEN",
            description: "Your auth token for ngrok",
          },
        },
      ],
    },
    {
      name: "webhook",
      requiresSubcommand: true,
      subcommands: [
        {
          name: "trigger",
          description:
            "Triggers the delivery of a sample Admin API event topic payload to a designated address",
          options: [
            {
              name: "--topic",
              description:
                "The requested event topic. You can pass the webhook topic using the GraphQL enum value or the webhook topic name",
              args: {
                name: "topic",
              },
            },
            {
              name: "--api-version",
              description:
                "API version of the event topic, in the format YYYY-MM or unstable",
              args: {
                name: "version",
              },
            },
            {
              name: "--shared-secret",
              description:
                "Your app's client secret. This secret is used to generate and return a X-Shopify-Hmac-SHA256 header, which lets you validate the origin of the response that you receive",
              args: {
                name: "secret",
              },
            },
            {
              name: "--delivery-method",
              description: "The method chosen to deliver the topic payload",
              args: {
                name: "option",
                suggestions: ["http", "google-pub-sub", "event-bridge"],
              },
            },
            {
              name: "--address",
              description: "The URL where the webhook payload should be sent",
              args: {
                name: "address",
              },
            },
          ],
        },
      ],
    },
    {
      name: "version",
      priority: 30,
      icon: "fig://icon?type=option",
      description: "Displays the version of Shopify CLI that you're running",
    },
    {
      name: "upgrade",
      icon: "fig://icon?type=option",
      description:
        "Upgrades the @shopify/cli and @shopify/app packages to their latest versions",
    },
  ],
};

const versions: Fig.VersionDiffMap = {};

versions["3.0.0"] = {};

export { versions };
export default completion;
