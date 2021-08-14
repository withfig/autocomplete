const completionSpec = {
  name: "ionic",
  description:
    "The Ionic command-line interface (CLI) is the go-to tool for developing Ionic apps.",
  subcommands: [
    {
      name: "build",
      options: [
        {
          name: ["--engine"],
          description: "Target engine (e.g. browser, cordova)",
          args: {
            name: "engine",
          },
        },
        {
          name: ["--platform"],
          description: "Target platform on chosen engine (e.g. ios, android)",
          args: {
            name: "platform",
          },
        },
      ],
      args: [],
    },
    {
      name: "completion",
      options: [],
      args: [],
    },
    {
      name: "docs",
      options: [
        {
          name: ["--browser", "-w"],
          description:
            "Specifies the browser to use (safari, firefox, google chrome)",
          args: {
            name: "browser",
          },
        },
      ],
      args: [],
    },
    {
      name: "info",
      options: [
        {
          name: ["--json"],
          description: "Print system/environment info in JSON format",
        },
      ],
      args: [],
    },
    {
      name: "init",
      options: [
        {
          name: ["--type"],
          description: "Type of project (e.g. angular, react, vue, custom)",
          args: {
            name: "type",
          },
        },
        {
          name: ["--force", "-f"],
          description: "Initialize even if a project already exists",
        },
        {
          name: ["--multi-app"],
          description: "Initialize a multi-app project",
        },
        {
          name: ["--project-id"],
          description: "Specify a slug for your app",
          args: {
            name: "slug",
          },
        },
        {
          name: ["--default"],
          description: "Mark the initialized app as the default project",
        },
      ],
      args: [
        {
          name: "name",
          description: 'The name of your project (e.g. myApp, "My App")',
          isOptional: true,
        },
      ],
    },
    {
      name: "link",
      options: [],
      args: [
        {
          name: "id",
          description: "The Appflow ID of the app to link (e.g. a1b2c3d4)",
          isOptional: true,
        },
      ],
    },
    {
      name: "login",
      options: [],
      args: [
        {
          name: "email",
          description: "Your email address",
          isOptional: true,
        },
        {
          name: "password",
          description: "Your password",
          isOptional: true,
        },
      ],
    },
    {
      name: "logout",
      options: [],
      args: [],
    },
    {
      name: "repair",
      options: [
        {
          name: ["--cordova"],
          description:
            "Only perform the repair steps for Cordova platforms and plugins.",
        },
      ],
      args: [],
    },
    {
      name: "serve",
      options: [
        {
          name: ["--external"],
          description:
            "Host dev server on all network interfaces (i.e. --host=0.0.0.0)",
        },
        {
          name: ["--host"],
          description: "Use specific host for the dev server",
          args: {
            name: "host",
          },
        },
        {
          name: ["--port", "-p"],
          description: "Use specific port for the dev server",
          args: {
            name: "port",
          },
        },
        {
          name: ["--public-host"],
          description: "The host used for the browser or web view",
          args: {
            name: "host",
          },
        },
        {
          name: ["--livereload"],
          description: "Do not spin up dev server--just serve files",
        },
        {
          name: ["--lab-host"],
          description: "Use specific host for Ionic Lab server",
          args: {
            name: "host",
          },
        },
        {
          name: ["--lab-port"],
          description: "Use specific port for Ionic Lab server",
          args: {
            name: "port",
          },
        },
        {
          name: ["--open"],
          description: "Do not open a browser window",
        },
        {
          name: ["--browser", "-w"],
          description:
            "Specifies the browser to use (safari, firefox, google chrome)",
          args: {
            name: "browser",
          },
        },
        {
          name: ["--browseroption", "-o"],
          description: "Specifies a path to open to (/#/tab/dash)",
          args: {
            name: "path",
          },
        },
        {
          name: ["--lab", "-l"],
          description:
            "Test your apps on multiple platform types in the browser",
        },
      ],
      args: [],
    },
    {
      name: "signup",
      options: [],
      args: [],
    },
    {
      name: "start",
      options: [
        {
          name: ["--list", "-l"],
          description: "List available starter templates",
        },
        {
          name: ["--type"],
          description:
            "Type of project to start (e.g. vue, angular, react, ionic-angular, ionic1)",
          args: {
            name: "type",
          },
        },
        {
          name: ["--cordova"],
          description: "Include Cordova integration",
        },
        {
          name: ["--capacitor"],
          description: "Include Capacitor integration",
        },
        {
          name: ["--deps"],
          description: "Do not install npm/yarn dependencies",
        },
        {
          name: ["--git"],
          description: "Do not initialize a git repo",
        },
        {
          name: ["--link"],
          description: "Connect your new app to Ionic",
        },
        {
          name: ["--id"],
          description: "Specify an Ionic App ID to link",
          args: {
            name: "id",
          },
        },
        {
          name: ["--project-id"],
          description:
            "Specify a slug for your app (used for the directory name and package name)",
          args: {
            name: "slug",
          },
        },
        {
          name: ["--package-id"],
          description:
            "Specify the bundle ID/application ID for your app (reverse-DNS notation)",
          args: {
            name: "id",
          },
        },
      ],
      args: [
        {
          name: "name",
          description: 'The name of your new project (e.g. myApp, "My App")',
          isOptional: false,
        },
        {
          name: "template",
          description:
            "The starter template to use (e.g. blank, tabs; use --list to see all)",
          isOptional: false,
        },
      ],
    },
    {
      name: "config",
      subcommands: [
        {
          name: "get",
          options: [
            {
              name: ["--global", "-g"],
              description: "Use global CLI config",
            },
            {
              name: ["--json"],
              description: "Output config values in JSON",
            },
            {
              name: ["--root"],
              description: "Operate on root of ionic.config.json",
            },
          ],
          args: [
            {
              name: "property",
              description: "The property name you wish to get",
              isOptional: true,
            },
          ],
        },
        {
          name: "set",
          options: [
            {
              name: ["--global", "-g"],
              description: "Use global CLI config",
            },
            {
              name: ["--json"],
              description: "Always interpret value as JSON",
            },
            {
              name: ["--force"],
              description: "Always overwrite existing values",
            },
            {
              name: ["--root"],
              description: "Operate on root of ./ionic.config.json",
            },
          ],
          args: [
            {
              name: "property",
              description: "The property name you wish to set",
              isOptional: false,
            },
            {
              name: "value",
              description: "The new value of the given property",
              isOptional: false,
            },
          ],
        },
        {
          name: "unset",
          options: [
            {
              name: ["--global", "-g"],
              description: "Use global CLI config",
            },
            {
              name: ["--root"],
              description: "Operate on root of ./ionic.config.json",
            },
          ],
          args: [
            {
              name: "property",
              description: "The property name you wish to delete",
              isOptional: false,
            },
          ],
        },
      ],
    },
    {
      name: "capacitor",
      subcommands: [
        {
          name: "add",
          options: [],
          args: [
            {
              name: "platform",
              description: "The platform to add (e.g. android, ios)",
              isOptional: false,
            },
          ],
        },
        {
          name: "build",
          options: [
            {
              name: ["--build"],
              description: "Do not invoke Ionic build",
            },
            {
              name: ["--open"],
              description: "Do not invoke Capacitor open",
            },
          ],
          args: [
            {
              name: "platform",
              description: "The platform to build for (e.g. android, ios)",
              isOptional: false,
            },
          ],
        },
        {
          name: "copy",
          options: [
            {
              name: ["--build"],
              description: "Do not invoke an Ionic build",
            },
          ],
          args: [
            {
              name: "platform",
              description: "The platform to copy (e.g. android, ios)",
              isOptional: true,
            },
          ],
        },
        {
          name: "open",
          options: [],
          args: [
            {
              name: "platform",
              description: "The platform to open (e.g. android, ios)",
              isOptional: false,
            },
          ],
        },
        {
          name: "run",
          options: [
            {
              name: ["--list"],
              description: "List all available targets",
            },
            {
              name: ["--target"],
              description:
                "Deploy to a specific device by its ID (use --list to see all)",
              args: {
                name: "target",
              },
            },
            {
              name: ["--open"],
              description: "Open native IDE instead of using capacitor run",
            },
            {
              name: ["--build"],
              description: "Do not invoke Ionic build",
            },
            {
              name: ["--external"],
              description:
                "Host dev server on all network interfaces (i.e. --host=0.0.0.0)",
            },
            {
              name: ["--host"],
              description: "Use specific host for the dev server",
              args: {
                name: "host",
              },
            },
            {
              name: ["--port", "-p"],
              description: "Use specific port for the dev server",
              args: {
                name: "port",
              },
            },
            {
              name: ["--public-host"],
              description: "The host used for the browser or web view",
              args: {
                name: "host",
              },
            },
            {
              name: ["--livereload", "-l"],
              description: "Spin up dev server to live-reload www files",
            },
            {
              name: ["--livereload-url"],
              description: "Provide a custom URL to the dev server",
              args: {
                name: "url",
              },
            },
          ],
          args: [
            {
              name: "platform",
              description: "The platform to run (e.g. android, ios)",
              isOptional: false,
            },
          ],
        },
        {
          name: "sync",
          options: [
            {
              name: ["--build"],
              description: "Do not invoke an Ionic build",
            },
          ],
          args: [
            {
              name: "platform",
              description: "The platform to sync (e.g. android, ios)",
              isOptional: true,
            },
          ],
        },
        {
          name: "update",
          options: [],
          args: [
            {
              name: "platform",
              description: "The platform to update (e.g. android, ios)",
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: "deploy",
      subcommands: [
        {
          name: "add",
          options: [
            {
              name: ["--app-id"],
              description: "Your Appflow app ID",
              args: {
                name: "id",
              },
            },
            {
              name: ["--channel-name"],
              description: "The channel to check for updates from",
              args: {
                name: "name",
              },
            },
            {
              name: ["--update-method"],
              description:
                "The update method that dictates the behavior of the plugin",
              args: {
                name: "name",
              },
            },
            {
              name: ["--max-store"],
              description:
                "The maximum number of downloaded versions to store on the device",
              args: {
                name: "quantity",
              },
            },
            {
              name: ["--min-background-duration"],
              description:
                "The minimum duration after which the app checks for an update in the background",
              args: {
                name: "seconds",
              },
            },
          ],
          args: [],
        },
        {
          name: "build",
          options: [
            {
              name: ["--environment"],
              description:
                "The group of environment variables exposed to your build",
              args: {
                name: "name",
              },
            },
            {
              name: ["--channel"],
              description:
                "The channel you want to auto deploy the build to. This can be repeated multiple times if multiple channels need to be specified.",
              args: {
                name: "name",
              },
            },
            {
              name: ["--commit"],
              description: "Commit (defaults to HEAD)",
              args: {
                name: "sha1",
              },
            },
            {
              name: ["--skip-download"],
              description:
                "Skip downloading build artifacts after command succeeds.",
            },
          ],
          args: [],
        },
        {
          name: "configure",
          options: [
            {
              name: ["--app-id"],
              description: "Your Appflow app ID",
              args: {
                name: "id",
              },
            },
            {
              name: ["--channel-name"],
              description: "The channel to check for updates from",
              args: {
                name: "name",
              },
            },
            {
              name: ["--update-method"],
              description:
                "The update method that dictates the behavior of the plugin",
              args: {
                name: "name",
              },
            },
            {
              name: ["--max-store"],
              description:
                "The maximum number of downloaded versions to store on the device",
              args: {
                name: "quantity",
              },
            },
            {
              name: ["--min-background-duration"],
              description:
                "The minimum duration after which the app checks for an update in the background",
              args: {
                name: "seconds",
              },
            },
          ],
          args: [
            {
              name: "platform",
              description: "The native platform (e.g. ios, android)",
              isOptional: true,
            },
          ],
        },
        {
          name: "manifest",
          options: [],
          args: [],
        },
      ],
    },
    {
      name: "git",
      subcommands: [
        {
          name: "remote",
          options: [],
          args: [],
        },
      ],
    },
    {
      name: "package",
      subcommands: [
        {
          name: "build",
          options: [
            {
              name: ["--signing-certificate"],
              description: "Signing certificate",
              args: {
                name: "name",
              },
            },
            {
              name: ["--environment"],
              description:
                "The group of environment variables exposed to your build",
              args: {
                name: "name",
              },
            },
            {
              name: ["--native-config"],
              description:
                "The group of native config variables exposed to your build",
              args: {
                name: "name",
              },
            },
            {
              name: ["--destination"],
              description:
                "The configuration to deploy the build artifact to the app store",
              args: {
                name: "name",
              },
            },
            {
              name: ["--commit"],
              description: "Commit (defaults to HEAD)",
              args: {
                name: "sha1",
              },
            },
            {
              name: ["--build-stack"],
              description:
                'Target platform ("Android", "iOS - Xcode 11 (Preferred)", "iOS - Xcode 10")',
              args: {
                name: "name",
              },
            },
            {
              name: ["--build-file-name"],
              description: "The name for the downloaded build file",
              args: {
                name: "name",
              },
            },
            {
              name: ["--ipa-name"],
              description: "The name for the downloaded ipa file",
              args: {
                name: "name",
              },
            },
            {
              name: ["--dsym-name"],
              description: "The name for the downloaded dsym file",
              args: {
                name: "name",
              },
            },
            {
              name: ["--apk-name"],
              description: "The name for the downloaded apk file",
              args: {
                name: "name",
              },
            },
            {
              name: ["--aab-name"],
              description: "The name for the downloaded aab file",
              args: {
                name: "name",
              },
            },
            {
              name: ["--artifact-type"],
              description: "The artifact type (aab, apk, ipa, dsym)",
              args: {
                name: "name",
              },
            },
            {
              name: ["--skip-download"],
              description:
                "Skip downloading build artifacts after command succeeds.",
            },
          ],
          args: [
            {
              name: "platform",
              description: "The platform to package (android, ios)",
              isOptional: false,
            },
            {
              name: "type",
              description:
                "The build type (debug, release, development, ad-hoc, app-store, enterprise)",
              isOptional: false,
            },
          ],
        },
        {
          name: "deploy",
          options: [],
          args: [
            {
              name: "build-id",
              description:
                "The build id of the desired successful package build",
              isOptional: false,
            },
            {
              name: "destination",
              description:
                "The destination to deploy the build artifact to the app store",
              isOptional: false,
            },
          ],
        },
      ],
    },
    {
      name: "ssl",
      subcommands: [
        {
          name: "generate",
          options: [
            {
              name: ["--key-path"],
              description: "Destination of private key file",
              args: {
                name: "path",
              },
            },
            {
              name: ["--cert-path"],
              description: "Destination of certificate file",
              args: {
                name: "path",
              },
            },
            {
              name: ["--country-name"],
              description: "The country name (C) of the SSL certificate",
              args: {
                name: "C",
              },
            },
            {
              name: ["--state-or-province-name"],
              description:
                "The state or province name (ST) of the SSL certificate",
              args: {
                name: "ST",
              },
            },
            {
              name: ["--locality-name"],
              description: "The locality name (L) of the SSL certificate",
              args: {
                name: "L",
              },
            },
            {
              name: ["--organization-name"],
              description: "The organization name (O) of the SSL certificate",
              args: {
                name: "O",
              },
            },
            {
              name: ["--common-name"],
              description: "The common name (CN) of the SSL certificate",
              args: {
                name: "CN",
              },
            },
            {
              name: ["--bits", "-b"],
              description: "Number of bits in the key",
              args: {
                name: "bits",
              },
            },
          ],
          args: [],
        },
      ],
    },
    {
      name: "ssh",
      subcommands: [
        {
          name: "add",
          options: [
            {
              name: ["--use"],
              description:
                "Use the newly added key as your default SSH key for Ionic",
            },
          ],
          args: [
            {
              name: "pubkey-path",
              description: "Location of public key file to add to Ionic",
              isOptional: false,
            },
          ],
        },
        {
          name: "delete",
          options: [],
          args: [
            {
              name: "key-id",
              description: "The ID of the public key to delete",
              isOptional: false,
            },
          ],
        },
        {
          name: "generate",
          options: [
            {
              name: ["--type", "-t"],
              description: "The type of key to generate: ecdsa, ed25519, rsa",
              args: {
                name: "type",
              },
            },
            {
              name: ["--bits", "-b"],
              description: "Number of bits in the key",
              args: {
                name: "bits",
              },
            },
            {
              name: ["--annotation", "-C"],
              description:
                "Annotation (comment) in public key. Your Ionic email address will be used",
              args: {
                name: "annotation",
              },
            },
          ],
          args: [
            {
              name: "key-path",
              description: "Destination of private key file",
              isOptional: true,
            },
          ],
        },
        {
          name: "list",
          options: [
            {
              name: ["--json"],
              description: "Output SSH keys in JSON",
            },
          ],
          args: [],
        },
        {
          name: "setup",
          options: [],
          args: [],
        },
        {
          name: "use",
          options: [],
          args: [
            {
              name: "key-path",
              description: "Location of private key file to use",
              isOptional: false,
            },
          ],
        },
      ],
    },
    {
      name: "doctor",
      subcommands: [
        {
          name: "check",
          options: [],
          args: [
            {
              name: "id",
              description: "The issue identifier",
              isOptional: true,
            },
          ],
        },
        {
          name: "list",
          options: [],
          args: [],
        },
        {
          name: "treat",
          options: [],
          args: [
            {
              name: "id",
              description: "The issue identifier",
              isOptional: true,
            },
          ],
        },
      ],
    },
    {
      name: "integrations",
      subcommands: [
        {
          name: "disable",
          options: [],
          args: [
            {
              name: "name",
              description:
                "The integration to disable (e.g. capacitor, cordova, enterprise)",
              isOptional: false,
            },
          ],
        },
        {
          name: "enable",
          options: [
            {
              name: ["--add"],
              description: "Download and add the integration even if enabled",
            },
            {
              name: ["--root"],
              description:
                "Specify an alternative destination to download into when adding",
              args: {
                name: "path",
              },
            },
            {
              name: ["--quiet"],
              description: "Less verbose output, ignore integration errors",
            },
          ],
          args: [
            {
              name: "name",
              description:
                "The integration to enable (e.g. capacitor, cordova, enterprise)",
              isOptional: false,
            },
          ],
        },
        {
          name: "list",
          options: [],
          args: [],
        },
      ],
    },
    {
      name: "enterprise",
      subcommands: [
        {
          name: "register",
          options: [
            {
              name: ["--app-id"],
              description: "The Ionic App ID",
              args: {
                name: "id",
              },
            },
            {
              name: ["--key"],
              description: "The Product Key",
              args: {
                name: "key",
              },
            },
          ],
          args: [],
        },
      ],
    },
    {
      name: "cordova",
      subcommands: [
        {
          name: "build",
          options: [
            {
              name: ["--build"],
              description: "Do not invoke an Ionic build",
            },
            {
              name: ["--debug"],
              description: "Mark as a debug build",
            },
            {
              name: ["--release"],
              description: "Mark as a release build",
            },
            {
              name: ["--device"],
              description: "Deploy build to a device",
            },
            {
              name: ["--emulator"],
              description: "Deploy build to an emulator",
            },
            {
              name: ["--buildConfig"],
              description: "Use the specified build configuration",
              args: {
                name: "file",
              },
            },
          ],
          args: [
            {
              name: "platform",
              description: "The platform to build (e.g. android, ios)",
              isOptional: false,
            },
          ],
        },
        {
          name: "compile",
          options: [
            {
              name: ["--debug"],
              description: "Mark as a debug build",
            },
            {
              name: ["--release"],
              description: "Mark as a release build",
            },
            {
              name: ["--device"],
              description: "Deploy build to a device",
            },
            {
              name: ["--emulator"],
              description: "Deploy build to an emulator",
            },
            {
              name: ["--buildConfig"],
              description: "Use the specified build configuration",
              args: {
                name: "file",
              },
            },
          ],
          args: [
            {
              name: "platform",
              description: "The platform to compile (android, ios)",
              isOptional: false,
            },
          ],
        },
        {
          name: "emulate",
          options: [
            {
              name: ["--list"],
              description: "List all available targets",
            },
            {
              name: ["--build"],
              description: "Do not invoke Ionic build",
            },
            {
              name: ["--external"],
              description:
                "Host dev server on all network interfaces (i.e. --host=0.0.0.0)",
            },
            {
              name: ["--host"],
              description: "Use specific host for the dev server",
              args: {
                name: "host",
              },
            },
            {
              name: ["--port", "-p"],
              description: "Use specific port for the dev server",
              args: {
                name: "port",
              },
            },
            {
              name: ["--public-host"],
              description: "The host used for the browser or web view",
              args: {
                name: "host",
              },
            },
            {
              name: ["--livereload", "-l"],
              description: "Spin up dev server to live-reload www files",
            },
            {
              name: ["--livereload-url"],
              description: "Provide a custom URL to the dev server",
              args: {
                name: "url",
              },
            },
            {
              name: ["--debug"],
              description: "Mark as a debug build",
            },
            {
              name: ["--release"],
              description: "Mark as a release build",
            },
            {
              name: ["--device"],
              description: "Deploy build to a device",
            },
            {
              name: ["--emulator"],
              description: "Deploy build to an emulator",
            },
            {
              name: ["--buildConfig"],
              description: "Use the specified build configuration",
              args: {
                name: "file",
              },
            },
            {
              name: ["--target"],
              description: "Deploy build to a device (use --list to see all)",
              args: {
                name: "target",
              },
            },
            {
              name: ["--native-run"],
              description:
                "Do not use native-run to run the app; use Cordova instead",
            },
            {
              name: ["--connect"],
              description: "Tie the running app to the process",
            },
            {
              name: ["--json"],
              description: "Output targets in JSON",
            },
          ],
          args: [
            {
              name: "platform",
              description: "The platform to run (e.g. android, ios)",
              isOptional: false,
            },
          ],
        },
        {
          name: "platform",
          options: [
            {
              name: ["--resources"],
              description:
                "Do not pregenerate icons and splash screen resources (corresponds to add)",
            },
          ],
          args: [
            {
              name: "action",
              description:
                "add, remove, or update a platform; ls, check, or save all project platforms",
              isOptional: true,
            },
            {
              name: "platform",
              description:
                "The platform that you would like to add (android, ios)",
              isOptional: true,
            },
          ],
        },
        {
          name: "plugin",
          options: [
            {
              name: ["--force"],
              description:
                "Force overwrite the plugin if it exists (corresponds to add)",
            },
            {
              name: ["--variable"],
              description: "Specify plugin variables",
              args: {
                name: "KEY=VALUE",
              },
            },
          ],
          args: [
            {
              name: "action",
              description:
                "add or remove a plugin; ls or save all project plugins",
              isOptional: true,
            },
            {
              name: "plugin",
              description:
                "The name of the plugin (corresponds to add and remove)",
              isOptional: true,
            },
          ],
        },
        {
          name: "prepare",
          options: [
            {
              name: ["--build"],
              description: "Do not invoke an Ionic build",
            },
          ],
          args: [
            {
              name: "platform",
              description:
                "The platform you would like to prepare (e.g. android, ios)",
              isOptional: true,
            },
          ],
        },
        {
          name: "requirements",
          options: [],
          args: [
            {
              name: "platform",
              description:
                "The platform for which you would like to gather requirements (android, ios)",
              isOptional: true,
            },
          ],
        },
        {
          name: "resources",
          options: [
            {
              name: ["--icon", "-i"],
              description: "Generate icon resources",
            },
            {
              name: ["--splash", "-s"],
              description: "Generate splash screen resources",
            },
          ],
          args: [
            {
              name: "platform",
              description:
                "The platform for which you would like to generate resources (ios, android)",
              isOptional: true,
            },
          ],
        },
        {
          name: "run",
          options: [
            {
              name: ["--list"],
              description: "List all available targets",
            },
            {
              name: ["--build"],
              description: "Do not invoke Ionic build",
            },
            {
              name: ["--external"],
              description:
                "Host dev server on all network interfaces (i.e. --host=0.0.0.0)",
            },
            {
              name: ["--host"],
              description: "Use specific host for the dev server",
              args: {
                name: "host",
              },
            },
            {
              name: ["--port", "-p"],
              description: "Use specific port for the dev server",
              args: {
                name: "port",
              },
            },
            {
              name: ["--public-host"],
              description: "The host used for the browser or web view",
              args: {
                name: "host",
              },
            },
            {
              name: ["--livereload", "-l"],
              description: "Spin up dev server to live-reload www files",
            },
            {
              name: ["--livereload-url"],
              description: "Provide a custom URL to the dev server",
              args: {
                name: "url",
              },
            },
            {
              name: ["--debug"],
              description: "Mark as a debug build",
            },
            {
              name: ["--release"],
              description: "Mark as a release build",
            },
            {
              name: ["--device"],
              description: "Deploy build to a device",
            },
            {
              name: ["--emulator"],
              description: "Deploy build to an emulator",
            },
            {
              name: ["--buildConfig"],
              description: "Use the specified build configuration",
              args: {
                name: "file",
              },
            },
            {
              name: ["--target"],
              description: "Deploy build to a device (use --list to see all)",
              args: {
                name: "target",
              },
            },
            {
              name: ["--native-run"],
              description:
                "Do not use native-run to run the app; use Cordova instead",
            },
            {
              name: ["--connect"],
              description: "Tie the running app to the process",
            },
            {
              name: ["--json"],
              description: "Output targets in JSON",
            },
          ],
          args: [
            {
              name: "platform",
              description: "The platform to run (e.g. android, ios)",
              isOptional: false,
            },
          ],
        },
      ],
    },
  ],
};

export default completionSpec;
