const generateRange = (start: number, end: number): Array<string> => {
  return Array.from(
    { length: end - start + 1 },
    (element, index) => `${index + start}`
  );
};

const completionSpec: Fig.Spec = {
  name: "eas",
  description:
    "EAS CLI is the command-line app that you will use to interact with EAS services from your terminal",
  subcommands: [
    {
      name: ["account:login", "login"],
      description: "Log in with your Expo account",
    },
    {
      name: ["account:logout", "logout"],
      description: "Log out",
    },
    {
      name: ["account:view", "whoami"],
      description: "Show the username you are logged in as",
    },
    {
      name: "analytics",
      description: "Display or change analytics settings",
      args: {
        name: "Status",
        isOptional: true,
        suggestions: ["on", "off"],
      },
    },
    {
      name: "autocomplete",
      description: "Display autocomplete installation instructions",
      options: [
        {
          name: ["-r", "--refresh-cache"],
          description: "Refresh cache (ignores displaying instructions)",
        },
      ],
      args: {
        name: "Shell",
        description:
          "Select the shell you'd like to display autocomplete information for",
        suggestions: ["zsh", "bash"],
      },
    },
    {
      name: "branch:create",
      description: "Create a branch",
      args: {
        name: "Name",
        description: "Name of the branch to create",
      },
      options: [
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
      ],
    },
    {
      name: "branch:delete",
      description: "Delete a branch",
      args: {
        name: "Name",
        description: "Name of the branch to delete",
      },
      options: [
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
      ],
    },
    {
      name: "branch:list",
      description: "List all branches",
      options: [
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 50 and is capped at 100",
          args: {
            name: "Limit",
            default: "50",
            suggestions: generateRange(50, 100),
          },
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--offset",
          description:
            "Start queries from specified index. Use for paginating results. Defaults to 0",
          args: {
            name: "Offset",
            default: "0",
          },
        },
      ],
    },
    {
      name: "branch:rename",
      description: "Rename a branch",
      options: [
        {
          name: "--from",
          description: "Current name of the branch",
          args: {
            name: "Value",
          },
        },
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--to",
          description: "New name of the branch",
          args: {
            name: "Value",
          },
        },
      ],
    },
    {
      name: "branch:view",
      description: "View a branch",
      args: {
        name: "Name",
        description: "Name of the branch to view",
      },
      options: [
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 25 and is capped at 50",
          args: {
            name: "Limit",
            suggestions: generateRange(25, 50),
            default: "25",
          },
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--offset",
          description:
            "Start queries from specified index. Use for paginating results. Defaults to 0",
          args: {
            name: "Offset",
            default: "0",
          },
        },
      ],
    },
    {
      name: "build",
      description: "Start a build",
      options: [
        {
          name: ["-e", "--profile"],
          description:
            'Name of the build profile from eas.json. Defaults to "production" if defined in eas.json',
          args: {
            name: "Profile Name",
          },
        },
        {
          name: ["-m", "--message"],
          description: "A short message describing the build",
          args: {
            name: "Value",
          },
        },
        {
          name: ["-p", "--platform"],
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
          },
        },
        {
          name: "--auto-submit",
          description:
            "Submit on build complete using the submit profile with the same name as the build profile",
        },
        {
          name: "--auto-submit-with-profile",
          description:
            "Submit on build complete using the submit profile with provided name",
          args: {
            name: "Profile Name",
          },
        },
        {
          name: "--clear-cache",
          description: "Clear cache before the build",
        },
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--local",
          description: "Run build locally [experimental]",
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--output",
          description: "Output path for local build",
          args: {
            name: "Value",
          },
        },
        {
          name: "--no-wait",
          description: "Don't wait for build(s) to complete",
        },
        {
          name: "--wait",
          description: "Wait for build(s) to complete",
        },
      ],
    },
    {
      name: "build:cancel",
      description: "Cancel a build",
      options: [
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
      ],
      args: {
        name: "Build ID",
      },
    },
    {
      name: "build:configure",
      description: "Configure the project to support EAS build",
      options: [
        {
          name: ["-p", "--platform"],
          description: "Platform to configure",
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
          },
        },
      ],
    },
    {
      name: "build:inspect",
      description:
        "Inspect the state of the project at specific build stages, useful for troubleshooting",
      options: [
        {
          name: ["-e", "--profile"],
          description:
            'Name of the build profile from eas.json. Defaults to "production" if defined in eas.json',
          args: {
            name: "Profile Name",
          },
        },
        {
          name: ["-o", "--output"],
          description: "(required) Output directory",
          args: {
            name: "Output directory",
          },
          isRequired: true,
        },
        {
          name: ["-p", "--platform"],
          description: "(required)",
          args: {
            name: "Platform",
            suggestions: ["android", "ios"],
          },
          isRequired: true,
        },
        {
          name: ["-s", "--stage"],
          description: `(required) Stage of the build you want to inspect.
archive - builds the project archive that would be uploaded to EAS when building
pre-build - prepares the project to be built with Gradle/Xcode. Does not run the native build.
post-build - builds the native project and leaves the output directory for inspection`,
          args: {
            name: "Build Stage",
            suggestions: ["archive", "pre-build", "post-build"],
          },
          isRequired: true,
        },
        {
          name: ["-v", "--verbose"],
        },
        {
          name: "--force",
          description: "Delete OUTPUT_DIRECTORY if it already exists",
        },
      ],
    },
    {
      name: "build:list",
      description: "List all builds for your project",
      options: [
        {
          name: "--appBuildVersion",
          args: {
            name: "Value",
          },
        },
        {
          name: "--appIdentifier",
          args: {
            name: "Value",
          },
        },
        {
          name: "--appVersion",
          args: {
            name: "Value",
          },
        },
        {
          name: "--buildProfile",
          args: {
            name: "Value",
          },
        },
        {
          name: "--channel",
          args: {
            name: "Value",
          },
        },
        {
          name: "--distribution",
          args: {
            name: "Distribution",
            suggestions: ["store", "internal", "simulator"],
          },
        },
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 10 and is capped at 50",
          args: {
            name: "Limit",
            default: "10",
            suggestions: generateRange(10, 50),
          },
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--offset",
          description:
            "Start queries from specified index. Use for paginating results. Defaults to 0",
          args: {
            name: "Offset",
            default: "0",
          },
        },
        {
          name: "--platform",
          args: {
            name: "Platform",
            suggestions: ["all", "android", "ios"],
          },
        },
        {
          name: "--runtimeVersion",
          args: {
            name: "Value",
          },
        },
        {
          name: "--sdkVersion",
          args: {
            name: "Value",
          },
        },
        {
          name: "--status",
          args: {
            name: "Status",
            suggestions: [
              "new",
              "in-queue",
              "in-progress",
              "errored",
              "finished",
              "canceled",
            ],
          },
        },
      ],
    },
    {
      name: ["build:submit", "submit"],
      description: "Submit app binary to App Store and/or Play Store",
      options: [
        {
          name: ["-e", "--profile"],
          description:
            'Name of the submit profile from eas.json. Defaults to "production" if defined in eas.json',
          args: {
            name: "Value",
          },
        },
        {
          name: ["-p", "--platform"],
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
          },
        },
        {
          name: "--id",
          description: "ID of the build to submit",
          args: {
            name: "Value",
          },
        },
        {
          name: "--latest",
          description: "Submit the latest build for specified platform",
        },
        {
          name: "--non-interactive",
          description: "Run command in non-interactive mode",
        },
        {
          name: "--path",
          description: "Path to the .apk/.aab/.ipa file",
          args: {
            name: "Value",
          },
        },
        {
          name: "--url",
          description: "App archive url",
          args: {
            name: "Value",
          },
        },
        {
          name: "--verbose",
          description: "Always print logs from Submission Service",
        },
        {
          name: "--no-wait",
          description: "Don't wait for submission to complete",
        },
        {
          name: "--wait",
          description: "Wait for submission to complete",
        },
      ],
    },
    {
      name: "build:version:set",
      description: "Update version of an app",
      options: [
        {
          name: ["-e", "--profile"],
          description:
            'Name of the build profile from eas.json. Defaults to "production" if defined in eas.json',
          args: {
            name: "Profile Name",
          },
        },
        {
          name: ["-p", "--platform"],
          args: {
            name: "Platform",
            suggestions: ["android", "ios"],
          },
        },
      ],
    },
    {
      name: "build:version:sync",
      description:
        "Update a version in native code with a value stored on EAS servers",
      options: [
        {
          name: ["-e", "--profile"],
          description:
            'Name of the build profile from eas.json. Defaults to "production" if defined in eas.json',
          args: {
            name: "Profile Name",
          },
        },
        {
          name: ["-p", "--platform"],
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
          },
        },
      ],
    },
    {
      name: "build:view",
      description: "View a build for your project",
      options: [
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
      ],
      args: {
        name: "Build ID",
      },
    },
    {
      name: "channel:create",
      description: "Create a channel",
      args: {
        name: "Name",
        description: "Name of the channel to create",
      },
      options: [
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
      ],
    },
    {
      name: "channel:edit",
      description: "Point a channel at a new branch",
      args: {
        name: "Name",
        description: "Name of the channel to edit",
      },
      options: [
        {
          name: "--branch",
          description: "Name of the branch to point to",
          args: {
            name: "Value",
          },
        },
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
      ],
    },
    {
      name: "channel:list",
      description: "List all channels",
      options: [
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 10 and is capped at 25",
          args: {
            name: "Limit",
            default: "10",
            suggestions: generateRange(10, 25),
          },
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--offset",
          description:
            "Start queries from specified index. Use for paginating results. Defaults to 0",
          args: {
            name: "Value",
          },
        },
      ],
    },
    {
      name: "channel:view",
      description: "View a channel",
      args: {
        name: "Name",
        description: "Name of the channel to view",
      },
      options: [
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 50 and is capped at 100",
          args: {
            name: "Limit",
            default: "50",
            suggestions: generateRange(50, 100),
          },
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--offset",
          description:
            "Start queries from specified index. Use for paginating results. Defaults to 0",
          args: {
            name: "Value",
            default: "0",
          },
        },
      ],
    },
    {
      name: "config",
      description: "Display project configuration (app.json + eas.json)",
      options: [
        {
          name: ["-e", "--profile"],
          description:
            'Name of the build profile from eas.json. Defaults to "production" if defined in eas.json',
          args: {
            name: "Profile Name",
          },
        },
        {
          name: ["-p", "--platform"],
          args: {
            name: "Platform",
            suggestions: ["android", "ios"],
          },
        },
      ],
    },
    {
      name: "credentials",
      description: "Manage credentials",
      options: [
        {
          name: ["-p", "--platform"],
          args: {
            name: "Platform",
            suggestions: ["android", "ios"],
          },
        },
      ],
    },
    {
      name: "device:create",
      description:
        "Register new Apple devices to use for internal distribution",
    },
    {
      name: "device:delete",
      description: "Remove a registered device from your account",
      options: [
        {
          name: "--apple-team-id",
          description: "The Apple team ID on which to find the device",
          args: {
            name: "Value",
          },
        },
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--udid",
          description: "The Apple device ID to disable",
          args: {
            name: "Value",
          },
        },
      ],
    },
    {
      name: "device:list",
      description: "List all registered devices for your account",
      options: [
        {
          name: "--apple-team-id",
          args: {
            name: "Value",
          },
        },
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 50 and is capped at 100",
          args: {
            name: "Limit",
            suggestions: generateRange(50, 100),
            default: "50",
          },
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--offset",
          description:
            "Start queries from specified index. Use for paginating results. Defaults to 0",
          args: {
            name: "Offset",
            default: "0",
          },
        },
      ],
    },
    {
      name: "device:view",
      description: "View a device for your project",
      args: {
        name: "UDID",
      },
    },
    {
      name: "diagnostics",
      description: "Display environment info",
    },
    {
      name: "help",
      description: "Display help for eas-cli",
      args: {
        name: "Command",
        description: "Command to show help for",
      },
      options: [
        {
          name: ["-n", "--nested-commands"],
          description: "Include all nested commands in the output",
        },
      ],
    },
    {
      name: "metadata:pull",
      description: "Generate the local store configuration from the app stores",
      options: [
        {
          name: ["-e", "--profile"],
          description:
            'Name of the submit profile from eas.json. Defaults to "production" if defined in eas.json',
          args: {
            name: "Value",
          },
        },
      ],
    },
    {
      name: "metadata:push",
      description: "Sync the local store configuration to the app stores",
      options: [
        {
          name: ["-e", "--profile"],
          description:
            'Name of the submit profile from eas.json. Defaults to "production" if defined in eas.json',
        },
      ],
    },
    {
      name: "open",
      description: "Open the project page in a web browser",
    },
    {
      name: "project:info",
      description: "Information about the current project",
    },
    {
      name: ["project:init", "init"],
      description: "Create or link an EAS project",
      options: [
        {
          name: "--force",
          description: "Whether to overwrite any existing project ID",
        },
        {
          name: "--id",
          description: "ID of the EAS project to link",
          args: {
            name: "Value",
          },
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
      ],
    },
    {
      name: "secret:create",
      description:
        "Create an environment secret on the current project or owner account",
      options: [
        {
          name: "--force",
          description: "Delete and recreate existing secrets",
        },
        {
          name: "--name",
          description: "Name of the secret",
          args: {
            name: "Value",
          },
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--scope",
          description: "[default: project] Scope for the secret",
          args: {
            name: "Scope",
            default: "project",
            suggestions: ["account", "project"],
          },
        },
        {
          name: "--type",
          description: "The type of secret",
          args: {
            name: "Type",
            suggestions: ["string", "file"],
          },
        },
        {
          name: "--value",
          description: "Text value or path to a file to store in the secret",
          args: {
            name: "Value",
          },
        },
      ],
    },
    {
      name: "secret:delete",
      description: "Delete an environment secret by ID",
      options: [
        {
          name: "--id",
          description: "ID of the secret to delete",
          args: {
            name: "Value",
          },
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
      ],
    },
    {
      name: "secret:list",
      description: "List environment secrets available for your current app",
    },
    {
      name: "update",
      description: "Publish an update group",
      options: [
        {
          name: ["-p", "--platform"],
          description: "[default: all]",
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
          },
        },
        {
          name: "--auto",
          description:
            "Use the current git branch and commit message for the EAS branch and update message",
        },
        {
          name: "--branch",
          description: "Branch to publish the update group on",
          args: {
            name: "Value",
          },
        },
        {
          name: "--group",
          description: "Update group to republish",
          args: {
            name: "Value",
          },
        },
        {
          name: "--input-dir",
          description: "[default: dist] Location of the bundle",
          args: {
            name: "Value",
          },
        },
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--message",
          description: "A short message describing the update",
          args: {
            name: "Value",
          },
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--private-key-path",
          description: `File containing the PEM-encoded private key corresponding to the certificate in
expo-updates' configuration. Defaults to a file named "private-key.pem" in the
certificate's directory`,
          args: {
            name: "Value",
            default: "private-key.pem",
          },
        },
        {
          name: "--republish",
          description: "Republish an update group",
        },
        {
          name: "--skip-bundler",
          description:
            "Skip running Expo CLI to bundle the app before publishing",
        },
      ],
    },
    {
      name: "update:configure",
      description: "Configure the project to support EAS update",
      options: [
        {
          name: ["-p", "--platform"],
          description: "[default: all] Platform to configure",
          args: {
            name: "Platform",
            suggestions: ["android", "ios", "all"],
            default: "all",
          },
        },
      ],
    },
    {
      name: "update:delete",
      description: "Delete all the updates in an update group",
      args: {
        name: "Group ID",
        description: "The ID of an update group to delete",
      },
      options: [
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
      ],
    },
    {
      name: "update:list",
      description: "View the recent updates",
      options: [
        {
          name: "--all",
          description: "List updates on all branches",
        },
        {
          name: "--branch",
          description: "List updates only on this branch",
          args: {
            name: "Value",
          },
        },
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
        {
          name: "--limit",
          description:
            "The number of items to fetch each query. Defaults to 25 and is capped at 50",
          args: {
            name: "Limit",
            suggestions: generateRange(25, 50),
            default: "25",
          },
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--offset",
          description:
            "Start queries from specified index. Use for paginating results. Defaults to 0",
        },
      ],
    },
    {
      name: "update:view",
      description: "Update group details",
      args: {
        name: "Group ID",
        description: "The ID of an update group",
      },
      options: [
        {
          name: "--json",
          description:
            "Enable JSON output, non-JSON messages will be printed to stderr",
        },
      ],
    },
    {
      name: "webhook:create",
      description: "Create a webhook",
      options: [
        {
          name: "--event",
          description: "Event type that triggers the webhook",
          args: {
            name: "Value",
            suggestions: ["BUILD", "SUBMIT"],
          },
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--secret",
          description:
            "Secret used to create a hash signature of the request payload, provided in the 'Expo-Signature' header",
          args: {
            name: "Value",
          },
        },
        {
          name: "--url",
          description: "Webhook URL",
          args: {
            name: "Value",
          },
        },
      ],
    },
    {
      name: "webhook:delete",
      description: "Delete a webhook",
      args: {
        name: "ID",
        description: "ID of the webhook to delete",
      },
      options: [
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
      ],
    },
    {
      name: "webhook:list",
      description: "List webhooks",
      options: [
        {
          name: "--event",
          description: "Event type that triggers the webhook",
          args: {
            name: "Value",
            suggestions: ["BUILD", "SUBMIT"],
          },
        },
      ],
    },
    {
      name: "webhook:update",
      description: "Update a webhook",
      options: [
        {
          name: "--event",
          description: "Event type that triggers the webhook",
          args: {
            name: "Value",
            suggestions: ["BUILD", "SUBMIT"],
          },
        },
        {
          name: "--id",
          description: "(required) Webhook ID",
          args: {
            name: "Value",
          },
        },
        {
          name: "--non-interactive",
          description: "Run the command in non-interactive mode",
        },
        {
          name: "--secret",
          description:
            "Secret used to create a hash signature of the request payload, provided in the 'Expo-Signature' header",
          args: {
            name: "Value",
          },
        },
        {
          name: "--url",
          description: "Webhook URL",
          args: {
            name: "Value",
          },
        },
      ],
    },
    {
      name: "webhook:view",
      description: "View a webhook",
      args: {
        name: "ID",
        description: "ID of the webhook to view",
      },
    },
  ],
};
export default completionSpec;
