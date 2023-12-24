/**
 * Common options used throughout the CLI
 */
const cleanOption: Fig.Option = {
  name: "--clean",
  description: "Forces rebuilding the native application",
};

const timeoutOption: Fig.Option = {
  name: "--timeout",
  description:
    "Sets the number of seconds that the NativeScript CLI will wait for the debugger to boot. If not set, the default timeout is 90 seconds",
  args: {
    name: "seconds",
  },
};

const emulatorOption: Fig.Option = {
  name: "--emulator",
  description: "Specifies that you want to debug the app in an emulator",
};

const deviceOption: Fig.Option = {
  name: "--device",
  description: "Specifies a connected device/emulator to start and run the app",
  args: {
    name: "device id",
    // TODO: create a generator of ns device <platform> --available-devices
    // generators: {
    //   script: ["ns", "devices", "--json"],
    //   postProcess: (output) => {
    //     return [{
    //       name: "test1",
    //       description: "Test 1"
    //     }]
    //   },
    // },
  },
};

const forceOption: Fig.Option = {
  name: "--force",
  description:
    "Skips the application compatibility checks and forces npm i to ensure all dependencies are installed",
};

const noHmrOption: Fig.Option = {
  name: "--no-hmr",
  description: "Disables Hot Module Replacement (HMR)",
};

const frameworkPathOption: Fig.Option = {
  name: "--framework-path",
  description:
    "Sets the path to a NativeScript runtime for the specified platform that you want to use instead of the default runtime. <File Path> must point to a valid npm package",
  args: {
    name: "path",
    template: "filepaths",
  },
};

const jsonOption: Fig.Option = {
  name: "--json",
  description: "Show the output of the command in JSON format",
};

const justLaunchOption: Fig.Option = {
  name: "--justlaunch",
  description: "Does not print the application output in the console",
};

const releaseOption: Fig.Option = {
  name: "--release",
  description:
    "Produces a release build by running webpack in production mode and native build in release mode. Otherwise, produces a debug build",
};

const bundleOption: Fig.Option = {
  name: "--bundle",
  description: "Bundle the application",
};

const helpOption = (label: string): Fig.Option => {
  return {
    name: ["--help", "-h"],
    description: `Show help for the ${label} subcommand`,
    priority: 0,
  };
};

/**
 * Platform options used across many commands of the CLI
 */
const androidGeneralOptions: Fig.Option[] = [
  {
    name: "--aab",
    description:
      "Specifies that the command will produce and deploy an Android App Bundle",
  },
  {
    name: "--env.snapshot",
    description:
      "Creates a V8 Snapshot decreasing the app start time (only for release builds for Android)",
    dependsOn: ["--release"],
  },
  {
    name: "--env.compileSnapshot",
    description:
      "Compiles the static assets produced by --env.snapshot into .so files allowing the native build to split them per architecture. This will reduce the app size when using the --aab option",
    dependsOn: ["--env.snapshot", "--aab"],
  },
  {
    name: "--env.appComponents",
    description: "Allows passing additional App Components for android",
  },
];

const androidKeyOptions: Fig.Option[] = [
  {
    name: "--key-store-path",
    description:
      "Specifies the file path to the keystore file (P12) which you want to use to code sign your APK",
    args: {
      name: "path",
      template: "filepaths",
    },
    dependsOn: ["--release"],
  },
  {
    name: "--key-store-password",
    description:
      "Provides the password for the keystore file specified with --key-store-path",
    args: {
      name: "password",
    },
    dependsOn: ["--release"],
  },
  {
    name: "--key-store-alias",
    description:
      "Provides the alias for the keystore file specified with --key-store-path",
    args: {
      name: "alias",
    },
    dependsOn: ["--release"],
  },
  {
    name: "--key-store-alias-password",
    description:
      "Provides the password for the alias specified with --key-store-alias-password",
    args: {
      name: "alias password",
    },
    dependsOn: ["--release"],
  },
];

