var envVarList = {
    script: "vercel env ls",
    postProcess: function(out) {
        var lines = out.split('\n');
        var envList = [];
        for(var i = 4; i < lines.length; i++) {
            var envVar = lines[i].match(/\S+/g)[0];
            envList.push({
                name: envVar
            })
        }
        return envList;
    }
}

//Unfinished
var deploymentList = {
    //Grabs all the deployments for
    script: "vercel list [project name]",
    postProcess: function(out) {
        console.log(out);
        var lines = out.split('\n');
        var deploymentUrlList = [];
        for(var i = 4; i < lines.length; i++) {
            var deploymentUrl = lines[i].match(/\S+/g)[1];
            deploymentUrlList.push({
                name: deploymentUrl,
                icon: "🔗"
            })
        }
        return deploymentUrlList;
    }
}

var domainList = {
    script: "vercel domains",
    postProcess: function(out) {
        var lines = out.split('\n');
        var domainList = [];
        for(var i = 4; i < lines.length; i++) {
            var domain = lines[i].match(/\S+/g)[0];
            domainList.push({
                name: domain
            })
        }
        return domainList;
    }
}

var teamList = {
    script: "vercel teams list",
    postProcess: function(out) {
        var lines = out.split('\n');
        var teamList = [];
        for(var i = 3; i < lines.length; i++) {
            var teamName = lines[i].match(/\S+/g)[0];
            teamList.push({
                name: teamName
            })
        }
        return teamList;
    }
}

