const formatFlag: Fig.Option = {
  name: ["-f", "--format"],
  description:
    'Change the way structured data is presented. If "json" or "raw", you can pipe the output of the command into other tools, such as jq',
  args: {
    name: "format",
    suggestions: ["plain", "json", "raw", "row", "table"],
  },
};
const debugFlag: Fig.Option = {
  name: ["-d", "--debug"],
  description: "Show extra debugging output",
};

const completionSpec: Fig.Spec = {
  name: "zapier-platform-cli",
  description:
    "The Zapier CLI is a developer-focused way to create and maintain Zapier integrations. See more at https://github.com/zapier/zapier-platform",
  subcommands: [
    {
      name: "analytics",
      description:
        "Show the status of the analytics that are collected. Also used to change what is collected",
      options: [
        {
          name: ["-m", "--mode"],
          description:
            "Choose how much information to share. Anonymous mode drops the OS type and Zapier user id, but keeps command info. Identifying information is used only for debugging purposes",
          args: {
            name: "mode",
            suggestions: ["enabled", "anonymous", "disabled"],
          },
        },
        debugFlag,
      ],
    },
    {
      name: "build",
      description: "Build a pushable zip from the current directory",
      options: [
        {
          name: "--disable-dependency-detection",
          description:
            'Disable "smart" file inclusion. By default, Zapier only includes files that are required by `index.js`. If you (or your dependencies) require files dynamically (such as with `require(someVar)`), then you may see "Cannot find module" errors. Disabling this may make your `build.zip` too large. If that\'s the case, try using the `includeInBuild` option in your `.zapierapprc`. See the docs about `includeInBuild` for more info',
        },
        debugFlag,
      ],
    },
    {
      name: "convert",
      description:
        "Convert a Legacy Web Builder app or Visual Builder integration to a CLI integration",
      options: [
        {
          name: ["-v", "--version"],
          description:
            "Convert a specific version. Required when converting a Visual Builder integration",
          args: {
            name: "version",
          },
        },
        debugFlag,
      ],
      args: [
        {
          name: "integrationId",
          description:
            'To get the integration/app ID, go to "https://zapier.com/app/developer", click on an integration, and copy the number directly after "/app/" in the URL',
        },
        {
          name: "path",
          description:
            "Relative to your current path - IE: `.` for current directory",
          template: "folders",
        },
      ],
    },
    {
      name: ["delete:integration", "delete:app"],
      description: "Delete your integration (including all versions)",
      options: [debugFlag],
      isDangerous: true,
    },
    {
      name: "delete:version",
      description: "Delete a specific version of your integration",
      options: [debugFlag],
      args: {
        name: "version",
        description:
          "Specify the version to delete. It must have no users or Zaps",
      },
      isDangerous: true,
    },
    {
      name: "deprecate",
      description:
        "Mark a non-production version of your integration as deprecated, with removal by a certain date",
      options: [debugFlag],
      args: [
        {
          name: "version",
          description: "The version to deprecate",
        },
        {
          name: "date",
          description:
            "The date (YYYY-MM-DD) when Zapier will make the specified version unavailable",
        },
      ],
    },
    {
      name: "describe",
      description: "Describe the current integraiton",
      options: [formatFlag, debugFlag],
    },
    {
      name: "env:get",
      description: "Get environment variables for a version",
      options: [formatFlag],
      args: {
        name: "version",
        description: "The version to get the environment for",
      },
    },
    {
      name: "env:set",
      description: "Set environment variables for a version",
      options: [debugFlag],
      args: [
        {
          name: "version",
          description:
            "The version to set the environment for. Values are copied forward when a new version is created, but this command will only ever affect the specified version",
        },
        {
          name: "key-value pairs...",
          description:
            "The key-value pairs to set. Keys are case-insensitive. Each pair should be space separated and pairs should be separated by an `=`. For example: `A=123 B=456`",
          isOptional: true,
          isVariadic: true,
        },
      ],
    },
    {
      name: "env:unset",
      description: "Unset environment variables for a version",
      options: [debugFlag],
      args: [
        {
          name: "version",
          description: "The version to set the environment for",
        },
        {
          name: "keys...",
          description: "The keys to unset. Keys are case-insensitive",
          isOptional: true,
          isVariadic: true,
        },
      ],
      isDangerous: true,
    },
    {
      name: "history",
      description: "Get the history of your integration",
      options: [formatFlag, debugFlag],
    },
    {
      name: "init",
      description:
        "Initialize a new Zapier integration with a project template",
      options: [
        {
          name: ["-t", "--template"],
          description: "The template to start your integration with",
          args: {
            name: "template",
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
        debugFlag,
      ],
      args: {
        name: "path",
        description:
          "Where to create the new integration. If the directory doesn't exist, it will be created. If the directory isn't empty, we'll ask for confirmation",
        template: "folders",
      },
    },
    {
      name: ["integrations", "apps"],
      description: "List integrations you have admin access to",
      options: [formatFlag, debugFlag],
    },
    {
      name: "link",
      description: "Link the current directory with an existing integration",
      options: [debugFlag],
    },
    {
      name: "login",
      description: "Configure your `~/.zapierrc` with a deploy key",
      options: [
        {
          name: ["-s", "--sso"],
          description:
            "Use this flag if you log into Zapier a Single Sign-On (SSO) button and don't have a Zapier password",
        },
        debugFlag,
      ],
    },
    {
      name: "logout",
      description: "Deactivate your active deploy key and reset `~/.zapierrc`",
      options: [debugFlag],
    },
    {
      name: "logs",
      description: "Print recent logs",
      options: [
        {
          name: ["-v", "--version"],
          description: "Filter logs to the specified version",
          args: {
            name: "version",
          },
        },
        {
          name: ["-s", "--status"],
          description: "Filter logs to only see errors or successes",
          args: {
            name: "status",
            suggestions: ["any", "success", "error"],
          },
        },
        {
          name: ["-t", "--type"],
          description: "See logs of the specified type",
          args: {
            name: "type",
            suggestions: ["console", "bundle", "http"],
          },
        },
        {
          name: "--detailed",
          description: "See extra info, like request/response body and headers",
        },
        {
          name: ["-u", "--user"],
          description: "Only show logs for this user. Defaults to your account",
          args: {
            name: "user",
          },
        },
        {
          name: "--limit",
          description:
            "Cap the number of logs returned. Max is 50 (also the default)",
          args: {
            name: "limit",
          },
        },
        formatFlag,
        debugFlag,
      ],
    },
    {
      name: "migrate",
      description:
        "Migrate users from one version of your integration to another",
      options: [
        {
          name: "--user",
          description: "Migrate only this user",
          args: {
            name: "user",
          },
        },
        debugFlag,
      ],
      args: [
        {
          name: "fromVersion",
          description: "The version FROM which to migrate users",
        },
        {
          name: "toVersion",
          description: "The version TO which to migrate users",
        },
        {
          name: "percent",
          description: "Percentage (between 1 and 100) of users to migrate",
          isOptional: true,
        },
      ],
    },
    {
      name: "promote",
      description: "Promote a specific version to public access",
      options: [debugFlag],
      args: {
        name: "version",
        description: "The version you want promote",
      },
    },
    {
      name: "push",
      description: "Build and upload the current integration",
      options: [
        {
          name: "--disable-dependency-detection",
          description:
            'Disable "smart" file inclusion. By default, Zapier only includes files that are required by `index.js`. If you (or your dependencies) require files dynamically (such as with `require(someVar)`), then you may see "Cannot find module" errors. Disabling this may make your `build.zip` too large. If that\'s the case, try using the `includeInBuild` option in your `.zapierapprc`. See the docs about `includeInBuild` for more info',
        },
        debugFlag,
      ],
    },
    {
      name: "register",
      description: "Register a new integration in your account",
      options: [debugFlag],
      args: {
        name: "title",
        description:
          "Your integrations's public title. Asked interactively if not present",
        isOptional: true,
      },
    },
    {
      name: "scaffold",
      description:
        "Add a starting trigger, create, search, or resource to your integration",
      options: [
        {
          name: ["-d", "--dest"],
          description:
            "Specify the new file's directory. Use this flag when you want to create a different folder structure such as `src/triggers` instead of the default `triggers`. Defaults to `[triggers|searches|creates]/{noun}`",
          args: {
            name: "dest",
            template: "folders",
          },
        },
        {
          name: "--test-dest",
          description:
            "Specify the new test file's directory. Use this flag when you want to create a different folder structure such as `src/triggers` instead of the default `triggers`. Defaults to `test/[triggers|searches|creates]/{noun}`",
          args: {
            name: "test-dest",
            template: "folders",
          },
        },
        {
          name: ["-e", "--entry"],
          description:
            "Supply the path to your integration's root (`index.js`). Only needed if your `index.js` is in a subfolder, like `src`",
          args: {
            name: "entry",
            template: "filepaths",
          },
        },
        {
          name: ["-f", "--force"],
          description:
            "Should we overwrite an existing trigger/search/create file?",
        },
        {
          name: "--no-help",
          description:
            "When scaffolding, should we skip adding helpful intro comments? Useful if this isn't your first rodeo",
        },
        debugFlag,
      ],
      args: [
        {
          name: "actionType",
          suggestions: ["trigger", "search", "create", "resource"],
        },
        {
          name: "noun",
        },
      ],
    },
    {
      name: ["team:add", "team:invite"],
      description: "Add a team member to your integration",
      options: [debugFlag],
      args: [
        {
          name: "email",
          description:
            "The user to be invited. If they don't have a Zapier account, they'll be prompted to create one",
        },
        {
          name: "role",
          description:
            "The level the invited team member should be at. Admins can edit everything and get email updates. Subscribers only get email updates",
          suggestions: ["admin", "subscriber"],
        },
        {
          name: "message",
          description:
            "A message sent in the email to your team member, if you need to provide context. Wrap the message in quotes to ensure spaces get saved",
          isOptional: true,
        },
      ],
      isDangerous: true,
    },
    {
      name: ["team:get", "team:list"],
      description: "Get team members involved with your integration",
      options: [formatFlag, debugFlag],
    },
    {
      name: ["team:remove", "team:delete"],
      description: "Remove a team member from all versions of your integration",
      options: [debugFlag],
      isDangerous: true,
    },
    {
      name: "test",
      description:
        'Test your integration via the "test" script in your "package.json"',
      options: [
        {
          name: "--skip-validate",
          description:
            "Forgo running `zapier validate` before tests are run. This will speed up tests if you're modifying functionality of an existing integration rather than adding new actions",
        },
        {
          name: "--yarn",
          description:
            "Use `yarn` instead of `npm`. This happens automatically if there's a `yarn.lock` file, but you can manually force `yarn` if you run tests from a sub-directory",
        },
        debugFlag,
      ],
    },
    {
      name: "upload",
      description: "Upload the latest build of your integration to Zapier",
      options: [debugFlag],
    },
    {
      name: ["users:add", "users:invite"],
      description: "Add a user to some or all versions of your integration",
      options: [
        {
          name: ["-f", "--force"],
          description: "Skip confirmation. Useful for running programmatically",
          isDangerous: true,
        },
        debugFlag,
      ],
      args: [
        {
          name: "email",
          description:
            "The user to be invited. If they don't have a Zapier account, they'll be prompted to create one",
        },
        {
          name: "version",
          description:
            "A version string (like 1.2.3). Optional, used only if you want to invite a user to a specific version instead of all versions",
          isOptional: true,
        },
      ],
    },
    {
      name: ["users:get", "users:list"],
      description:
        "Get a list of users who have been invited to your integration",
      options: [formatFlag, debugFlag],
    },
    {
      name: "users:links",
      description:
        "Get a list of links that are used to invite users to your integration",
      options: [formatFlag, debugFlag],
    },
    {
      name: ["users:remove", "users:delete"],
      description: "Remove a user from all versions of your integration",
      options: [
        {
          name: ["-f", "--force"],
          description:
            "Skips confirmation. Useful for running programmatically",
          isDangerous: true,
        },
        debugFlag,
      ],
      args: {
        name: "email",
        description: "The user to be removed",
      },
      isDangerous: true,
    },
    {
      name: "validate",
      description: "Validate your integration",
      options: [
        {
          name: "--without-style",
          description: "Forgo pinging the Zapier server to run further checks",
        },
        formatFlag,
        debugFlag,
      ],
    },
    {
      name: "versions",
      description:
        "List the versions of your integration available for use in the Zapier editor",
      options: [formatFlag, debugFlag],
    },
    {
      name: "help",
      description: "Display help for <%= config.bin %>",
      options: [
        {
          name: "--all",
          description: "See all commands in CLI",
        },
      ],
      args: {
        name: "command",
        description: "Command to show help for",
        isOptional: true,
      },
    },
  ],
};

export default completionSpec;