const platformEnvOptions: Fig.Option[] = [
  {
    name: "--env.aot",
    description: "Creates an Ahead-Of-Time build (Angular only)",
  },
  {
    name: "--env.uglify",
    description: "Provides basic obfuscation and smaller app size",
  },
  {
    name: "--env.report",
    description:
      "Creates a Webpack report inside a /report folder in the root folder",
  },
  {
    name: "--env.sourceMap",
    description: "Creates inline source maps",
  },
  {
    name: "--env.hiddenSourceMap",
    description:
      "Creates sources maps in the root folder (useful for Crashlytics usage with bundled app in release)",
  },
  {
    name: "--env.verbose",
    description: "Prints verbose logs and the internal config before building",
  },
  {
    name: "--env.production",
    description: "Enable production mode (will minify the code)",
  },
  {
    name: "--env.replace=from:to",
    description:
      "Add file replacement rules. For source files (.js and .ts) this will add a new alias to the config, for everything else, this will add a new copy rule",
    insertValue: "--env.replace={cursor}:",
    requiresSeparator: true,
  },
];

const platformGeneralOptions: Fig.Option[] = [
  ...platformEnvOptions,
  noHmrOption,
  forceOption,
  deviceOption,
  cleanOption,
  emulatorOption,
  timeoutOption,
];

/**
 * Defined a map of shared options for various commands
 * Some commands have slightly varied options.
 */
const platformOptions = {
  // NOTE: used like so:
  // ...platformOption.<command>.both
  // ...platformOption.<command>.ios

  run: {
    both: [
      ...platformGeneralOptions,
      justLaunchOption,
      releaseOption,
      bundleOption,
    ],
    ios: [
      {
        name: "--sdk",
        description: "Specifies the target simulator's sdk",
        args: {
          name: "sdk",
        },
      },
    ],
    android: [...androidGeneralOptions, ...androidKeyOptions],
  },
  debug: {
    both: [
      ...platformGeneralOptions,
      {
        name: "--debug-brk",
        description:
          "Prepares, builds and deploys the application package on a device or in an emulator, and stops at the first JavaScript line until either the debugger frontend connects or a 30 seconds timeout elapses",
      },
      {
        name: "--start",
        description: "Attaches the debug tools to a deployed and running app",
      },
      {
        name: "--no-watch",
        description: "Changes in your code will not be livesynced",
      },
    ],
    ios: [
      {
        name: "--no-client",
        description:
          "The NativeScript CLI attaches the debug tools but does not launch the developer tools in Safari. Could be used on already started Safari Web Inspector",
      },
      {
        name: "--inspector",
        description:
          "The developer tools in the Safari Web Inspector are used for debugging the application",
      },
    ],
    android: androidGeneralOptions,
  },
  test: {
    both: [
      {
        name: "--watch",
        description:
          "When you save changes to the project, changes are automatically synchronized to the connected device and tests are re-run",
      },
      {
        name: "--debug-brk",
        description:
          "Runs the tests under the debugger. The debugger will break just before your tests are executed, so you have a chance to place breakpoints",
      },
      justLaunchOption,
      forceOption,
      deviceOption,
      emulatorOption,
    ],
    ios: [],
    android: androidGeneralOptions,
  },
  build: {
    both: [
      ...platformEnvOptions,
      releaseOption,
      {
        name: "--copy-to",
        description:
          "Specifies the file path where the built .ipa|.apk will be copied. If it points to a non-existent directory path, it will be created. If the specified value is existing directory, the original file name will be used",
        args: {
          name: "path",
          template: "folders" as Fig.Template,
        },
      },
      {
        name: "--path",
        description:
          "Specifies the directory where you want to create the project, if different from the current directory",
        args: {
          name: "directory",
          template: "folders" as Fig.Template,
        },
      },
      forceOption,
      cleanOption,
      deviceOption,
    ],
    android: [
      ...androidGeneralOptions,
      {
        name: "--compileSdk",
        description:
          "Sets the Android SDK that will be used to build the project",
        args: {
          name: "api level",
        },
      },
      ...androidKeyOptions,
    ],
    ios: [
      {
        name: "--for-device",
        description:
          "Produces an application package that you can deploy on device. Otherwise, produces a build that you can run only in the native iOS Simulator",
      },
      {
        name: "--i-cloud-container-environment",
        description:
          "Adds the passed iCloudContainerEnvironment when exporting an application package with the --for-device option",
        dependsOn: ["--for-device"],
      },
      {
        name: "--team-id",
        description:
          "If used without parameter, lists all team names and ids. If used with team name or id, it will switch to automatic signing mode and configure the .xcodeproj file of your app. In this case .xcconfig should not contain any provisioning/team id flags",
        args: {
          name: "team id",
          isOptional: true,
        },
      },
      {
        name: "--provision",
        description:
          "If used without parameter, lists all eligible provisioning profiles. If used with UUID or name of your provisioning profile, it will switch to manual signing mode and configure the .xcodeproj file of your app",
        args: {
          name: "uuid",
          isOptional: true,
        },
      },
    ],
  },
  deploy: {
    both: [
      deviceOption,
      cleanOption,
      forceOption,
      releaseOption,
      ...platformEnvOptions,
    ],
    ios: [],
    android: [...androidGeneralOptions, ...androidKeyOptions],
  },
};

