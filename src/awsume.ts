const completionSpec: Fig.Spec = {
  name: "awsume",
  description: "Awsume",
  parserDirectives: {
    flagsArePosixNoncompliant: true,
  },
  options: [
    {
      name: ["--help", "-h"],
      description: "Show help for awsume",
    },
    {
      name: ["--version", "-v"],
      description: "Display the current version of awsume",
    },
    {
      name: ["--output-profile", "-o"],
      description: "A profile to output credentials to",
      args: {
        name: "output_profile",
      },
    },
    {
      name: "--clean",
      description: "Clean expired output profiles",
    },
    {
      name: ["--refresh", "-r"],
      description: "Force refresh credentials",
    },
    {
      name: ["--show-commands", "-s"],
      description: "Show the commands to set the credentials",
    },
    {
      name: ["--unset", "-u"],
      description: "Unset your aws environment variables",
    },
    {
      name: ["--auto-refresh", "-a"],
      description: "Auto refresh credentials",
    },
    {
      name: ["--kill-refresher", "-k"],
      description: "Kill autoawsume",
    },
    {
      name: ["--list-profiles", "-l"],
      description: 'List profiles, "more" for detail (slow)',
      args: {},
    },
    {
      name: "--refresh-autocomplete",
      description: "Refresh all plugin autocomplete profiles",
    },
    {
      name: "--role-arn",
      description: "Role ARN or <partition>:<account_id>:<role_name>",
      args: {
        name: "role_arn",
      },
    },
    {
      name: "--principal-arn",
      description: "Principal ARN or <partition>:<account_id>:<provider_name>",
      args: {
        name: "principal_arn",
      },
    },
    {
      name: "--source-profile",
      description: "Source_profile to use(role-arn only)",
      args: {
        name: "source_profile",
      },
    },
    {
      name: "--external-id",
      description: "External ID to pass to the assume_role",
      args: {
        name: "external_id",
      },
    },
    {
      name: "--mfa-token",
      description: "Your mfa token",
      args: {
        name: "mfa-token",
      },
    },
    {
      name: "--region",
      description: "The region you want to awsume into",
      args: {
        name: "region",
      },
    },
    {
      name: "--session-name",
      description: "Set a custom role session name",
      args: {
        name: "session_name",
      },
    },
    {
      name: "--role-duration",
      description: "Seconds to get role creds for",
      args: {
        name: "role_duration",
      },
    },
    {
      name: "--with-saml",
      description: "Use saml (requires plugin)",
    },
    {
      name: "--with-web-identity",
      description: "Use web identity (requires plugin)",
    },
    {
      name: "--json",
      description: "Use json credentials",
      args: {
        name: "json",
      },
    },
    {
      name: "--credentials-file",
      description: "Target a shared credentials file",
      args: {
        name: "credentials_file",
      },
    },
    {
      name: "--config-file",
      description: "Target a config file",
      args: {
        name: "config_file",
      },
    },
    {
      name: "--config",
      description: "Configure awsume",
      args: {
        name: "option",
        isVariadic: true,
      },
    },
    {
      name: "--list-plugins",
      description: "List installed plugins",
    },
    {
      name: "--info",
      description: "Print any info logs to stderr",
    },
    {
      name: "--debug",
      description: "Print any debug logs to stderr",
    },
    {
      name: ["--console", "-c"],
      description: "Open AWS console",
    },
    {
      name: ["--console-link", "-cl"],
      description: "Get a sign-on url",
    },
    {
      name: ["--console-service", "-cs"],
      description: "Open the console to a specific service",
      args: {
        name: "service",
      },
    },
    {
      name: ["-cls", "-csl"],
      description: "Get a sign-on url to a specific service",
      args: {
        name: "service",
      },
    },
  ],
  args: {
    name: "profile",
    template: ["history"],
  },
};

export default completionSpec;
