import { filepaths } from "@fig/autocomplete-generators";

const examplesGenerator: Fig.Generator = {
  script: ["meteor", "create", "--list"],
  postProcess: (output) => {
    return output
      .split("\n")
      .filter((example) => example.includes("github.com"))
      .map((example) => {
        return { name: example.split(":")[0].trim() };
      });
  },
};

const packagesGenerator: Fig.Generator = {
  script: ["cat", "./.meteor/packages"],
  postProcess: (output) => {
    if (output.includes("No such file or directory")) {
      return [];
    }

    return output.split("\n").map((pack) => {
      let trimmedPack = pack
        .replace(/#.*/g, "")
        .replace(/^\s+|\s+$|\s+(?=\s)/g, "");
      if (trimmedPack.includes("@")) {
        trimmedPack = trimmedPack.split("@").at(0);
      }
      return { name: trimmedPack };
    });
  },
};

const platformGenerator: Fig.Generator = {
  script: ["meteor", "list-platforms"],
  postProcess: (output) => {
    return output.split("\n").map((platform) => {
      return { name: platform };
    });
  },
};

const completionSpec: Fig.Spec = {
  name: "meteor",
  description: "Run the meteor command-line tool",
  subcommands: [
    {
      name: "npm",
      loadSpec: "npm",
    },
    {
      name: "help",
      description: "Get help on meteor command line usage",
      args: {
        name: "command",
        description: "Built-in command",
        isOptional: true,
        template: "help",
      },
      subcommands: [
        {
          name: "admin",
          subcommands: [
            { name: "maintainers" },
            { name: "recommend-release" },
            { name: "change-homepage" },
            { name: "list-organizations" },
            { name: "members" },
          ],
        },
      ],
    },
    {
      name: "run",
      description:
        "Run a meteor development server in the current project. Searches upward from the current directory for the root directory of a Meteor project",
      options: [
        {
          name: "target",
          description:
            "If you have added a platform to your app with 'meteor add-platform', you can pass one of the following targets as an argument to this command",
        },
        {
          name: ["--port", "-p"],
          description: "Port to listen on (instead of the default 3000)",
          args: {
            name: "port",
            isOptional: true,
            default: "3000",
          },
        },
        {
          name: "--inspect",
          description:
            "Enable server-side debugging via debugging clients like the Node.js command-line debugger, Chrome DevTools, or Visual Studio Code",
          args: {
            name: "port",
            isOptional: true,
            default: "9229",
          },
        },
        {
          name: "--inspect-brk",
          description:
            "Enable server-side debugging via debugging clients like the Node.js command-line debugger, Chrome DevTools, or Visual Studio Code. The server will be paused at startup, waiting for clients to attach to the process on the specified port",
          args: {
            name: "port",
            isOptional: true,
            default: "9229",
          },
        },
        {
          name: "--mobile-server",
          description:
            "Location where mobile builds connect to the Meteor server. Defaults to your local IP and the port that the Meteor server binds to. Can include a URL scheme (for example, --mobile-server https://example.com:443)",
        },
        {
          name: "--cordova-server-port",
          description:
            "Local port where Cordova will serve the content. It's important when multiple Cordova apps are build from the same Meteor app source code as by default the port is generated using the id inside .meteor/.id file",
          args: {
            name: "port",
          },
        },
        {
          name: "--production",
          description:
            "Simulate production mode. Minify and bundle CSS and JS files",
        },
        {
          name: "--raw-logs",
          description: "Run without parsing logs from stdout and stderr",
        },
        {
          name: ["--settings", "-s"],
          description: "Set optional data for Meteor.settings on the server",
          args: {
            name: "JSON File",
            generators: filepaths({ extensions: ["json"] }),
          },
        },
        {
          name: "--release",
          description: "Specify the release of Meteor to use",
          args: {
            name: "release",
          },
        },
        {
          name: "--verbose",
          description: "Print all output from builds logs",
        },
        {
          name: "--no-lint",
          description: "Don't run linters used by the app on every rebuild",
        },
        {
          name: "--no-release-check",
          description:
            "Don't run the release updater to check for new releases",
        },
        {
          name: "--allow-incompatible-update",
          description:
            "Allow packages in your project to be upgraded or downgraded to versions that are potentially incompatible with the current versions, if required to satisfy all package version constraints",
        },
        {
          name: "--extra-packages",
          description:
            'Run with additional packages (comma separated, for example: --extra-packages "package-name1, package-name2@1.2.3")',
          args: {
            name: "packages",
          },
        },
        {
          name: "--exclude-archs",
          description:
            'Don\'t create bundles for certain web architectures (comma separated, for example: --exclude-archs "web.browser.legacy, web.cordova")',
          args: {
            name: "architectures",
          },
        },
      ],
    },
    {
      name: "debug",
      description:
        "DEPRECATED. The 'meteor debug' command is deprecated in favor of 'meteor --inspect-brk'",
      deprecated: true,
    },
    {
      name: "create",
      description:
        "Create a new Meteor project. By default, it uses React and makes a subdirectory named name and copies in the template app. You can pass an absolute or relative path",
      args: {
        name: "path",
      },
      options: [
        {
          name: "--release",
          description: "Specify the release of Meteor to use",
          args: {
            name: "release",
          },
        },
        {
          name: "--package",
          description: "Create a new meteor package instead of an app",
          args: {
            name: "package_name",
            suggestCurrentToken: true,
          },
        },
        {
          name: "--example",
          description: "Example template to use",
          args: {
            name: "example_name",
            generators: examplesGenerator,
          },
        },
        {
          name: "--list",
          description: "Show list of available examples",
        },
        {
          name: "--bare",
          description: "Create an empty app",
        },
        {
          name: "--minimal",
          description: "Create an app with as few Meteor packages as possible",
        },
        {
          name: "--full",
          description: "Create a fully scaffolded app",
        },
        {
          name: "--react",
          description: "Create a basic react-based app, same as default",
        },
        {
          name: "--vue",
          description: "Create a basic vue-based app",
        },
        {
          name: "--apollo",
          description: "Create a basic apollo-based app",
        },
        {
          name: "--svelte",
          description: "Create a basic svelte-based app",
        },
        {
          name: "--typescript",
          description: "Create a basic Typescript React-based app",
        },
        {
          name: "--blaze",
          description: "Create a basic blaze-based app",
        },
        {
          name: "--tailwind",
          description:
            "Create a basic react-based app, with tailwind configured",
        },
      ],
    },
    {
      name: "update",
      description:
        "Attempts to bring you to the latest version of Meteor, and then to upgrade your packages to their latest versions. By default, update will not break compatibility",
      args: {
        name: "package_names",
        isOptional: true,
        generators: packagesGenerator,
      },
      options: [
        {
          name: "--packages-only",
          description:
            "Update the package versions only. Do not update the release",
        },
        {
          name: "--patch",
          description: "Update the release to a patch release only",
        },
        {
          name: "--release",
          description: "Update to a specific release of meteor",
          args: {
            name: "release",
          },
        },
        {
          name: "--allow-incompatible-update",
          description:
            "Allow packages in your project to be upgraded or downgraded to versions that are potentially incompatible with the current versions, if required to satisfy all package version constraints",
        },
        {
          name: "--all-packages",
          description: "Update all packages including indirect dependencies",
        },
      ],
    },
    {
      name: "add",
      description:
        "Add packages to your Meteor project. You can add multiple packages with one command",
      args: {
        name: "package",
      },
      options: [
        {
          name: "--allow-incompatible-update",
          description:
            "Allow packages in your project to be upgraded or downgraded to versions that are potentially incompatible with the current versions, if required to satisfy all package version constraints",
        },
      ],
    },
    {
      name: "remove",
      description:
        'Removes a package previously added to your Meteor project. You can remove multiple packages with one command. For a list of the packages that your application is currently using, see "meteor list"',
      args: {
        name: "package",
        generators: packagesGenerator,
      },
    },
    {
      name: "list",
      description:
        "Lists the packages that you have explicitly added to your project",
      options: [
        {
          name: "--tree",
          description: "Outputs a tree showing how packages are referenced",
        },
        {
          name: "--json",
          description: "Outputs the tree in JSON format",
        },
        {
          name: "--weak",
          description: "Show weakly referenced dependencies in the tree",
        },
        {
          name: "--details",
          description: "Adds more package details to the JSON output",
        },
      ],
    },
    {
      name: "add-platform",
      description:
        "Adds platforms to your Meteor project. You can add multiple platforms with one command",
      args: {
        name: "platform",
        suggestions: ["server", "browser", "android", "ios"],
      },
    },
    {
      name: "remove-platform",
      description: "Removes a platform previously added to your Meteor project",
      args: {
        name: "platform",
        generators: platformGenerator,
      },
    },
    {
      name: "list-platforms",
      description: "Lists all of the platforms added to your project",
    },
    {
      name: "ensure-cordova-dependencies",
      description:
        "Check if the dependencies are installed, otherwise install them",
    },
    {
      name: "build",
      description:
        "Package this project up for deployment. The command outputs a directory with builds for all platforms in this project",
      args: {
        name: "output path",
        template: "folders",
        suggestCurrentToken: true,
      },
      options: [
        {
          name: "--debug",
          description: "Build in debug mode (don't minify, etc)",
        },
        {
          name: "--directory",
          description:
            "Output a directory (rather than a tarball) for the application server bundle. If the output location exists, it will be recursively deleted first",
        },
        {
          name: "--server-only",
          description:
            "Skip building mobile apps even if mobile platforms have been added",
        },
        {
          name: "--mobile-settings",
          description:
            "Set optional data for the initial value of Meteor.settings in your mobile application",
        },
        {
          name: "--server",
          description:
            "Location where mobile builds connect to the Meteor server. Defaults to localhost:3000. Can include a URL scheme (for example, --server https://example.com:443)",
        },
        {
          name: "--architecture",
          description:
            "Builds the server for a different architecture than your developer machine's architecture. Note: This option selects the architecture of the binary-dependent Atmosphere packages you would like bundled into your application, when those packages were specifically published for multiple architectures (i.e. with meteor publish-for-arch). If your project doesn't use any Atmosphere packages that have binary dependencies, --architecture has no effect",
          args: {
            name: "arch",
            suggestions: [
              "os.osx.x86_64",
              "os.linux.x86_64",
              "os.linux.x86_32",
              "os.windows.x86_32",
              "os.windows.x86_64",
            ],
          },
        },
        {
          name: "--allow-incompatible-update",
          description:
            "Allow packages in your project to be upgraded or downgraded to versions that are potentially incompatible with the current versions, if required to satisfy all package version constraints",
        },
        {
          name: "--platforms",
          description: "Builds only the specified platforms (when available)",
          args: {
            name: "platforms",
            isOptional: true,
            isVariadic: true,
            generators: platformGenerator,
          },
        },
        {
          name: "--packageType",
          description: "Choose between apk/bundle for android builds",
          args: {
            name: "package-type",
            isOptional: true,
            suggestions: ["apk", "bundle"],
          },
        },
      ],
    },
    {
      name: "lint",
      description:
        "Run through the whole build process for the app and run all linters the app uses",
      options: [
        {
          name: "--allow-incompatible-update",
          description:
            "Allow packages in your project to be upgraded or downgraded to versions that are potentially incompatible with the current versions, if required to satisfy all package version constraints",
        },
      ],
    },
    {
      name: "shell",
      description:
        "When `meteor shell` is executed in an application directory where a server is already running, it connects to the server and starts an interactive shell for evaluating server-side code",
    },
    {
      name: "mongo",
      description:
        "Opens a Mongo shell to view or manipulate collections. Can only be used when developing locally",
      options: [
        {
          name: ["--url", "-U"],
          description: "Mongo database URL",
          icon: "fig://icon?type=string",
          args: {
            name: "url",
          },
        },
      ],
    },
    {
      name: "reset",
      description:
        "Reset the current project to a fresh state. Removes all local data",
    },
    {
      name: "deploy",
      description:
        "Deploys the project in your current directory to Meteor's servers",
      args: {
        name: "site",
        description:
          'You can deploy to any available name under "meteorapp.com" without any additional configuration, for example, "myapp.meteorapp.com". If you deploy to a custom domain, such as "myapp.mydomain.com", then you\'ll also need to configure your domain\'s DNS records. See the Meteor / Galaxy docs (http://cloud-guide.meteor.com/dns.html) for details',
      },
      options: [
        {
          name: ["--delete", "-D"],
          description: "Permanently delete this deployment",
        },
        {
          name: "--debug",
          description: "Deploy in debug mode (don't minify, etc)",
        },
        {
          name: ["--settings", "-s"],
          description: "Set optional data for Meteor.settings",
          args: {
            name: "JSON File",
            generators: filepaths({ extensions: ["json"] }),
          },
        },
        {
          name: "--allow-incompatible-update",
          description:
            "Allow packages in your project to be upgraded or downgraded to versions that are potentially incompatible with the current versions, if required to satisfy all package version constraints",
        },
        {
          name: "--deploy-polling-timeout",
          description:
            "The number of milliseconds to wait for build/deploy success or failure after a successful upload of your app's minified code; defaults to 15 minutes",
          args: {
            name: "milliseconds",
            description: "Milliseconds to wait",
          },
        },
        {
          name: "--no-wait",
          description:
            "Exits when Meteor has uploaded the app's code instead of waiting for the deploy to conclude",
        },
        {
          name: "--cache-build",
          description:
            "Reuses the build already created if the git commit hash is the same",
        },
        {
          name: "--free",
          description:
            "When deploying an app for the first time, you can pass this option to deploy your app in the Galaxy's free mode",
        },
        {
          name: "--plan",
          description:
            "You can change the app plan by providing this argument with one of the following values: professional, essentials, or free. Be aware that this argument overwrites the `--free` argument",
        },
        {
          name: "--mongo",
          description:
            "If this flag is true and it's not provided a mongo url in the settings ('galaxy.meteor.com'.env.MONGO_URL), when deploying, Galaxy will create a database to your app in its shared cluster and will insert the URL in your app's settings for you",
          args: {
            name: "true/false",
            suggestions: ["true", "false"],
          },
        },
        {
          name: "--container-size",
          description:
            "Change your app's container size using the deploy command",
          args: {
            name: "size",
            suggestions: [
              "tiny",
              "compact",
              "standard",
              "double",
              "quad",
              "octa",
              "dozen",
            ],
          },
        },
      ],
    },
    {
      name: "authorized",
      description: "Manage authorized users and organizations",
      args: {
        name: "site",
      },
      options: [
        {
          name: "--add",
          description: "Add an authorized user or organization",
        },
        {
          name: "--remove",
          description: "Remove an authorized user or organization",
        },
        {
          name: "--transfer",
          description:
            "Transfer the (Galaxy) app to a new user or organization",
        },
        {
          name: "--list",
          description: "List authorized users and organizations",
        },
      ],
    },
    {
      name: "login",
      description:
        "Prompts for your username and password and logs you in to your Meteor developer account",
      options: [
        {
          name: "--email",
          description: "Add an authorized user or organization",
          icon: "fig://icon?type=invite",
          args: {
            name: "email",
          },
        },
      ],
    },
    {
      name: "logout",
      description: "Log out of your Meteor developer account",
    },
    {
      name: "whoami",
      description:
        "Prints the username of the currently logged-in Meteor developer",
    },
    {
      name: "test-packages",
      description:
        "Runs unit tests for one or more packages. The results are shown in a browser dashboard that updates whenever a relevant source file is modified",
      options: [
        {
          name: "--release",
          description: "Specify the release of Meteor to use",
          args: {
            name: "release",
          },
        },
        {
          name: ["--port", "-p"],
          description:
            "Port to listen on (instead of the default 3000). Also uses port N+1 and N+2",
          args: {
            name: "port",
            default: "3000",
          },
        },
        {
          name: "--inspect",
          description:
            "Enable server-side debugging via debugging clients like the Node.js command-line debugger, Chrome DevTools, or Visual Studio Code",
          args: {
            name: "port",
            isOptional: true,
            default: "9229",
          },
        },
        {
          name: "--inspect-brk",
          description:
            "Enable server-side debugging via debugging clients like the Node.js command-line debugger, Chrome DevTools, or Visual Studio Code. The server will be paused at startup, waiting for clients to attach to the process on the specified port",
          args: {
            name: "port",
            isOptional: true,
            default: "9229",
          },
        },
        {
          name: "--mobile-server",
          description:
            "Location where mobile builds connect to the Meteor server. Defaults to your local IP and the port that the Meteor server binds to. Can include a URL scheme (for example, --mobile-server https://example.com:443)",
        },
        {
          name: "--cordova-server-port",
          description:
            "Local port where Cordova will serve the content. It's important when multiple Cordova apps are build from the same Meteor app source code as by default the port is generated using the id inside .meteor/.id file",
          args: {
            name: "port",
          },
        },
        {
          name: "--production",
          description:
            "Simulate production mode. Minify and bundle CSS and JS files",
        },
        {
          name: ["--settings", "-s"],
          description: "Set optional data for Meteor.settings on the server",
          args: {
            name: "JSON File",
            generators: filepaths({ extensions: ["json"] }),
          },
        },
        {
          name: "--ios",
          description:
            "Run tests in an iOS emulator. All of the tests for client and server will run in addition to mobile-specific tests",
        },
        {
          name: "--android",
          description:
            "Run tests in an Android emulator. All of the tests for client and server will run in addition to mobile-specific tests",
        },
        {
          name: "--ios-device",
          description:
            "Run tests on iOS mobile device. All of the tests for client and server will run in addition to mobile-specific tests",
        },
        {
          name: "--android-device",
          description:
            "Run tests on Android emulator or on a mobile device. All of the tests for client and server will run in addition to mobile-specific tests",
        },
        {
          name: "--test-app-path",
          description:
            "Set the directory in which to create a temporary app used for tests. Defaults to the system's temporary directory, usually /tmp",
          args: {
            name: "path",
            template: "folders",
            isOptional: true,
          },
        },
        {
          name: "--verbose",
          description: "Print all output from builds logs",
        },
        {
          name: "--no-lint",
          description: "Don't run linters used by the app on every rebuild",
        },
        {
          name: "--extra-packages",
          description:
            'Run with additional packages (comma separated, for example: --extra-packages "package-name1, package-name2@1.2.3")',
          args: {
            name: "packages",
          },
        },
        {
          name: "--driver-package",
          description:
            "Test driver package to use to run tests and display results. For example: --driver-package meteortesting:mocha",
          args: {
            name: "driver-package",
          },
        },
        {
          name: "package",
          description: "Package name",
        },
      ],
    },
    {
      name: "test",
      description: "Runs tests against the application",
      options: [
        {
          name: "--full-app",
          description:
            "Your app is loaded as usual, then hidden, so that your tests can inspect and interact with the full running application",
          args: {
            name: "port",
            default: "3000",
          },
        },
        {
          name: ["--port", "-p"],
          description:
            "Port to listen on (instead of the default 3000). Also uses port N+1 and N+2",
          args: {
            name: "port",
            default: "3000",
          },
        },
        {
          name: "--inspect",
          description:
            "Enable server-side debugging via debugging clients like the Node.js command-line debugger, Chrome DevTools, or Visual Studio Code",
          args: {
            name: "port",
            isOptional: true,
            default: "9229",
          },
        },
        {
          name: "--inspect-brk",
          description:
            "Enable server-side debugging via debugging clients like the Node.js command-line debugger, Chrome DevTools, or Visual Studio Code. The server will be paused at startup, waiting for clients to attach to the process on the specified port",
          args: {
            name: "port",
            isOptional: true,
            default: "9229",
          },
        },
        {
          name: "--mobile-server",
          description:
            "Location where mobile builds connect to the Meteor server. Defaults to your local IP and the port that the Meteor server binds to. Can include a URL scheme (for example, --mobile-server https://example.com:443)",
        },
        {
          name: "--cordova-server-port",
          description:
            "Local port where Cordova will serve the content. It's important when multiple Cordova apps are build from the same Meteor app source code as by default the port is generated using the id inside .meteor/.id file",
          args: {
            name: "port",
          },
        },
        {
          name: "--raw-logs",
          description: "Run without parsing logs from stdout and stderr",
        },
        {
          name: ["--settings", "-s"],
          description: "Set optional data for Meteor.settings on the server",
          args: {
            name: "JSON File",
            generators: filepaths({ extensions: ["json"] }),
          },
        },
        {
          name: "--ios",
          description:
            "Run tests in an iOS emulator. All of the tests for client and server will run in addition to mobile-specific tests",
        },
        {
          name: "--android",
          description:
            "Run tests in an Android emulator. All of the tests for client and server will run in addition to mobile-specific tests",
        },
        {
          name: "--ios-device",
          description:
            "Run tests on iOS mobile device. All of the tests for client and server will run in addition to mobile-specific tests",
        },
        {
          name: "--android-device",
          description:
            "Run tests on Android emulator or on a mobile device. All of the tests for client and server will run in addition to mobile-specific tests",
        },
        {
          name: "--test-app-path",
          description:
            "Set the directory in which to create a temporary app used for tests. Defaults to the system's temporary directory, usually /tmp",
          args: {
            name: "path",
            template: "folders",
            isOptional: true,
          },
        },
        {
          name: "--verbose",
          description: "Print all output from builds logs",
        },
        {
          name: "--extra-packages",
          description:
            'Run with additional packages (comma separated, for example: --extra-packages "package-name1, package-name2@1.2.3")',
          args: {
            name: "packages",
          },
        },
        {
          name: "--driver-package",
          description:
            "Test driver package to use to run tests and display results. For example: --driver-package meteortesting:mocha",
          args: {
            name: "driver-package",
          },
        },
        {
          name: "--exclude-archs",
          description:
            'Don\'t create bundles for certain web architectures (comma separated, for example: --exclude-archs "web.browser.legacy, web.cordova")',
          args: {
            name: "architectures",
          },
        },
      ],
    },
    {
      name: "admin",
      description:
        "Rarely used commands for administering official Meteor services",
      args: {
        name: "command",
        isCommand: true,
      },
      subcommands: [
        {
          name: "maintainers",
          description:
            "Manage users and organizations that are maintainers for a particular package",
          args: {
            name: "package_name",
          },
          options: [
            {
              name: "--add",
              description: "Add an authorized maintainer to a package",
              args: {
                name: "username",
              },
            },
            {
              name: "--remove",
              description:
                "Remove an authorized maintainer from a package. You cannot remove yourself if you are the last maintainer on a package",
              args: {
                name: "username",
              },
            },
            {
              name: "--list",
              description: "List authorized maintainers",
            },
          ],
        },
        {
          name: "recommend-release",
          description: "Recommend a version of a meteor release",
          args: {
            name: "package_name",
          },
        },
        {
          name: "change-homepage",
          description: "Change the homepage containing package information",
          args: [
            {
              name: "package_name",
            },
            {
              name: "new_url",
            },
          ],
        },
        {
          name: "list-organizations",
          description: "List the organizations of which you are a member",
        },
        {
          name: "members",
          description: "Manage members of an organization",
          args: {
            name: "organization_name",
            suggestCurrentToken: true,
          },
          options: [
            {
              name: "--add",
              description: "Add a member to the organization",
              args: {
                name: "username",
              },
            },
            {
              name: "--remove",
              description: "Remove a member to the organization",
              args: {
                name: "username",
              },
            },
            {
              name: "--list",
              description: "List members of the organization",
            },
          ],
        },
      ],
    },
    {
      name: "list-sites",
      description:
        "List the sites that you have deployed with `meteor deploy`, and sites for which other users have authorized you with the `meteor authorized` command. To see sites in a region other than us-east-1, set the DEPLOY_HOSTNAME environment variable. For example, `DEPLOY_HOSTNAME=eu-west-1.galaxy-deploy.meteor.com meteor list-sites`",
    },
    {
      name: "publish-release",
      description:
        "Publishes a new release to the package server, as determined by a JSON configuration file",
      args: {
        name: "JSON File",
        generators: filepaths({ extensions: ["json"] }),
      },
      options: [
        {
          name: "--create-track",
          description: "Publish a new release track",
        },
      ],
    },
    {
      name: "publish",
      description:
        "Publishes a new version of a local package to the package server. Must be runfrom the directory containing the package",
      options: [
        {
          name: "--create",
          description: "Publish a new package",
        },
        {
          name: "--update",
          description: "Publish a new package",
        },
        {
          name: "--allow-incompatible-update",
          description:
            "Allow packages in your project to be upgraded or downgraded to versions that are potentially incompatible with the current versions, if required to satisfy all package version constraints",
        },
        {
          name: "--no-lint",
          description: "Don't run linters used by the app on every rebuild",
        },
      ],
    },
    {
      name: "publish-for-arch",
      description:
        "Publish a package for the same architecture that you are currently on",
      args: {
        name: "packageName@version",
      },
    },
    {
      name: "search",
      description:
        "Searches through the Meteor package and release database for items whose names match the regular expression",
      args: {
        name: "regex",
      },
      options: [
        {
          name: "--maintainer",
          description: "Filter by authorized maintainer",
          args: {
            name: "maintainer_name",
          },
        },
        {
          name: "--show-all",
          description: "Show all matches, even prereleases",
        },
        {
          name: "--ejson",
          description: "Show more detailed output in EJSON format",
        },
      ],
    },
    {
      name: "show",
      description:
        "Searches through the Meteor package and release database for items whose names match the regular expression",
      args: {
        name: "name or name@version",
      },
      options: [
        {
          name: "--show-all",
          description: "Show all matches, even prereleases",
        },
        {
          name: "--ejson",
          description: "Show more detailed output in EJSON format",
        },
      ],
    },
  ],
};
export default completionSpec;
