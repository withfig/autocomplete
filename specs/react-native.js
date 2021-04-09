var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var JS_ICON = "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_js.svg";
var GRADLE_ICON = "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_gradle.svg";
var APPLE_ICON = "https://developer.apple.com/library/archive/Resources/1282/Images/apple2.png";
var ANDROID_ICON = "https://www.android.com/static/images/fav/favicon.ico";
var getJsFilesAndFolders = function (paths) {
    var jsAndFolders = paths.filter(function (file) {
        return file.name.endsWith(".js") || file.name.endsWith("/");
    });
    return jsAndFolders.map(function (file) {
        return __assign(__assign({}, file), { icon: file.type === "file" ? JS_ICON : file.icon });
    });
};
var workerGenerator = {
    script: "sysctl -n hw.ncpu",
    postProcess: function (scriptOutput) {
        return Array.from({ length: Number(scriptOutput) }, function (_x, i) { return ({
            name: "" + i,
        }); });
    },
};
var xcodeConfigGenerator = {
    script: "xcodebuild -project ios/*.xcodeproj  -list -json",
    postProcess: function (scriptOutput) {
        var configurations = JSON.parse(scriptOutput).project.configurations;
        return configurations.map(function (name) { return ({ name: name }); });
    },
};
var xcodeSchemeGenerator = {
    script: "xcodebuild -project ios/*.xcodeproj  -list -json",
    postProcess: function (scriptOutput) {
        var configurations = JSON.parse(scriptOutput).project.schemes;
        return configurations.map(function (name) { return ({ name: name }); });
    },
};
var androidGetDevicesGenerator = {
    script: "adb devices",
    postProcess: function (scriptOutput) {
        var devices = scriptOutput
            .split("\n")
            .filter(function (item) { return !item.match(/^(List)|\*/); })
            .filter(Boolean)
            .filter(function (item) { return item.match(/device$/); })
            .map(function (item) { return item.split(/device/)[0].trim(); });
        return devices.map(function (item) { return ({
            name: item,
            icon: ANDROID_ICON,
        }); });
    },
};
var iosGetDevicesSimulatorGenerator = {
    script: "xcrun simctl list --json devices available",
    postProcess: function (scriptOutput) {
        var devices = JSON.parse(scriptOutput).devices;
        return Object.entries(devices)
            .map(function (_a) {
            var _ = _a[0], data = _a[1];
            return data;
        })
            .reduce(function (a, b) { return __spreadArray(__spreadArray([], a), b); }, [])
            .map(function (_a) {
            var name = _a.name;
            return ({ name: name, icon: APPLE_ICON });
        });
    },
};
var iosGetDevicesGenerator = {
    script: "xcrun xctrace list devices",
    postProcess: function (scriptOutput) {
        var devices = scriptOutput
            .split("\n")
            .filter(function (item) { return !item.match(/^=/); })
            .filter(Boolean)
            .map(function (item) { return item.split(/\([\w\d\-]+\)$/); })
            .map(function (_a) {
            var name = _a[0];
            return ({ name: name.trim() });
        });
        return devices;
    },
};
var iosGetDevicesUdidGenerator = {
    script: "xcrun xctrace list devices",
    postProcess: function (scriptOutput) {
        var devices = scriptOutput
            .split("\n")
            .filter(function (item) { return !item.match(/^=/); })
            .filter(Boolean)
            .map(function (item) { return item.split(" "); })
            .map(function (items) {
            return items[items.length - 1].trim().replace("(", "").replace(")", "");
        })
            .map(function (name) { return ({ name: name }); });
        return devices;
    },
};
var gradleTasksGenerator = {
    script: "cd android/ && ./gradlew tasks",
    postProcess: function (scriptOutput) {
        var tasks = scriptOutput
            .split("\n")
            .filter(function (item) { return item.match(/^\w+ \- |\*/); })
            .map(function (item) { return item.split(" - "); })
            .map(function (_a) {
            var name = _a[0], description = _a[1];
            return ({ name: name, description: description });
        });
        return tasks;
    },
};
var completionSpec = {
    name: "react-native",
    description: "Command line tools that ship with react-native in form of the @react-native-community/cli package",
    subcommands: [
        {
            description: "[EXPERIMENTAL] Diagnose and fix common Node.js, iOS, Android & React Native issues.",
            name: "doctor",
            options: [
                {
                    name: ["--fix"],
                    description: "Attempt to fix all diagnosed issues.",
                },
                {
                    name: ["--contributor"],
                    description: "Add healthchecks required to installations required for contributing to React Native.",
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            description: "builds the javascript bundle for offline use",
            name: "bundle",
            options: [
                {
                    name: ["--entry-file"],
                    description: "Path to the root JS file, either absolute or relative to JS root",
                    args: [
                        {
                            name: "file",
                            generators: {
                                template: "filepaths",
                                filterTemplateSuggestions: getJsFilesAndFolders,
                            },
                        },
                    ],
                },
                {
                    name: ["--platform"],
                    description: 'Either "ios" or "android" (default: "ios")',
                    args: [
                        {
                            name: "platform",
                            suggestions: [
                                {
                                    name: "android",
                                    icon: ANDROID_ICON,
                                },
                                {
                                    name: "ios",
                                    icon: APPLE_ICON,
                                },
                            ],
                        },
                    ],
                },
                {
                    name: ["--transformer"],
                    description: "Specify a custom transformer to be used",
                    args: [
                        {
                            name: "transformer",
                        },
                    ],
                },
                {
                    name: ["--dev"],
                    description: "If false, warnings are disabled and the bundle is minified (default: true)",
                    args: [
                        {
                            name: "boolean",
                            isOptional: true,
                            suggestions: [
                                { name: "true", icon: "✅" },
                                { name: "false", icon: "❌" },
                            ],
                        },
                    ],
                },
                {
                    name: ["--minify"],
                    description: "Allows overriding whether bundle is minified. This defaults to false if dev is true, and true if dev is false. Disabling minification can be useful for speeding up production builds for testing purposes.",
                    args: [
                        {
                            name: "boolean",
                            isOptional: true,
                            suggestions: [
                                { name: "true", icon: "✅" },
                                { name: "false", icon: "❌" },
                            ],
                        },
                    ],
                },
                {
                    name: ["--bundle-output"],
                    description: "File name where to store the resulting bundle, ex. /tmp/groups.bundle",
                    args: [
                        {
                            name: "bundle file",
                        },
                    ],
                },
                {
                    name: ["--bundle-encoding"],
                    description: 'Encoding the bundle should be written in (https://nodejs.org/api/buffer.html#buffer_buffer). (default: "utf8")',
                    args: [
                        {
                            name: "encoding",
                            suggestions: [
                                {
                                    name: "utf8",
                                },
                                {
                                    name: "utf16le",
                                },
                                {
                                    name: "latin1",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: ["--max-workers"],
                    description: "Specifies the maximum number of workers the worker-pool will spawn for transforming files. This defaults to the number of the cores available on your machine.",
                    args: [
                        {
                            name: "Number of workers",
                            generators: workerGenerator,
                        },
                    ],
                },
                {
                    name: ["--sourcemap-output"],
                    description: "File name where to store the sourcemap file for resulting bundle, ex. /tmp/groups.map",
                    args: [
                        {
                            name: "sourcemap-output",
                        },
                    ],
                },
                {
                    name: ["--sourcemap-sources-root"],
                    description: "Path to make sourcemap's sources entries relative to, ex. /root/dir",
                    args: [
                        {
                            template: "folders",
                            name: "root",
                        },
                    ],
                },
                {
                    name: ["--sourcemap-use-absolute-path"],
                    description: "Report SourceMapURL using its full path",
                },
                {
                    name: ["--assets-dest"],
                    description: "Directory name where to store assets referenced in the bundle",
                    args: [
                        {
                            name: "directory",
                            template: "folders",
                        },
                    ],
                },
                {
                    name: ["--unstable-transform-profile"],
                    description: "Experimental, transform JS for a specific JS engine. Currently supported: hermes, hermes-canary, default",
                    args: [
                        {
                            name: "transform-profile",
                            suggestions: [
                                {
                                    name: "hermes",
                                    icon: "https://reactnative.dev/docs/assets/HermesLogo.svg",
                                },
                                {
                                    name: "hermes-canary",
                                    icon: "https://reactnative.dev/docs/assets/HermesLogo.svg",
                                },
                                {
                                    name: "default",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: ["--reset-cache"],
                    description: "Removes cached files",
                },
                {
                    name: ["--read-global-cache"],
                    description: "Try to fetch transformed JS code from the global cache, if configured.",
                },
                {
                    name: ["--config"],
                    description: "Path to the CLI configuration file",
                    icon: "🛠",
                    args: [
                        {
                            template: "filepaths",
                            name: "string",
                        },
                    ],
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            description: "Initialize a new React Native project named <projectName> in a directory of the same name.",
            name: "init",
            options: [
                {
                    name: ["--version"],
                    description: "Shortcut for `--template react-native@version`",
                    args: [
                        {
                            name: "version",
                        },
                    ],
                },
                {
                    name: ["--template"],
                    description: "Uses a custom template. Valid arguments are the ones supported by `yarn add [package]` or `npm install [package]`, if you are using `--npm` option",
                    args: [
                        {
                            name: "template",
                        },
                    ],
                },
                {
                    name: ["--npm"],
                    description: "Forces using npm for initialization",
                    icon: "https://img.pngio.com/publishing-to-npm-from-kentcdodds-on-eggheadio-npm-png-800_800.png",
                },
                {
                    name: ["--directory"],
                    description: "Uses a custom directory instead of `<projectName>`.",
                    args: [
                        {
                            template: "folders",
                            name: "string",
                        },
                    ],
                },
                {
                    name: ["--title"],
                    description: "Uses a custom app title name for application",
                    args: [
                        {
                            name: "title",
                        },
                    ],
                },
                {
                    name: ["--skip-install"],
                    description: "Skips dependencies installation step",
                    icon: "⏭️",
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
            args: [
                {
                    name: "projectName",
                },
            ],
        },
        {
            description: "uninstall and unlink native dependencies",
            name: "uninstall",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
            args: [
                {
                    name: "packageName",
                },
            ],
        },
        {
            description: "starts the webserver",
            name: "start",
            options: [
                {
                    name: ["--port"],
                    description: "port on which to listen to",
                    args: [
                        {
                            name: "free port",
                        },
                    ],
                },
                {
                    name: ["--host"],
                    description: "change the default host",
                    args: [
                        {
                            name: "new host",
                        },
                    ],
                },
                {
                    name: ["--projectRoot"],
                    description: "Path to a custom project root",
                    args: [
                        {
                            name: "path",
                            template: "folders",
                        },
                    ],
                },
                {
                    name: ["--watchFolders"],
                    description: "Specify any additional folders to be added to the watch list",
                    args: [
                        {
                            template: "folders",
                            name: "folders",
                        },
                    ],
                },
                {
                    name: ["--assetPlugins"],
                    description: "Specify any additional asset plugins to be used by the packager by full filepath",
                    args: [
                        {
                            template: "folders",
                            name: "plugins",
                        },
                    ],
                },
                {
                    name: ["--sourceExts"],
                    description: "Specify any additional source extensions to be used by the packager",
                    args: [
                        {
                            name: "sourceExts",
                            suggestions: [
                                {
                                    name: "js",
                                },
                                {
                                    name: "css",
                                },
                                {
                                    name: "png",
                                },
                                {
                                    name: "xml",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: ["--max-workers"],
                    description: "Specifies the maximum number of workers the worker-pool will spawn for transforming files. This defaults to the number of the cores available on your machine.",
                    args: [
                        {
                            name: "Number of workers",
                            generators: workerGenerator,
                        },
                    ],
                },
                {
                    name: ["--transformer"],
                    description: "Specify a custom transformer to be used",
                    args: [
                        {
                            name: "transformer",
                        },
                    ],
                },
                {
                    name: ["--reset-cache", "--resetCache"],
                    description: "Removes cached files",
                },
                {
                    name: ["--custom-log-reporter-path", "--customLogReporterPath"],
                    description: "Path to a JavaScript file that exports a log reporter as a replacement for TerminalReporter",
                    args: [
                        {
                            name: "logFile",
                            generators: {
                                template: "filepaths",
                                filterTemplateSuggestions: getJsFilesAndFolders,
                            },
                        },
                    ],
                },
                {
                    name: ["--verbose"],
                    icon: "🔊",
                    description: "Enables logging",
                },
                {
                    name: ["--https"],
                    icon: "🌐",
                    description: "Enables https connections to the server",
                },
                {
                    name: ["--key"],
                    description: "Path to custom SSL key",
                    args: [
                        {
                            template: "filepaths",
                            name: "path",
                        },
                    ],
                },
                {
                    name: ["--cert"],
                    description: "Path to custom SSL cert",
                    args: [
                        {
                            template: "filepaths",
                            name: "path",
                        },
                    ],
                },
                {
                    name: ["--config"],
                    icon: "🛠",
                    description: "Path to the CLI configuration file",
                    args: [
                        {
                            name: "string",
                        },
                    ],
                },
                {
                    name: ["--no-interactive"],
                    description: "Disables interactive mode",
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            description: 'builds javascript as a "Random Access Module" bundle for offline use',
            name: "ram-bundle",
            options: [
                {
                    name: ["--entry-file"],
                    description: "Path to the root JS file, either absolute or relative to JS root",
                    args: [
                        {
                            name: "file",
                            generators: {
                                template: "filepaths",
                                filterTemplateSuggestions: getJsFilesAndFolders,
                            },
                        },
                    ],
                },
                {
                    name: ["--platform"],
                    description: 'Either "ios" or "android" (default: "ios")',
                    args: [
                        {
                            name: "platform",
                            suggestions: [
                                {
                                    name: "android",
                                    icon: ANDROID_ICON,
                                },
                                {
                                    name: "ios",
                                    icon: APPLE_ICON,
                                },
                            ],
                        },
                    ],
                },
                {
                    name: ["--transformer"],
                    description: "Specify a custom transformer to be used",
                    args: [
                        {
                            name: "transformer",
                        },
                    ],
                },
                {
                    name: ["--dev"],
                    description: "If false, warnings are disabled and the bundle is minified (default: true)",
                    args: [
                        {
                            name: "boolean",
                            isOptional: true,
                            suggestions: [
                                { name: "true", icon: "✅" },
                                { name: "false", icon: "❌" },
                            ],
                        },
                    ],
                },
                {
                    name: ["--minify"],
                    description: "Allows overriding whether bundle is minified. This defaults to false if dev is true, and true if dev is false. Disabling minification can be useful for speeding up production builds for testing purposes.",
                    args: [
                        {
                            name: "boolean",
                            isOptional: true,
                            suggestions: [
                                { name: "true", icon: "✅" },
                                { name: "false", icon: "❌" },
                            ],
                        },
                    ],
                },
                {
                    name: ["--bundle-output"],
                    description: "File name where to store the resulting bundle, ex. /tmp/groups.bundle",
                    args: [
                        {
                            name: "output file",
                        },
                    ],
                },
                {
                    name: ["--bundle-encoding"],
                    description: 'Encoding the bundle should be written in (https://nodejs.org/api/buffer.html#buffer_buffer). (default: "utf8")',
                    args: [
                        {
                            name: "encoding",
                            suggestions: [
                                {
                                    name: "utf8",
                                },
                                {
                                    name: "utf16le",
                                },
                                {
                                    name: "latin1",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: ["--max-workers"],
                    description: "Specifies the maximum number of workers the worker-pool will spawn for transforming files. This defaults to the number of the cores available on your machine.",
                    args: [
                        {
                            name: "Number of workers",
                            generators: workerGenerator,
                        },
                    ],
                },
                {
                    name: ["--sourcemap-output"],
                    description: "File name where to store the sourcemap file for resulting bundle, ex. /tmp/groups.map",
                    args: [
                        {
                            name: "sourcemap-output",
                        },
                    ],
                },
                {
                    name: ["--sourcemap-sources-root"],
                    description: "Path to make sourcemap's sources entries relative to, ex. /root/dir",
                    args: [
                        {
                            template: "folders",
                            name: "root",
                        },
                    ],
                },
                {
                    name: ["--sourcemap-use-absolute-path"],
                    description: "Report SourceMapURL using its full path",
                },
                {
                    name: ["--assets-dest"],
                    description: "Directory name where to store assets referenced in the bundle",
                    args: [
                        {
                            name: "directory",
                            template: "folders",
                        },
                    ],
                },
                {
                    name: ["--unstable-transform-profile"],
                    description: "Experimental, transform JS for a specific JS engine. Currently supported: hermes, hermes-canary, default",
                    args: [
                        {
                            name: "transform-profile",
                            suggestions: [
                                {
                                    name: "hermes",
                                    icon: "https://reactnative.dev/docs/assets/HermesLogo.svg",
                                },
                                {
                                    name: "hermes-canary",
                                    icon: "https://reactnative.dev/docs/assets/HermesLogo.svg",
                                },
                                {
                                    name: "default",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: ["--reset-cache"],
                    description: "Removes cached files",
                },
                {
                    name: ["--read-global-cache"],
                    description: "Try to fetch transformed JS code from the global cache, if configured.",
                },
                {
                    name: ["--config"],
                    icon: "🛠",
                    description: "Path to the CLI configuration file",
                    args: [
                        {
                            name: "string",
                        },
                    ],
                },
                {
                    name: ["--indexed-ram-bundle"],
                    description: 'Force the "Indexed RAM" bundle file format, even when building for android',
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            description: "links assets and optionally native modules",
            name: "link",
            options: [
                {
                    name: ["--platforms"],
                    description: "Scope linking to specified platforms",
                    args: [
                        {
                            name: "list",
                            isOptional: true,
                        },
                    ],
                },
                {
                    name: ["--all"],
                    description: "Link all native modules and assets",
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
            args: [
                {
                    name: "packageName",
                    isOptional: true,
                },
            ],
        },
        {
            description: "Upgrade your app's template files to the specified or latest npm version using `rn-diff-purge` project. Only valid semver versions are allowed.",
            name: "upgrade",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
            args: [
                {
                    name: "version",
                    isOptional: true,
                },
            ],
        },
        {
            description: "Get relevant version info about OS, toolchain and libraries",
            name: "info",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            description: "install and link native dependencies",
            name: "install",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
            args: [
                {
                    name: "packageName",
                },
            ],
        },
        {
            description: "Print CLI configuration",
            icon: "🛠",
            name: "config",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            description: "unlink native dependency",
            name: "unlink",
            options: [
                {
                    name: ["--platforms"],
                    description: "Scope unlinking to specified platforms",
                    args: [
                        {
                            name: "list",
                            isOptional: true,
                        },
                    ],
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
            args: [
                {
                    name: "packageName",
                },
            ],
        },
        {
            description: "starts iOS device syslog tail",
            name: "log-ios",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            description: "Pull and convert a Hermes tracing profile to Chrome tracing profile, then store it in the directory <destinationDir> of the local machine",
            name: "profile-hermes",
            options: [
                {
                    name: ["--filename"],
                    description: "File name of the profile to be downloaded, eg. sampling-profiler-trace8593107139682635366.cpuprofile",
                    args: [
                        {
                            template: "filepaths",
                            name: "profile",
                        },
                    ],
                },
                {
                    name: ["--raw"],
                    description: "Pulls the original Hermes tracing profile without any transformation",
                },
                {
                    name: ["--sourcemap-path"],
                    description: "The local path to your source map file, eg. /tmp/sourcemap.json",
                    args: [
                        {
                            name: "sourcemap-path",
                            template: "filepaths",
                        },
                    ],
                },
                {
                    name: ["--generate-sourcemap"],
                    description: "Generates the JS bundle and source map",
                },
                {
                    name: ["--port"],
                    description: 'default: "8081"',
                    args: [
                        {
                            name: "free port",
                        },
                    ],
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
            args: [
                {
                    name: "destinationDir",
                    template: "folders",
                    isOptional: true,
                },
            ],
        },
        {
            description: "starts logkitty",
            name: "log-android",
            options: [
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            description: "builds your app and starts it on a connected Android emulator or device",
            name: "run-android",
            options: [
                {
                    name: ["--root"],
                    description: '[DEPRECATED - root is discovered automatically] Override the root directory for the android build (which contains the android directory) (default: "")',
                    args: [
                        {
                            name: "root",
                            template: "folders",
                        },
                    ],
                },
                {
                    name: ["--variant"],
                    description: 'Specify your app\'s build variant (default: "debug")',
                    args: [
                        {
                            name: "variant",
                            suggestions: [
                                {
                                    name: "debug",
                                },
                                {
                                    name: "release",
                                },
                            ],
                        },
                    ],
                },
                {
                    name: ["--appFolder"],
                    description: '[DEPRECATED – use "project.android.appName" in react-native.config.js] Specify a different application folder name for the android source. If not, we assume is "app"',
                    args: [
                        {
                            template: "folders",
                            name: "string",
                        },
                    ],
                },
                {
                    name: ["--appId"],
                    description: 'Specify an applicationId to launch after build. If not specified, `package` from AndroidManifest.xml will be used. (default: "")',
                    args: [
                        {
                            name: "appId",
                        },
                    ],
                },
                {
                    name: ["--appIdSuffix"],
                    description: 'Specify an applicationIdSuffix to launch after build. (default: "")',
                    args: [
                        {
                            name: "appIdSuffix",
                        },
                    ],
                },
                {
                    name: ["--main-activity"],
                    description: 'Name of the activity to start (default: "MainActivity")',
                    args: [
                        {
                            name: "main activity",
                        },
                    ],
                },
                {
                    name: ["--deviceId"],
                    icon: ANDROID_ICON,
                    description: 'builds your app and starts it on a specific device/simulator with the given device id (listed by running "adb devices" on the command line).',
                    args: [
                        {
                            name: "deviceId",
                            generators: androidGetDevicesGenerator,
                        },
                    ],
                },
                {
                    name: ["--no-packager"],
                    description: "Do not launch packager while building",
                },
                {
                    name: ["--port"],
                    description: "default: 8081",
                    args: [
                        {
                            name: "free port",
                        },
                    ],
                },
                {
                    name: ["--terminal"],
                    description: 'Launches the Metro Bundler in a new window using the specified terminal path. (default: "Apple_Terminal")',
                    args: [
                        {
                            name: "terminal path",
                        },
                    ],
                },
                {
                    name: ["--tasks"],
                    description: 'Run custom Gradle tasks. By default it\'s "installDebug"',
                    icon: GRADLE_ICON,
                    args: [
                        {
                            name: "task list",
                            // TODO: Ask about scripts that take longer to execute
                            generators: gradleTasksGenerator,
                        },
                    ],
                },
                {
                    name: ["--no-jetifier"],
                    description: 'Do not run "jetifier" – the AndroidX transition tool. By default it runs before Gradle to ease working with libraries that don\'t support AndroidX yet. See more at: https://www.npmjs.com/package/jetifier.',
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
        {
            description: "builds your app and starts it on iOS simulator",
            name: "run-ios",
            options: [
                {
                    name: ["--simulator"],
                    description: 'Explicitly set simulator to use. Optionally include iOS version between parenthesis at the end to match an exact version: "iPhone 6 (10.0)" (default: "iPhone 12")',
                    args: [
                        {
                            name: "simulator",
                            generators: iosGetDevicesSimulatorGenerator,
                        },
                    ],
                },
                {
                    name: ["--configuration"],
                    icon: "🛠",
                    description: 'Explicitly set the scheme configuration to use (default: "Debug")',
                    args: [
                        {
                            name: "config scheme",
                            // TODO: Ask about scripts that take longer to execute
                            generators: xcodeConfigGenerator,
                        },
                    ],
                },
                {
                    name: ["--scheme"],
                    description: "Explicitly set Xcode scheme to use",
                    args: [
                        {
                            name: "scheme",
                            generators: xcodeSchemeGenerator,
                        },
                    ],
                },
                {
                    name: ["--project-path"],
                    description: 'Path relative to project root where the Xcode project (.xcodeproj) lives. (default: "ios")',
                    args: [
                        {
                            template: "folders",
                            name: "path",
                        },
                    ],
                },
                {
                    name: ["--device"],
                    description: "Explicitly set device to use by name.",
                    args: [
                        {
                            name: "device name",
                            isOptional: true,
                            generators: iosGetDevicesGenerator,
                        },
                    ],
                },
                {
                    name: ["--udid"],
                    description: "Explicitly set device to use by udid",
                    args: [
                        {
                            name: "udid",
                            generators: iosGetDevicesUdidGenerator,
                        },
                    ],
                },
                {
                    name: ["--no-packager"],
                    description: "Do not launch packager while building",
                },
                {
                    name: ["--verbose"],
                    icon: "🔊",
                    description: "Do not use xcpretty even if installed",
                },
                {
                    name: ["--port"],
                    description: "default: 8081",
                    args: [
                        {
                            name: "free port",
                        },
                    ],
                },
                {
                    name: ["--terminal"],
                    description: 'Launches the Metro Bundler in a new window using the specified terminal path. (default: "Apple_Terminal")',
                    args: [
                        {
                            name: "terminal path",
                        },
                    ],
                },
                {
                    name: ["-h", "--help"],
                    description: "output usage information",
                },
            ],
        },
    ],
    options: [
        {
            name: ["--version "],
            description: "Print CLI version",
        },
        {
            name: ["--verbose"],
            icon: "🔊",
            description: "Increase logging verbosity",
        },
        {
            name: ["-h", "--help"],
            description: "output usage information",
        },
    ],
};

