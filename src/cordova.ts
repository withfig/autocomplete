const commonOptions: Fig.Option[] = [
  {
    name: ["-d", "--verbose"],
    description:
      "Pipe out more verbose output to your shell. You can also subscribe to log and warn events if you are consuming cordova-cli as a node module by calling cordova.on('log', function() {}) or cordova.on('warn', function() {})",
  },
  {
    name: ["-v", "--version"],
    description: "Print out the version of your cordova-cli install",
  },
  {
    name: "--no-update-notifier",
    description: "Will disable updates check",
  },
  {
    name: "--nohooks",
    description:
      "Suppress executing hooks (taking RegExp hook patterns as parameters)",
  },
  {
    name: "--no-telemetry",
    description: "Disable telemetry collection for the current command",
  },
];

const platformGenerator: Fig.Generator = {
  script: ["cat", "package.json"],
  postProcess: function (out: string) {
    const suggestions = [];
    try {
      if (out.trim() == "") {
        return suggestions;
      }

      const packageJSON = JSON.parse(out);
      const platforms = packageJSON["cordova"]["platforms"];

      if (platforms) {
        for (const platform of platforms) {
          suggestions.push({
            name: platform,
            description: "Platform",
          });
        }
      }
    } catch (error) {
      console.log(error);
    }
    return suggestions;
  },
};

const pluginGenerator: Fig.Generator = {
  script: ["cordova", "plugin", "list"],
  postProcess: (out: string) =>
    out.split("\n").map((pluginName) => ({
      name: pluginName,
      icon: "fig://icon?type=string",
    })),
};

