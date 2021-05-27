export const completionSpec: Fig.Spec = {
  name: "zapier-platform-cli",
  description:
    "The Zapier CLI is a developer-focused way to create and maintain Zapier integrations. See more at https://github.com/zapier/zapier-platform.",
  subcommands: [
    {
      name: "analytics",
      description:
        "Show the status of the analytics that are collected. Also used to change what is collected.",
      options: [
        {
          name: ["-m", "--mode"],
          description:
            "Choose how much information to share. Anonymous mode drops the OS type and Zapier user id, but keeps command info. Identifying information is used only for debugging purposes.",
          args: {
            name: "mode",
            isOptional: false,
            suggestions: ["enabled", "anonymous", "disabled"],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "build",
      description: "Build a pushable zip from the current directory.",
      options: [
        {
          name: "--disable-dependency-detection",
          description:
            'Disable "smart" file inclusion. By default, Zapier only includes files that are required by `index.js`. If you (or your dependencies) require files dynamically (such as with `require(someVar)`), then you may see "Cannot find module" errors. Disabling this may make your `build.zip` too large. If that\'s the case, try using the `includeInBuild` option in your `.zapierapprc`. See the docs about `includeInBuild` for more info.',
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "convert",
      description:
        "Convert a Legacy Web Builder app or Visual Builder integration to a CLI integration.",
      options: [
        {
          name: ["-v", "--version"],
          description:
            "Convert a specific version. Required when converting a Visual Builder integration.",
          args: {
            name: "version",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "integrationId",
          description:
            'To get the integration/app ID, go to "https://zapier.com/app/developer", click on an integration, and copy the number directly after "/app/" in the URL.',
          isOptional: false,
        },
        {
          name: "path",
          description:
            "Relative to your current path - IE: `.` for current directory.",
          isOptional: false,
        },
      ],
    },
    {
      name: ["delete:integration", "delete:app"],
      description: "Delete your integration (including all versions).",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "delete:version",
      description: "Delete a specific version of your integration.",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "version",
          description:
            "Specify the version to delete. It must have no users or Zaps.",
          isOptional: false,
        },
      ],
    },
    {
      name: "deprecate",
      description:
        "Mark a non-production version of your integration as deprecated, with removal by a certain date.",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "version",
          description: "The version to deprecate.",
          isOptional: false,
        },
        {
          name: "date",
          description:
            "The date (YYYY-MM-DD) when Zapier will make the specified version unavailable.",
          isOptional: false,
        },
      ],
    },
    {
      name: "describe",
      description: "Describe the current integraiton.",
      options: [
        {
          name: ["-f", "--format"],
          description:
            'Change the way structured data is presented. If "json" or "raw", you can pipe the output of the command into other tools, such as jq.',
          args: {
            name: "format",
            isOptional: false,
            suggestions: ["plain", "json", "raw", "row", "table"],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "env:get",
      description: "Get environment variables for a version.",
      options: [
        {
          name: ["-f", "--format"],
          description:
            'Change the way structured data is presented. If "json" or "raw", you can pipe the output of the command into other tools, such as jq.',
          args: {
            name: "format",
            isOptional: false,
            suggestions: ["plain", "json", "raw", "row", "table"],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "version",
          description: "The version to get the environment for.",
          isOptional: false,
        },
      ],
    },
    {
      name: "env:set",
      description: "Set environment variables for a version.",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "version",
          description:
            "The version to set the environment for. Values are copied forward when a new version is created, but this command will only ever affect the specified version.",
          isOptional: false,
        },
        {
          name: "key-value pairs...",
          description:
            "The key-value pairs to set. Keys are case-insensitive. Each pair should be space separated and pairs should be separated by an `=`. For example: `A=123 B=456`",
          isOptional: true,
        },
      ],
    },
    {
      name: "env:unset",
      description: "Unset environment variables for a version.",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "version",
          description: "The version to set the environment for.",
          isOptional: false,
        },
        {
          name: "keys...",
          description: "The keys to unset. Keys are case-insensitive.",
          isOptional: true,
        },
      ],
    },
    {
      name: "history",
      description: "Get the history of your integration.",
      options: [
        {
          name: ["-f", "--format"],
          description:
            'Change the way structured data is presented. If "json" or "raw", you can pipe the output of the command into other tools, such as jq.',
          args: {
            name: "format",
            isOptional: false,
            suggestions: ["plain", "json", "raw", "row", "table"],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "init",
      description:
        "Initialize a new Zapier integration with a project template.",
      options: [
        {
          name: ["-t", "--template"],
          description: "The template to start your integration with.",
          args: {
            name: "template",
            isOptional: false,
            suggestions: [
              "basic-auth",
              "callback",
              "custom-auth",
              "digest-auth",
              "dynamic-dropdown",
              "files",
              "minimal",
              "oauth1-trello",
              "oauth2",
              "search-or-create",
              "session-auth",
              "typescript",
            ],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "path",
          description:
            "Where to create the new integration. If the directory doesn't exist, it will be created. If the directory isn't empty, we'll ask for confirmation",
          isOptional: false,
        },
      ],
    },
    {
      name: ["integrations", "apps"],
      description: "List integrations you have admin access to.",
      options: [
        {
          name: ["-f", "--format"],
          description:
            'Change the way structured data is presented. If "json" or "raw", you can pipe the output of the command into other tools, such as jq.',
          args: {
            name: "format",
            isOptional: false,
            suggestions: ["plain", "json", "raw", "row", "table"],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "link",
      description: "Link the current directory with an existing integration.",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "login",
      description: "Configure your `~/.zapierrc` with a deploy key.",
      options: [
        {
          name: ["-s", "--sso"],
          description:
            "Use this flag if you log into Zapier a Single Sign-On (SSO) button and don't have a Zapier password.",
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "logout",
      description: "Deactivate your active deploy key and reset `~/.zapierrc`.",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "logs",
      description: "Print recent logs.",
      options: [
        {
          name: ["-v", "--version"],
          description: "Filter logs to the specified version.",
          args: {
            name: "version",
            isOptional: false,
          },
        },
        {
          name: ["-s", "--status"],
          description: "Filter logs to only see errors or successes",
          args: {
            name: "status",
            isOptional: false,
            suggestions: ["any", "success", "error"],
          },
        },
        {
          name: ["-t", "--type"],
          description: "See logs of the specified type",
          args: {
            name: "type",
            isOptional: false,
            suggestions: ["console", "bundle", "http"],
          },
        },
        {
          name: "--detailed",
          description:
            "See extra info, like request/response body and headers.",
        },
        {
          name: ["-u", "--user"],
          description:
            "Only show logs for this user. Defaults to your account.",
          args: {
            name: "user",
            isOptional: false,
          },
        },
        {
          name: "--limit",
          description:
            "Cap the number of logs returned. Max is 50 (also the default)",
          args: {
            name: "limit",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--format"],
          description:
            'Change the way structured data is presented. If "json" or "raw", you can pipe the output of the command into other tools, such as jq.',
          args: {
            name: "format",
            isOptional: false,
            suggestions: ["plain", "json", "raw", "row", "table"],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "migrate",
      description:
        "Migrate users from one version of your integration to another.",
      options: [
        {
          name: "--user",
          description: "Migrate only this user",
          args: {
            name: "user",
            isOptional: false,
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "fromVersion",
          description: "The version FROM which to migrate users.",
          isOptional: false,
        },
        {
          name: "toVersion",
          description: "The version TO which to migrate users.",
          isOptional: false,
        },
        {
          name: "percent",
          description: "Percentage (between 1 and 100) of users to migrate.",
          isOptional: true,
        },
      ],
    },
    {
      name: "promote",
      description: "Promote a specific version to public access.",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "version",
          description: "The version you want promote.",
          isOptional: false,
        },
      ],
    },
    {
      name: "push",
      description: "Build and upload the current integration.",
      options: [
        {
          name: "--disable-dependency-detection",
          description:
            'Disable "smart" file inclusion. By default, Zapier only includes files that are required by `index.js`. If you (or your dependencies) require files dynamically (such as with `require(someVar)`), then you may see "Cannot find module" errors. Disabling this may make your `build.zip` too large. If that\'s the case, try using the `includeInBuild` option in your `.zapierapprc`. See the docs about `includeInBuild` for more info.',
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "register",
      description: "Register a new integration in your account.",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "title",
          description:
            "Your integrations's public title. Asked interactively if not present.",
          isOptional: true,
        },
      ],
    },
    {
      name: "scaffold",
      description:
        "Add a starting trigger, create, search, or resource to your integration.",
      options: [
        {
          name: ["-d", "--dest"],
          description:
            "Specify the new file's directory. Use this flag when you want to create a different folder structure such as `src/triggers` instead of the default `triggers`. Defaults to `[triggers|searches|creates]/{noun}`.",
          args: {
            name: "dest",
            isOptional: false,
          },
        },
        {
          name: "--test-dest",
          description:
            "Specify the new test file's directory. Use this flag when you want to create a different folder structure such as `src/triggers` instead of the default `triggers`. Defaults to `test/[triggers|searches|creates]/{noun}`.",
          args: {
            name: "test-dest",
            isOptional: false,
          },
        },
        {
          name: ["-e", "--entry"],
          description:
            "Supply the path to your integration's root (`index.js`). Only needed if your `index.js` is in a subfolder, like `src`.",
          args: {
            name: "entry",
            isOptional: false,
          },
        },
        {
          name: ["-f", "--force"],
          description:
            "Should we overwrite an exisiting trigger/search/create file?",
        },
        {
          name: "--no-help",
          description:
            "When scaffolding, should we skip adding helpful intro comments? Useful if this isn't your first rodeo.",
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "actionType",
          suggestions: ["trigger", "search", "create", "resource"],
          isOptional: false,
        },
        {
          name: "noun",
          isOptional: false,
        },
      ],
    },
    {
      name: ["team:add", "team:invite"],
      description: "Add a team member to your integration.",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "email",
          description:
            "The user to be invited. If they don't have a Zapier account, they'll be prompted to create one.",
          isOptional: false,
        },
        {
          name: "role",
          description:
            "The level the invited team member should be at. Admins can edit everything and get email updates. Subscribers only get email updates.",
          suggestions: ["admin", "subscriber"],
          isOptional: false,
        },
        {
          name: "message",
          description:
            "A message sent in the email to your team member, if you need to provide context. Wrap the message in quotes to ensure spaces get saved.",
          isOptional: true,
        },
      ],
    },
    {
      name: ["team:get", "team:list"],
      description: "Get team members involved with your integration.",
      options: [
        {
          name: ["-f", "--format"],
          description:
            'Change the way structured data is presented. If "json" or "raw", you can pipe the output of the command into other tools, such as jq.',
          args: {
            name: "format",
            isOptional: false,
            suggestions: ["plain", "json", "raw", "row", "table"],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: ["team:remove", "team:delete"],
      description:
        "Remove a team member from all versions of your integration.",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "test",
      description:
        'Test your integration via the "test" script in your "package.json".',
      options: [
        {
          name: "--skip-validate",
          description:
            "Forgo running `zapier validate` before tests are run. This will speed up tests if you're modifying functionality of an existing integration rather than adding new actions.",
        },
        {
          name: "--yarn",
          description:
            "Use `yarn` instead of `npm`. This happens automatically if there's a `yarn.lock` file, but you can manually force `yarn` if you run tests from a sub-directory.",
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "upload",
      description: "Upload the latest build of your integration to Zapier.",
      options: [
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: ["users:add", "users:invite"],
      description: "Add a user to some or all versions of your integration.",
      options: [
        {
          name: ["-f", "--force"],
          description: "Skip confirmation. Useful for running programatically.",
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "email",
          description:
            "The user to be invited. If they don't have a Zapier account, they'll be prompted to create one.",
          isOptional: false,
        },
        {
          name: "version",
          description:
            "A version string (like 1.2.3). Optional, used only if you want to invite a user to a specific version instead of all versions.",
          isOptional: true,
        },
      ],
    },
    {
      name: ["users:get", "users:list"],
      description:
        "Get a list of users who have been invited to your integration.",
      options: [
        {
          name: ["-f", "--format"],
          description:
            'Change the way structured data is presented. If "json" or "raw", you can pipe the output of the command into other tools, such as jq.',
          args: {
            name: "format",
            isOptional: false,
            suggestions: ["plain", "json", "raw", "row", "table"],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "users:links",
      description:
        "Get a list of links that are used to invite users to your integration.",
      options: [
        {
          name: ["-f", "--format"],
          description:
            'Change the way structured data is presented. If "json" or "raw", you can pipe the output of the command into other tools, such as jq.',
          args: {
            name: "format",
            isOptional: false,
            suggestions: ["plain", "json", "raw", "row", "table"],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: ["users:remove", "users:delete"],
      description: "Remove a user from all versions of your integration.",
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Skips confirmation. Useful for running programatically.",
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
      args: [
        {
          name: "email",
          description: "The user to be removed.",
          isOptional: false,
        },
      ],
    },
    {
      name: "validate",
      description: "Validate your integration.",
      options: [
        {
          name: "--without-style",
          description: "Forgo pinging the Zapier server to run further checks.",
        },
        {
          name: ["-f", "--format"],
          description:
            'Change the way structured data is presented. If "json" or "raw", you can pipe the output of the command into other tools, such as jq.',
          args: {
            name: "format",
            isOptional: false,
            suggestions: ["plain", "json", "raw", "row", "table"],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "versions",
      description:
        "List the versions of your integration available for use in the Zapier editor.",
      options: [
        {
          name: ["-f", "--format"],
          description:
            'Change the way structured data is presented. If "json" or "raw", you can pipe the output of the command into other tools, such as jq.',
          args: {
            name: "format",
            isOptional: false,
            suggestions: ["plain", "json", "raw", "row", "table"],
          },
        },
        {
          name: ["-d", "--debug"],
          description: "Show extra debugging output.",
        },
      ],
    },
    {
      name: "fig-completion",
      description: "\u001b[0mGenerate a Fig completion spec\u001b[0m",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-o", "--output"],
          description:
            "filepath to export completion spec (do not specify file extension)",
          args: {
            name: "output",
            isOptional: false,
          },
        },
        {
          name: ["-l", "--lang"],
          description: "",
          args: {
            name: "lang",
            isOptional: false,
            suggestions: [" ts", "js"],
          },
        },
      ],
      args: [
        {
          name: "file",
          isOptional: true,
        },
      ],
    },
    {
      name: "help",
      description: "display help for <%= config.bin %>",
      options: [
        {
          name: "--all",
          description: "see all commands in CLI",
        },
      ],
      args: [
        {
          name: "command",
          description: "command to show help for",
          isOptional: true,
        },
      ],
    },
    {
      name: "plugins",
      description: "list installed plugins",
      options: [
        {
          name: "--core",
          description: "show core plugins",
        },
      ],
    },
    {
      name: "plugins:inspect",
      description: "displays installation properties of a plugin",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: [
        {
          name: "plugin",
          description: "plugin to inspect",
          isOptional: false,
        },
      ],
    },
    {
      name: ["plugins:install", "plugins:add"],
      description: "installs a plugin into the CLI",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
        {
          name: ["-f", "--force"],
          description: "yarn install with force flag",
        },
      ],
      args: [
        {
          name: "plugin",
          description: "plugin to install",
          isOptional: false,
        },
      ],
    },
    {
      name: "plugins:link",
      description: "links a plugin into the CLI for development",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: [
        {
          name: "path",
          description: "path to plugin",
          isOptional: false,
        },
      ],
    },
    {
      name: ["plugins:uninstall", "plugins:unlink", "plugins:remove"],
      description: "removes a plugin from the CLI",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
      args: [
        {
          name: "plugin",
          description: "plugin to uninstall",
          isOptional: true,
        },
      ],
    },
    {
      name: "plugins:update",
      description: "update installed plugins",
      options: [
        {
          name: ["-h", "--help"],
          description: "show CLI help",
        },
        {
          name: ["-v", "--verbose"],
          description: "",
        },
      ],
    },
    {
      name: "autocomplete",
      description: "display autocomplete installation instructions",
      options: [
        {
          name: ["-r", "--refresh-cache"],
          description: "Refresh cache (ignores displaying instructions)",
        },
      ],
      args: [
        {
          name: "shell",
          description: "shell type",
          isOptional: true,
        },
      ],
    },
  ],
};
