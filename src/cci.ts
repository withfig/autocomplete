const completionSpec: Fig.Spec = {
  name: "cci",
  description: "CumulusCI command line interface",
  subcommands: [
    {
      name: "flow",
      description: "Commands for finding and running flows for a project",
      subcommands: [
        {
          name: "doc",
          description: "Exports RST format documentation for all flows",
          options: [
            {
              name: "--project",
              description: "Include project-specific flows only",
            },
            {
              name: "--help",
              description: "Help for flow doc",
            },
          ],
        },
        {
          name: "info",
          description: "Displays information for a flow",
          args: {
            name: "FLOW_NAME",
            description: "Name of the flow",
          },
          options: [
            {
              name: "--help",
              description: "Help for flow info",
            },
          ],
        },
        {
          name: "list",
          description: "List available flows for the current context",
          options: [
            {
              name: "--plain",
              description: "Print the table using plain ascii",
            },
            {
              name: "--json",
              description: "Print a json string",
            },
            {
              name: "--help",
              description: "Help for flow list",
            },
          ],
        },
        {
          name: "run",
          description: "Runs a flow",
          args: {
            name: "FLOW_NAME",
            description: "Name of the flow to run",
          },
          options: [
            {
              name: "--org",
              description:
                "Specify the target org. By default, runs against the current default org",
              args: {
                name: "TEXT",
                description: "Name of the target org",
              },
            },
            {
              name: "--delete-org",
              description:
                "If set, deletes the scratch org after the flow completes",
            },
            {
              name: "--debug",
              description:
                "Drops into pdb, the Python debugger, on an exception",
            },
            {
              name: "-o",
              description:
                "Pass task specific options for the task as '-o taskname__option value'. You can specify more than one option by using -o more than once",
              args: {
                name: "TEXT",
                description: "Task specific options",
              },
            },
            {
              name: "--no-prompt",
              description:
                "Disables all prompts. Set for non-interactive mode use such as calling from scripts or CI systems",
            },
            {
              name: "--help",
              description: "Help for flow run",
            },
          ],
        },
      ],
    },
    {
      name: "org",
      description:
        "Commands for connecting and interacting with Salesforce orgs",
      subcommands: [
        {
          name: "browser",
          description:
            "Opens a browser window and logs into the org using the stored OAuth credentials",
          args: {
            name: "ORGNAME",
            description: "Name of the org",
            isOptional: true,
          },
          options: [
            {
              name: "--org",
              description:
                "Alternate way to specify the target org. By default, runs against the current default org",
              args: {
                name: "TEXT",
                description: "Name of the target org",
              },
            },
            {
              name: ["-p", "--path"],
              description: "Navigate to the specified page after logging in",
              args: {
                name: "TEXT",
                description: "Page to navigate to",
              },
            },
            {
              name: ["-r", "--url-only"],
              description: "Display the target URL, but don't open a browser",
            },
            {
              name: "--help",
              description: "Help for org browser",
            },
          ],
        },
        // Add other org subcommands here
      ],
    },
    {
      name: "plan",
      description: "Commands for getting information about MetaDeploy plans",
      subcommands: [
        {
          name: "info",
          description: "Displays information for a MetaDeploy plan",
          args: {
            name: "PLAN_NAME",
            description: "Name of the plan",
          },
          options: [
            {
              name: "--messages",
              description: "Show only plan messages",
            },
            {
              name: "--help",
              description: "Help for plan info",
            },
          ],
        },
        {
          name: "list",
          description: "List available plans for the current context",
          options: [
            {
              name: "--json",
              description: "Return the list of plans in JSON format",
            },
            {
              name: "--help",
              description: "Help for plan list",
            },
          ],
        },
      ],
    },
    {
      name: "robot",
      description: "Commands for working with Robot Framework",
      subcommands: [
        {
          name: "install_playwright",
          description:
            "Install libraries necessary to use playwright with robot framework",
          options: [
            {
              name: ["-n", "--dry_run"],
              description: "Dry run",
            },
            {
              name: "--help",
              description: "Help for install_playwright",
            },
          ],
        },
        {
          name: "uninstall_playwright",
          description:
            "Uninstalls the robotframework-browser package and node modules",
          options: [
            {
              name: "--help",
              description: "Help for uninstall_playwright",
            },
          ],
        },
      ],
    },
    {
      name: "service",
      description: "Commands for connecting services to the keychain",
      subcommands: [
        {
          name: "connect",
          description: "Connect an external service to CumulusCI",
          subcommands: [
            {
              name: "connected_app",
              description: "Connect a Connected App service to CumulusCI",
              args: {
                name: "SERVICE_NAME",
                isOptional: true,
              },
              options: [
                {
                  name: "--login_url",
                  description:
                    "Default Salesforce Login URL to be used with this Connected App",
                  args: {
                    name: "login_url",
                  },
                },
                {
                  name: "--callback_url",
                  description: "Callback URL configured on the Connected App",
                  args: {
                    name: "callback_url",
                  },
                },
                {
                  name: "--client_id",
                  description: "Client ID/Consumer Key from the Connected App",
                  isRequired: true,
                  args: {
                    name: "client_id",
                  },
                },
                {
                  name: "--client_secret",
                  description:
                    "Client Secret/Consumer Secret from the Connected App",
                  isRequired: true,
                  args: {
                    name: "client_secret",
                  },
                },
                {
                  name: "--default",
                  description: "Set this service as the global default",
                },
                {
                  name: "--help",
                  description: "Help for cci service connect connected_app",
                },
              ],
            },
            {
              name: "devhub",
              description: "Connect a DevHub service to CumulusCI",
              args: {
                name: "SERVICE_NAME",
                isOptional: true,
              },
              options: [
                {
                  name: "--username",
                  description:
                    "Username or alias of the SFDX org to use as a Dev Hub",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--default",
                  description: "Set this service as the global default",
                },
                {
                  name: "--help",
                  description: "Show this message and exit",
                },
              ],
            },
            {
              name: "github",
              description: "Connect a GitHub service to CumulusCI",
              args: {
                name: "SERVICE_NAME",
                isOptional: true,
              },
              options: [
                {
                  name: "--username",
                  description: "The Github username to use for tasks",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--email",
                  description:
                    "The email address to used by Github tasks when an operation requires an email address",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--token",
                  description:
                    "Personal Access Token for GitHub. Leave blank to log in via browser",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--default",
                  description: "Set this service as the global default",
                },
                {
                  name: "--help",
                  description: "Show this message and exit",
                },
              ],
            },
            {
              name: "github_enterprise",
              description: "Connect a GitHub Enterprise service to CumulusCI",
              args: {
                name: "SERVICE_NAME",
                isOptional: true,
              },
              options: [
                {
                  name: "--username",
                  description:
                    "The GitHub Enterprise username to use for tasks",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--email",
                  description:
                    "The email address to used by GitHub tasks when an operation requires an email address",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--server_domain",
                  description:
                    "GitHub Enterprise domain (Example: git.ent.domain.com)",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--token",
                  description: "Personal Access Token",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--default",
                  description: "Set this service as the global default",
                },
                {
                  name: "--help",
                  description: "Show this message and exit",
                },
              ],
            },
            {
              name: "marketing_cloud",
              description: "Connect a Marketing Cloud service to CumulusCI",
              args: {
                name: "SERVICE_NAME",
                isOptional: true,
              },
              options: [
                {
                  name: "--oauth2_client",
                  description:
                    "The name of the oauth2_client service with which to establish a connection to Marketing Cloud",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--default",
                  description: "Set this service as the global default",
                },
                {
                  name: "--help",
                  description: "Show this message and exit",
                },
              ],
            },
            {
              name: "metaci",
              description: "Connect a MetaCI service to CumulusCI",
              args: {
                name: "SERVICE_NAME",
                isOptional: true,
              },
              options: [
                {
                  name: "--app_name",
                  description: "The Heroku app name",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--url",
                  description: "The main url to the MetaCI site",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--token",
                  description:
                    "Your API token to the MetaCI site (get from SITE_URL/api/token)",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--default",
                  description: "Set this service as the global default",
                },
                {
                  name: "--help",
                  description: "Show this message and exit",
                },
              ],
            },
            {
              name: "metadeploy",
              description: "Connect a MetaDeploy service to CumulusCI",
              args: {
                name: "SERVICE_NAME",
                isOptional: true,
              },
              options: [
                {
                  name: "--url",
                  description: "The main url for your MetaDeploy instance",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--token",
                  description:
                    "Your API token to the MetaDeploy site (get from SITE_URL/admin/authtoken/token)",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--default",
                  description: "Set this service as the global default",
                },
                {
                  name: "--help",
                  description: "Show this message and exit",
                },
              ],
            },
            {
              name: "oauth2_client",
              description: "Connect an OAuth2 Client service to CumulusCI",
              args: {
                name: "SERVICE_NAME",
                isOptional: true,
              },
              options: [
                {
                  name: "--client_id",
                  description: "The client Id",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--client_secret",
                  description: "The client secret",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--auth_uri",
                  description: "The URI for where users are directed to login",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--token_uri",
                  description: "The URI for where we request an access token",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--callback_url",
                  description:
                    "The URL that the auth server will callback to after authentication of the user",
                  args: {
                    name: "TEXT",
                  },
                },
                {
                  name: "--default",
                  description: "Set this service as the global default",
                },
                {
                  name: "--help",
                  description: "Show this message and exit",
                },
              ],
            },
            // Add other connect subcommands here
          ],
        },
        {
          name: "default",
          description: "Set the default service for a given service type",
          args: [
            {
              name: "SERVICE_TYPE",
            },
            {
              name: "SERVICE_NAME",
            },
          ],
          options: [
            {
              name: "--project",
              description:
                "Sets the service as the default for the current project",
            },
            {
              name: "--help",
              description: "Help for cci service default",
            },
          ],
        },
        {
          name: "info",
          description: "Show the details of a connected service",
          args: [
            {
              name: "SERVICE_TYPE",
            },
            {
              name: "SERVICE_NAME",
              isOptional: true,
            },
          ],
          options: [
            {
              name: "--json",
              description: "Print a json string",
            },
            {
              name: "--help",
              description: "Help for cci service info",
            },
          ],
        },
        {
          name: "list",
          description: "List services available for configuration and use",
          options: [
            {
              name: "--plain",
              description: "Print the table using plain ascii",
            },
            {
              name: "--json",
              description: "Print a json string",
            },
            {
              name: "--help",
              description: "Help for cci service list",
            },
          ],
        },
        {
          name: "remove",
          description: "Remove a service",
          args: [
            {
              name: "SERVICE_TYPE",
            },
            {
              name: "SERVICE_NAME",
            },
          ],
          options: [
            {
              name: "--help",
              description: "Help for cci service remove",
            },
          ],
        },
        {
          name: "rename",
          description: "Rename a service",
          args: [
            {
              name: "SERVICE_TYPE",
            },
            {
              name: "SERVICE_NAME",
            },
            {
              name: "NEW_NAME",
            },
          ],
          options: [
            {
              name: "--help",
              description: "Help for cci service remove",
            },
          ],
        },
        {
          name: "update",
          description:
            "Allow users to update attribute values of a particular service",
          args: [
            {
              name: "SERVICE_TYPE",
            },
            {
              name: "SERVICE_NAME",
            },
          ],
          options: [
            {
              name: ["-s", "--attribute"],
              description:
                "Provide values to update the service with directly. Using `--attribute foo var` will set the 'foo' attribute to a value of 'bar' on the specified service",
              args: {
                name: "TEXT TEXT",
              },
            },
            {
              name: "--help",
              description: "Help for cci service remove",
            },
          ],
        },
        // Add other main commands here
      ],
    },
    {
      name: "shell",
      description: "Drop into a Python shell",
      options: [
        {
          name: "--script",
          description: "Path to a script to run",
          args: {
            name: "PATH",
          },
        },
        {
          name: "--python",
          description: "Python code to run directly",
          args: {
            name: "TEXT",
          },
        },
        {
          name: "--help",
          description: "Show this message and exit",
        },
      ],
    },
  ],
  options: [
    {
      name: "--help",
      description: "Help for cci",
    },
  ],
};

export default completionSpec;
