const startWebOptions: Fig.Option[] = [
  {
    name: ["--dev"],
    description: "Turn development mode on",
    args: {},
  },
  {
    name: ["--no-dev"],
    description: "Turn development mode off",
    args: {},
  },
  {
    name: ["--minify"],
    description: "Minify code",
    args: {},
  },
  {
    name: ["--no-minify"],
    description: "Do not minify code",
    args: {},
  },
  {
    name: ["--https"],
    description: "To start webpack with https protocol",
    args: {},
  },
  {
    name: ["--no-https"],
    description: "To start webpack with http protocol",
    args: {},
  },
  {
    name: ["-a", "--android"],
    description: "Opens your app in Expo client on a connected Android device",
    args: {},
  },
  {
    name: ["-i", "--ios"],
    description:
      "Opens your app in Expo client in a currently running iOS simulator on your computer",
    args: {},
  },
  {
    name: ["-w", "--web"],
    description: "Opens your app in a web browser",
    args: {},
  },
  {
    name: ["-m", "--host"],
    description:
      'lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks',
    args: {},
  },
  {
    name: ["--tunnel"],
    description: "Same as --host tunnel",
    args: {},
  },
  {
    name: ["--lan"],
    description: "Same as --host lan",
    args: {},
  },
  {
    name: ["--localhost"],
    description: "Same as --host localhost",
    args: {},
  },
  {
    name: ["--offline"],
    description: "Allows this command to run while offline",
    args: {},
  },
  {
    name: ["--config"],
    description: "Specify a path to app.json or app.config.js",
    args: {},
  },
  {
    name: ["-h", "--help"],
    description: "output usage information",
    args: {},
  },
];