// General Commands
const helpCommand: Fig.Subcommand = {
  name: "help",
  description: "Open the CLI's documentation in your web browser",
  options: [helpOption("help")],
};

const infoCommand: Fig.Subcommand = {
  name: "info",
  description:
    "Displays version information about the NativeScript CLI, core modules, and runtimes",
  options: [helpOption("info")],
};

const updateCommand: Fig.Subcommand = {
  name: "update",
  description:
    "Updates the project with the latest versions of platform runtimes, cross-platform modules and webpack",
  isDangerous: true,
  subcommands: [
    {
      name: "next",
      description: "The latest development release",
    },
  ],
  args: {
    name: "version",
    description: "The version to update the project to",
    isOptional: true,
  },
  options: [helpOption("update")],
};

const packageManagerCommand: Fig.Subcommand = {
  name: "package-manager",
  description: "Prints the value of the current package manager",
  subcommands: [
    {
      name: "get",
      description: "Prints the value of the current package manager",
    },
    {
      name: "set",
      description:
        "Enables the specified package manager for the NativeScript CLI. Supported values are npm, yarn and pnpm",
    },
  ],
  options: [helpOption("package-manager")],
};

const doctorCommand: Fig.Subcommand = {
  name: "doctor",
  description:
    "Checks your system for configuration problems which might prevent the NativeScript CLI from working properly for the specified platform, if configured",
  subcommands: [
    {
      name: "android",
      description: "Check your system configuration for android",
    },
    {
      name: "ios",
      description: "Check your system configuration for ios",
    },
  ],
  options: [helpOption("doctor")],
};

const migrateCommand: Fig.Subcommand = {
  name: "migrate",
  description:
    "Migrates the app dependencies to a form compatible with NativeScript 6.0",
  isDangerous: true,
  options: [helpOption("migrate")],
};

const proxyCommand: Fig.Subcommand = {
  name: "proxy",
  description: "Displays the current proxy settings of the NativeScript CLI",
  subcommands: [
    {
      name: "clear",
      description:
        "Clears the currently configured proxy settings of the NativeScript CLI",
    },
    {
      name: "set",
      description: "Sets the proxy settings of the NativeScript CLI",
      args: [
        {
          name: "proxy url",
          description:
            "Full url of the proxy. For example, http://127.0.0.1:8888. If you do not provide the url when running the command, the NativeScript CLI will prompt you to provide it",
        },
        {
          name: "username",
          description: "Credentials for the proxy",
          isOptional: true,
        },
        {
          name: "password",
          description: "Credentials for the proxy",
          isOptional: true,
        },
      ],
      options: [
        {
          name: "--insecure",
          description:
            "Allows insecure SSL connections and transfers to be performed. In case your proxy doesn't have a CA certificate or has an invalid one you need to use this flag",
        },
      ],
    },
  ],
  options: [helpOption("proxy")],
};

const usageReportingCommand: Fig.Subcommand = {
  name: "usage-reporting",
  description:
    "Configures anonymous usage reporting for the NativeScript CLI. All data gathered is used strictly for improving the product and will never be used to identify or contact you",
  subcommands: [
    {
      name: "status",
      description:
        "Shows the current configuration for anonymous usage reporting for the NativeScript CLI",
    },
    {
      name: "enable",
      description: "Enables anonymous usage reporting",
    },
    {
      name: "disable",
      description: "Disables anonymous usage reporting",
    },
  ],
  options: [helpOption("usage-reporting")],
  priority: 1,
};

const errorReportingCommand: Fig.Subcommand = {
  name: "error-reporting",
  description:
    "Configures anonymous error reporting for the NativeScript CLI. All data gathered is used strictly for improving the product and will never be used to identify or contact you",
  subcommands: [
    {
      name: "status",
      description:
        "Shows the current configuration for anonymous error reporting for the NativeScript CLI",
    },
    {
      name: "enable",
      description: "Enables anonymous error reporting",
    },
    {
      name: "disable",
      description: "Disables anonymous error reporting",
    },
  ],
  options: [helpOption("error-reporting")],
  priority: 1,
};

