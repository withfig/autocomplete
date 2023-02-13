import { filepaths } from "@fig/autocomplete-generators";

const generators: Record<string, Fig.Generator> = {
  jsonFileGenerator: filepaths({ extensions: ["json"] }),
};

const appArg: Fig.Arg = {
  name: "app name",
};

const keyArg: Fig.Arg = {
  name: "key",
};

const nameArg: Fig.Arg = {
  name: "name",
};

const numberArg: Fig.Arg = {
  name: "number",
};

const pathArg: Fig.Arg = {
  name: "path",
  template: "filepaths",
};

const platformArg: Fig.Arg = {
  name: "platform",
  isOptional: true,
  suggestions: ["systemd", "upstart", "launchd", "rcd"],
};

const jsonFileArg: Fig.Arg = {
  name: "json",
  generators: generators.jsonFileGenerator,
};

const sharedOptions: Fig.Option[] = [
  {
    name: ["-V", "--version"],
    description: "Outputs the version number",
  },
  {
    name: "-v",
    description: "Gets version",
  },
  {
    name: ["-s", "--silent"],
    description: "Hides all messages",
  },
  {
    name: ["-m", "--mini-list"],
    description: "Displays a compacted list without formatting",
  },
  {
    name: ["-f", "--force"],
    description: "Forces actions",
  },
  {
    name: "--disable-logs",
    description: "Do not write logs",
  },
  {
    name: ["-n", "--name"],
    description: "Sets a name for script",
    args: nameArg,
  },
  {
    name: ["-i", "--instances"],
    description:
      "Launches [number] instances (for networked app)(load balanced)",
    args: numberArg,
  },
  {
    name: "--parallel",
    description: "Number of parallel actions (for restart/reload)",
    args: numberArg,
  },
  {
    name: ["-l", "--log"],
    description: "Specifies entire log file (error and out are both included)",
    args: {
      ...pathArg,
      isOptional: true,
    },
  },
  {
    name: ["-o", "--output"],
    description: "Specifies out log file",
    args: pathArg,
  },
  {
    name: ["-e", "--error"],
    description: "Specifies error log file",
    args: pathArg,
  },
  {
    name: ["-p", "--pid"],
    description: "Specify pid file",
    args: {
      name: "pid",
      template: "filepaths",
    },
  },
  {
    name: ["-k", "--kill-timeout"],
    description: "Delays before sending final SIGKILL signal to process",
    args: {
      name: "delay",
    },
  },
  {
    name: "--listen-timeout",
    description: "Listen timeout on application reload",
    args: {
      name: "delay",
    },
  },
  {
    name: "--max-memory-restart",
    description:
      "Specify max memory amount used to autorestart (in octet or use syntax like 100M)",
    args: {
      name: "memory",
    },
  },
  {
    name: "--restart-delay",
    description: "Specify a delay between restarts (in milliseconds)",
    args: {
      name: "delay",
    },
  },
  {
    name: "--env",
    description: "Specify environment to get specific env variables",
    args: {
      name: "Environment Name",
    },
  },
  {
    name: "--log-type",
    description: "Specify log output style (raw by default, json optional)",
    args: {
      name: "type",
      default: "raw",
    },
  },
  {
    name: ["-x", "--execute-command"],
    description: "Execute a program using fork system",
  },
  {
    name: "--max-restarts",
    description: "Only Restart the script COUNT times",
    args: {
      name: "Count",
      isOptional: true,
    },
  },
  {
    name: ["-u", "--user"],
    description: "Defines user when generating startup script",
    args: {
      name: "username",
    },
  },
  {
    name: "--uid",
    description: "Runs target script with <uid> rights",
    args: {
      name: "uid",
    },
  },
  {
    name: "--gid",
    description: "Runs target script with <gid> rights",
    args: {
      name: "gid",
    },
  },
  {
    name: "--cwd",
    description: "Runs target script as <username>",
    args: pathArg,
  },
  {
    name: "--hp",
    description: "Defines home path when generating startup script",
    args: {
      name: "home path",
      template: "folders",
    },
  },
  {
    name: "--wait-ip",
    description:
      "Overrides systemd script to wait for full internet connectivity to launch pm2",
  },
  {
    name: "--service-name",
    description: "Defines service name when generating startup script",
    args: nameArg,
  },
  {
    name: ["-c", "--cron"],
    description: "Restarts a running process based on a cron pattern",
    args: {
      name: "Cron Pattern",
    },
  },
  {
    name: ["-w", "--write"],
    description: "Writes configuration in local folder",
  },
  {
    name: "--interpreter",
    description:
      "The interpreter pm2 should use for executing app (bash, python…)",
    args: {
      name: "interpreter",
    },
  },
  {
    name: "--interpreter-args",
    description: "Interprets options (alias of –node-args)",
    args: {
      name: "Arguments",
    },
  },
  {
    name: "--log-date-format",
    description: "Adds custom prefix timestamp to logs",
    args: {
      name: "Date Format",
    },
  },
  {
    name: "--no-daemon",
    description:
      "Runs pm2 daemon in the foreground if it doesn’t exist already",
  },
  {
    name: ["-a", "--update-env"],
    description: "Updates environment on restart/reload (-a <=> apply)",
  },
  { name: "–-source-map-support", description: "Force source map support" },
  {
    name: "–-only",
    description: "With json declaration, allow to only act on one application",
    args: appArg,
  },
  {
    name: "–-disable-source-map-support",
    description: "Force source map support",
  },
  {
    name: "–-wait-ready",
    description: "Asks pm2 to wait for ready event from your app",
  },
  {
    name: "–-merge-logs",
    description:
      "Merges logs from different instances but keep error and out separated",
  },
  {
    name: "–-watch",
    description: "Watches application folder for changes (default: )",
    args: {
      name: "paths",
      template: ["folders"],
      isVariadic: true,
    },
  },
  {
    name: "–-ignore-watch",
    description: "Folder/files to be ignored watching",
    args: {
      name: "Folder or Files",
      template: ["folders", "filepaths"],
      isVariadic: true,
    },
  },
  {
    name: "–-node-args",
    description: "Space delimited arguments to pass to node in cluster mode",
    args: {
      name: "Node Args",
      description: "–node-args=`–debug=7001 –trace-deprecation`",
    },
  },
  { name: "–-no-color", description: "Skip colors" },
  {
    name: "–-no-vizion",
    description: "Starts an app without vizion feature (versioning control)",
  },
  {
    name: "–-no-autorestart",
    description: "Starts an app without automatic restart",
  },
  {
    name: "–-no-treekill",
    description: "Only kills the main process, not detached children",
  },
  { name: "–-no-pmx", description: "Starts an app without apm" },
  { name: "–-no-automation", description: "Starts an app without apm" },
  { name: "–-trace", description: "Enables transaction tracing with km" },
  {
    name: "–-disable-trace",
    description: "Disables transaction tracing with km",
  },
  {
    name: "–-attach",
    description: "Attaches logging after your start/restart/stop/reload",
  },
  {
    name: "–-sort",
    description: "Sort process according to field’s name",
    args: {
      name: "field name",
      description: "Field_name:sort",
    },
  },
  { name: "–-v8", description: "Enables v8 data collecting" },
  {
    name: "–-event-loop-inspector",
    description: "Enables event-loop-inspector dump in apm",
  },
  {
    name: "–-deep-monitoring",
    description:
      "Enables all monitoring tools (equivalent to –v8 –event-loop-inspector –trace)",
  },
  { name: ["-h", "–-help"], description: "Outputs usage information" },
];