var completionSpec = {
    name: "vercel",
    description: "CLI Interface for Vercel.com",
    args: {
        name: "path to project",
        template: "folders"
    },
    options: [
        {
            name: ["-h", "--help"],
            description: "Output usage information"
        },
        {
            name: ["-v", "--version"],
            description: "Output the version number"
        },
        {
            name: ["-V", "--platform-version"],
            description: "Set the platform version to deploy to"
        },
        {
            name: ["-A", "--local-config"],
            description: "Path to the local 'vercel.json' file",
            args: [
                {
                    template: "filepaths"
                }
            ]
        },
        {
            name: ["-Q", "--global-config"],
            description: "Path to the global '.vercel' directory",
            args: [
                {
                    template: "folders"
                }
            ]
        },
        {
            name: ["-d", "--debug"],
            description: "Provides more verbose output"
        },
        {
            name: ["-f", "--force"],
            description: "Force a new deployment even if nothing has changed"
        },
        {
            name: ["-with-cache"],
            description: "Retain build cache when using --force"
        },
        {
            name: ["-t", "--token"],
            description: "Execute command with an auth token",
            args: {
                name: "auth token",
                description: "auth token to add to your command"
            }
        },
        {
            name: ["-p", "--public"],
            description: "Deployment is public ('/_src' is exposed)"
        },
        {
            name: ["-e", "--env"],
            description: "Include an env var during run time (e.g.: '-e KEY=value'). Can appear many times."
        },
        {
            name: ["-b", "--build-env"],
            description: "Similar to `--env` but for build time only."
        },
        {
            name: ["-m", "--meta"],
            description: "Add metadata for the deployment (e.g.: `-m KEY=value`). Can appear many times."
        },
        {
            name: ["-C", "--no-clipboard"],
            description: "Do not attempt to copy URL to clipboard"
        },
        {
            name: ["-S", "--scope"],
            description: "Set a custom scope",
            args: {
                name: "team name",
                description: "team to execute commands from",
                // generator: teamList
            }
        },
        {
            name: ["--regions"],
            description: "Set default regions to enable the deployment on"
        },
        {
            name: ["--prod"],
            description: "Create a production deployment"
        },
        {
            name: ["-c", "--confirm"],
            description: "Confirm default options and skip questions"
        }
    ],
    subcommands: [
        {
            name: "deploy",
            description: "Performs a deployment (default)",
            args: {
                template: "folders"
            }
        },
        {
            name: "dev",
            description: "Start a local development server",
            options: [
                {
                    name: ["--listen"],
                    description: "Specifies which port to run on"
                }
            ]
        },
        {
            name: "env",
            description: "Manages the Environment Variables for your current Project",
            subcommands: [
                {
                    name: "add",
                    description: "add an environment variable",
                    args: [
                        {
                            name: "type",
                            description: "type of env variable to add"
                        },
                        {
                            name: "name",
                            description: "name of the env variable to add"
                        },
                        {
                            name: "environment",
                            description: "environment to add the variable to",
                            suggestions: [
                                {
                                    name: "Production",
                                    icon: "🔵"
                                },
                                {
                                    name: "Preview",
                                    icon: "🟠"
                                },
                                {
                                    name: "Development",
                                    icon: "🟡"
                                }
                            ]
                        }
                    ]
                },
                {
                    name: "rm",
                    description: "remove an environment variable",
                    args: [
                        {
                            name: "name",
                            description: "name of the variable to remove",
//                             generator: envVarList
                        },
                        {
                            name: "environment",
                            description: "environment to remove from",
                            suggestions: [
                                {
                                    name: "Production",
                                    icon: "🔵"
                                },
                                {
                                    name: "Preview",
                                    icon: "🟠"
                                },
                                {
                                    name: "Development",
                                    icon: "🟡"
                                }
                            ]
                        }
                    ],
                },
                {
                    name: "pull",
                    description: "download dev env variables from cloud and write to .env",
                    args: [
                        {
                            name: "file",
                            description: "the file to write downloaded variables to",
                            template: "filepaths"
                        }
                    ]
                },
                {
                    name: "ls",
                    description: "List environment variables for a specific environment",
                    args: [
                        {
                            name: "environment",
                            description: "Environment to list variables for"
                        }
                    ]
                }
            ]
        },
        {
            name: "init",
            description: "Initialize an example project",
            args: [
                {
                    name: "project name",
                    description: "Project name to initialize locally"
                },
                {
                    name: "new project name",
                    description: "initialize specific project locally and rename directory"
                }
            ]
        },
        {
            name: "list",
            description: "Lists deployments",
            args: {
                name: "project name",
                description: "View deployments for specified project"
            },
            options: [
                {
                    name: ["-m", "--meta"],
                    description: "Filters results based on project metadata",
                    args: {
                        variadic: true
                    }
                }
            ]
        },
        {
            name: "ls",
            description: "Lists deployments",
            args: {
                name: "project name",
                description: "View deployments for specified project"
            }
        },
        {
            name: "inspect",
            description: "Displays information related to a deployment",
            args: {
                name: "url",
                description: "The URL of the deployment to inspect"
            }
        },
        { name: "login", description: "Logs into your account or creates a new one" },
        { name: "logout", description: "Logs out of your account" },
        {
            name: "switch",
            description: "Switches between teams and your personal account",
            args: [
                {
                    name: "team name",
                    description: "team to switch to",
                    //generator: teamList
                }
            ]
        },
        {
            name: "help",
            description: "Displays complete help for [cmd]",
            args: [
                {
                    name: "command",
                    description: "command to detailed information about"
                }
            ]
        },
        {
            name: "rm",
            description: "Removes a deployment",
            args: {
                name: "deployment url",
                description: "URL of the deployment to remove",
                // variadic: true,
                //generator: deploymentList
            },
            options: [
                {
                    name: ["-s", "--safe"],
                    description: "Skip removal of deployments with an active preview URL or production domain"
                },
                {
                    name: ["-y", "--yes"],
                    description: "Skip confirmation step for a deployment or project removal"
                }
            ]
        },
        {
            name: "remove",
            description: "Removes a deployment",
            args: [
                {
                    name: "deployment url",
                    description: "URL of the deployment to remove",
                    // generator: deploymentList
                }
            ]
        },
        {
            name: "domains",
            description: "Manages your domain names",
            subcommmands: [
                {
                    name: "ls",
                    description: "List all domains under an account"
                },
                {
                    name: "inspect",
                    description: "Retrieves information about a domain",
                    args: [
                        {
                            name: "domain",
                            description: "domain to inspect",
                            // generator: domainList
                        }
                    ]
                },
                {
                    name: "add",
                    description: "Add a domain to an account",
                    args: [
                        {
                            name: "domain",
                            description: "domain to add"
                        }
                    ]
                },
                {
                    name: "rm",
                    description: "Removes a domain from an account",
                    args: [
                        {
                            name: "domain",
                            description: "domain to remove",
                            // generator: domainList
                        }
                    ]
                },
                {
                    name: "buy",
                    description: "Buy a domain for an account",
                    args: [
                        {
                            name: "domain",
                            description: "domain to buy"
                        }
                    ]
                },
                {
                    name: "move",
                    description: "Removes a domain from an account",
                    args: [
                        {
                            name: "domain",
                            description: "domain to move",
                            // generator: domainList
                        },
                        {
                            name: "account name",
                            description: "account to move the domain to",
                            // generator: teamList // double check if teams = accounts
                        }
                    ]
                },
                {
                    name: "transfer-in",
                    description: "Transfers in a domain to an account",
                    args: [
                        {
                            name: "domain",
                            description: "domain to transfer in"
                        }
                    ]
                },
                {
                    name: "verify",
                    description: "Verifies a domain for an account",
                    args: [
                        {
                            name: "domain",
                            description: "domain to verify",
                            // generator: domainList
                        }
                    ]
                }
            ]
        },
        {
            name: "dns",
            description: "Manages your DNS records",
            subcommands: [
                {
                    name: "add",
                    description: "add DNS record for a domain",
                    args: [
                        {
                            name: "domain",
                            description: "domain to add record to",
                            // generator: domainList
                        },
                        {
                            name: "subdomain",
                            description: "subdomain to add record to"
                        },
                        {
                            name: "record type",
                            description: "type of record to add",
                            suggestions: [
                                {
                                    name: "A",
                                    description: "A record"
                                },
                                {
                                    name: "AAAA",
                                    description: "AAAA record"
                                },
                                {
                                    name: "ALIAS",
                                    description: "ALIAS record"
                                },
                                {
                                    name: "CNAME",
                                    description: "CName record"
                                },
                                {
                                    name: "TXT",
                                    description: "TXT record"
                                }
                            ]
                        },
                        {
                            name: "value",
                            description: "Record value"
                        }
                    ]
                }
            ]
        },
        {
            name: "certs",
            description: "Manages your SSL certificates",
            subcommands: [
                {
                    name: "ls",
                    description: "list all certificates under an account"
                },
                {
                    name: "issue",
                    description: "issue certificates for multiple domains",
                    args: {
                        name: "Domains",
                        description: "list of domains separated by commas to issue certificates for",
                        // generator: domainList,
                        variadic: true
                    }
                },
                {
                    name: "rm",
                    description: "remove a certificate by id",
                    args: [
                        {
                            name: "certificate id",
                            description: "id of the certificate to remove"
                        }
                    ]
                }
            ],
            options: [
                {
                    name: ["--challenge-only"],
                    description: "Show challenges needed to issue a certificate"
                },
                {
                    name: ["--crt"],
                    description: "Include path to .crt",
                    args: [{ template: "filepaths" }]
                },
                {
                    name: ["--key"],
                    description: "Include path to .key",
                    args: [{ template: "filepaths" }]
                },
                {
                    name: ["--ca"],
                    description: "Include path to .ca",
                    args: [{ template: "filepaths" }]
                }
            ]
        },
        {
            name: "secrets",
            description: "Manages your global Secrets, for use in Environment Variables",
            subcommands: [
                {
                    name: "list",
                    description: "list all secrets"
                },
                {
                    name: "add",
                    description: "add a new secret",
                    args: [
                        {
                            name: "secret name",
                            description: "name of the secret to add"
                        },
                        {
                            name: "secret value",
                            description: "value of the secret to add"
                        }
                    ]
                },
                {
                    name: "rename",
                    description: "rename a secret",
                    args: [
                        {
                            name: "old name",
                            description: "old name of the secret to rename"
                        },
                        {
                            name: "new name",
                            description: "new name of the secret"
                        }
                    ]
                },
                {
                    name: "remove",
                    description: "remove a secret",
                    args: [
                        {
                            name: "secret name",
                            description: "name of the seret to remove"
                        }
                    ]
                }
            ]
        },
        {
            name: "logs",
            description: "Displays the logs for a deployment",
            args: [
                {
                    name: "deployment url",
                    description: "get logs for specified deployment",
                    // generator: deploymentList
                }
            ],
            options: [
                {
                    name: ["-a", "--all"],
                    description: "Receive access logs in addition to regular logs"
                },
                {
                    name: ["-f", "--follow"],
                    description: "Watch for additional logs output"
                },
                {
                    name: ["-n", "--number"],
                    description: "Specify number of log lines to output",
                    args: [{}]
                },
                {
                    name: ["-o", "--output"],
                    description: "Specifies format of logs output as 'short' or 'raw'",
                    args: [{}]
                },
                {
                    name: ["--since"],
                    description: "Return logs after a specific ISO 8601 date",
                    args: [{}]
                },
                {
                    name: ["-q", "--query"],
                    description: "Return logs against a search query",
                    args: [{}]
                },
                {
                    name: ["--until"],
                    description: "Return logs up to a specific ISO 8601 date",
                    args: [{}]
                }
            ]
        },
        {
            name: "teams",
            description: "Manages your teams",
            subcommands: [
                {
                    name: "list",
                    description: "List all teams under an account"
                },
                {
                    name: "add",
                    description: "Create a new team"
                },
                {
                    name: "invite",
                    description: "invite a new member to the team",
                    args: [
                        {
                            name: "email",
                            description: "email of member to invite to team"
                        }
                    ]
                }
            ]
        },
        { name: "whoami", description: "Shows the username of the currently logged in user" }
    ]
}