const completionSpec: Fig.Spec = {
  name: "cordova",
  description: "Manage your Cordova application",
  subcommands: [
    {
      name: "create",
      description: "Create a project",
      args: [
        {
          name: "path",
          template: "folders",
          description:
            "Directory which should not already exist. Cordova will create this directory",
        },
        {
          name: "id",
          description:
            "Reverse domain-style identifier that maps to id attribute of widget element in config.xml. This can be changed but there may be code generated using this value, such as Java package names. It is recommended that you select an appropriate value",
          isOptional: true,
          default: "io.cordova.hellocordova",
        },
        {
          name: "name",
          description:
            "Application's display title that maps name element in config.xml file. This can be changed but there may be code generated using this value, such as Java class names. The default value is HelloCordova, but it is recommended that you select an appropriate value",
          isOptional: true,
          default: "HelloCordova",
        },
      ],
      options: [
        ...commonOptions,
        {
          name: "--template",
          description:
            "Use a custom template located locally, in NPM, or GitHub",
        },
      ],
    },
    {
      name: "help",
      description: "Get help for a command",
      args: {
        name: "command",
        suggestions: [
          "create",
          "help",
          "telemetry",
          "config",
          "info",
          "requirements",
          "platform",
          "plugin",
          "prepare",
          "compile",
          "build",
          "clean",
          "run",
          "serve",
        ],
        isOptional: true,
      },
    },
    {
      name: "telemetry",
      description: "Turn telemetry collection on or off",
      args: [
        { name: "on", description: "Turn telemetry collection on" },
        { name: "off", description: "Turn telemetry collection off" },
      ],
    },
    {
      name: "config",
      description: "Set, get, delete, edit, and list global cordova options",
      subcommands: [
        {
          name: "ls",
          description: "Lists contents of config file",
        },
        {
          name: "edit",
          description: "Opens the config file in an editor",
        },
        {
          name: "set",
          description:
            'Sets the config key to the value. If value is omitted, then it sets it to "true"',
          args: [
            {
              name: "key",
            },
            {
              name: "value",
            },
          ],
        },
        {
          name: "get",
          description: "Echo the config value to stdout",
          args: {
            name: "key",
          },
        },
        {
          name: "delete",
          description: "Deletes the key from all configuration files",
          args: {
            name: "key",
          },
        },
      ],
    },
    {
      name: "info",
      description: "Generate project information",
    },
    {
      name: "requirements",
      description:
        "Checks and print out all the installation requirements for platforms specified",
      args: {
        name: "platform",
        description:
          "Platform name(s) to build. If not specified, all platforms are built",
        generators: platformGenerator,
      },
    },
    {
      name: ["platform", "platforms"],
      description: "Manage project platforms",
      subcommands: [
        {
          name: "add",
          description: "Add specified platforms",
          args: {
            name: "platform",
            isVariadic: true,
            template: ["filepaths", "folders"],
            suggestions: ["android", "ios", "windows", "browser", "electron"],
          },
          options: [
            {
              name: "--nosave",
              description: "Do not save",
            },
            {
              name: "--link",
              description:
                "When platform-spec is a local path, link the platform library directly instead of making a copy of it",
              args: {
                name: "path",
                template: "folders",
              },
            },
          ],
        },
        {
          name: ["remove", "rm"],
          description: "Remove specified platforms",
          args: {
            name: "platform",
            isVariadic: true,
            generators: platformGenerator,
          },
          options: [
            {
              name: "--nosave",
              description: "Do not delete specified platforms from",
            },
          ],
        },
        {
          name: "update",
          description: "Update specified platforms",
          options: [
            {
              name: "--save",
              description: "Updates the version specified in **config.xml**",
            },
          ],
        },
        {
          name: ["list", "ls"],
          description: "List all installed and available platforms",
        },
      ],
    },
    {
      name: ["plugin", "plugins"],
      description: "Manage project plugins",
      subcommands: [
        {
          name: "add",
          description: "Add specified plugins",
          args: {
            name: "plugin",
            isVariadic: true,
            template: "folders",
          },
          options: [
            {
              name: "--searchpath",
              description:
                "When looking up plugins by ID, look in this directory and each of its subdirectories before hitting the registry. Multiple search paths can be specified. Use ':' as a separator in *nix based systems and ';' for Windows",
              args: {
                name: "directory",
                template: "folders",
              },
            },
            {
              name: "--noregistry",
              description: "Don't search the registry for plugins",
            },
            {
              name: "--link",
              description:
                "When installing from a local path, creates a symbolic link instead of copying files. The extent to which files are linked varies by platform. Useful for plugin development",
            },
            {
              name: "--nosave",
              description:
                "Do NOT save the <plugin-spec> as part of the plugin element into config.xml or package.json",
            },
            {
              name: "--force",
              description:
                "Forces copying source files from the plugin even if the same file already exists in the target directory",
            },
          ],
        },
        {
          name: "remove",
          description: "Remove plugins with the given IDs/name",
          options: [
            {
              name: "--nosave",
              description:
                "Do NOT remove the specified plugin from config.xml or package.json",
            },
          ],
          args: {
            name: "plugin",
            isVariadic: true,
            generators: pluginGenerator,
          },
        },
        {
          name: "list",
          description: "List currently installed plugins",
        },
      ],
    },
    {
      name: "prepare",
      description: "Copy files into platform(s) for building",
      args: {
        name: "platform",
        generators: platformGenerator,
      },
    },
    {
      name: "compile",
      description: "Compile project for platform(s)",
      options: [
        ...commonOptions,
        {
          name: "--debug",
          description:
            "Perform a debug build. This typically translates to debug mode for the underlying platform being built",
        },
        {
          name: "--release",
          description:
            "Perform a release build. This typically translates to release mode for the underlying platform being built",
        },
        {
          name: "--device",
          description: "Build it for a device",
        },
        {
          name: "--emulator",
          description:
            "Build it for an emulator. In particular, the platform architecture might be different for a device vs. emulator",
        },
        {
          name: "--buildConfig",
          description:
            "Use the specified build configuration file. build.json file is used to specify parameters to customize the app build process especially related to signing the package",
          args: {
            template: ["filepaths", "folders"],
          },
        },
      ],
      args: {
        name: "platform",
        description:
          "Platform name(s) to build. If not specified, all platforms are built",
        generators: platformGenerator,
      },
    },
    {
      name: "build",
      description: "Build project for platform(s) (prepare + compile)",
      options: [
        ...commonOptions,
        {
          name: "--debug",
          description:
            "Perform a debug build. This typically translates to debug mode for the underlying platform being built",
        },
        {
          name: "--release",
          description:
            "Perform a release build. This typically translates to release mode for the underlying platform being built",
        },
        {
          name: "--device",
          description: "Build it for a device",
        },
        {
          name: "--emulator",
          description:
            "Build it for an emulator. In particular, the platform architecture might be different for a device vs. emulator",
        },
        {
          name: "--buildConfig",
          description:
            "Use the specified build configuration file. build.json file is used to specify parameters to customize the app build process especially related to signing the package",
          args: {
            template: ["filepaths", "folders"],
          },
        },
      ],
      args: {
        name: "platform",
        description:
          "Platform name(s) to build. If not specified, all platforms are built",
        generators: platformGenerator,
      },
    },
    {
      name: "clean",
      description: "Cleanup project from build artifacts",
      args: {
        name: "platform",
        description:
          "Platform name(s) to build. If not specified, all platforms are built",
        generators: platformGenerator,
      },
    },
    {
      name: "run",
      description: "Run project (including prepare && compile)",
      args: {
        name: "platform",
        description:
          "Platform name(s) to run. If not specified, all platforms are run",
        generators: platformGenerator,
      },
      options: [
        {
          name: "--list",
          description:
            "Lists available targets. Displays both device and emulator deployment targets unless specified",
        },
        {
          name: "--debug",
          description:
            "Deploy a debug build. This is the default behavior unless --release is specified",
        },
        {
          name: "--release",
          description: "Deploy a release build",
        },
        {
          name: "--noprepare",
          description: "Skip preparing (available in Cordova v6.2 or later)",
        },
        {
          name: "--nobuild",
          description: "Skip building",
        },
        {
          name: "--device",
          description: "Deploy to a device",
        },
        {
          name: "--emulator",
          description: "Deploy to an emulator",
        },
        {
          name: "--target",
          description:
            "Deploy to a specific target emulator/device. Use --list to display target options",
          args: {
            name: "target",
          },
        },
        {
          name: "--buildConfig",
          description:
            "Use the specified build configuration file. build.json file is used to specify parameters to customize the app build process especially related to signing the package",
          args: {
            name: "configFile",
            template: "filepaths",
          },
        },
      ],
    },
    {
      name: "serve",
      description: "Run project with a local webserver (including prepare)",
      args: {
        name: "port",
        description: "Port to use for local web server",
        default: "8000",
      },
    },
  ],
  options: commonOptions,
};
export default completionSpec;
