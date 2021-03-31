export const completionSpec: Fig.Spec = {
  name: 'expo-cli',
  description: '',
  subcommands: [
    {
      name: 'build:android',
      description: '',
      options: [
        {
          name: ['-c', '--clear-credentials'],
          description: 'Clear stored credentials.\n',
          args: {},
        },
        {
          name: ['--release-channel'],
          description:
            'Pull from specified release channel. (default: default)\n',
          args: {},
        },
        {
          name: ['--no-publish'],
          description: 'Disable automatic publishing before building.\n',
          args: {},
        },
        {
          name: ['--no-wait'],
          description: 'Exit immediately after triggering build.\n',
          args: {},
        },
        {
          name: ['--keystore-path'],
          description: 'Path to your Keystore.\n',
          args: {},
        },
        {
          name: ['--keystore-alias'],
          description: 'Keystore Alias\n',
          args: {},
        },
        {
          name: ['--generate-keystore'],
          description: '[deprecated] Generate Keystore if one does not exist\n',
          args: {},
        },
        {
          name: ['--public-url'],
          description:
            'The URL of an externally hosted manifest (for self-hosted apps)\n',
          args: {},
        },
        {
          name: ['--skip-workflow-check'],
          description:
            'Skip warning about build service bare workflow limitations.\n',
          args: {},
        },
        {
          name: ['-t', '--type'],
          description: 'Type of build: [app-bundle|apk].\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'build:ios',
      description: '',
      options: [
        {
          name: ['-c', '--clear-credentials'],
          description: 'Clear all credentials stored on Expo servers.\n',
          args: {},
        },
        {
          name: ['--clear-dist-cert'],
          description:
            'Remove Distribution Certificate stored on Expo servers.\n',
          args: {},
        },
        {
          name: ['--clear-push-key'],
          description:
            'Remove Push Notifications Key stored on Expo servers.\n',
          args: {},
        },
        {
          name: ['--clear-push-cert'],
          description:
            'Remove Push Notifications Certificate stored on Expo servers. Use of Push Notifications Certificates is deprecated.\n',
          args: {},
        },
        {
          name: ['--clear-provisioning-profile'],
          description: 'Remove Provisioning Profile stored on Expo servers.\n',
          args: {},
        },
        {
          name: ['-r', '--revoke-credentials'],
          description:
            'Revoke credentials on developer.apple.com, select appropriate using --clear-* options.\n',
          args: {},
        },
        {
          name: ['--apple-id'],
          description:
            'Apple ID username (please also set the Apple ID password as EXPO_APPLE_PASSWORD environment variable).\n',
          args: {},
        },
        {
          name: ['-t', '--type'],
          description: 'Type of build: [archive|simulator].\n',
          args: {},
        },
        {
          name: ['--release-channel'],
          description:
            'Pull from specified release channel. (default: default)\n',
          args: {},
        },
        {
          name: ['--no-publish'],
          description: 'Disable automatic publishing before building.\n',
          args: {},
        },
        {
          name: ['--no-wait'],
          description: 'Exit immediately after scheduling build.\n',
          args: {},
        },
        {
          name: ['--team-id'],
          description: 'Apple Team ID.\n',
          args: {},
        },
        {
          name: ['--push-id'],
          description: 'Push Key ID (ex: 123AB4C56D).\n',
          args: {},
        },
        {
          name: ['--provisioning-profile-path'],
          description: 'Path to your Provisioning Profile.\n',
          args: {},
        },
        {
          name: ['--public-url'],
          description:
            'The URL of an externally hosted manifest (for self-hosted apps).\n',
          args: {},
        },
        {
          name: ['--skip-credentials-check'],
          description: 'Skip checking credentials.\n',
          args: {},
        },
        {
          name: ['--skip-workflow-check'],
          description:
            'Skip warning about build service bare workflow limitations.\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'build:status',
      description: '',
      options: [
        {
          name: ['--public-url'],
          description:
            'The URL of an externally hosted manifest (for self-hosted apps).\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'build:web',
      description: '',
      options: [
        {
          name: ['-c', '--clear'],
          description: 'Clear all cached build files and assets.\n',
          args: {},
        },
        {
          name: ['--no-pwa'],
          description:
            'Prevent webpack from generating the manifest.json and injecting meta into the index.html head.\n',
          args: {},
        },
        {
          name: ['-d', '--dev'],
          description: 'Turns dev flag on before bundling\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'client:install:android',
      description: '',
      options: [
        {
          name: ['--latest'],
          description:
            'Install the latest version of Expo client, ignore the current project version.\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'client:install:ios',
      description: '',
      options: [
        {
          name: ['--latest'],
          description:
            'Install the latest version of Expo client, ignoring the current project version.\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'client:ios',
      description: '',
      options: [
        {
          name: ['--apple-id'],
          description:
            'Apple ID username (please also set the Apple ID password as EXPO_APPLE_PASSWORD environment variable).\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'credentials:manager',
      description: '',
      options: [
        {
          name: ['-p', '--platform'],
          description: 'Platform: [android|ios]\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'customize:web',
      description: '',
      options: [
        {
          name: ['-f', '--force'],
          description: 'Allows replacing existing files\n',
          args: {},
        },
        {
          name: ['--offline'],
          description: 'Allows this command to run while offline\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'diagnostics',
      description: '',
      options: [
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'doctor',
      description: '',
      options: [
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'eject',
      description: '',
      options: [
        {
          name: ['--force'],
          description: 'Skip legacy eject warnings.\n',
          args: {},
        },
        {
          name: ['--no-install'],
          description: 'Skip installing npm packages and CocoaPods.\n',
          args: {},
        },
        {
          name: ['--npm'],
          description:
            'Use npm to install dependencies. (default when Yarn is not installed)\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'export',
      description: '',
      options: [
        {
          name: ['-p', '--public-url'],
          description:
            'The public url that will host the static files. (Required)\n',
          args: {},
        },
        {
          name: ['--output-dir'],
          description:
            'The directory to export the static files to. Default directory is `dist` (default: dist)\n',
          args: {},
        },
        {
          name: ['-a', '--asset-url'],
          description:
            "The absolute or relative url that will host the asset files. Default is './assets', which will be resolved against the public-url. (default: ./assets)\n",
          args: {},
        },
        {
          name: ['-d', '--dump-assetmap'],
          description: 'Dump the asset map for further processing.\n',
          args: {},
        },
        {
          name: ['--dev'],
          description:
            'Configure static files for developing locally using a non-https server\n',
          args: {},
        },
        {
          name: ['-f', '--force'],
          description:
            'Overwrite files in output directory without prompting for confirmation\n',
          args: {},
        },
        {
          name: ['-s', '--dump-sourcemap'],
          description: 'Dump the source map for debugging the JS bundle.\n',
          args: {},
        },
        {
          name: ['-q', '--quiet'],
          description: 'Suppress verbose output.\n',
          args: {},
        },
        {
          name: ['-t', '--target'],
          description:
            'Target environment for which this export is intended. Options are `managed` or `bare`.\n',
          args: {},
        },
        {
          name: ['--merge-src-dir'],
          description: 'A repeatable source dir to merge in. (default: )\n',
          args: {},
        },
        {
          name: ['--merge-src-url'],
          description:
            'A repeatable source tar.gz file URL to merge in. (default: )\n',
          args: {},
        },
        {
          name: ['--max-workers'],
          description: 'Maximum number of tasks to allow Metro to spawn.\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'fetch:android:hashes',
      description: '',
      options: [
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'fetch:android:keystore',
      description: '',
      options: [
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'fetch:android:upload-cert',
      description: '',
      options: [
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'fetch:ios:certs',
      description: '',
      options: [
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'init',
      description: '',
      options: [
        {
          name: ['-t', '--template'],
          description:
            'Specify which template to use. Valid options are "blank", "tabs", "bare-minimum" or a package on npm (e.g. "expo-template-bare-typescript") that includes an Expo project template.\n',
          args: {},
        },
        {
          name: ['--npm'],
          description:
            'Use npm to install dependencies. (default when Yarn is not installed)\n',
          args: {},
        },
        {
          name: ['--yarn'],
          description:
            'Use Yarn to install dependencies. (default when Yarn is installed)\n',
          args: {},
        },
        {
          name: ['--no-install'],
          description: 'Skip installing npm packages or CocoaPods.\n',
          args: {},
        },
        {
          name: ['--name'],
          description: 'The name of your app visible on the home screen.\n',
          args: {},
        },
        {
          name: ['--yes'],
          description:
            'Use default options. Same as "expo init . --template blank\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'install',
      description: '',
      options: [
        {
          name: ['--npm'],
          description:
            'Use npm to install dependencies. (default when package-lock.json exists)\n',
          args: {},
        },
        {
          name: ['--yarn'],
          description:
            'Use Yarn to install dependencies. (default when yarn.lock exists)\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'login',
      description: '',
      options: [
        {
          name: ['-u', '--username'],
          description: 'Username\n',
          args: {},
        },
        {
          name: ['-p', '--password'],
          description: 'Password\n',
          args: {},
        },
        {
          name: ['--otp'],
          description: 'One-time password from your 2FA device\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'logout',
      description: '',
      options: [
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'publish',
      description: '',
      options: [
        {
          name: ['-q', '--quiet'],
          description: 'Suppress verbose output from the Metro bundler.\n',
          args: {},
        },
        {
          name: ['-s', '--send-to'],
          description: 'A phone number or email address to send a link to\n',
          args: {},
        },
        {
          name: ['-c', '--clear'],
          description: 'Clear the Metro bundler cache\n',
          args: {},
        },
        {
          name: ['-t', '--target'],
          description:
            'Target environment for which this publish is intended. Options are `managed` or `bare`.\n',
          args: {},
        },
        {
          name: ['--max-workers'],
          description: 'Maximum number of tasks to allow Metro to spawn.\n',
          args: {},
        },
        {
          name: ['--release-channel'],
          description:
            "The release channel to publish to. Default is 'default'. (default: default)\n",
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'publish:details',
      description: '',
      options: [
        {
          name: ['--publish-id'],
          description: 'Publication id. (Required)\n',
          args: {},
        },
        {
          name: ['-r', '--raw'],
          description: 'Produce some raw output.\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'publish:history',
      description: '',
      options: [
        {
          name: ['-c', '--release-channel'],
          description:
            'Filter by release channel. If this flag is not included, the most recent publications will be shown.\n',
          args: {},
        },
        {
          name: ['--count'],
          description: 'Number of logs to view, maximum 100, default 5.\n',
          args: {},
        },
        {
          name: ['-p', '--platform'],
          description:
            'Filter by platform, android or ios. Defaults to both platforms.\n',
          args: {},
        },
        {
          name: ['-s', '--sdk-version'],
          description: 'Filter by SDK version e.g. 35.0.0\n',
          args: {},
        },
        {
          name: ['-r', '--raw'],
          description: 'Produce some raw output.\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'publish:rollback',
      description: '',
      options: [
        {
          name: ['--channel-id'],
          description: 'This flag is deprecated.\n',
          args: {},
        },
        {
          name: ['-c', '--release-channel'],
          description: 'The channel to rollback from. (Required)\n',
          args: {},
        },
        {
          name: ['-s', '--sdk-version'],
          description: 'The sdk version to rollback. (Required)\n',
          args: {},
        },
        {
          name: ['-p', '--platform'],
          description: 'The platform to rollback.\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'publish:set',
      description: '',
      options: [
        {
          name: ['-c', '--release-channel'],
          description: 'The channel to set the published release. (Required)\n',
          args: {},
        },
        {
          name: ['-p', '--publish-id'],
          description:
            'The id of the published release to serve from the channel. (Required)\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'push:android:clear',
      description: '',
      options: [
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'push:android:show',
      description: '',
      options: [
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'push:android:upload',
      description: '',
      options: [
        {
          name: ['--api-key'],
          description: 'Server API key for FCM.\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'register',
      description: '',
      options: [
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'send',
      description: '',
      options: [
        {
          name: ['-s', '--send-to'],
          description: 'Email address to send the URL to\n',
          args: {},
        },
        {
          name: ['-a', '--android'],
          description:
            'Opens your app in Expo client on a connected Android device\n',
          args: {},
        },
        {
          name: ['-i', '--ios'],
          description:
            'Opens your app in Expo client in a currently running iOS simulator on your computer\n',
          args: {},
        },
        {
          name: ['-w', '--web'],
          description: 'Opens your app in a web browser\n',
          args: {},
        },
        {
          name: ['-m', '--host'],
          description:
            'lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks\n',
          args: {},
        },
        {
          name: ['--tunnel'],
          description: 'Same as --host tunnel\n',
          args: {},
        },
        {
          name: ['--lan'],
          description: 'Same as --host lan\n',
          args: {},
        },
        {
          name: ['--localhost'],
          description: 'Same as --host localhost\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'start',
      description: '',
      options: [
        {
          name: ['-s', '--send-to'],
          description: 'An email address to send a link to\n',
          args: {},
        },
        {
          name: ['-c', '--clear'],
          description: 'Clear the Metro bundler cache\n',
          args: {},
        },
        {
          name: ['--max-workers'],
          description: 'Maximum number of tasks to allow Metro to spawn.\n',
          args: {},
        },
        {
          name: ['--dev'],
          description: 'Turn development mode on\n',
          args: {},
        },
        {
          name: ['--no-dev'],
          description: 'Turn development mode off\n',
          args: {},
        },
        {
          name: ['--minify'],
          description: 'Minify code\n',
          args: {},
        },
        {
          name: ['--no-minify'],
          description: 'Do not minify code\n',
          args: {},
        },
        {
          name: ['--https'],
          description: 'To start webpack with https protocol\n',
          args: {},
        },
        {
          name: ['--no-https'],
          description: 'To start webpack with http protocol\n',
          args: {},
        },
        {
          name: ['-a', '--android'],
          description:
            'Opens your app in Expo client on a connected Android device\n',
          args: {},
        },
        {
          name: ['-i', '--ios'],
          description:
            'Opens your app in Expo client in a currently running iOS simulator on your computer\n',
          args: {},
        },
        {
          name: ['-w', '--web'],
          description: 'Opens your app in a web browser\n',
          args: {},
        },
        {
          name: ['-m', '--host'],
          description:
            'lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks\n',
          args: {},
        },
        {
          name: ['--tunnel'],
          description: 'Same as --host tunnel\n',
          args: {},
        },
        {
          name: ['--lan'],
          description: 'Same as --host lan\n',
          args: {},
        },
        {
          name: ['--localhost'],
          description: 'Same as --host localhost\n',
          args: {},
        },
        {
          name: ['--offline'],
          description: 'Allows this command to run while offline\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'start:web',
      description: '',
      options: [
        {
          name: ['--dev'],
          description: 'Turn development mode on\n',
          args: {},
        },
        {
          name: ['--no-dev'],
          description: 'Turn development mode off\n',
          args: {},
        },
        {
          name: ['--minify'],
          description: 'Minify code\n',
          args: {},
        },
        {
          name: ['--no-minify'],
          description: 'Do not minify code\n',
          args: {},
        },
        {
          name: ['--https'],
          description: 'To start webpack with https protocol\n',
          args: {},
        },
        {
          name: ['--no-https'],
          description: 'To start webpack with http protocol\n',
          args: {},
        },
        {
          name: ['-a', '--android'],
          description:
            'Opens your app in Expo client on a connected Android device\n',
          args: {},
        },
        {
          name: ['-i', '--ios'],
          description:
            'Opens your app in Expo client in a currently running iOS simulator on your computer\n',
          args: {},
        },
        {
          name: ['-w', '--web'],
          description: 'Opens your app in a web browser\n',
          args: {},
        },
        {
          name: ['-m', '--host'],
          description:
            'lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks\n',
          args: {},
        },
        {
          name: ['--tunnel'],
          description: 'Same as --host tunnel\n',
          args: {},
        },
        {
          name: ['--lan'],
          description: 'Same as --host lan\n',
          args: {},
        },
        {
          name: ['--localhost'],
          description: 'Same as --host localhost\n',
          args: {},
        },
        {
          name: ['--offline'],
          description: 'Allows this command to run while offline\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'upgrade',
      description: '',
      options: [
        {
          name: ['--npm'],
          description:
            'Use npm to install dependencies. (default when package-lock.json exists)\n',
          args: {},
        },
        {
          name: ['--yarn'],
          description:
            'Use Yarn to install dependencies. (default when yarn.lock exists)\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'upload:android',
      description: '',
      options: [
        {
          name: ['--latest'],
          description: 'upload the latest build\n',
          args: {},
        },
        {
          name: ['--id'],
          description: 'id of the build to upload\n',
          args: {},
        },
        {
          name: ['--path'],
          description: 'path to the .apk/.aab file\n',
          args: {},
        },
        {
          name: ['--url'],
          description: 'app archive url\n',
          args: {},
        },
        {
          name: ['--key'],
          description:
            'path to the JSON key used to authenticate with Google Play\n',
          args: {},
        },
        {
          name: ['--android-package'],
          description:
            'Android package name (using expo.android.package from app.json by default)\n',
          args: {},
        },
        {
          name: ['--type'],
          description: 'archive type: apk, aab\n',
          args: {},
        },
        {
          name: ['--track'],
          description:
            'the track of the application to use, choose from: production, beta, alpha, internal, rollout (default: internal)\n',
          args: {},
        },
        {
          name: ['--release-status'],
          description:
            'release status (used when uploading new apks/aabs), choose from: completed, draft, halted, inProgress (default: completed)\n',
          args: {},
        },
        {
          name: ['--use-submission-service'],
          description:
            'Experimental: Use Submission Service for uploading your app. The upload process will happen on Expo servers.\n',
          args: {},
        },
        {
          name: ['--verbose'],
          description: 'Always print logs from Submission Service\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'upload:ios',
      description: '',
      options: [
        {
          name: ['--latest'],
          description: 'upload the latest build (default)\n',
          args: {},
        },
        {
          name: ['--id'],
          description: 'id of the build to upload\n',
          args: {},
        },
        {
          name: ['--path'],
          description: 'path to the .ipa file\n',
          args: {},
        },
        {
          name: ['--url'],
          description: 'app archive url\n',
          args: {},
        },
        {
          name: ['--apple-id'],
          description:
            'your Apple ID username (you can also set EXPO_APPLE_ID env variable)\n',
          args: {},
        },
        {
          name: ['--itc-team-id'],
          description:
            'App Store Connect Team ID - this option is deprecated, the proper ID is resolved automatically\n',
          args: {},
        },
        {
          name: ['--apple-id-password'],
          description:
            'your Apple ID password (you can also set EXPO_APPLE_PASSWORD env variable)\n',
          args: {},
        },
        {
          name: ['--app-name'],
          description:
            "the name of your app as it will appear on the App Store, this can't be longer than 30 characters (default: expo.name from app.json)\n",
          args: {},
        },
        {
          name: ['--company-name'],
          description:
            'the name of your company, needed only for the first upload of any app to App Store\n',
          args: {},
        },
        {
          name: ['--sku'],
          description:
            'a unique ID for your app that is not visible on the App Store, will be generated unless provided\n',
          args: {},
        },
        {
          name: ['--language'],
          description:
            'primary language (e.g. English, German; run `expo upload:ios --help` to see the list of available languages) (default: English)\n',
          args: {},
        },
        {
          name: ['--public-url'],
          description:
            'The URL of an externally hosted manifest (for self-hosted apps)\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'url',
      description: '',
      options: [
        {
          name: ['-w', '--web'],
          description: 'Return the URL of the web app\n',
          args: {},
        },
        {
          name: ['-a', '--android'],
          description:
            'Opens your app in Expo client on a connected Android device\n',
          args: {},
        },
        {
          name: ['-i', '--ios'],
          description:
            'Opens your app in Expo client in a currently running iOS simulator on your computer\n',
          args: {},
        },
        {
          name: ['-w', '--web'],
          description: 'Opens your app in a web browser\n',
          args: {},
        },
        {
          name: ['-m', '--host'],
          description:
            'lan (default), tunnel, localhost. Type of host to use. "tunnel" allows you to view your link on other networks\n',
          args: {},
        },
        {
          name: ['--tunnel'],
          description: 'Same as --host tunnel\n',
          args: {},
        },
        {
          name: ['--lan'],
          description: 'Same as --host lan\n',
          args: {},
        },
        {
          name: ['--localhost'],
          description: 'Same as --host localhost\n',
          args: {},
        },
        {
          name: ['--offline'],
          description: 'Allows this command to run while offline\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'url:apk',
      description: '',
      options: [
        {
          name: ['--public-url'],
          description:
            'The URL of an externally hosted manifest (for self-hosted apps)\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'url:ipa',
      description: '',
      options: [
        {
          name: ['--public-url'],
          description:
            'The URL of an externally hosted manifest (for self-hosted apps)\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'webhooks',
      description: '',
      options: [
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'webhooks:add',
      description: '',
      options: [
        {
          name: ['--url'],
          description: 'URL to request. (Required)\n',
          args: {},
        },
        {
          name: ['--event'],
          description:
            'Event type that triggers the webhook. [build] (Required)\n',
          args: {},
        },
        {
          name: ['--secret'],
          description:
            "Secret used to create a hash signature of the request payload, provided in the 'Expo-Signature' header.\n",
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'webhooks:remove',
      description: '',
      options: [
        {
          name: ['--id'],
          description: 'ID of the webhook to remove.\n',
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'webhooks:update',
      description: '',
      options: [
        {
          name: ['--id'],
          description: 'ID of the webhook to update.\n',
          args: {},
        },
        {
          name: ['--url'],
          description: 'URL the webhook will request.\n',
          args: {},
        },
        {
          name: ['--event'],
          description: 'Event type that triggers the webhook. [build]\n',
          args: {},
        },
        {
          name: ['--secret'],
          description:
            "Secret used to create a hash signature of the request payload, provided in the 'Expo-Signature' header.\n",
          args: {},
        },
        {
          name: ['--config'],
          description: 'Specify a path to app.json or app.config.js\n',
          args: {},
        },
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
    {
      name: 'whoami',
      description: '',
      options: [
        {
          name: ['-h', '--help'],
          description: 'output usage information\n  \n  \n',
          args: {},
        },
      ],
      subcommands: [],
    },
  ],
};