// Project Development Commands
const createCommand: Fig.Subcommand = {
  name: "create",
  description:
    "Create a new Nativescript project. Press Enter for an interactive walkthrough",
  args: {
    name: "application name",
    description: "The name of the Nativescript project",
    isOptional: true,
  },
  options: [
    {
      name: "--template",
      description: "Create a project using a predefined template",
      args: {
        name: "template",
        generators: {
          script: [
            "curl",
            "-sfL",
            "https://api.github.com/repos/NativeScript/nativescript-app-templates/contents/packages",
          ],
          cache: {
            ttl: 100 * 24 * 60 * 60 * 1000, // 100days
          },
          postProcess: (output) => {
            return JSON.parse(output).map((branch) => {
              const template = branch?.name;
              return {
                name: `@nativescript/${template}`,
                description: `Template ${template}`,
              } as Fig.Suggestion;
            });
          },
        },
      },
    },
    {
      name: ["--angular", "--ng"],
      description: "Create a project using the Angular template",
    },
    {
      name: "--react",
      description: "Create a project using the React template",
    },
    {
      name: ["--vue", "--vuejs"],
      description: "Create a project using the Vue template",
    },
    {
      name: "--svelte",
      description: "Create a project using the Svelte template",
    },
    {
      name: ["--typescript", "--tsc", "--ts"],
      description: "Create a project using plain TypeScript",
    },
    {
      name: ["--javascript", "--js"],
      description: "Create a project using plain JavaScript",
    },
    {
      name: "--path",
      description:
        "Specifies the directory where you want to create the project, if different from the current directory. <directory> is the absolute path to an empty directory in which you want to create the project",
      priority: 10,
      args: {
        name: "directory",
        template: "folders",
      },
    },
    {
      name: "--appid",
      description:
        "Sets the application identifier of your project. <appid> is the value of the application identifier and it must meet the specific requirements of each platform that you want to target. If not specified, the application identifier is set to org.nativescript.<Project Name>. The application identifier must be a domain name in reverse",
      args: {
        name: "identifier",
      },
    },
    helpOption("create"),
  ],
};

const cleanCommand: Fig.Subcommand = {
  name: "clean",
  description: "Clean your Nativescript project",
  options: [helpOption("clean")],
};

const previewCommand: Fig.Subcommand = {
  name: "preview",
  description:
    "Produces a QR code which can be used to preview the app on a device",
  options: [forceOption, noHmrOption, helpOption("preview")],
};

const platformCommand: Fig.Subcommand = {
  name: "platform",
  description:
    "Lists all platforms that the project currently targets. You can build and deploy your project only for these target platforms",
  subcommands: [
    {
      name: "list",
      description:
        "Lists all platforms that the project currently targets. You can build and deploy your project only for these target platforms",
    },
    {
      name: "add",
      description:
        "Configures the current project to target the selected platform",
      subcommands: [
        {
          name: "android",
          description: "The latest android platform",
          options: [frameworkPathOption],
        },
        {
          name: "android@[Version]",
          insertValue: "android@{cursor}",
          description: "The defined android platform eg. 1.0.0",
          options: [frameworkPathOption],
        },
        {
          name: "ios",
          description: "The latest ios platform",
          options: [frameworkPathOption],
        },
        {
          name: "ios@[Version]",
          insertValue: "ios@{cursor}",
          description: "The defined ios platform eg. 1.0.0",
          options: [frameworkPathOption],
        },
      ],
    },
    {
      name: "remove",
      description:
        "Removes the selected platform from the platforms that the project currently targets",
      subcommands: [
        {
          name: "android",
          description: "The latest android platform",
        },
        {
          name: "ios",
          description: "The latest ios platform",
        },
      ],
    },
    {
      name: "update",
      description:
        "Updates the NativeScript runtime for the specified platform",
      subcommands: [
        {
          name: "android",
          description: "The latest android platform",
        },
        {
          name: "ios",
          description: "The latest ios platform",
        },
      ],
    },
  ],
  options: [helpOption("platform")],
};

const runCommand: Fig.Subcommand = {
  name: "run",
  description:
    "Runs your project on all connected devices or in native emulators for the selected platform",
  subcommands: [
    {
      name: "android",
      description: "The latest android platform",
      options: [...platformOptions.run.both, ...platformOptions.run.android],
      priority: 90,
    },
    {
      name: "ios",
      description: "The latest ios platform",
      options: [...platformOptions.run.both, ...platformOptions.run.ios],
      priority: 90,
    },
  ],
  options: [...platformOptions.run.both, helpOption("run")],
};

