const projectAliasesGenerator: Fig.Generator = {
  script: ["firebase", "projects:list"], // this calls to a firebase server and is therefore slow
  postProcess: (out) => {
    const getAliasRegex = /^│ (\w.*?)│/gm;
    const aliasesRaw = Array.from(out.matchAll(getAliasRegex));
    aliasesRaw.shift(); // first element is the table header
    return aliasesRaw.map((alias) => {
      return { name: alias[1].trim(), description: "ProjectAlias" };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "firebase",
  description: "",
  subcommands: [
    {
      name: "appdistribution:distribute",
      description: "Upload a distribution",
      args: {
        name: "distribution-file",
      },
      options: [
        {
          name: "--app",
          description: "The app id of your Firebase app",
          args: {},
        },
        {
          name: "--release-notes",
          description: "Release notes to include with this distribution",
        },
        {
          name: "--release-notes-file",
          description:
            "Path to file with release notes to include with this distribution",
          args: {},
        },
        {
          name: "--testers",
          description:
            "A comma separated list of tester emails to distribute to",
          args: {
            isVariadic: true,
          },
        },
        {
          name: "--testers-file",
          description:
            "Path to file with a comma separated list of tester emails to distribute to",
          args: {},
        },
        {
          name: "--groups",
          description:
            "A comma separated list of group aliases to distribute to",
          args: {
            isVariadic: true,
          },
        },
        {
          name: "--groups-file",
          description:
            "Path to file with a comma separated list of group aliases to distribute to",
          args: {
            isVariadic: true,
          },
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "apps:android:sha:create",
      description: "Add a SHA certificate hash for a given app id",
      args: [
        {
          name: "appId",
        },
        {
          name: "shaHash",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "apps:android:sha:delete",
      description: "Delete a SHA certificate hash for a given app id",
      args: [
        {
          name: "appId",
        },
        {
          name: "shaId",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "apps:create",
      description: "Create a new Firebase app",
      args: [
        {
          name: "platform",
        },
        {
          name: "displayName",
        },
      ],
      options: [
        {
          name: ["-a", "--package-name"],
          description: "Required package name for the Android app",
          args: {},
        },
        {
          name: ["-b", "--bundle-id"],
          description: "Required bundle id for the iOS app",
          args: {},
        },
        {
          name: ["-s", "--app-store-id"],
          description: "(optional) app store id for the iOS app",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "auth:export",
      description:
        "Export accounts from your Firebase project into a data file",
      args: {
        name: "dataFile",
        template: "filepaths",
      },
      options: [
        {
          name: "--format",
          description:
            "Format of exported data (csv, json). Ignored if [dataFile] has format extension",
          args: {
            suggestions: [
              {
                name: "csv",
              },
              {
                name: "json",
              },
            ],
          },
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "auth:import",
      description:
        "Import users into your Firebase project from a data file(.csv or .json)",
      args: {
        name: "dataFile",
        template: "filepaths",
      },
      options: [
        {
          name: "--hash-algo",
          description:
            "Specify the hash algorithm used in password for these accounts",
          args: {},
        },
        {
          name: "--hash-key",
          description: "Specify the key used in hash algorithm",
          args: {},
        },
        {
          name: "--salt-separator",
          description:
            "Specify the salt separator which will be appended to salt when verifying password. only used by SCRYPT now",
          args: {},
        },
        {
          name: "--rounds",
          description: "Specify how many rounds for hash calculation",
          args: {},
        },
        {
          name: "--mem-cost",
          description:
            "Specify the memory cost for firebase scrypt, or cpu/memory cost for standard scrypt",
          args: {},
        },
        {
          name: "--parallelization",
          description: "Specify the parallelization for standard scrypt",
          args: {},
        },
        {
          name: "--block-size",
          description:
            "Specify the block size (normally is 8) for standard scrypt",
          args: {},
        },
        {
          name: "--dk-len",
          description: "Specify derived key length for standard scrypt",
          args: {},
        },
        {
          name: "--hash-input-order",
          description:
            "Specify the order of password and salt. Possible values are SALT_FIRST and PASSWORD_FIRST. MD5, SHA1, SHA256, SHA512, HMAC_MD5, HMAC_SHA1, HMAC_SHA256, HMAC_SHA512 support this flag",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "database:get",
      description: "Fetch and print JSON data at the specified path",
      args: {
        name: "path",
      },
    },
    {
      name: "database:instances:create",
      description: "Create a realtime database instance",
      args: {
        name: "instanceName",
      },
      options: [
        {
          name: ["-l", "--location"],
          description:
            "(optional) location for the database instance, defaults to us-central1",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "database:instances:list",
      description:
        "List realtime database instances, optionally filtered by a specified location",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "database:profile",
      description: "Profile the Realtime Database and generate a usage report",
      options: [
        {
          name: ["-o", "--output"],
          description: "Save the output to the specified file",
          args: {},
        },
        {
          name: ["-d", "--duration"],
          description:
            "Collect database usage information for the specified number of seconds",
          args: {},
        },
        {
          name: "--raw",
          description:
            "Output the raw stats collected as newline delimited json",
          args: {},
        },
        {
          name: "--no-collapse",
          description:
            "Prevent collapsing similar paths into $wildcard locations",
        },
        {
          name: ["-i", "--input"],
          description:
            "Generate the report based on the specified file instead of streaming logs from the database",
          args: {},
        },
        {
          name: "--instance",
          description:
            "Use the database <instance>.firebaseio.com (if omitted, use default database instance)",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "database:push",
      description: "Add a new JSON object to a list of data in your Firebase",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        {
          name: ["-d", "--data"],
          description: "Specify escaped JSON directly",
          args: {},
        },
        {
          name: "--instance",
          description:
            "Use the database <instance>.firebaseio.com (if omitted, use default database instance)",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "database:remove",
      description: "Remove data from your Firebase at the specified path",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        {
          name: ["-y", "--confirm"],
          description: "Pass this option to bypass confirmation prompt",
        },
        {
          name: "--instance",
          description:
            "Use the database <instance>.firebaseio.com (if omitted, use default database instance)",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "database:set",
      description:
        "Store JSON data at the specified path via STDIN, arg, or file",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        {
          name: ["-d", "--data"],
          description: "Specify escaped JSON directly",
          args: {},
        },
        {
          name: ["-y", "--confirm"],
          description: "Pass this option to bypass confirmation prompt",
        },
        {
          name: "--instance",
          description:
            "Use the database <instance>.firebaseio.com (if omitted, use default database instance)",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "database:settings:get",
      description:
        "Store JSON data at the specified path via STDIN, arg, or file",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        {
          name: "--instance",
          description:
            "Use the database <instance>.firebaseio.com (if omitted, uses default database instance)",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "database:settings:set",
      description: "Set the realtime database setting at path",
      args: [
        {
          name: "path",
        },
        {
          name: "value",
        },
      ],
      options: [
        {
          name: "--instance",
          description:
            "Use the database <instance>.firebaseio.com (if omitted, use default database instance)",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "database:update",
      description:
        "Update some of the keys for the defined path in your Firebase",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        {
          name: ["-d", "--data"],
          description: "Specify escaped JSON directly",
          args: {},
        },
        {
          name: ["-y", "--confirm"],
          description: "Pass this option to bypass confirmation prompt",
        },
        {
          name: "--instance",
          description:
            "Use the database <instance>.firebaseio.com (if omitted, use default database instance)",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "deploy",
      description: "Deploy code and assets to your Firebase project",
      options: [
        {
          name: ["-p", "--public"],
          description:
            "Override the Hosting public directory specified in firebase.json",
        },
        {
          name: ["-m", "--message"],
          description: "An optional message describing this deploy",
          args: {},
        },
        {
          name: ["-f", "--force"],
          description:
            "Delete Cloud Functions missing from the current working directory without confirmation",
        },
        {
          name: "--only",
          description:
            'Only deploy to specified, comma-separated targets (e.g. "hosting,storage"). For functions, can specify filters with colons to scope function deploys to only those functions (e.g. "--only functions:func1,functions:func2"). When filtering based on export groups (the exported module object keys), use dots to specify group names (e.g. "--only functions:group1.subgroup1,functions:group2)"',
        },
        {
          name: "--except",
          description:
            'Deploy to all targets except specified (e.g. "database")',
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "emulators:exec",
      description:
        "Start the local Firebase emulators, run a test script, then shut down the emulators",
      args: {
        name: "script",
      },
      options: [
        {
          name: "--only",
          description:
            'Only specific emulators. This is a comma separated list of emulator names. Valid options are: ["auth","functions","firestore","database","hosting","pubsub"]',
          args: {},
        },
        {
          name: "--inspect-functions",
          description:
            "Emulate Cloud Functions in debug mode with the node inspector on the given port (9229 if not specified)",
        },
        {
          name: "--import",
          description:
            "Import emulator data from a previous export (see emulators:export)",
          args: {},
        },
        {
          name: "--export-on-exit",
          description:
            "Automatically export emulator data (emulators:export) when the emulators make a clean exit (SIGINT), when no dir is provided the location of --import [dir] is used",
        },
        {
          name: "--ui",
          description: "Run the Emulator UI",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "emulators:export",
      description: "Export data from running emulators",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        {
          name: "--only",
          description:
            'Only specific emulators. This is a comma separated list of emulator names. Valid options are: ["auth","functions","firestore","database","hosting","pubsub"]',
          args: {},
        },
        {
          name: "--force",
          description: "Overwrite any export data in the target directory",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "emulators:start",
      description: "Start the local Firebase emulators",
      options: [
        {
          name: "--only",
          description:
            'Only specific emulators. This is a comma separated list of emulator names. Valid options are: ["auth","functions","firestore","database","hosting","pubsub"]',
          args: {},
        },
        {
          name: "--inspect-functions",
          description:
            "Emulate Cloud Functions in debug mode with the node inspector on the given port (9229 if not specified)",
          args: {},
        },
        {
          name: "--import",
          description:
            "Import emulator data from a previous export (see emulators:export)",
        },
        {
          name: "--export-on-exit",
          description:
            "Automatically export emulator data (emulators:export) when the emulators make a clean exit (SIGINT), when no dir is provided the location of --import [dir] is used",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "experimental:functions:shell",
      description: "Launch full Node shell with emulated functions",
      options: [
        {
          name: ["-p", "--port"],
          description:
            "The port on which to emulate functions (default: 5000) (default: 5000)",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "ext:configure",
      description: "Configure an existing extension instance",
      args: {
        name: "extensionInstanceId",
      },
      options: [
        {
          name: "--params",
          description: "Path of params file with .env format",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "ext:info",
      description:
        "List all the extensions that are installed in your Firebase project",
      args: {
        name: "extensionName",
      },
      options: [
        {
          name: "--markdown",
          description:
            "Output info in Markdown suitable for constructing a README file",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "ext:uninstall",
      description:
        "Uninstall an extension that is installed in your Firebase project by instance ID",
      args: {
        name: "extensionInstanceId",
      },
      options: [
        {
          name: ["-f", "--force"],
          description:
            "No confirmation. Otherwise, a confirmation prompt will appear",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "ext:update",
      description:
        "Update an existing extension instance to the latest version",
      args: {
        name: "extensionInstanceId",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "firestore:delete",
      description: "Delete data from Cloud Firestore",
      args: {
        name: "path",
      },
      options: [
        {
          name: ["-r", "--recursive"],
          description:
            "Recursive. Delete all documents and subcollections at and under the specified level. May not be passed along with",
        },
        {
          name: "--shallow",
          description:
            "Shallow. Delete only documents at the specified level and ignore documents in subcollections. This action can potentially orphan documents nested in subcollections. May not be passed along with -r",
        },
        {
          name: "--all-collections",
          description:
            "Delete all. Deletes the entire Firestore database, including all collections and documents. Any other flags or arguments will be ignored",
        },
        {
          name: ["-y", "--yes"],
          description:
            "No confirmation. Otherwise, a confirmation prompt will appear",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "firestore:indexes",
      description: "List indexes in your project's Cloud Firestore database",
      options: [
        {
          name: "--pretty",
          description:
            "Pretty print. When not specified the indexes are printed in the JSON specification format",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "functions:config:clone",
      description: "Clone environment config from another project",
      options: [
        {
          name: "--from",
          description: "The project from which to clone configuration",
          args: {},
        },
        {
          name: "--only",
          description: "A comma-separated list of keys to clone",
          args: {},
        },
        {
          name: "--except",
          description: "A comma-separated list of keys to not clone",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "functions:config:get",
      description: "Fetch environment config stored at the given path",
      args: {
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "functions:config:set",
      description: "Set environment config with key=value syntax",
      args: {
        name: "values",
        isVariadic: true,
        description: "Key=value",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "functions:log",
      description: "Read logs from deployed functions",
      options: [
        {
          name: "--only",
          description:
            'Only show logs of specified, comma-separated functions (e.g. "funcA,funcB")',
          args: {},
        },
        {
          name: ["-n", "--lines"],
          description: "Specify number of log lines to fetch",
          args: {},
        },
        {
          name: "--open",
          description: "Open logs page in web browser",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "functions:shell",
      description: "Launch full Node shell with emulated functions",
      options: [
        {
          name: ["-p", "--port"],
          description: "The port on which to emulate functions",
          args: {},
        },
        {
          name: "--inspect-functions",
          description:
            "Emulate Cloud Functions in debug mode with the node inspector on the given port (9229 if not specified)",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "help",
      description: "Display help information",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "hosting:channel:create",
      description: "Create a Firebase Hosting channel",
      args: {
        name: "channelId",
      },
      options: [
        {
          name: ["-e", "--expires"],
          description:
            "Duration string (e.g. 12h or 30d) for channel expiration, max 30d",
          args: {},
        },
        {
          name: "--site",
          description: "Site for which to create the channel",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "hosting:channel:delete",
      description: "Delete a Firebase Hosting channel",
      args: {
        name: "channelId",
      },
      options: [
        {
          name: "--site",
          description: "Site in which the channel exists",
          args: {},
        },
        {
          name: ["-f", "--force"],
          description: "Delete without confirmation",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "hosting:channel:deploy",
      description: "Deploy to a specific Firebase Hosting channel",
      args: {
        name: "channelId",
      },
      options: [
        {
          name: ["-e", "--expires"],
          description:
            "Duration string (e.g. 12h, 30d) for channel expiration, max 30d; defaults to 7d",
          args: {},
        },
        {
          name: "--only",
          description: "Only create previews for specified targets",
        },
        {
          name: "--open",
          description: "Open a browser to the channel after deploying",
        },
        {
          name: "--no-authorized-domains",
          description: "Do not sync channel domains with Firebase Auth",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "hosting:channel:list",
      description: "List all Firebase Hosting channels for your project",
      options: [
        {
          name: "--site",
          description: "List channels for the specified site",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "hosting:channel:open",
      description: "Opens the URL for a Firebase Hosting channel",
      args: {
        name: "channelId",
      },
      options: [
        {
          name: "--site",
          description: "The site to which the channel belongs",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "hosting:clone",
      description: "Clone a version from one site to another",
      args: [
        {
          name: "source",
        },
        {
          name: "targetChannel",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "hosting:disable",
      description: "Stop serving web traffic to your Firebase Hosting site",
      options: [
        {
          name: ["-y", "--confirm"],
          description: "Skip confirmation",
        },
        {
          name: ["-s", "--site"],
          description: "The site to disable",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "hosting:sites:create",
      description: "Create a Firebase Hosting site",
      args: {
        name: "siteId",
      },
      options: [
        {
          name: "--app",
          description: "Specify an existing Firebase Web App ID",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "hosting:sites:delete",
      description: "Delete a Firebase Hosting site",
      args: {
        name: "siteId",
      },
      options: [
        {
          name: ["-f", "--force"],
          description: "Delete without confirmation",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "hosting:sites:get",
      description: "Print info about a Firebase Hosting site",
      args: {
        name: "siteId",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "hosting:sites:list",
      description: "List Firebase Hosting sites",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "init",
      description: "Setup a Firebase project in the current directory",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "login",
      description: "Log the CLI into Firebase",
      options: [
        {
          name: "--no-localhost",
          description:
            "Copy and paste a code instead of starting a local server for authentication",
        },
        {
          name: "--reauth",
          description: "Force reauthentication even if already logged in",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "login:add",
      description: "Authorize the CLI for an additional account",
      args: { name: "email" },
      options: [
        {
          name: "--no-localhost",
          description:
            "Copy and paste a code instead of starting a local server for authentication",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "login:ci",
      description:
        "Generate an access token for use in non-interactive environments",
      options: [
        {
          name: "--no-localhost",
          description:
            "Copy and paste a code instead of starting a local server for authentication",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "login:list",
      description: "List authorized CLI accounts",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "login:use",
      description: "Set the default account to use for this project directory",
      args: {
        name: "email",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "logout",
      description: "Log the CLI out of Firebase",
      args: {
        name: "email",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "open",
      description: "Quickly open a browser to relevant project resources",
      args: {
        name: "link",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "projects:addfirebase",
      description: "Add Firebase resources to a Google Cloud Platform project",
      args: { name: "projectId" },
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "projects:create",
      description:
        "Creates a new Google Cloud Platform project, then adds Firebase resources to the project",
      args: { name: "projectId" },
      options: [
        {
          name: ["-n", "--display-name"],
          description: "(optional) display name for the project",
          args: {},
        },
        {
          name: ["-o", "--organization"],
          description:
            "(optional) ID of the parent Google Cloud Platform organization under which to create this project",
          args: {},
        },
        {
          name: ["-f", "--folder"],
          description:
            "(optional) ID of the parent Google Cloud Platform folder in which to create this project",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "projects:list",
      description: "List all Firebase projects you have access to",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "remoteconfig:get",
      description: "Get a Firebase project's Remote Config template",
      options: [
        {
          name: ["-v", "--version-number"],
          description: "Grabs the specified version of the template",
        },
        {
          name: ["-o", "--output"],
          description:
            "Write config output to a filename (if omitted, will use the default file path)",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "remoteconfig:rollback",
      description:
        "Roll back a project's published Remote Config template to the one specified by the provided version number",
      options: [
        {
          name: ["-v", "--version-number"],
          description: "Rollback to the specified version of the template",
          args: {},
        },
        {
          name: "--force",
          description:
            "Rollback template to the specified version without confirmation",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "remoteconfig:versions:list",
      description:
        "Get a list of Remote Config template versions that have been published for a Firebase project",
      options: [
        {
          name: "--limit",
          description:
            "Limit the number of versions being returned. Pass '0' to fetch all versions",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "serve",
      description: "Start a local server for your static assets",
      options: [
        {
          name: ["-p", "--port"],
          description:
            "The port on which to listen (default: 5000) (default: 5000)",
          args: {},
        },
        {
          name: ["-o", "--host"],
          description:
            'The host on which to listen (default: localhost) (default: "localhost")',
          args: {},
        },
        {
          name: "--only",
          description:
            "Only serve specified targets (valid targets are: hosting, functions)",
        },
        {
          name: "--except",
          description:
            "Serve all except specified targets (valid targets are: hosting, functions)",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "setup:emulators:database",
      description: "Downloads the database emulator",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "setup:emulators:firestore",
      description: "Downloads the firestore emulator",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "setup:emulators:pubsub",
      description: "Downloads the pubsub emulator",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "setup:emulators:ui",
      description: "Downloads the ui emulator",
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "target",
      description: "Display configured deploy targets for the current project",
      args: { name: "type" },
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "target:apply",
      description: "Apply a deploy target to a resource",
      args: [
        {
          name: "type",
        },
        {
          name: "name",
        },
        {
          name: "resources",
          isVariadic: true,
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "target:clear",
      description: "Clear all resources from a named resource target",
      args: [
        {
          name: "type",
        },
        {
          name: "target",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "target:remove",
      description: "Remove a resource target",
      args: [
        {
          name: "type",
        },
        {
          name: "resource",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
    {
      name: "use",
      description: "Set an active Firebase project for your working directory",
      args: {
        name: "alias or project id",
        generators: projectAliasesGenerator,
      },
      options: [
        {
          name: "--add",
          description: "Create a new project alias interactively",
          args: {},
        },
        {
          name: "--alias",
          description: "Create a new alias for the provided project id",
          args: {},
        },
        {
          name: "--unalias",
          description: "Remove an already created project alias",
          args: {},
        },
        {
          name: "--clear",
          description: "Clear the active project selection",
        },
        {
          name: ["-h", "--help"],
          description: "Output usage information",
        },
      ],
    },
  ],
};

export default completionSpec;