export const completionSpec: Fig.Spec = {
  name: "expo",
  description: "",
  subcommands: [
    {
      name: "build:android",
      description: "",
      options: [
        {
          name: ["-c", "--clear-credentials"],
          description: "Clear stored credentials.",
          args: {},
        },
        {
          name: ["--release-channel"],
          description:
            "Pull from specified release channel. (default: default)",
          args: {},
        },
        {
          name: ["--no-publish"],
          description: "Disable automatic publishing before building.",
          args: {},
        },
        {
          name: ["--no-wait"],
          description: "Exit immediately after triggering build.",
          args: {},
        },
        {
          name: ["--keystore-path"],
          description: "Path to your Keystore.",
          args: {},
        },
        {
          name: ["--keystore-alias"],
          description: "Keystore Alias",
          args: {},
        },
        {
          name: ["--generate-keystore"],
          description: "[deprecated] Generate Keystore if one does not exist",
          args: {},
        },
        {
          name: ["--public-url"],
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {},
        },
        {
          name: ["--skip-workflow-check"],
          description:
            "Skip warning about build service bare workflow limitations.",
          args: {},
        },
        {
          name: ["-t", "--type"],
          description: "Type of build: [app-bundle|apk].",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "build:ios",
      description: "",
      options: [
        {
          name: ["-c", "--clear-credentials"],
          description: "Clear all credentials stored on Expo servers.",
          args: {},
        },
        {
          name: ["--clear-dist-cert"],
          description:
            "Remove Distribution Certificate stored on Expo servers.",
          args: {},
        },
        {
          name: ["--clear-push-key"],
          description: "Remove Push Notifications Key stored on Expo servers.",
          args: {},
        },
        {
          name: ["--clear-push-cert"],
          description:
            "Remove Push Notifications Certificate stored on Expo servers. Use of Push Notifications Certificates is deprecated.",
          args: {},
        },
        {
          name: ["--clear-provisioning-profile"],
          description: "Remove Provisioning Profile stored on Expo servers.",
          args: {},
        },
        {
          name: ["-r", "--revoke-credentials"],
          description:
            "Revoke credentials on developer.apple.com, select appropriate using --clear-* options.",
          args: {},
        },
        {
          name: ["--apple-id"],
          description:
            "Apple ID username (please also set the Apple ID password as EXPO_APPLE_PASSWORD environment variable).",
          args: {},
        },
        {
          name: ["-t", "--type"],
          description: "Type of build: [archive|simulator].",
          args: {},
        },
        {
          name: ["--release-channel"],
          description:
            "Pull from specified release channel. (default: default)",
          args: {},
        },
        {
          name: ["--no-publish"],
          description: "Disable automatic publishing before building.",
          args: {},
        },
        {
          name: ["--no-wait"],
          description: "Exit immediately after scheduling build.",
          args: {},
        },
        {
          name: ["--team-id"],
          description: "Apple Team ID.",
          args: {},
        },
        {
          name: ["--push-id"],
          description: "Push Key ID (ex: 123AB4C56D).",
          args: {},
        },
        {
          name: ["--provisioning-profile-path"],
          description: "Path to your Provisioning Profile.",
          args: {},
        },
        {
          name: ["--public-url"],
          description:
            "The URL of an externally hosted manifest (for self-hosted apps).",
          args: {},
        },
        {
          name: ["--skip-credentials-check"],
          description: "Skip checking credentials.",
          args: {},
        },
        {
          name: ["--skip-workflow-check"],
          description:
            "Skip warning about build service bare workflow limitations.",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "build:status",
      description: "",
      options: [
        {
          name: ["--public-url"],
          description:
            "The URL of an externally hosted manifest (for self-hosted apps).",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "build:web",
      description: "",
      options: [
        {
          name: ["-c", "--clear"],
          description: "Clear all cached build files and assets.",
          args: {},
        },
        {
          name: ["--no-pwa"],
          description:
            "Prevent webpack from generating the manifest.json and injecting meta into the index.html head.",
          args: {},
        },
        {
          name: ["-d", "--dev"],
          description: "Turns dev flag on before bundling",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "client:install:android",
      description: "",
      options: [
        {
          name: ["--latest"],
          description:
            "Install the latest version of Expo client, ignore the current project version.",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "client:install:ios",
      description: "",
      options: [
        {
          name: ["--latest"],
          description:
            "Install the latest version of Expo client, ignoring the current project version.",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "client:ios",
      description: "",
      options: [
        {
          name: ["--apple-id"],
          description:
            "Apple ID username (please also set the Apple ID password as EXPO_APPLE_PASSWORD environment variable).",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "credentials:manager",
      description: "",
      options: [
        {
          name: ["-p", "--platform"],
          description: "Platform: [android|ios]",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "customize:web",
      description: "",
      options: [
        {
          name: ["-f", "--force"],
          description: "Allows replacing existing files",
          args: {},
        },
        {
          name: ["--offline"],
          description: "Allows this command to run while offline",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "diagnostics",
      description: "",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "doctor",
      description: "",
      options: [
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "eject",
      description: "",
      options: [
        {
          name: ["--force"],
          description: "Skip legacy eject warnings.",
          args: {},
        },
        {
          name: ["--no-install"],
          description: "Skip installing npm packages and CocoaPods.",
          args: {},
        },
        {
          name: ["--npm"],
          description:
            "Use npm to install dependencies. (default when Yarn is not installed)",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "export",
      description: "",
      options: [
        {
          name: ["-p", "--public-url"],
          description:
            "The public url that will host the static files. (Required)",
          args: {},
        },
        {
          name: ["--output-dir"],
          description:
            "The directory to export the static files to. Default directory is `dist` (default: dist)",
          args: {},
        },
        {
          name: ["-a", "--asset-url"],
          description:
            "The absolute or relative url that will host the asset files. Default is './assets', which will be resolved against the public-url. (default: ./assets)",
          args: {},
        },
        {
          name: ["-d", "--dump-assetmap"],
          description: "Dump the asset map for further processing.",
          args: {},
        },
        {
          name: ["--dev"],
          description:
            "Configure static files for developing locally using a non-https server",
          args: {},
        },
        {
          name: ["-f", "--force"],
          description:
            "Overwrite files in output directory without prompting for confirmation",
          args: {},
        },
        {
          name: ["-s", "--dump-sourcemap"],
          description: "Dump the source map for debugging the JS bundle.",
          args: {},
        },
        {
          name: ["-q", "--quiet"],
          description: "Suppress verbose output.",
          args: {},
        },
        {
          name: ["-t", "--target"],
          description:
            "Target environment for which this export is intended. Options are `managed` or `bare`.",
          args: {},
        },
        {
          name: ["--merge-src-dir"],
          description: "A repeatable source dir to merge in. (default: )",
          args: {},
        },
        {
          name: ["--merge-src-url"],
          description:
            "A repeatable source tar.gz file URL to merge in. (default: )",
          args: {},
        },
        {
          name: ["--max-workers"],
          description: "Maximum number of tasks to allow Metro to spawn.",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "fetch:android:hashes",
      description: "",
      options: [
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "fetch:android:keystore",
      description: "",
      options: [
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "fetch:android:upload-cert",
      description: "",
      options: [
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "fetch:ios:certs",
      description: "",
      options: [
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "init",
      description: "",
      options: [
        {
          name: ["-t", "--template"],
          description:
            'Specify which template to use. Valid options are "blank", "tabs", "bare-minimum" or a package on npm (e.g. "expo-template-bare-typescript") that includes an Expo project template.',
          args: {},
        },
        {
          name: ["--npm"],
          description:
            "Use npm to install dependencies. (default when Yarn is not installed)",
          args: {},
        },
        {
          name: ["--yarn"],
          description:
            "Use Yarn to install dependencies. (default when Yarn is installed)",
          args: {},
        },
        {
          name: ["--no-install"],
          description: "Skip installing npm packages or CocoaPods.",
          args: {},
        },
        {
          name: ["--name"],
          description: "The name of your app visible on the home screen.",
          args: {},
        },
        {
          name: ["--yes"],
          description:
            'Use default options. Same as "expo init . --template blank',
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "install",
      description: "",
      options: [
        {
          name: ["--npm"],
          description:
            "Use npm to install dependencies. (default when package-lock.json exists)",
          args: {},
        },
        {
          name: ["--yarn"],
          description:
            "Use Yarn to install dependencies. (default when yarn.lock exists)",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "login",
      description: "",
      options: [
        {
          name: ["-u", "--username"],
          description: "Username",
          args: {},
        },
        {
          name: ["-p", "--password"],
          description: "Password",
          args: {},
        },
        {
          name: ["--otp"],
          description: "One-time password from your 2FA device",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "logout",
      description: "",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "publish",
      description: "",
      options: [
        {
          name: ["-q", "--quiet"],
          description: "Suppress verbose output from the Metro bundler.",
          args: {},
        },
        {
          name: ["-s", "--send-to"],
          description: "A phone number or email address to send a link to",
          args: {},
        },
        {
          name: ["-c", "--clear"],
          description: "Clear the Metro bundler cache",
          args: {},
        },
        {
          name: ["-t", "--target"],
          description:
            "Target environment for which this publish is intended. Options are `managed` or `bare`.",
          args: {},
        },
        {
          name: ["--max-workers"],
          description: "Maximum number of tasks to allow Metro to spawn.",
          args: {},
        },
        {
          name: ["--release-channel"],
          description:
            "The release channel to publish to. Default is 'default'. (default: default)",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "publish:details",
      description: "",
      options: [
        {
          name: ["--publish-id"],
          description: "Publication id. (Required)",
          args: {},
        },
        {
          name: ["-r", "--raw"],
          description: "Produce some raw output.",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "publish:history",
      description: "",
      options: [
        {
          name: ["-c", "--release-channel"],
          description:
            "Filter by release channel. If this flag is not included, the most recent publications will be shown.",
          args: {},
        },
        {
          name: ["--count"],
          description: "Number of logs to view, maximum 100, default 5.",
          args: {},
        },
        {
          name: ["-p", "--platform"],
          description:
            "Filter by platform, android or ios. Defaults to both platforms.",
          args: {},
        },
        {
          name: ["-s", "--sdk-version"],
          description: "Filter by SDK version e.g. 35.0.0",
          args: {},
        },
        {
          name: ["-r", "--raw"],
          description: "Produce some raw output.",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "publish:rollback",
      description: "",
      options: [
        {
          name: ["--channel-id"],
          description: "This flag is deprecated.",
          args: {},
        },
        {
          name: ["-c", "--release-channel"],
          description: "The channel to rollback from. (Required)",
          args: {},
        },
        {
          name: ["-s", "--sdk-version"],
          description: "The sdk version to rollback. (Required)",
          args: {},
        },
        {
          name: ["-p", "--platform"],
          description: "The platform to rollback.",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "publish:set",
      description: "",
      options: [
        {
          name: ["-c", "--release-channel"],
          description: "The channel to set the published release. (Required)",
          args: {},
        },
        {
          name: ["-p", "--publish-id"],
          description:
            "The id of the published release to serve from the channel. (Required)",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "push:android:clear",
      description: "",
      options: [
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "push:android:show",
      description: "",
      options: [
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "push:android:upload",
      description: "",
      options: [
        {
          name: ["--api-key"],
          description: "Server API key for FCM.",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "register",
      description: "",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "send",
      description: "",
      options: [
        {
          name: ["-s", "--send-to"],
          description: "Email address to send the URL to",
          args: {},
        },
        {
          name: ["-a", "--android"],
          description:
            "Opens your app in Expo client on a connected Android device",
          args: {},
        },
        {
          name: ["-i", "--ios"],
          description:
            "Opens your app in Expo client in a currently running iOS simulator on your computer",
          args: {},
        },
        {
          name: ["-w", "--web"],
          description: "Opens your app in a web browser",
          args: {},
        },
        {
          name: ["-m", "--host"],
          description:
            'lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks',
          args: {},
        },
        {
          name: ["--tunnel"],
          description: "Same as --host tunnel",
          args: {},
        },
        {
          name: ["--lan"],
          description: "Same as --host lan",
          args: {},
        },
        {
          name: ["--localhost"],
          description: "Same as --host localhost",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "start",
      description: "",
      options: [
        {
          name: ["-s", "--send-to"],
          description: "An email address to send a link to",
          args: {},
        },
        {
          name: ["-c", "--clear"],
          description: "Clear the Metro bundler cache",
          args: {},
        },
        {
          name: ["--max-workers"],
          description: "Maximum number of tasks to allow Metro to spawn.",
          args: {},
        },
        {
          name: ["--dev"],
          description: "Turn development mode on",
          args: {},
        },
        {
          name: ["--no-dev"],
          description: "Turn development mode off",
          args: {},
        },
        {
          name: ["--minify"],
          description: "Minify code",
          args: {},
        },
        {
          name: ["--no-minify"],
          description: "Do not minify code",
          args: {},
        },
        {
          name: ["--https"],
          description: "To start webpack with https protocol",
          args: {},
        },
        {
          name: ["--no-https"],
          description: "To start webpack with http protocol",
          args: {},
        },
        {
          name: ["-a", "--android"],
          description:
            "Opens your app in Expo client on a connected Android device",
          args: {},
        },
        {
          name: ["-i", "--ios"],
          description:
            "Opens your app in Expo client in a currently running iOS simulator on your computer",
          args: {},
        },
        {
          name: ["-w", "--web"],
          description: "Opens your app in a web browser",
          args: {},
        },
        {
          name: ["-m", "--host"],
          description:
            'lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks',
          args: {},
        },
        {
          name: ["--tunnel"],
          description: "Same as --host tunnel",
          args: {},
        },
        {
          name: ["--lan"],
          description: "Same as --host lan",
          args: {},
        },
        {
          name: ["--localhost"],
          description: "Same as --host localhost",
          args: {},
        },
        {
          name: ["--offline"],
          description: "Allows this command to run while offline",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "web",
      description: "Start a Webpack dev server for the web app",
      options: startWebOptions,
    },
    {
      name: "start:web",
      description: "Start a Webpack dev server for the web app",
      options: startWebOptions,
    },
    {
      name: "upgrade",
      description: "",
      options: [
        {
          name: ["--npm"],
          description:
            "Use npm to install dependencies. (default when package-lock.json exists)",
          args: {},
        },
        {
          name: ["--yarn"],
          description:
            "Use Yarn to install dependencies. (default when yarn.lock exists)",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "upload:android",
      description: "",
      options: [
        {
          name: ["--latest"],
          description: "upload the latest build",
          args: {},
        },
        {
          name: ["--id"],
          description: "id of the build to upload",
          args: {},
        },
        {
          name: ["--path"],
          description: "path to the .apk/.aab file",
          args: {},
        },
        {
          name: ["--url"],
          description: "app archive url",
          args: {},
        },
        {
          name: ["--key"],
          description:
            "path to the JSON key used to authenticate with Google Play",
          args: {},
        },
        {
          name: ["--android-package"],
          description:
            "Android package name (using expo.android.package from app.json by default)",
          args: {},
        },
        {
          name: ["--type"],
          description: "archive type: apk, aab",
          args: {},
        },
        {
          name: ["--track"],
          description:
            "the track of the application to use, choose from: production, beta, alpha, internal, rollout (default: internal)",
          args: {},
        },
        {
          name: ["--release-status"],
          description:
            "release status (used when uploading new apks/aabs), choose from: completed, draft, halted, inProgress (default: completed)",
          args: {},
        },
        {
          name: ["--use-submission-service"],
          description:
            "Experimental: Use Submission Service for uploading your app. The upload process will happen on Expo servers.",
          args: {},
        },
        {
          name: ["--verbose"],
          description: "Always print logs from Submission Service",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "upload:ios",
      description: "",
      options: [
        {
          name: ["--latest"],
          description: "upload the latest build (default)",
          args: {},
        },
        {
          name: ["--id"],
          description: "id of the build to upload",
          args: {},
        },
        {
          name: ["--path"],
          description: "path to the .ipa file",
          args: {},
        },
        {
          name: ["--url"],
          description: "app archive url",
          args: {},
        },
        {
          name: ["--apple-id"],
          description:
            "your Apple ID username (you can also set EXPO_APPLE_ID env variable)",
          args: {},
        },
        {
          name: ["--itc-team-id"],
          description:
            "App Store Connect Team ID - this option is deprecated, the proper ID is resolved automatically",
          args: {},
        },
        {
          name: ["--apple-id-password"],
          description:
            "your Apple ID password (you can also set EXPO_APPLE_PASSWORD env variable)",
          args: {},
        },
        {
          name: ["--app-name"],
          description:
            "the name of your app as it will appear on the App Store, this can't be longer than 30 characters (default: expo.name from app.json)",
          args: {},
        },
        {
          name: ["--company-name"],
          description:
            "the name of your company, needed only for the first upload of any app to App Store",
          args: {},
        },
        {
          name: ["--sku"],
          description:
            "a unique ID for your app that is not visible on the App Store, will be generated unless provided",
          args: {},
        },
        {
          name: ["--language"],
          description:
            "primary language (e.g. English, German; run `expo upload:ios --help` to see the list of available languages) (default: English)",
          args: {},
        },
        {
          name: ["--public-url"],
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "url",
      description: "",
      options: [
        {
          name: ["-w", "--web"],
          description: "Return the URL of the web app",
          args: {},
        },
        {
          name: ["-a", "--android"],
          description:
            "Opens your app in Expo client on a connected Android device",
          args: {},
        },
        {
          name: ["-i", "--ios"],
          description:
            "Opens your app in Expo client in a currently running iOS simulator on your computer",
          args: {},
        },
        {
          name: ["-w", "--web"],
          description: "Opens your app in a web browser",
          args: {},
        },
        {
          name: ["-m", "--host"],
          description:
            'lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks',
          args: {
            name: "host",
            suggestions: [
              {
                name: "lan",
              },
              {
                name: "tunnel",
              },
              {
                name: "localhost",
              },
            ],
          },
        },
        {
          name: ["--tunnel"],
          description: "Same as --host tunnel",
          args: {},
        },
        {
          name: ["--lan"],
          description: "Same as --host lan",
          args: {},
        },
        {
          name: ["--localhost"],
          description: "Same as --host localhost",
          args: {},
        },
        {
          name: ["--offline"],
          description: "Allows this command to run while offline",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "url:apk",
      description: "",
      options: [
        {
          name: ["--public-url"],
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "url:ipa",
      description: "",
      options: [
        {
          name: ["--public-url"],
          description:
            "The URL of an externally hosted manifest (for self-hosted apps)",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "webhooks",
      description: "",
      options: [
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "webhooks:add",
      description: "",
      options: [
        {
          name: ["--url"],
          description: "URL to request. (Required)",
          args: {},
        },
        {
          name: ["--event"],
          description:
            "Event type that triggers the webhook. [build] (Required)",
          args: {},
        },
        {
          name: ["--secret"],
          description:
            "Secret used to create a hash signature of the request payload, provided in the 'Expo-Signature' header.",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "webhooks:remove",
      description: "",
      options: [
        {
          name: ["--id"],
          description: "ID of the webhook to remove.",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "webhooks:update",
      description: "",
      options: [
        {
          name: ["--id"],
          description: "ID of the webhook to update.",
          args: {},
        },
        {
          name: ["--url"],
          description: "URL the webhook will request.",
          args: {},
        },
        {
          name: ["--event"],
          description: "Event type that triggers the webhook. [build]",
          args: {},
        },
        {
          name: ["--secret"],
          description:
            "Secret used to create a hash signature of the request payload, provided in the 'Expo-Signature' header.",
          args: {},
        },
        {
          name: ["--config"],
          description: "Specify a path to app.json or app.config.js",
          args: {},
        },
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
    {
      name: "whoami",
      description: "",
      options: [
        {
          name: ["-h", "--help"],
          description: "output usage information",
          args: {},
        },
      ],
    },
  ],
};