const debugCommand: Fig.Subcommand = {
  name: "debug",
  description:
    "Initiates a debugging session for your project on a connected device or native emulator",
  subcommands: [
    {
      name: "android",
      description:
        "Start a debugging session for your project on a connected Android device or Android emulator",
      options: [
        ...platformOptions.debug.both,
        ...platformOptions.debug.android,
      ],
      priority: 90,
    },
    {
      name: "ios",
      description:
        "Start a debugging session for your project on a connected iOS device or in the native iOS simulator",
      options: [...platformOptions.debug.both, ...platformOptions.debug.ios],
      priority: 90,
    },
  ],
  options: [helpOption("debug")],
};

const testCommand: Fig.Subcommand = {
  name: "test",
  description: "Runs unit tests on the selected mobile platform",
  subcommands: [
    {
      name: "init",
      description: "Configure your project for unit testing",
      options: [
        {
          name: "--framework",
          description: "Sets the unit testing framework to install",
          args: {
            name: "framework",
            suggestions: ["mocha", "jasmine", "qunit"],
          },
        },
      ],
    },
    {
      name: "android",
      description:
        "Run unit tests on all connected android devices or native emulators",
      options: [...platformOptions.test.both, ...platformOptions.test.android],
      priority: 90,
    },
    {
      name: "ios",
      description:
        "Run unit tests on all connected ios devices or native emulators",
      options: [...platformOptions.test.both, ...platformOptions.test.ios],
      priority: 90,
    },
  ],
  options: [helpOption("test")],
};

const pluginCommand: Fig.Subcommand = {
  name: "plugin",
  description: "Manage the plugins for your project",
  subcommands: [
    {
      name: "add",
      description: "Installs the specified plugin and its dependencies",
      args: {
        name: "plugin",
        description: "A valid Nativescript plugin",
      },
    },
    {
      name: "remove",
      description: "Uninstalls the specified plugin and its dependencies",
      args: {
        name: "plugin",
        description: "A valid Nativescript plugin",
      },
    },
    {
      name: "update",
      description:
        "Uninstalls and installs the specified plugin(s) and its dependencies",
      args: {
        name: "plugin(s)",
        description: "A valid Nativescript plugin",
      },
    },
    {
      name: "build",
      description: "Builds the Android parts of a NativeScript plugin",
    },
    {
      name: "create",
      description: "Creates a project for building a new NativeScript plugin",
      args: {
        name: "plugin repository name",
        description: "A valid Nativescript plugin repository",
      },
      options: [
        {
          name: "--path",
          description:
            "Specifies the directory where you want to create the project, if different from the current directory",
          args: {
            name: "directory",
            description:
              "Specifies the directory where you want to create the project, if different from the current directory",
            template: "folders",
          },
        },
        {
          name: "--username",
          description:
            "Specifies the GitHub username, which will be used to build the URLs in the plugin's package.json file",
          args: {
            name: "username",
            description: "GitHub username",
          },
        },
        {
          name: "--pluginName",
          description:
            "Used to set the default file and class names in the plugin source",
          args: {
            name: "name",
          },
        },
        {
          name: "--includeTypeScriptDemo",
          description: "Specifies if a TypeScript demo should be created",
        },
        {
          name: "--includeTypeScriptDemo=n",
          description: "Specifies if TypeScript demo should NOT be created",
        },
        {
          name: "--includeAngularDemo",
          description: "Specifies if an Angular demo should be created",
        },
        {
          name: "--includeAngularDemo=n",
          description: "Specifies if Angular demo should NOT be created",
        },
        {
          name: "--template",
          description:
            "Specifies the custom seed archive, which you want to use to create your plugin",
          args: {
            name: "template",
            description: "Specifies the template for the plugin",
          },
        },
      ],
    },
  ],
  options: [helpOption("plugin")],
};

