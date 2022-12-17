const completionSpec: Fig.Spec = {
  name: "ddev",
  description: "DDEV-Local local development environment",
  subcommands: [
    {
      name: "auth",
      description: "A collection of authentication commands",
      subcommands: [
        {
          name: "ssh",
          description:
            "Add ssh key authentication to the ddev-ssh-auth container",
          options: [
            {
              name: ["--ssh-key-path", "-d"],
              description: "Full path to ssh key directory",
              args: { name: "ssh-key-path" },
            },
          ],
        },
      ],
    },
    {
      name: "clean",
      description: "Removes items ddev has created",
      options: [
        { name: ["--all", "-a"], description: "Clean all ddev projects" },
        {
          name: "--dry-run",
          description: "Run the clean command without deleting",
        },
      ],
    },
    {
      name: "composer",
      description: "Executes a composer command within the web container",
      subcommands: [
        {
          name: "create",
          description:
            "Executes 'composer create-project' within the web container with the arguments and flags provided",
          options: [
            {
              name: ["--yes", "-y"],
              description: "Yes - skip confirmation prompt",
            },
          ],
        },
        { name: "create-project", description: "" },
      ],
    },
    {
      name: "config",
      description:
        "Create or modify a ddev project configuration in the current directory",
      subcommands: [
        {
          name: "global",
          description: "Change global configuration",
          options: [
            {
              name: "--auto-restart-containers",
              description:
                "If true, automatically restart containers after a reboot or docker restart",
            },
            {
              name: "--disable-http2",
              description:
                "Optionally disable http2 in ddev-router, 'ddev global --disable-http2' or `ddev global --disable-http2=false'",
            },
            {
              name: "--fail-on-hook-fail",
              description: "If true, 'ddev start' will fail when a hook fails",
            },
            {
              name: "--instrumentation-opt-in",
              description: "Instrumentation-opt-in=true",
            },
            {
              name: "--internet-detection-timeout-ms",
              description:
                "Increase timeout when checking internet timeout, in milliseconds",
              args: { name: "internet-detection-timeout-ms", default: "3000" },
            },
            {
              name: "--letsencrypt-email",
              description:
                "Email associated with Let's Encrypt, `ddev global --letsencrypt-email=me@example.com'",
              args: { name: "letsencrypt-email" },
            },
            {
              name: "--mutagen-enabled",
              description:
                "If true, web container will use mutagen caching/asynchronous updates",
            },
            {
              name: "--nfs-mount-enabled",
              description: "Enable NFS mounting on all projects globally",
            },
            {
              name: "--no-bind-mounts",
              description:
                "If true, don't use bind-mounts - useful for environments like remote docker where bind-mounts are impossible",
            },
            {
              name: "--omit-containers",
              description: "For example, --omit-containers=dba,ddev-ssh-agent",
              args: { name: "omit-containers" },
            },
            {
              name: "--required-docker-compose-version",
              description: "Override default docker-compose version",
              args: { name: "required-docker-compose-version" },
            },
            {
              name: "--router-bind-all-interfaces",
              description: "Router-bind-all-interfaces=true",
            },
            {
              name: "--simple-formatting",
              description:
                "If true, use simple formatting and no color for tables",
            },
            {
              name: "--table-style",
              description:
                "Table style for list and describe, see ~/.ddev/global_config.yaml for values",
              args: { name: "table-style" },
            },
            {
              name: "--use-docker-compose-from-path",
              description:
                "If true, use docker-compose from path instead of private ~/.ddev/bin/docker-compose",
            },
            {
              name: "--use-hardened-images",
              description:
                "If true, use more secure 'hardened' images for an actual internet deployment",
            },
            {
              name: "--use-letsencrypt",
              description:
                "Enables experimental Let's Encrypt integration, 'ddev global --use-letsencrypt' or `ddev global --use-letsencrypt=false'",
            },
            {
              name: "--web-environment",
              description:
                'Set the environment variables in the web container: --web-environment="TYPO3_CONTEXT=Development,SOMEENV=someval"',
              args: { name: "web-environment" },
            },
            {
              name: "--web-environment-add",
              description:
                'Append environment variables to the web container: --web-environment="TYPO3_CONTEXT=Development,SOMEENV=someval"',
              args: { name: "web-environment-add" },
            },
          ],
        },
      ],
      options: [
        {
          name: "--additional-fqdns",
          description: "A comma-delimited list of FQDNs for the project",
          args: { name: "additional-fqdns" },
        },
        {
          name: "--additional-hostnames",
          description: "A comma-delimited list of hostnames for the project",
          args: { name: "additional-hostnames" },
        },
        {
          name: "--apptype",
          description:
            "Provide the project type (one of backdrop, drupal10, drupal6, drupal7, drupal8, drupal9, laravel, magento, magento2, php, shopware6, typo3, wordpress). This is autodetected and this flag is necessary only to override the detection. This is the same as --project-type and is included only for backwards compatibility",
          hidden: true,
          args: { name: "apptype" },
        },
        {
          name: "--auto",
          description: "Automatically run config without prompting",
        },
        {
          name: "--bind-all-interfaces",
          description:
            "Bind host ports on all interfaces, not just on localhost network interface",
        },
        {
          name: "--composer-root",
          description:
            "Overrides the default composer root directory for the web service",
          args: { name: "composer-root" },
        },
        {
          name: "--composer-root-default",
          description: "Unsets a web service composer root directory override",
        },
        {
          name: "--composer-version",
          description:
            'Specify override for composer version in web container. This may be "", "1", "2", "2.2", "stable", "preview", "snapshot" or a specific version',
          args: { name: "composer-version" },
        },
        {
          name: "--create-docroot",
          description: "Prompts ddev to create the docroot if it doesn't exist",
        },
        {
          name: "--database",
          description:
            "Specify the database type:version to use. Defaults to mariadb:10.4",
          args: { name: "database" },
        },
        {
          name: "--db-image",
          description: "Sets the db container image",
          args: { name: "db-image" },
        },
        {
          name: "--db-image-default",
          description:
            "Sets the default db container image for this ddev version",
        },
        {
          name: "--db-working-dir",
          description:
            "Overrides the default working directory for the db service",
          args: { name: "db-working-dir" },
        },
        {
          name: "--db-working-dir-default",
          description: "Unsets a db service working directory override",
        },
        {
          name: "--dba-image",
          description: "Sets the dba container image",
          args: { name: "dba-image" },
        },
        {
          name: "--dba-image-default",
          description:
            "Sets the default dba container image for this ddev version",
        },
        {
          name: "--dba-working-dir",
          description:
            "Overrides the default working directory for the dba service",
          args: { name: "dba-working-dir" },
        },
        {
          name: "--dba-working-dir-default",
          description: "Unsets a dba service working directory override",
        },
        {
          name: "--dbimage-extra-packages",
          description:
            "A comma-delimited list of Debian packages that should be added to db container when the project is started",
          args: { name: "dbimage-extra-packages" },
        },
        {
          name: "--default-container-timeout",
          description:
            "Default time in seconds that ddev waits for all containers to become ready on start",
          args: { name: "default-container-timeout", default: "120" },
        },
        {
          name: "--disable-settings-management",
          description:
            "Prevent ddev from creating or updating CMS settings files",
        },
        {
          name: "--docroot",
          description:
            "Provide the relative docroot of the project, like 'docroot' or 'htdocs' or 'web', defaults to empty, the current directory",
          args: { name: "docroot" },
        },
        {
          name: "--fail-on-hook-fail",
          description:
            "Decide whether 'ddev start' should be interrupted by a failing hook",
        },
        {
          name: "--host-db-port",
          description: "The db container's localhost-bound port",
          args: { name: "host-db-port" },
        },
        {
          name: "--host-dba-port",
          description:
            "The dba (PHPMyAdmin) container's localhost-bound port, if exposed via bind-all-interfaces",
          args: { name: "host-dba-port" },
        },
        {
          name: "--host-https-port",
          description: "The web container's localhost-bound https port",
          args: { name: "host-https-port" },
        },
        {
          name: "--host-webserver-port",
          description: "The web container's localhost-bound port",
          args: { name: "host-webserver-port" },
        },
        {
          name: "--http-port",
          description: "The router HTTP port for this project",
          args: { name: "http-port" },
        },
        {
          name: "--https-port",
          description: "The router HTTPS port for this project",
          args: { name: "https-port" },
        },
        {
          name: "--image-defaults",
          description: "Sets the default web, db, and dba container images",
        },
        {
          name: "--mailhog-https-port",
          description: "Router port to be used for mailhog access (https)",
          args: { name: "mailhog-https-port" },
        },
        {
          name: "--mailhog-port",
          description: "Router port to be used for mailhog access",
          args: { name: "mailhog-port" },
        },
        {
          name: "--mutagen-enabled",
          description:
            "Enable mutagen asynchronous update of project in web container",
        },
        {
          name: "--nfs-mount-enabled",
          description: "Enable NFS mounting of project in container",
        },
        {
          name: "--ngrok-args",
          description: "Provide extra args to ngrok in ddev share",
          args: { name: "ngrok-args" },
        },
        {
          name: "--no-project-mount",
          description:
            "Whether or not to skip mounting project code into the web container",
        },
        {
          name: "--nodejs-version",
          description:
            "Specify the nodejs version to use if you don't want the default NodeJS 16",
          args: { name: "nodejs-version" },
        },
        {
          name: "--omit-containers",
          description:
            "A comma-delimited list of container types that should not be started when the project is started",
          args: { name: "omit-containers" },
        },
        {
          name: "--php-version",
          description:
            "The version of PHP that will be enabled in the web container",
          args: { name: "php-version" },
        },
        {
          name: "--phpmyadmin-https-port",
          description:
            "Router port to be used for PHPMyAdmin (dba) container access (https)",
          args: { name: "phpmyadmin-https-port" },
        },
        {
          name: "--phpmyadmin-port",
          description:
            "Router port to be used for PHPMyAdmin (dba) container access",
          args: { name: "phpmyadmin-port" },
        },
        {
          name: "--project-name",
          description:
            "Provide the project name of project to configure (normally the same as the last part of directory name)",
          args: { name: "project-name" },
        },
        {
          name: "--project-tld",
          description:
            "Set the top-level domain to be used for projects, defaults to ddev.site",
          args: { name: "project-tld", default: "ddev.site" },
        },
        {
          name: "--project-type",
          description:
            "Provide the project type (one of backdrop, drupal10, drupal6, drupal7, drupal8, drupal9, laravel, magento, magento2, php, shopware6, typo3, wordpress). This is autodetected and this flag is necessary only to override the detection",
          args: { name: "project-type" },
        },
        {
          name: "--projectname",
          description:
            "Provide the project name of project to configure (normally the same as the last part of directory name)",
          hidden: true,
          args: { name: "projectname" },
        },
        {
          name: "--projecttype",
          description:
            "Provide the project type (one of backdrop, drupal10, drupal6, drupal7, drupal8, drupal9, laravel, magento, magento2, php, shopware6, typo3, wordpress). This is autodetected and this flag is necessary only to override the detection",
          hidden: true,
          args: { name: "projecttype" },
        },
        {
          name: "--show-config-location",
          description:
            "Output the location of the config.yaml file if it exists, or error that it doesn't exist",
        },
        {
          name: "--sitename",
          description:
            "Provide the project name of project to configure (normally the same as the last part of directory name) This is the same as project-name and is included only for backwards compatibility",
          hidden: true,
          args: { name: "sitename" },
        },
        {
          name: "--timezone",
          description:
            "Specify timezone for containers and php, like Europe/London or America/Denver or GMT or UTC",
          args: { name: "timezone" },
        },
        {
          name: "--upload-dir",
          description:
            "Sets the project's upload directory, the destination directory of the import-files command",
          args: { name: "upload-dir" },
        },
        {
          name: "--use-dns-when-possible",
          description:
            "Use DNS for hostname resolution instead of /etc/hosts when possible",
        },
        {
          name: "--web-environment",
          description:
            'Set the environment variables in the web container: --web-environment="TYPO3_CONTEXT=Development,SOMEENV=someval"',
          args: { name: "web-environment" },
        },
        {
          name: "--web-environment-add",
          description:
            'Append environment variables to the web container: --web-environment="TYPO3_CONTEXT=Development,SOMEENV=someval"',
          args: { name: "web-environment-add" },
        },
        {
          name: "--web-image",
          description: "Sets the web container image",
          args: { name: "web-image" },
        },
        {
          name: "--web-image-default",
          description:
            "Sets the default web container image for this ddev version",
        },
        {
          name: "--web-working-dir",
          description:
            "Overrides the default working directory for the web service",
          args: { name: "web-working-dir" },
        },
        {
          name: "--web-working-dir-default",
          description: "Unsets a web service working directory override",
        },
        {
          name: "--webimage-extra-packages",
          description:
            "A comma-delimited list of Debian packages that should be added to web container when the project is started",
          args: { name: "webimage-extra-packages" },
        },
        {
          name: "--webserver-type",
          description:
            "Sets the project's desired webserver type: nginx-fpm or apache-fpm",
          args: { name: "webserver-type" },
        },
        {
          name: "--working-dir-defaults",
          description: "Unsets all service working directory overrides",
        },
        {
          name: "--xdebug-enabled",
          description: "Whether or not XDebug is enabled in the web container",
        },
      ],
    },
    {
      name: ["d", "dbg", "debug"],
      description: "A collection of debugging commands",
      subcommands: [
        {
          name: "capabilities",
          description: "Show capabilities of this version of ddev",
        },
        {
          name: "check-db-match",
          description:
            "Verify that the database in the ddev-db server matches the configured type/version",
        },
        {
          name: "compose-config",
          description:
            "Prints the docker-compose configuration of the current project",
        },
        {
          name: "configyaml",
          description: "Prints the project config.*.yaml usage",
        },
        {
          name: "dockercheck",
          description: "Diagnose DDEV docker/colima setup",
        },
        {
          name: "download-images",
          description: "Download all images required by ddev",
        },
        {
          name: "fix-commands",
          description:
            "Fix up custom/shell commands without running ddev start",
        },
        {
          name: "get-volume-db-version",
          description:
            "Get the database type/version found in the ddev-dbserver's database volume, which may not be the same as the configured database type/version",
        },
        {
          name: "migrate-database",
          description:
            "Migrate a mysql or mariadb database to a different dbtype:dbversion; works only with mysql and mariadb, not with postgres",
        },
        {
          name: "mutagen",
          description: "Allows access to any mutagen command",
        },
        {
          name: "nfsmount",
          description:
            "Checks to see if nfs mounting works for current project",
        },
        {
          name: "refresh",
          description: "Refreshes docker cache for project",
        },
        {
          name: "router-nginx-config",
          description: "Prints the nginx config of the router",
        },
        {
          name: "test",
          description:
            "Run diagnostics on ddev using the embedded test_ddev.sh script",
        },
      ],
    },
    {
      name: "delete",
      description:
        "Remove all project information (including database) for an existing project",
      subcommands: [
        {
          name: "images",
          description:
            "Deletes drud/ddev-* docker images not in use by current ddev version",
          options: [
            {
              name: ["--all", "-a"],
              description: "If set, deletes all Docker images created by ddev",
            },
            {
              name: ["--yes", "-y"],
              description: "Yes - skip confirmation prompt",
            },
          ],
        },
      ],
      options: [
        { name: ["--all", "-a"], description: "Delete all projects" },
        {
          name: "--clean-containers",
          description:
            "Clean up all ddev docker containers which are not required by this version of ddev",
        },
        {
          name: ["--omit-snapshot", "-O"],
          description: "Omit/skip database snapshot",
        },
        {
          name: ["--yes", "-y"],
          description: "Yes - skip confirmation prompt",
        },
      ],
    },
    {
      name: ["desc", "st", "status", "describe"],
      description: "Get a detailed description of a running ddev project",
    },
    {
      name: [".", "exec"],
      description:
        "Execute a shell command in the container for a service. Uses the web service by default",
      options: [
        {
          name: ["--dir", "-d"],
          description: "Defines the execution directory within the container",
          args: { name: "dir" },
        },
        {
          name: "--raw",
          description:
            "Use raw exec (do not interpret with bash inside container)",
        },
        {
          name: ["--service", "-s"],
          description: "Defines the service to connect to. [e.g. web, db]",
          args: { name: "service", default: "web" },
        },
      ],
    },
    {
      name: "export-db",
      description: "Dump a database to a file or to stdout",
      options: [
        { name: "--bzip2", description: "Use bzip2 compression" },
        {
          name: ["--file", "-f"],
          description: "Provide the path to output the dump",
          args: { name: "file" },
        },
        { name: ["--gzip", "-z"], description: "Use gzip compression" },
        {
          name: ["--target-db", "-d"],
          description: "If provided, target-db is alternate database to export",
          args: { name: "target-db", default: "db" },
        },
        { name: "--xz", description: "Use xz compression" },
      ],
    },
    {
      name: "get",
      description: "Get/Download a 3rd party add-on (service, provider, etc.)",
      options: [
        {
          name: "--all",
          description:
            "List unofficial add-ons for 'ddev get' in addition to the official ones",
        },
        {
          name: "--list",
          description: "List available add-ons for 'ddev get'",
        },
      ],
    },
    {
      name: "hostname",
      description: "Manage your hostfile entries",
      options: [
        {
          name: "--fire-bazooka",
          description: "Alias of --remove-inactive",
          hidden: true,
        },
        {
          name: ["--remove", "-r"],
          description: "Remove the provided host name - ip correlation",
        },
        {
          name: ["--remove-inactive", "-R"],
          description: "Remove host names of inactive projects",
        },
      ],
    },
    {
      name: "import-db",
      description: "Import a sql file into the project",
      options: [
        {
          name: "--extract-path",
          description:
            "If provided asset is an archive, provide the path to extract within the archive",
          args: { name: "extract-path" },
        },
        {
          name: "--no-drop",
          description: "Set if you do NOT want to drop the db before importing",
        },
        {
          name: ["--progress", "-p"],
          description: "Display a progress bar during import",
        },
        {
          name: ["--src", "-f"],
          description:
            "Provide the path to a sql dump in .sql or tar/tar.gz/tgz/zip format",
          args: { name: "src" },
        },
        {
          name: ["--target-db", "-d"],
          description:
            "If provided, target-db is alternate database to import into",
          args: { name: "target-db", default: "db" },
        },
      ],
    },
    {
      name: "import-files",
      description:
        "Pull the uploaded files directory of an existing project to the default public upload directory of your project",
      options: [
        {
          name: "--extract-path",
          description:
            "If provided asset is an archive, optionally provide the path to extract within the archive",
          args: { name: "extract-path" },
        },
        {
          name: "--src",
          description:
            "Provide the path to the source directory or tar/tar.gz/tgz/zip archive of files to import",
          args: { name: "src" },
        },
      ],
    },
    {
      name: ["l", "ls", "list"],
      description: "List projects",
      options: [
        {
          name: ["--active-only", "-A"],
          description:
            "If set, only currently active projects will be displayed",
        },
        {
          name: "--continuous",
          description:
            "If set, project information will be emitted until the command is stopped",
        },
        {
          name: ["--continuous-sleep-interval", "-I"],
          description:
            "Time in seconds between ddev list --continuous output lists",
          args: { name: "continuous-sleep-interval", default: "1" },
        },
        {
          name: ["--wrap-table", "-W"],
          description: "Display table with wrapped text if required",
        },
      ],
    },
    {
      name: "logs",
      description: "Get the logs from your running services",
      options: [
        {
          name: ["--follow", "-f"],
          description: "Follow the logs in real time",
        },
        {
          name: ["--service", "-s"],
          description:
            "Defines the service to retrieve logs from. [e.g. web, db]",
          args: { name: "service", default: "web" },
        },
        {
          name: "--tail",
          description: "How many lines to show",
          args: { name: "tail" },
        },
        { name: ["--time", "-t"], description: "Add timestamps to logs" },
      ],
    },
    {
      name: "mutagen",
      description: "Commands for mutagen status and sync, etc",
      subcommands: [
        { name: "monitor", description: "Monitor mutagen status" },
        { name: "reset", description: "Reset mutagen for project" },
        {
          name: ["st", "status"],
          description: "Shows mutagen sync status",
          options: [
            {
              name: ["--verbose", "-l"],
              description: "Extended/verbose output for mutagen status",
            },
          ],
        },
        {
          name: "sync",
          description: "Explicit sync for mutagen",
          options: [
            {
              name: "--verbose",
              description: "Extended/verbose output for mutagen status",
            },
          ],
        },
      ],
    },
    {
      name: ["sc", "stop-containers", "pause"],
      description:
        "Uses 'docker stop' to pause/stop the containers belonging to a project",
      options: [
        { name: ["--all", "-a"], description: "Pause all running projects" },
      ],
    },
    {
      name: ["powerdown", "poweroff"],
      description: "Completely stop all projects and containers",
    },
    {
      name: "pull",
      description: "Pull files and database using a configured provider plugin",
    },
    {
      name: "push",
      description: "Push files and database using a configured provider plugin",
    },
    {
      name: "restart",
      description: "Restart a project or several projects",
      options: [{ name: ["--all", "-a"], description: "Restart all projects" }],
    },
    {
      name: "service",
      description: "Add or remove, enable or disable extra services",
      subcommands: [
        { name: "disable", description: "Disable a 3rd party service" },
        { name: "enable", description: "Enable a 3rd party service" },
      ],
    },
    {
      name: "share",
      description: "Share project on the internet via ngrok",
      options: [
        {
          name: "--subdomain",
          description:
            'Ngrok --subdomain argument, as in "ngrok --subdomain my-subdomain:, requires paid ngrok.com account"',
          args: { name: "subdomain" },
        },
      ],
    },
    {
      name: "snapshot",
      description: "Create a database snapshot for one or more projects",
      options: [
        {
          name: ["--all", "-a"],
          description:
            "Snapshot all projects. Will start the project if it is stopped or paused",
        },
        { name: ["--cleanup", "-C"], description: "Cleanup snapshots" },
        { name: ["--list", "-l"], description: "List snapshots" },
        {
          name: ["--name", "-n"],
          description: "Provide a name for the snapshot",
          args: { name: "name" },
        },
        {
          name: ["--yes", "-y"],
          description: "Yes - skip confirmation prompt",
        },
      ],
    },
    {
      name: "ssh",
      description:
        "Starts a shell session in the container for a service. Uses web service by default",
      options: [
        {
          name: ["--dir", "-d"],
          description: "Defines the destination directory within the container",
          args: { name: "dir" },
        },
        {
          name: ["--service", "-s"],
          description: "Defines the service to connect to. [e.g. web, db]",
          args: { name: "service", default: "web" },
        },
      ],
    },
    {
      name: ["add", "start"],
      description: "Start a ddev project",
      options: [
        { name: ["--all", "-a"], description: "Start all projects" },
        {
          name: ["--select", "-s"],
          description: "Interactively select a project to start",
        },
        {
          name: ["--skip-confirmation", "-y"],
          description: "Skip any confirmation steps",
        },
      ],
    },
    {
      name: ["remove", "rm", "stop"],
      description:
        "Stop and remove the containers of a project. Does not lose or harm anything unless you add --remove-data",
      options: [
        {
          name: ["--all", "-a"],
          description:
            "Stop and remove all running or container-stopped projects and remove from global projects list",
        },
        {
          name: ["--omit-snapshot", "-O"],
          description: "Omit/skip database snapshot",
        },
        {
          name: ["--remove-data", "-R"],
          description: "Remove stored project data (MySQL, logs, etc.)",
        },
        {
          name: ["--select", "-s"],
          description: "Interactively select a project to stop",
        },
        { name: ["--snapshot", "-S"], description: "Create database snapshot" },
        {
          name: "--stop-ssh-agent",
          description: "Stop the ddev-ssh-agent container",
        },
        {
          name: ["--unlist", "-U"],
          description:
            "Remove the project from global project list, it won't show in ddev list until started again",
        },
      ],
    },
    {
      name: "version",
      description: "Print ddev version and component versions",
    },
    {
      name: "help",
      description: "Help about any command",
      subcommands: [
        {
          name: "auth",
          description: "A collection of authentication commands",
          subcommands: [
            {
              name: "ssh",
              description:
                "Add ssh key authentication to the ddev-ssh-auth container",
            },
          ],
        },
        { name: "clean", description: "Removes items ddev has created" },
        {
          name: "composer",
          description: "Executes a composer command within the web container",
          subcommands: [
            {
              name: "create",
              description:
                "Executes 'composer create-project' within the web container with the arguments and flags provided",
            },
            { name: "create-project", description: "" },
          ],
        },
        {
          name: "config",
          description:
            "Create or modify a ddev project configuration in the current directory",
          subcommands: [
            { name: "global", description: "Change global configuration" },
          ],
        },
        {
          name: ["d", "dbg", "debug"],
          description: "A collection of debugging commands",
          subcommands: [
            {
              name: "capabilities",
              description: "Show capabilities of this version of ddev",
            },
            {
              name: "check-db-match",
              description:
                "Verify that the database in the ddev-db server matches the configured type/version",
            },
            {
              name: "compose-config",
              description:
                "Prints the docker-compose configuration of the current project",
            },
            {
              name: "configyaml",
              description: "Prints the project config.*.yaml usage",
            },
            {
              name: "dockercheck",
              description: "Diagnose DDEV docker/colima setup",
            },
            {
              name: "download-images",
              description: "Download all images required by ddev",
            },
            {
              name: "fix-commands",
              description:
                "Fix up custom/shell commands without running ddev start",
            },
            {
              name: "get-volume-db-version",
              description:
                "Get the database type/version found in the ddev-dbserver's database volume, which may not be the same as the configured database type/version",
            },
            {
              name: "migrate-database",
              description:
                "Migrate a mysql or mariadb database to a different dbtype:dbversion; works only with mysql and mariadb, not with postgres",
            },
            {
              name: "mutagen",
              description: "Allows access to any mutagen command",
            },
            {
              name: "nfsmount",
              description:
                "Checks to see if nfs mounting works for current project",
            },
            {
              name: "refresh",
              description: "Refreshes docker cache for project",
            },
            {
              name: "router-nginx-config",
              description: "Prints the nginx config of the router",
            },
            {
              name: "test",
              description:
                "Run diagnostics on ddev using the embedded test_ddev.sh script",
            },
          ],
        },
        {
          name: "delete",
          description:
            "Remove all project information (including database) for an existing project",
          subcommands: [
            {
              name: "images",
              description:
                "Deletes drud/ddev-* docker images not in use by current ddev version",
            },
          ],
        },
        {
          name: ["desc", "st", "status", "describe"],
          description: "Get a detailed description of a running ddev project",
        },
        {
          name: [".", "exec"],
          description:
            "Execute a shell command in the container for a service. Uses the web service by default",
        },
        {
          name: "export-db",
          description: "Dump a database to a file or to stdout",
        },
        {
          name: "get",
          description:
            "Get/Download a 3rd party add-on (service, provider, etc.)",
        },
        { name: "hostname", description: "Manage your hostfile entries" },
        {
          name: "import-db",
          description: "Import a sql file into the project",
        },
        {
          name: "import-files",
          description:
            "Pull the uploaded files directory of an existing project to the default public upload directory of your project",
        },
        { name: ["l", "ls", "list"], description: "List projects" },
        {
          name: "logs",
          description: "Get the logs from your running services",
        },
        {
          name: "mutagen",
          description: "Commands for mutagen status and sync, etc",
          subcommands: [
            { name: "monitor", description: "Monitor mutagen status" },
            { name: "reset", description: "Reset mutagen for project" },
            {
              name: ["st", "status"],
              description: "Shows mutagen sync status",
            },
            { name: "sync", description: "Explicit sync for mutagen" },
          ],
        },
        {
          name: ["sc", "stop-containers", "pause"],
          description:
            "Uses 'docker stop' to pause/stop the containers belonging to a project",
        },
        {
          name: ["powerdown", "poweroff"],
          description: "Completely stop all projects and containers",
        },
        {
          name: "pull",
          description:
            "Pull files and database using a configured provider plugin",
        },
        {
          name: "push",
          description:
            "Push files and database using a configured provider plugin",
        },
        {
          name: "restart",
          description: "Restart a project or several projects",
        },
        {
          name: "service",
          description: "Add or remove, enable or disable extra services",
          subcommands: [
            { name: "disable", description: "Disable a 3rd party service" },
            { name: "enable", description: "Enable a 3rd party service" },
          ],
        },
        {
          name: "share",
          description: "Share project on the internet via ngrok",
        },
        {
          name: "snapshot",
          description: "Create a database snapshot for one or more projects",
        },
        {
          name: "ssh",
          description:
            "Starts a shell session in the container for a service. Uses web service by default",
        },
        { name: ["add", "start"], description: "Start a ddev project" },
        {
          name: ["remove", "rm", "stop"],
          description:
            "Stop and remove the containers of a project. Does not lose or harm anything unless you add --remove-data",
        },
        {
          name: "version",
          description: "Print ddev version and component versions",
        },
      ],
    },
  ],
  options: [
    {
      name: ["--json-output", "-j"],
      description: "If true, user-oriented output will be in JSON format",
      isPersistent: true,
    },
    { name: ["--help", "-h"], description: "Display help", isPersistent: true },
  ],
};
export default completionSpec;
