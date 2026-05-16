const databases: Fig.Generator = {
  script: ["fin", "db", "list"],
  postProcess: (output) => {
    return output.split("\n").map((db) => {
      return { name: db.trim(), description: "Database" };
    });
  },
};

const hosts: Fig.Generator = {
  script: ["fin", "hosts"],
  postProcess: (output) => {
    return output.split("\n").map((host) => {
      if (host.startsWith("#")) {
        return {};
      }
      return { name: host, description: "Host" };
    });
  },
};

const aliasGenerator: Fig.Generator = {
  script: ["fin", "alias", "list"],
  postProcess: (output) => {
    return output
      .split("\n")
      .slice(1)
      .map((alias) => {
        return { name: alias.split(" ")[0], description: "Alias" };
      });
  },
};

const serviceGenerator: Fig.Generator = {
  script: ["fin", "docker", "ps", "--format", "{{.Names}}"],
  splitOn: "\n",
};

const completionSpec: Fig.Spec = {
  name: "fin",
  description: "Docksal command line utility",
  subcommands: [
    {
      name: "help",
      description: "Shows help",
    },
    // Management Commands:
    {
      name: "addon",
      description:
        "Addons management commands: install, remove (fin help addon)",
      subcommands: [
        {
          name: "install",
          description: "Install addon",
          args: {
            name: "Name",
            description:
              "See available addons in the Addons Repository https://github.com/docksal/addons",
          },
        },
        {
          name: "remove",
          description: "Remove addon",
          args: {
            name: "Name",
          },
        },
      ],
    },
    {
      name: "alias",
      description:
        "Manage aliases that allow fin @alias execution (fin help alias). Create/update alias with <alias_name> that links to <path>",
      args: [{ name: "path" }, { name: "alias_name" }],
      subcommands: [
        {
          name: "list",
          description: "Show aliases list",
        },
        {
          name: "remove",
          description: "Remove alias",
          args: {
            name: "alias_name",
            generators: aliasGenerator,
          },
        },
      ],
    },
    {
      name: "db",
      description: "Manage databases (fin help db)",
      subcommands: [
        {
          name: "import",
          description:
            "Truncate the database and import from SQL dump file or stdin",
          args: {
            name: "file",
            template: "filepaths",
          },
          options: [
            {
              name: "--progress",
              description: "Show import progess (requires pv)",
            },
            {
              name: "--no-truncate",
              description: "Do no truncate database before import",
            },
          ],
        },
        {
          name: "dump",
          description: "Dump a database into an SQL dump file or stdout",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
        {
          name: ["list", "ls"],
          description: "Show list of existing databases",
        },
        {
          name: "cli",
          description:
            "Open command line interface to the DB server (and execute query if provided)",
          args: {
            name: "query",
            isOptional: true,
          },
        },
        {
          name: "create",
          description: "Create a database",
          args: {
            name: "name",
          },
        },
        {
          name: "drop",
          description: "Delete a database",
          args: {
            name: "name",
            generators: databases,
          },
        },
        {
          name: "truncate",
          description: "Truncate a database (defaults to the `default`)",
          args: {
            name: "name",
            isOptional: true,
          },
        },
      ],
      options: [
        {
          name: "--db",
          description:
            "Use another database (default is the one set with 'MYSQL_DATABASE')",
          requiresEquals: true,
          args: {
            name: "database",
          },
        },
        {
          name: "--db-user",
          description: "Use another mysql username (default is 'root')",
          requiresEquals: true,
          args: {
            name: "user",
          },
        },
        {
          name: "--db-password",
          description:
            "Use another database password (default is the one set with 'MYSQL_ROOT_PASSWORD', see fin config)",
          requiresEquals: true,
          args: {
            name: "password",
          },
        },
        {
          name: "--db-charset",
          description:
            "Override charset when creating a database (default is utf8)",
          requiresEquals: true,
          args: {
            name: "charset",
          },
        },
        {
          name: "--db-collation",
          description:
            "Override collation when creating a database (default is utf8_general_ci)",
          requiresEquals: true,
          args: {
            name: "collation",
          },
        },
      ],
    },
    {
      name: "hosts",
      description: "Hosts file commands: add, remove, list (fin help hosts)",
      subcommands: [
        {
          name: "add",
          description:
            "Add hostname to hosts file. If none provided uses VIRTUAL_HOST",
          args: {
            name: "hostname",
          },
        },
        {
          name: "remove",
          description:
            "Remove lines containing hostname from hosts file. If none provided uses VIRTUAL_HOST",
          args: {
            name: "hostname",
            generators: hosts,
          },
        },
        {
          name: "list",
          description: "Output hosts file",
        },
      ],
    },
    {
      name: "project",
      description: "Manage project(s) (fin help project)",
      subcommands: [
        {
          name: "start",
          description: "Start project services (alias: fin start)",
          priority: 65,
        },
        {
          name: "up",
          description:
            "Configuration re-read and start project services (alias: fin up)",
        },
        {
          name: "stop",
          description:
            "Stop all or specified project services (alias: fin stop)",
          priority: 60,
          options: [
            {
              name: ["--all", "-a"],
              description: "Stop all services on all Docksal projects",
            },
          ],
          args: {
            name: "service",
            generators: serviceGenerator,
            isOptional: true,
          },
        },
        {
          name: "status",
          description: "List project services (alias: fin ps)",
        },
        {
          name: "restart",
          description: "Restart project services (alias: fin restart)",
          priority: 75,
        },
        {
          name: "reset",
          description:
            "Recreate all or specified project services, their containers and volumes",
          priority: 70,
          args: {
            name: "service",
            generators: serviceGenerator,
          },
        },
        {
          name: ["remove", "rm"],
          description:
            "Remove all project services, networks and all their volumes, or specified services only",
          options: [
            {
              name: ["--force", "-f"],
              description:
                "Do not ask for confirmation when deleting all project services",
            },
          ],
          args: {
            name: "service",
            generators: serviceGenerator,
          },
        },
        {
          name: "list",
          description: "List running Docksal projects (alias: fin pl)",
          options: [
            {
              name: ["--all", "-a"],
              description: "List all Docksal projects (stopped as well)",
            },
          ],
        },
        {
          name: "create",
          description:
            "Create a new project with a pre-configured boilerplate: Drupal, Wordpress, Magento, Laravel, Backdrop, Hugo, Gatsby, and others",
          options: [
            {
              name: "--name",
              description: "Provide project name upfront",
              requiresEquals: true,
              args: {
                name: "name",
              },
            },
            {
              name: "--choice",
              description: "Provide software choice number upfront",
              requiresEquals: true,
              args: {
                name: "#",
              },
            },
            {
              name: "--repo",
              description:
                "Clone from a custom repo: name (--choice is set to '0' automatically)",
              requiresEquals: true,
              args: {
                name: "name",
              },
            },
            {
              name: "--branch",
              description: "Clone from a custom repo: branch name (optional)",
              requiresEquals: true,
              args: {
                name: "name",
              },
            },
            {
              name: ["--yes", "-y"],
              description: "Avoid confirmation",
            },
          ],
        },
        {
          name: "config",
          description: "Show project configuration",
        },
        {
          name: "build",
          description:
            "Build or rebuild services (alias for 'docker-compose build')",
        },
      ],
    },
    {
      name: "ssh-key",
      description: "Manage SSH keys (fin help ssh-key)",
      subcommands: [
        {
          name: "add",
          description:
            "Add a private SSH key from $HOME/.ssh by file name. Adds all default keys (id_rsa/id_dsa/id_ecdsa/id_ed25519) if no file name is given",
          args: {
            name: "key-name",
            isOptional: true,
            generators: {
              script: [
                "bash",
                "-c",
                "\\command ls $HOME/.ssh | \\command grep --color=never -v 'pub'",
              ],
              splitOn: "\n",
            },
          },
          options: [
            {
              name: "--quiet",
              description: "Suppress key already loaded notifications",
            },
          ],
        },
        {
          name: "ls",
          description: "List SSH keys loaded in the docksal-ssh-agent",
        },
        {
          name: "rm",
          description: "Remove all keys from the docksal-ssh-agent",
        },
        {
          name: "new",
          description: "Generate a new SSH key pair",
          args: {
            name: "key-name",
          },
        },
      ],
    },
    {
      name: "system",
      description: "Manage Docksal state (fin help system)",
      subcommands: [
        {
          name: "reset",
          description: "Reset Docksal",
        },
        {
          name: "start",
          description: "Start Docksal",
        },
        {
          name: "stop",
          description: "Stop Docksal",
        },
        {
          name: "status",
          description: "Check Docksal status",
        },
      ],
    },
    {
      name: "vm",
      description: "Manage Docksal VM (fin help vm)",
      subcommands: [
        {
          name: "start",
          description: "Start the machine (create if needed)",
        },
        {
          name: "stop",
          description: "Stop the machine",
        },
        {
          name: "kill",
          description: "Forcibly stop the machine",
        },
        {
          name: "restart",
          description: "Restart the machine",
        },
        {
          name: "status",
          description: "Get the status",
        },
        {
          name: "ssh",
          description: "Log into ssh or run a command via ssh",
          args: {
            name: "command",
          },
        },
        {
          name: "remove",
          description: "Remove Docksal machine and cleanup after it",
        },
        {
          name: "ip",
          description: "Show the machine IP address",
        },
        {
          name: "ls",
          description: "List all docker machines",
        },
        {
          name: "env",
          description:
            "Display the commands to set up the shell for direct use of Docker client",
        },
        {
          name: "mount",
          description:
            "Try remounting host filesystem (NFS on macOS, SMB on Windows)",
        },
        {
          name: "ram",
          description: "Show memory size",
          args: {
            name: "megabyte",
            description:
              "Set memory size. Default is 1024 (requires vm restart)",
            isOptional: true,
          },
        },
        {
          name: "hdd",
          description: "Show disk size and usage",
        },
        {
          name: "stats",
          description: "Show CPU and network usage",
        },
        {
          name: "regenerate-certs",
          description: "Regenerate TLS certificates and restart the VM",
        },
      ],
    },
    // Commands:
    {
      name: "bash",
      description: "Open shell into service's container. Defaults to cli",
      args: {
        name: "service",
        generators: serviceGenerator,
      },
    },
    {
      name: "config",
      description: "Show or change configuration (fin help config)",
      subcommands: [
        {
          name: "show",
          description: "Display configuration for the current project",
          options: [
            {
              name: "--show-secrets",
              description: "Do not truncate value of SECRET_* environment vars",
            },
          ],
        },
        {
          name: "env",
          description: "Display only environment variables section",
        },
        {
          name: "yml",
          description:
            "Display static YML project config suitable for export (NOTE: SECRET_* values will not be hidden)",
        },
        {
          name: "generate",
          description: "Generate empty Docksal configuration for the project",
          options: [
            {
              name: "--stack",
              description:
                "Set non-default DOCKSAL_STACK during config generate",
              requiresEquals: true,
              args: {
                name: "stack",
              },
            },
            {
              name: "--docroot",
              description: "Set non-default DOCROOT during config generate",
              requiresEquals: true,
              args: {
                name: "directory",
              },
            },
          ],
        },
        {
          name: "set",
          description: "Set value(s) for the variable(s) in project ENV file",
          options: [
            {
              name: "--global",
              description: "Set for global ENV file",
            },
            {
              name: "--env",
              description: "Set in environment specific project ENV file",
              requiresEquals: true,
              args: {
                name: "name",
                template: "filepaths",
              },
            },
          ],
          args: {
            name: "VAR=VAL",
            isVariadic: true,
          },
        },
        {
          name: ["remove", "rm"],
          description: "Remove variable(s) from project ENV file",
          options: [
            {
              name: "--global",
              description: "Remove from global ENV file",
            },
            {
              name: "--env",
              description: "Remove from environment specific project ENV file",
              requiresEquals: true,
              args: {
                name: "name",
              },
            },
          ],
          args: {
            name: "VAR",
            isVariadic: true,
          },
        },
        {
          name: "get",
          description:
            "Get the value of the single variable from project ENV file",
          options: [
            {
              name: "--global",
              description: "Get value from global ENV file",
            },
            {
              name: "--env",
              description:
                "Get value from environment specific project ENV file",
              requiresEquals: true,
              args: {
                name: "name",
                template: "filepaths",
              },
            },
          ],
          args: {
            name: "VAR",
          },
        },
      ],
    },
    {
      name: "exec",
      description: "Execute a command or a script in cli",
      args: {
        name: "command|file",
        isCommand: true,
      },
    },
    {
      name: "exec-url",
      description:
        "Download script from URL and run it on host (URL should be public)",
      args: {
        name: "url",
      },
    },
    {
      name: "init",
      description:
        "Initialize a project (override it with your own automation, see fin help init)",
    },
    {
      name: "image",
      description:
        "Image management commands: registry, save, load (fin help image)",
      subcommands: [
        {
          name: "registry",
          description: "Show all Docksal images on Docker Hub",
          args: {
            name: "image name",
            description: "Show all tags for a certain image",
            isOptional: true,
          },
        },
        {
          name: "save",
          description: "Save docker images into a tar archive",
          options: [
            {
              name: "--system",
              description: "Save Docksal system images",
              exclusiveOn: ["--project", "--all"],
            },
            {
              name: "--project",
              description: "Save current project's images",
              exclusiveOn: ["--system", "--all"],
            },
            {
              name: "--all",
              description: "Save all images available on the host",
              exclusiveOn: ["--system", "--project"],
            },
          ],
        },
        {
          name: "load",
          description: "Load docker images from a tar archive",
          args: {
            name: "file",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "logs",
      description:
        "Show service logs (e.g., Apache logs, MySQL logs) and Unison logs (fin help logs)",
      options: [
        {
          name: ["-f", "--follow"],
          description: "Follow log output",
        },
        {
          name: "--no-color",
          description: "Produce monochrome output",
        },
        {
          name: "--no-log-prefix",
          description: "Don't print prefix in logs",
        },
        {
          name: "--since",
          description:
            "Show logs since timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
          args: {
            name: "string",
          },
        },
        {
          name: "--tail",
          description:
            'Number of lines to show from the end of the logs for each container. (default "all")',
          args: {
            name: "string",
          },
        },
        {
          name: ["-t", "--timestamps"],
          description: "Show timestamps",
        },
        {
          name: "--until",
          description:
            "Show logs before a timestamp (e.g. 2013-01-02T13:23:37Z) or relative (e.g. 42m for 42 minutes)",
          args: {
            name: "string",
          },
        },
      ],
      args: {
        name: "service",
        generators: serviceGenerator,
      },
    },
    {
      name: ["run-cli", "rc"],
      description:
        "Run a command in a standalone cli container in the current directory (fin help run-cli)",
      options: [
        {
          name: "--clean",
          description: "Run command with a non-persistent $HOME directory",
        },
        {
          name: "--clenup",
          description: "Clean the persistent $HOME directory and run command",
        },
        {
          name: "--debug",
          description: "Print container debug output",
        },
        {
          name: "--image",
          description: "Override default container image",
          requiresEquals: true,
          args: {
            name: "IMAGE",
          },
        },
        {
          name: "-e",
          description: "Pass environment variable(s) to the container",
          args: {
            name: "VAR=VALUE",
          },
        },
        {
          name: "-T",
          description:
            "Disable pseudo-tty allocation (useful to get clean stdout)",
        },
      ],
      args: {
        name: "command",
      },
    },
    {
      name: "share",
      description:
        "Create temporary public url for current project using ngrok",
      options: [
        {
          name: "--host",
          description:
            "Override a hostname for ngrok to route to (default is $VIRTUAL_HOST)",
          requiresEquals: true,
          args: {
            name: "host",
          },
        },
      ],
    },
    {
      name: "share-v2",
      description:
        "Create a temporary public URL for the project using Cloudflare Tunnel",
      subcommands: [
        {
          name: "start",
          description: "Start tunnel and print public URL",
        },
        {
          name: "stop",
          description: "Stop tunnel",
        },
        {
          name: "status",
          description: "Prints tunnel status and public URL (if Active)",
        },
        {
          name: "url",
          description: "Prints tunnel public URL",
        },
        {
          name: "logs",
          description: "Prints tunnel container logs",
        },
      ],
    },
    {
      name: "vhosts",
      description:
        "List all virtual *.docksal hosts registered in Docksal proxy",
    },
    // Docker command wrapper
    {
      name: ["docker", "d"],
      description: "Run Docker commands directly",
      loadSpec: "docker",
    },
    {
      name: ["docker-compose", "dc"],
      description: "Run Docker Compose commands directly",
      loadSpec: "docker-compose",
    },
    {
      name: ["docker-machine", "dm"],
      description: "Run Docker Machine commands directly",
      args: {
        name: "command",
      },
    },
    // Misc. command wrappers
    {
      name: "composer",
      description: "Run Composer commands",
      args: {
        name: "command",
      },
    },
    {
      name: "drush",
      description: "Drush command (requires Drupal)",
      args: {
        name: "command",
      },
    },
    {
      name: "drupal",
      description: "Drupal Console command (requires Drupal 8)",
      args: {
        name: "command",
      },
    },
    {
      name: "platform",
      description: "Platform.sh's CLI (requires docksal/cli 2.3+)",
      args: {
        name: "command",
      },
    },
    {
      name: "terminus",
      description: "Pantheon's Terminus (requires docksal/cli 2.1+)",
      args: {
        name: "command",
      },
    },
    {
      name: "wp",
      description: "WordPress CLI command (requires WordPress)",
      args: {
        name: "command",
      },
    },
    // Diagnostics/maintenance/updates
    {
      name: "cleanup",
      description:
        "Remove all unused Docker images, unused Docksal volumes and containers",
      options: [
        {
          name: "--images",
          description: "Docker images cleanup Wizard",
        },
        {
          name: "--hard",
          description:
            "Remove ALL stopped containers even unrelated to Docksal (potentially destructive operation)",
        },
      ],
    },
    {
      name: "diagnose",
      description:
        "Show diagnostic information for troubleshooting and bug reporting",
    },
    {
      name: "sysinfo",
      description: "Show system information",
    },
    {
      name: "update",
      description: "Update Docksal",
      options: [
        {
          name: "DOCKSAL_VERSION",
          description: "Update Docksal to the latest development version",
          requiresEquals: true,
          args: {
            name: "develop",
          },
        },
      ],
    },
    {
      name: ["version", "--version", "v", "-v"],
      description: "Print fin version. [v, -v] prints short version",
    },
  ],
  // Adding dynamic subcommands
  generateSpec: async (tokens, executeShellCommand) => {
    var new_subcommands = [];
    const { stdout: available_commands } = await executeShellCommand({
      command: "bash",
      args: ["-c", "ls -1 ~/.docksal/commands/"],
    });
    for (const command of available_commands.split("\n")) {
      if (command) {
        new_subcommands.push({
          name: command,
          priority: 55,
        });
      }
    }
    return {
      name: "fin",
      subcommands: new_subcommands,
    };
  },
};
export default completionSpec;
