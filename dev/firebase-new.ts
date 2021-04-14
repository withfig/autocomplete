export const completionSpec: Fig.Spec = {
  name: "firebase",
  description: "",
  subcommands: [
    {
      name: "appdistribution:distribute",
      description:
        "Usage: firebase appdistribution:distribute [options] <distribution-file>",
      options: [
        {
          name: ["--app"],
          description: "the app id of your Firebase app\n",
          args: {},
        },
        {
          name: ["--release-notes"],
          description: "release notes to include with this distribution\n",
          args: {},
        },
        {
          name: ["--release-notes-file"],
          description:
            "path to file with release notes to include with this distribution\n",
          args: {},
        },
        {
          name: ["--testers"],
          description:
            "a comma separated list of tester emails to distribute to\n",
          args: {},
        },
        {
          name: ["--testers-file"],
          description:
            "path to file with a comma separated list of tester emails to distribute to\n",
          args: {},
        },
        {
          name: ["--groups"],
          description:
            "a comma separated list of group aliases to distribute to\n",
          args: {},
        },
        {
          name: ["--groups-file"],
          description:
            "path to file with a comma separated list of group aliases to distribute to\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "apps:android:sha:create",
      description:
        "Usage: firebase apps:android:sha:create [options] <appId> <shaHash>",
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
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "apps:android:sha:delete",
      description:
        "Usage: firebase apps:android:sha:delete [options] <appId> <shaId>",
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
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "apps:create",
      description:
        "Usage: firebase apps:create [options] [platform] [displayName]",
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
          description: "required package name for the Android app\n",
          args: {},
        },
        {
          name: ["-b", "--bundle-id"],
          description: "required bundle id for the iOS app\n",
          args: {},
        },
        {
          name: ["-s", "--app-store-id"],
          description: "(optional) app store id for the iOS app\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "auth:export",
      description: "Usage: firebase auth:export [options] [dataFile]",
      args: {
        name: "dataFile",
        template: "filepaths",
      },
      options: [
        {
          name: ["--format"],
          description:
            "Format of exported data (csv, json). Ignored if [dataFile] has format extension.\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "auth:import",
      description: "Usage: firebase auth:import [options] [dataFile]",
      args: {
        name: "dataFile",
        template: "filepaths",
      },
      options: [
        {
          name: ["--hash-algo"],
          description:
            "specify the hash algorithm used in password for these accounts\n",
          args: {},
        },
        {
          name: ["--hash-key"],
          description: "specify the key used in hash algorithm\n",
          args: {},
        },
        {
          name: ["--salt-separator"],
          description:
            "specify the salt separator which will be appended to salt when verifying password. only used by SCRYPT now.\n",
          args: {},
        },
        {
          name: ["--rounds"],
          description: "specify how many rounds for hash calculation.\n",
          args: {},
        },
        {
          name: ["--mem-cost"],
          description:
            "specify the memory cost for firebase scrypt, or cpu/memory cost for standard scrypt\n",
          args: {},
        },
        {
          name: ["--parallelization"],
          description: "specify the parallelization for standard scrypt.\n",
          args: {},
        },
        {
          name: ["--block-size"],
          description:
            "specify the block size (normally is 8) for standard scrypt.\n",
          args: {},
        },
        {
          name: ["--dk-len"],
          description: "specify derived key length for standard scrypt.\n",
          args: {},
        },
        {
          name: ["--hash-input-order"],
          description:
            "specify the order of password and salt. Possible values are SALT_FIRST and PASSWORD_FIRST. MD5, SHA1, SHA256, SHA512, HMAC_MD5, HMAC_SHA1, HMAC_SHA256, HMAC_SHA512 support this flag.\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "database:instances:create",
      description:
        "Usage: firebase database:instances:create [options] <instanceName>",
      args: {
        name: "instanceName",
      },
      options: [
        {
          name: ["-l", "--location"],
          description:
            "(optional) location for the database instance, defaults to us-central1\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "database:instances:list",
      description: "Usage: firebase database:instances:list [options]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "database:profile",
      description: "Usage: firebase database:profile [options]",
      options: [
        {
          name: ["-o", "--output"],
          description: "save the output to the specified file\n",
          args: {},
        },
        {
          name: ["-d", "--duration"],
          description:
            "collect database usage information for the specified number of seconds\n",
          args: {},
        },
        {
          name: ["--raw"],
          description:
            "output the raw stats collected as newline delimited json\n",
          args: {},
        },
        {
          name: ["--no-collapse"],
          description:
            "prevent collapsing similar paths into $wildcard locations\n",
          args: {},
        },
        {
          name: ["-i", "--input"],
          description:
            "generate the report based on the specified file instead of streaming logs from the database\n",
          args: {},
        },
        {
          name: ["--instance"],
          description:
            "use the database <instance>.firebaseio.com (if omitted, use default database instance)\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "database:push",
      description: "add a new JSON object to a list of data in your Firebase",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        {
          name: ["-d", "--data"],
          description: "specify escaped JSON directly\n",
          args: {},
        },
        {
          name: ["--instance"],
          description:
            "use the database <instance>.firebaseio.com (if omitted, use default database instance)\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "database:remove",
      description: "remove data from your Firebase at the specified path",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        {
          name: ["-y", "--confirm"],
          description: "pass this option to bypass confirmation prompt\n",
          args: {},
        },
        {
          name: ["--instance"],
          description:
            "use the database <instance>.firebaseio.com (if omitted, use default database instance)\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "database:set",
      description:
        "store JSON data at the specified path via STDIN, arg, or file",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        {
          name: ["-d", "--data"],
          description: "specify escaped JSON directly\n",
          args: {},
        },
        {
          name: ["-y", "--confirm"],
          description: "pass this option to bypass confirmation prompt\n",
          args: {},
        },
        {
          name: ["--instance"],
          description:
            "use the database <instance>.firebaseio.com (if omitted, use default database instance)\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "database:settings:get",
      description:
        "store JSON data at the specified path via STDIN, arg, or file",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        {
          name: ["--instance"],
          description:
            "use the database <instance>.firebaseio.com (if omitted, uses default database instance)\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information ",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "database:settings:set",
      description:
        "Usage: firebase database:settings:set [options] <path> <value>",
      options: [
        {
          name: ["--instance"],
          description:
            "use the database <instance>.firebaseio.com (if omitted, use default database instance)\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information ",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "database:update",
      description:
        "update some of the keys for the defined path in your Firebase",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        {
          name: ["-d", "--data"],
          description: "specify escaped JSON directly\n",
          args: {},
        },
        {
          name: ["-y", "--confirm"],
          description: "pass this option to bypass confirmation prompt\n",
          args: {},
        },
        {
          name: ["--instance"],
          description:
            "use the database <instance>.firebaseio.com (if omitted, use default database instance)\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "deploy",
      description: "deploy code and assets to your Firebase project",
      options: [
        {
          name: ["-p", "--public"],
          description:
            "override the Hosting public directory specified in firebase.json\n",
          args: {},
        },
        {
          name: ["-m", "--message"],
          description: "an optional message describing this deploy\n",
          args: {},
        },
        {
          name: ["-f", "--force"],
          description:
            "delete Cloud Functions missing from the current working directory without confirmation\n",
          args: {},
        },
        {
          name: ["--only"],
          description:
            'only deploy to specified, comma-separated targets (e.g. "hosting,storage"). For functions, can specify filters with colons to scope function deploys to only those functions (e.g. "--only functions:func1,functions:func2"). When filtering based on export groups (the exported module object keys), use dots to specify group names (e.g. "--only functions:group1.subgroup1,functions:group2)"\n',
          args: {},
        },
        {
          name: ["--except"],
          description:
            'deploy to all targets except specified (e.g. "database")\n',
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "emulators:exec",
      description:
        "start the local Firebase emulators, run a test script, then shut down the emulators",
      args: {
        name: "script",
      },
      options: [
        {
          name: ["--only"],
          description:
            'only specific emulators. This is a comma separated list of emulator names. Valid options are: ["auth","functions","firestore","database","hosting","pubsub"]\n',
          args: {},
        },
        {
          name: ["--inspect-functions"],
          description:
            "emulate Cloud Functions in debug mode with the node inspector on the given port (9229 if not specified)\n",
          args: {},
        },
        {
          name: ["--import"],
          description:
            "import emulator data from a previous export (see emulators:export)\n",
          args: {},
        },
        {
          name: ["--export-on-exit"],
          description:
            "automatically export emulator data (emulators:export) when the emulators make a clean exit (SIGINT), when no dir is provided the location of --import [dir] is used\n",
          args: {},
        },
        {
          name: ["--ui"],
          description: "run the Emulator UI\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "emulators:export",
      description: "export data from running emulators",
      args: {
        name: "path",
        template: "filepaths",
      },
      options: [
        {
          name: ["--only"],
          description:
            'only specific emulators. This is a comma separated list of emulator names. Valid options are: ["auth","functions","firestore","database","hosting","pubsub"]\n',
          args: {},
        },
        {
          name: ["--force"],
          description: "Overwrite any export data in the target directory.\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "emulators:start",
      description: "Usage: firebase emulators:start [options]",
      options: [
        {
          name: ["--only"],
          description:
            'only specific emulators. This is a comma separated list of emulator names. Valid options are: ["auth","functions","firestore","database","hosting","pubsub"]\n',
          args: {},
        },
        {
          name: ["--inspect-functions"],
          description:
            "emulate Cloud Functions in debug mode with the node inspector on the given port (9229 if not specified)\n",
          args: {},
        },
        {
          name: ["--import"],
          description:
            "import emulator data from a previous export (see emulators:export)\n",
          args: {},
        },
        {
          name: ["--export-on-exit"],
          description:
            "automatically export emulator data (emulators:export) when the emulators make a clean exit (SIGINT), when no dir is provided the location of --import [dir] is used\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "experimental:functions:shell",
      description: "Usage: firebase experimental:functions:shell [options]",
      options: [
        {
          name: ["-p", "--port"],
          description:
            "the port on which to emulate functions (default: 5000) (default: 5000)\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "ext:configure",
      description:
        "Usage: firebase ext:configure [options] <extensionInstanceId>",
      options: [
        {
          name: ["--params"],
          description: "path of params file with .env format.\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "ext:info",
      description:
        "list all the extensions that are installed in your Firebase project",
      args: {
        name: "extensionName",
      },
      options: [
        {
          name: ["--markdown"],
          description:
            "output info in Markdown suitable for constructing a README file\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "ext:uninstall",
      description:
        "uninstall an extension that is installed in your Firebase project by instance ID",
      args: {
        name: "extensionInstanceId",
      },
      options: [
        {
          name: ["-f", "--force"],
          description:
            "No confirmation. Otherwise, a confirmation prompt will appear.\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "ext:update",
      description:
        "update an existing extension instance to the latest version",
      args: [
        {
          name: "extensionInstanceId",
        },
      ],
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
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
            "Recursive. Delete all documents and subcollections at and under the specified level. May not be passed along with\n",
          args: {},
        },
        {
          name: ["--shallow"],
          description:
            "Shallow. Delete only documents at the specified level and ignore documents in subcollections. This action can potentially orphan documents nested in subcollections. May not be passed along with -r.\n",
          args: {},
        },
        {
          name: ["--all-collections"],
          description:
            "Delete all. Deletes the entire Firestore database, including all collections and documents. Any other flags or arguments will be ignored.\n",
          args: {},
        },
        {
          name: ["-y", "--yes"],
          description:
            "No confirmation. Otherwise, a confirmation prompt will appear.\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "firestore:indexes",
      description: "List indexes in your project's Cloud Firestore database.",
      options: [
        {
          name: ["--pretty"],
          description:
            "Pretty print. When not specified the indexes are printed in the JSON specification format.\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "functions:config:clone",
      description: "clone environment config from another project",
      options: [
        {
          name: ["--from"],
          description: "the project from which to clone configuration\n",
          args: {},
        },
        {
          name: ["--only"],
          description: "a comma-separated list of keys to clone\n",
          args: {},
        },
        {
          name: ["--except"],
          description: "a comma-separated list of keys to not clone\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "functions:config:get",
      description: "fetch environment config stored at the given path",
      args: {
        name: "path",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "functions:config:set",
      description: "set environment config with key=value syntax",
      args: {
        name: "values",
        variadic: true,
        description: "key=value",
      },
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "functions:log",
      description: "Usage: firebase functions:log [options]",
      options: [
        {
          name: ["--only"],
          description:
            'only show logs of specified, comma-seperated functions (e.g. "funcA,funcB")\n',
          args: {},
        },
        {
          name: ["-n", "--lines"],
          description: "specify number of log lines to fetch\n",
          args: {},
        },
        {
          name: ["--open"],
          description: "open logs page in web browser\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "functions:shell",
      description: "Usage: firebase functions:shell [options]",
      options: [
        {
          name: ["-p", "--port"],
          description: "the port on which to emulate functions\n",
          args: {},
        },
        {
          name: ["--inspect-functions"],
          description:
            "emulate Cloud Functions in debug mode with the node inspector on the given port (9229 if not specified)\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "help",
      description: "Usage: firebase help [options] [command]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "hosting:channel:create",
      description:
        "Usage: firebase hosting:channel:create [options] [channelId]",
      options: [
        {
          name: ["-e", "--expires"],
          description:
            "duration string (e.g. 12h or 30d) for channel expiration, max 30d\n",
          args: {},
        },
        {
          name: ["--site"],
          description: "site for which to create the channel\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "hosting:channel:delete",
      description:
        "Usage: firebase hosting:channel:delete [options] <channelId>",
      options: [
        {
          name: ["--site"],
          description: "site in which the channel exists\n",
          args: {},
        },
        {
          name: ["-f", "--force"],
          description: "delete without confirmation\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "hosting:channel:deploy",
      description:
        "Usage: firebase hosting:channel:deploy [options] [channelId]",
      options: [
        {
          name: ["-e", "--expires"],
          description:
            "duration string (e.g. 12h, 30d) for channel expiration, max 30d; defaults to 7d\n",
          args: {},
        },
        {
          name: ["--only"],
          description: "only create previews for specified targets\n",
          args: {},
        },
        {
          name: ["--open"],
          description: "open a browser to the channel after deploying\n",
          args: {},
        },
        {
          name: ["--no-authorized-domains"],
          description: "do not sync channel domains with Firebase Auth\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "hosting:channel:list",
      description: "Usage: firebase hosting:channel:list [options]",
      options: [
        {
          name: ["--site"],
          description: "list channels for the specified site\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "hosting:channel:open",
      description: "Usage: firebase hosting:channel:open [options] [channelId]",
      options: [
        {
          name: ["--site"],
          description: "the site to which the channel belongs\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "hosting:clone",
      description:
        "Usage: firebase hosting:clone [options] <source> <targetChannel>",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "hosting:disable",
      description: "Usage: firebase hosting:disable [options]",
      options: [
        {
          name: ["-y", "--confirm"],
          description: "skip confirmation\n",
          args: {},
        },
        {
          name: ["-s", "--site"],
          description: "the site to disable\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "hosting:sites:create",
      description: "Usage: firebase hosting:sites:create [options] [siteId]",
      options: [
        {
          name: ["--app"],
          description: "specify an existing Firebase Web App ID\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "hosting:sites:delete",
      description: "Usage: firebase hosting:sites:delete [options] <siteId>",
      options: [
        {
          name: ["-f", "--force"],
          description: "delete without confirmation\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "hosting:sites:get",
      description: "Usage: firebase hosting:sites:get [options] <siteId>",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "hosting:sites:list",
      description: "Usage: firebase hosting:sites:list [options]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "init",
      description: "Usage: firebase init [options] [feature]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "login",
      description: "Usage: firebase login [options]",
      options: [
        {
          name: ["--no-localhost"],
          description:
            "copy and paste a code instead of starting a local server for authentication\n",
          args: {},
        },
        {
          name: ["--reauth"],
          description: "force reauthentication even if already logged in\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "login:add",
      description: "Usage: firebase login:add [options] [email]",
      options: [
        {
          name: ["--no-localhost"],
          description:
            "copy and paste a code instead of starting a local server for authentication\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "login:ci",
      description: "Usage: firebase login:ci [options]",
      options: [
        {
          name: ["--no-localhost"],
          description:
            "copy and paste a code instead of starting a local server for authentication\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "login:list",
      description: "Usage: firebase login:list [options]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "login:use",
      description: "Usage: firebase login:use [options] <email>",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "logout",
      description: "Usage: firebase logout [options] [email]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "open",
      description: "Usage: firebase open [options] [link]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "projects:addfirebase",
      description: "Usage: firebase projects:addfirebase [options] [projectId]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "projects:create",
      description: "Usage: firebase projects:create [options] [projectId]",
      options: [
        {
          name: ["-n", "--display-name"],
          description: "(optional) display name for the project\n",
          args: {},
        },
        {
          name: ["-o", "--organization"],
          description:
            "(optional) ID of the parent Google Cloud Platform organization under which to create this project\n",
          args: {},
        },
        {
          name: ["-f", "--folder"],
          description:
            "(optional) ID of the parent Google Cloud Platform folder in which to create this project\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "projects:list",
      description: "Usage: firebase projects:list [options]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "remoteconfig:get",
      description: "Usage: firebase remoteconfig:get [options]",
      options: [
        {
          name: ["-v", "--version-number"],
          description: "grabs the specified version of the template\n",
          args: {},
        },
        {
          name: ["-o", "--output"],
          description:
            "write config output to a filename (if omitted, will use the default file path)\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "remoteconfig:rollback",
      description: "Usage: firebase remoteconfig:rollback [options]",
      options: [
        {
          name: ["-v", "--version-number"],
          description: "rollback to the specified version of the template\n",
          args: {},
        },
        {
          name: ["--force"],
          description:
            "rollback template to the specified version without confirmation\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "remoteconfig:versions:list",
      description: "Usage: firebase remoteconfig:versions:list [options]",
      options: [
        {
          name: ["--limit"],
          description:
            "limit the number of versions being returned. Pass '0' to fetch all versions.\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "serve",
      description: "Usage: firebase serve [options]",
      options: [
        {
          name: ["-p", "--port"],
          description:
            "the port on which to listen (default: 5000) (default: 5000)\n",
          args: {},
        },
        {
          name: ["-o", "--host"],
          description:
            'the host on which to listen (default: localhost) (default: "localhost")\n',
          args: {},
        },
        {
          name: ["--only"],
          description:
            "only serve specified targets (valid targets are: hosting, functions)\n",
          args: {},
        },
        {
          name: ["--except"],
          description:
            "serve all except specified targets (valid targets are: hosting, functions)\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "setup:emulators:database",
      description: "Usage: firebase setup:emulators:database [options]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "setup:emulators:firestore",
      description: "Usage: firebase setup:emulators:firestore [options]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "setup:emulators:pubsub",
      description: "Usage: firebase setup:emulators:pubsub [options]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "setup:emulators:ui",
      description: "Usage: firebase setup:emulators:ui [options]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "target",
      description: "Usage: firebase target [options] [type]",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "target:apply",
      description:
        "Usage: firebase target:apply [options] <type> <name> <resources...>",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "target:clear",
      description: "Usage: firebase target:clear [options] <type> <target>",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "target:remove",
      description: "Usage: firebase target:remove [options] <type> <resource>",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: "use",
      description: "Usage: firebase use [options] [alias_or_project_id]",
      options: [
        {
          name: ["--add"],
          description: "create a new project alias interactively\n",
          args: {},
        },
        {
          name: ["--alias"],
          description: "create a new alias for the provided project id\n",
          args: {},
        },
        {
          name: ["--unalias"],
          description: "remove an already created project alias\n",
          args: {},
        },
        {
          name: ["--clear"],
          description: "clear the active project selection\n",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information\n",
          args: {},
        },
      ],
      subcommands: [],
    },
  ],
};