const completionSpec: Fig.Spec = {
  name: "pm2",
  description: "Daemon process manager",
  subcommands: [
    {
      name: "start",
      description: "Starts and daemonizes an app",
      options: sharedOptions,
      args: {
        name: "file, json, stdin, app name, pm id, etc",
      },
    },
    {
      name: "trigger",
      description: "Deploy your json",
      args: [
        {
          name: "Proc Name",
        },
        {
          name: "Action Name",
        },
        {
          name: "Params",
          isOptional: true,
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy your json",
      args: {
        name: "File or environment",
        template: "filepaths",
      },
    },
    {
      name: "startOrRestart",
      description: "Start or restart JSON file",
      args: jsonFileArg,
    },
    {
      name: "startOrReload",
      description: "Start or gracefully reload JSON file",
      args: jsonFileArg,
    },
    {
      name: "pid",
      description: "Return pid of the specified app or all",
      args: {
        ...appArg,
        isOptional: true,
      },
    },
    {
      name: "startOrGracefulReload",
      description: "Start or gracefully reolad JSON file",
      args: jsonFileArg,
    },
    {
      name: "stop",
      description: "Stop a process",
      options: sharedOptions,
      args: {
        name: "id, name, all, json, stdin, etc",
      },
    },
    {
      name: "restart",
      description: "Restart a process",
      options: sharedOptions,
      args: {
        name: "id, name, all, json, stdin, etc",
      },
    },
    {
      name: "scale",
      description:
        "Scale up/down a process in cluster mode depending on the `number` param",
      args: [appArg, numberArg],
    },
    {
      name: "snapshot",
      description: "Snapshot PM2 memory",
    },
    {
      name: "profile",
      description: "Profile CPU",
      args: {
        name: "command",
      },
    },
    {
      name: "reload",
      description: "Reload processes (for apps using HTTP/HTTPS)",
      args: {
        name: "name or all",
      },
    },
    {
      name: "gracefulReload",
      description:
        "Gracefully reload a process. Send a “shutdown” message to close all connections",
      args: {
        name: "name or all",
      },
    },
    {
      name: "id",
      description: "Get process id by name",
      args: nameArg,
    },
    {
      name: "delete",
      description: "Stops and deletes a process from pm2 process list",
      args: {
        name: "name, id, script, all, json, stdin, etc",
      },
    },
    {
      name: "sendSignal",
      description: "Send a system signal to the target process",
      args: [
        {
          name: "signal",
        },
        {
          name: "pm2_id or name",
        },
      ],
    },
    {
      name: "ping",
      description: "Ping pm2 daemon - if not it will launch up",
    },
    {
      name: "updatePM2",
      description: "Update in-memory PM2 with local PM2",
    },
    {
      name: "update",
      description: "(alias) update in-memory PM2 with local PM2",
    },
    {
      name: ["install", "module:install"],
      description: "Install or update a module and run it forever",
      options: sharedOptions,
      args: {
        name: "module or git://",
        isOptional: true,
      },
    },
    {
      name: "module:generate",
      description: "Generate a sample module in current folder",
      args: {
        ...appArg,
        isOptional: true,
      },
    },
    {
      name: ["uninstall", "module:uninstall"],
      description: "Stop and uninstall a module",
      args: {
        name: "module",
      },
    },
    {
      name: ["publish", "module:publish"],
      description: "Publish the module you are currently on",
    },
    {
      name: "set",
      description: "Sets the specified config",
      args: [
        {
          ...keyArg,
          isOptional: true,
        },
        {
          name: "value",
          isOptional: true,
        },
      ],
    },
    {
      name: "multiset",
      description: "Multiset eg `key1 val1 key2 val2`",
      args: {
        name: "key value",
        isVariadic: true,
      },
    },
    {
      name: "get",
      description: "Get value for the specified key",
      args: {
        ...keyArg,
        isOptional: true,
      },
    },
    {
      name: "conf",
      description: "Get / set module config values",
      args: [
        {
          ...keyArg,
          isOptional: true,
        },
        {
          name: "value",
          isOptional: true,
        },
      ],
    },
    {
      name: "config",
      description: "Get / set module config values",
      args: [
        keyArg,
        {
          name: "value",
          isOptional: true,
        },
      ],
    },
    {
      name: "unset",
      description: "Clears the specified config key",
      args: keyArg,
    },
    {
      name: "report",
      description:
        "Give a full pm2 report for https://github.com/Unitech/pm2/issues",
    },
    {
      name: ["link", "interact"],
      description: "Linking action to keymetrics.io",
      options: sharedOptions,
      args: [
        {
          name: "secret",
          isOptional: true,
        },
        {
          name: "public",
          isOptional: true,
        },
        {
          ...nameArg,
          isOptional: true,
        },
      ],
    },
    {
      name: "unlink",
      description: "Linking action to keymetrics.io",
    },
    {
      name: "unmonitor",
      description: "Unmonitor target process",
      args: nameArg,
    },
    {
      name: "monitor",
      description: "<Unm>onitor target process",
      args: nameArg,
    },
    {
      name: "open",
      description: "Open dashboard in browser",
    },
    {
      name: "register",
      description: "Create an account on keymetrics",
    },
    {
      name: "login",
      description: "Login to keymetrics and link current PM2",
    },
    {
      name: "web",
      description: "Launch a health API on 0.0.0.0:9615",
    },
    {
      name: ["dump", "save"],
      description: "Dump all processes for resurrecting them later",
    },
    {
      name: "send",
      description: "Send stdin to pm id",
      args: [
        {
          name: "pm id",
        },
        {
          name: "line",
        },
      ],
    },
    {
      name: "attach",
      description: "Attach stdin/stdout to application identified by pm id",
      args: [
        {
          name: "pm id",
        },
        {
          name: "command",
          isOptional: true,
        },
      ],
    },
    {
      name: "resurrect",
      description: "Resurrect previously dumped processes",
    },
    {
      name: "unstartup",
      description: "Disable and clear auto startup",
      args: platformArg,
    },
    {
      name: "startup",
      description: "Setup script for pm2 at boot",
      args: platformArg,
    },
    {
      name: "logrotate",
      description: "Copy default logrotate configuration",
    },
    {
      name: ["ecosystem", "init"],
      description: "Generate a process conf file",
      args: {
        name: "mode",
        isOptional: true,
        suggestions: ["null", "simple"],
      },
    },
    {
      name: "reset",
      description: "Reset counters for process",
      args: {
        name: "name, id, or all",
      },
    },
    {
      name: "describe",
      description: "Describe all parameters of a process id",
      args: {
        name: "id",
      },
    },
    {
      name: ["desc", "info", "show"],
      description: "(alias) Describe all parameters of a process id",
      args: {
        name: "id",
      },
    },
    {
      name: ["list", "ls"],
      description: "List all processes",
    },
    {
      name: ["l", "ps", "status"],
      description: "(alias) list all processes",
    },
    {
      name: "jlist",
      description: "List all processes in JSON format",
    },
    {
      name: "prettylist",
      description: "Print json in a prettified JSON",
    },
    {
      name: "monit",
      description: "Launch termcaps monitoring",
    },
    {
      name: "imonit",
      description: "Launch legacy termcaps monitoring",
    },
    {
      name: ["dashboard", "dash"],
      description: "Launch dashboard with monitoring and logs",
    },
    {
      name: "flush",
      description: "Flush logs",
    },
    {
      name: "reloadLogs",
      description: "Reload all logs",
    },
    {
      name: "logs",
      description: "Stream logs logs file",
      options: sharedOptions,
      args: {
        name: "id or name",
      },
    },
    {
      name: "kill",
      description: "Kill daemon",
    },
    {
      name: "pull",
      description: "Updates repository for a given app",
      args: [
        nameArg,
        {
          name: "commit id",
          isOptional: true,
        },
      ],
    },
    {
      name: "forward",
      description: "Updates repository to the next commit for a given app",
      args: nameArg,
    },
    {
      name: "backward",
      description:
        "Downgrades repository to the previous commit for a given app",
      args: nameArg,
    },
    {
      name: "gc",
      description: "Force PM2 to trigger garbage collection",
    },
    {
      name: "deepUpdate",
      description: "Performs a deep update of PM2",
    },
    {
      name: ["serve", "expose"],
      description: "Serves a directory over http via port",
      args: [
        {
          name: "path",
          isOptional: true,
        },
        {
          name: "port",
          isOptional: true,
        },
      ],
    },
  ],
  options: sharedOptions,
};

export default completionSpec;