const resourcesCommand: Fig.Subcommand = {
  name: "resources",
  description: "Manage the plugins for your project",
  subcommands: [
    {
      name: "update",
      description:
        "Updates the App_Resources's internal folder structure to conform to that of an Android Studio project",
    },
    {
      name: "generate",
      subcommands: [
        {
          name: "splashes",
          args: {
            name: "image path",
            description:
              "Path to an image that will be used to generate all splashscreens",
            template: "filepaths",
          },
          options: [
            {
              name: "--background",
              description: "Sets the background color of the splashscreen",
              args: {
                name: "color",
                default: "white",
              },
            },
          ],
        },
        {
          name: "icons",
          args: {
            name: "image path",
            description:
              "Path to an image that will be used to generate all splashscreens",
            template: "filepaths",
          },
        },
      ],
    },
  ],
  options: [helpOption("plugin")],
};

const prepareCommand: Fig.Subcommand = {
  name: "prepare",
  description:
    "Starts a Webpack compilation and prepares the app's App_Resources and the plugins platforms directories",
  subcommands: [
    {
      name: "android",
      description: "Prepares your project for an Android build",
      options: [
        {
          name: "--hmr",
          description: "Enables the hot module replacement (HMR) feature",
        },
        forceOption,
      ],
    },
    {
      name: "ios",
      description: "Prepares your project for an iOS build",
      options: [
        {
          name: "--hmr",
          description: "Enables the hot module replacement (HMR) feature",
        },
        forceOption,
      ],
    },
  ],
  options: [
    {
      name: "--hmr",
      description: "Enables the hot module replacement (HMR) feature",
    },
    forceOption,
    helpOption("prepare"),
  ],
};

const buildCommand: Fig.Subcommand = {
  name: "build",
  description:
    "Builds the project for iOS and produces an APP or IPA that you can manually deploy in the iOS Simulator or on a device",
  subcommands: [
    {
      name: "android",
      options: [
        ...platformOptions.build.both,
        ...platformOptions.build.android,
      ],
      priority: 90,
    },
    {
      name: "ios",
      options: [...platformOptions.build.both, ...platformOptions.build.ios],
      priority: 90,
    },
  ],
  options: [
    ...platformOptions.build.both,
    {
      name: "--hmr",
      description: "Enables the hot module replacement (HMR) feature",
    },
    justLaunchOption,
    helpOption("build"),
  ],
};

const deployCommand: Fig.Subcommand = {
  name: "deploy",
  description:
    "Prepares, builds and deploys the project to a connected device or native emulator. You must specify the target platform on which you want to deploy. It will deploy the app on all connected devices targeting the selected platform",
  subcommands: [
    {
      name: "android",
      options: [
        ...platformOptions.deploy.both,
        ...platformOptions.deploy.android,
      ],
      priority: 90,
    },
    {
      name: "ios",
      options: [...platformOptions.deploy.both, ...platformOptions.deploy.ios],
      priority: 90,
    },
  ],
  options: [helpOption("deploy")],
};

const installCommand: Fig.Subcommand = {
  name: "install",
  description:
    "Installs all dependencies described in a valid package.json or installs a selected NativeScript development module as a dev dependency",
  subcommands: [
    {
      name: "typescript",
      description: "Enable TypeScript support",
    },
  ],
  args: {
    name: "module",
    description:
      "Specifies a NativeScript development module by path to a local directory containing a valid npm module or by name in the npm registry",
  },
  options: [
    {
      name: "--path",
      description:
        "Specifies the directory which contains the package.json file, if different from the current directory",
      args: {
        name: "directory",
        template: "folders",
      },
    },
    helpOption("install"),
  ],
};

// Publishing Commands
const appStoreCommand: Fig.Subcommand = {
  name: "appstore",
  description:
    "Lists all application records in iTunes Connect. The list contains name, version and bundle ID for each application record",
  subcommands: [
    {
      name: "upload",
      description:
        "Uploads project to iTunes Connect. The command either issues a production build and uploads it to iTunes Connect, or uses an already built package to upload",
      args: [
        {
          name: "appleId",
          description: "Apple id for logging in iTunes Connect",
        },
        {
          name: "password",
          description: "Password for logging in iTunes Connect",
        },
        {
          name: "mobile provisioning profile identifier",
          description:
            "The identifier of the mobile provision(e.g. d5d40f61-b303-4fc8-aea3-fbb229a8171c) which will be used for building. This can easily be acquired through the iPhone Configuration Utility",
        },
        {
          name: "code sign identity",
          description:
            "The code sign identity which will be used for building. You can set it to something generic like 'iPhone Distribution' to let the build automatically detect a code sign identity",
        },
      ],
      options: [
        {
          name: "--ipa",
          description:
            "Use the provided .ipa file instead of building the project",
          args: {
            name: "ipa file path",
            template: "filepaths",
          },
        },
        {
          name: "--appleApplicationSpecificPassword",
          description:
            "Specifies the password for accessing the information you store in iTunes Transporter application",
          args: {
            name: "password",
          },
        },
        {
          name: "--appleSessionBase64",
          description:
            "The session that will be used instead of triggering a new login each time NativeScript CLI communicates with Apple's APIs",
          args: {
            name: "base64",
          },
        },
      ],
    },
  ],
  args: [
    {
      name: "appleId",
      description:
        "Credentials for logging in iTunes Connect. If you do not provide them when running the command, the NativeScript CLI will prompt you to provide them",
    },
    {
      name: "password",
      description: "Password for logging in iTunes Connect",
    },
  ],
  options: [
    {
      name: "--team-id",
      description:
        "Specifies the team id for which Xcode will try to find distribution certificate and provisioning profile when exporting for AppStore submission",
      args: {
        name: "team id",
      },
    },
    helpOption("appstore"),
  ],
};

// Devices Commands

const deviceCommand: Fig.Subcommand = {
  name: ["device", "devices"],
  description:
    "Lists all recognized connected Android or iOS devices with serial number and index, grouped by platform",
  subcommands: [
    {
      name: "android",
      description:
        "Lists all recognized connected Android physical and running Android virtual devices",
      options: [
        timeoutOption,
        {
          name: "--available-devices",
          description: "Lists all available Android devices",
        },
        jsonOption,
      ],
    },
    {
      name: "ios",
      description:
        "Lists all recognized connected iOS devices with serial number and index",
      options: [
        timeoutOption,
        {
          name: "--available-devices",
          description: "Lists all available iOS devices",
        },
        jsonOption,
      ],
    },
    {
      name: "log",
      description:
        "Opens the device log stream for a selected connected device",
      options: [deviceOption],
    },
    {
      name: "list-applications",
      description:
        "Lists the installed applications on all connected Android or iOS devices",
      options: [deviceOption],
    },
    {
      name: "run",
      description:
        "Runs the selected application on a connected Android or iOS device",
      args: {
        name: "application id",
        description: "The application identifier", //TODO: generator $ tns device list-applications.
        // generators: {
        //   script: ["ns", "device", "list-applications"],
        //   postProcess: (output) => {
        //     return JSON.parse(output).map((branch) => {
        //       const template = branch?.name;
        //       return {
        //         name: `@nativescript/${template}`,
        //         description: `Template ${template}`,
        //       } as Fig.Suggestion;
        //     });
        //   },
        // },
      },
      options: [deviceOption],
    },
  ],
  options: [
    {
      name: "--available-devices",
      description: "Lists all available devices",
    },
    jsonOption,
    helpOption("device"),
  ],
};

/**
 * Command groups
 * (based off the help page when running `ns help`)
 */
const generalCommands: Array<Fig.Subcommand> = [
  helpCommand,
  infoCommand,
  updateCommand,
  packageManagerCommand,
  doctorCommand,
  migrateCommand,
  usageReportingCommand,
  errorReportingCommand,
  proxyCommand,
  // autoCompleteCommand,
];

const projectDevelopmentCommands: Array<Fig.Subcommand> = [
  createCommand,
  cleanCommand,
  previewCommand,
  platformCommand,
  runCommand,
  debugCommand,
  testCommand,
  pluginCommand,
  resourcesCommand,
  prepareCommand,
  buildCommand,
  deployCommand,
  installCommand,
];

const publishingCommands: Array<Fig.Subcommand> = [appStoreCommand];

const devicesCommand: Array<Fig.Subcommand> = [deviceCommand];

// Environment Configuration Commands
// const setupCommand: Fig.Subcommand = {}

const environmentConfigurationCommands: Array<Fig.Subcommand> = [
  // setupCommand
];

const allCommands = [
  ...generalCommands,
  ...projectDevelopmentCommands,
  ...publishingCommands,
  ...devicesCommand,
  ...environmentConfigurationCommands,
];

const completionSpec: Fig.Spec = {
  name: "ns",
  description:
    "The NativeScript CLI lets you create, build, and deploy NativeScript based apps on iOS and Android devices",
  subcommands: allCommands,
  options: [
    {
      name: ["-v", "--version"],
      description: "View your current Nativescript CLI version",
    },
  ],
};

export default completionSpec;
