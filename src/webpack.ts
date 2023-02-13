const WebpackConfigFileArgument: Fig.SingleOrArray<Fig.Arg> = [
  {
    name: "config",
    suggestions: [
      {
        name: "webpack.config",
      },
      {
        name: ".webpack/webpack.config",
      },
      {
        name: ".webpack/webpackfile",
      },
    ],
  },
];

const completionSpec: Fig.Spec = {
  name: "webpack",
  description: "",
  subcommands: [
    {
      name: ["build", "bundle", "b"],
      description: "Run webpack (default command, can be omitted)",
    },
    {
      name: ["configtest", "t"],
      description: "Validate a webpack configuration",
      options: [
        {
          name: "config-path",
          description: "Path to the webpack configuration file",
          args: WebpackConfigFileArgument,
        },
      ],
    },
    {
      name: ["help", "h"],
      description: "Display help for command and options",
    },
    {
      name: ["info", "i"],
      description: "Display information about your system",
    },
    {
      name: ["init", "create", "c", "new", "n"],
      description: "Initialize a new webpack project",
    },
    {
      name: ["loader", "l"],
      description: "Scaffold a webpack loader",
    },
    {
      name: ["plugin", "p"],
      description: "Scaffold a webpack plugin",
    },
    {
      name: ["serve", "server", "s"],
      description: "Run the webpack development server",
    },
    {
      name: ["version", "v"],
      description:
        "Display the version number of webpack, webpack-cli, and webpack-dev-server commands",
    },
    {
      name: ["watch", "w"],
      description: "Run webpack and watch for file changes",
    },
  ],
  options: [
    {
      name: ["--config", "-c"],
      description:
        "Provide path to a webpack configuration file e.g. ./webpack.config.js",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--config-name",
      description: "Name of the configuration to use",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: ["--merge", "-m"],
      description: "Merge two or more configurations using 'webpack-merge'",
    },
    {
      name: "--env",
      description:
        "Environment passed to the configuration when it is a function",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--node-env",
      description: "Sets process.env.NODE_ENV to the specified value",
      args: {
        name: "value",
      },
    },
    {
      name: ["--hot", "-h"],
      description: "Enables Hot Module Replacement",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-hot",
      description: "Disables Hot Module Replacement",
    },
    {
      name: "--analyze",
      description:
        "It invokes webpack-bundle-analyzer plugin to get bundle information",
    },
    {
      name: "--progress",
      description: "Print compilation progress during build",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--prefetch",
      description: "Prefetch this request",
      args: {
        name: "value",
      },
    },
    {
      name: ["--json", "-j"],
      description: "Prints result as JSON or store it in a file",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-amd",
      description: "Negative 'amd' option",
    },
    {
      name: "--bail",
      description:
        "Report the first error as a hard error instead of tolerating it",
    },
    {
      name: "--no-bail",
      description: "Negative 'bail' option",
    },
    {
      name: "--cache",
      description: "Enable in memory caching. Disable caching",
    },
    {
      name: "--no-cache",
      description: "Negative 'cache' option",
    },
    {
      name: "--cache-cache-unaffected",
      description:
        "Additionally cache computation of modules that are unchanged and reference only unchanged modules",
    },
    {
      name: "--no-cache-cache-unaffected",
      description: "Negative 'cache-cache-unaffected' option",
    },
    {
      name: "--cache-max-generations",
      description:
        "Number of generations unused cache entries stay in memory cache at minimum (1 = may be removed after unused for a single compilation, ..., Infinity: kept forever)",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-type",
      description: "In memory caching. Filesystem caching",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-allow-collecting-memory",
      description:
        "Allows to collect unused memory allocated during deserialization. This requires copying data into smaller buffers and has a performance cost",
    },
    {
      name: "--no-cache-allow-collecting-memory",
      description: "Negative 'cache-allow-collecting-memory' option",
    },
    {
      name: "--cache-cache-directory",
      description:
        "Base directory for the cache (defaults to node_modules/.cache/webpack)",
      args: {
        name: "value",

        template: ["folders"],
      },
    },
    {
      name: "--cache-cache-location",
      description:
        "Locations for the cache (defaults to cacheDirectory / name)",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-compression",
      description: "Compression type used for the cache files",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-cache-compression",
      description: "Negative 'cache-compression' option",
    },
    {
      name: "--cache-hash-algorithm",
      description:
        "Algorithm used for generation the hash (see node.js crypto package)",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-idle-timeout",
      description:
        "Time in ms after which idle period the cache storing should happen",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-idle-timeout-after-large-changes",
      description:
        "Time in ms after which idle period the cache storing should happen when larger changes has been detected (cumulative build time > 2 x avg cache store time)",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-idle-timeout-for-initial-store",
      description:
        "Time in ms after which idle period the initial cache storing should happen",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-immutable-paths",
      description:
        "A RegExp matching an immutable directory (usually a package manager cache directory, including the tailing slash) A path to an immutable directory (usually a package manager cache directory)",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--cache-immutable-paths-reset",
      description:
        "Clear all items provided in 'cache.immutablePaths' configuration. List of paths that are managed by a package manager and contain a version or hash in its path so all files are immutable",
    },
    {
      name: "--cache-managed-paths",
      description:
        "A RegExp matching a managed directory (usually a node_modules directory, including the tailing slash) A path to a managed directory (usually a node_modules directory)",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--cache-managed-paths-reset",
      description:
        "Clear all items provided in 'cache.managedPaths' configuration. List of paths that are managed by a package manager and can be trusted to not be modified otherwise",
    },
    {
      name: "--cache-max-age",
      description:
        "Time for which unused cache entries stay in the filesystem cache at minimum (in milliseconds)",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-max-memory-generations",
      description:
        "Number of generations unused cache entries stay in memory cache at minimum (0 = no memory cache used, 1 = may be removed after unused for a single compilation, ..., Infinity: kept forever). Cache entries will be deserialized from disk when removed from memory cache",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-memory-cache-unaffected",
      description:
        "Additionally cache computation of modules that are unchanged and reference only unchanged modules in memory",
    },
    {
      name: "--no-cache-memory-cache-unaffected",
      description: "Negative 'cache-memory-cache-unaffected' option",
    },
    {
      name: "--cache-name",
      description:
        "Name for the cache. Different names will lead to different coexisting caches",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-profile",
      description:
        "Track and log detailed timing information for individual cache items",
    },
    {
      name: "--no-cache-profile",
      description: "Negative 'cache-profile' option",
    },
    {
      name: "--cache-store",
      description:
        "When to store data to the filesystem. (pack: Store data when compiler is idle in a single file)",
      args: {
        name: "value",
      },
    },
    {
      name: "--cache-version",
      description:
        "Version of the cache data. Different versions won't allow to reuse the cache and override existing content. Update the version when config changed in a way which doesn't allow to reuse cache. This will invalidate the cache",
      args: {
        name: "value",
      },
    },
    {
      name: "--context",
      description:
        "The base directory (absolute path!) for resolving the `entry` option. If `output.pathinfo` is set, the included pathinfo is shortened to this directory",
      args: {
        name: "value",

        template: ["folders"],
      },
    },
    {
      name: "--dependencies",
      description: "References to another configuration to depend on",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--dependencies-reset",
      description:
        "Clear all items provided in 'dependencies' configuration. References to other configurations to depend on",
    },
    {
      name: ["--devtool", "-d"],
      description: "Determine source maps to use",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-devtool",
      description: "Do not generate source maps",
    },
    {
      name: "--entry",
      description: "The entry point(s) of your application e.g. ./src/main.js",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--entry-reset",
      description:
        "Clear all items provided in 'entry' configuration. All modules are loaded upon startup. The last one is exported",
    },
    {
      name: "--experiments-async-web-assembly",
      description: "Support WebAssembly as asynchronous EcmaScript Module",
    },
    {
      name: "--no-experiments-async-web-assembly",
      description: "Negative 'experiments-async-web-assembly' option",
    },
    {
      name: "--experiments-back-compat",
      description:
        "Enable backward-compat layer with deprecation warnings for many webpack 4 APIs",
    },
    {
      name: "--no-experiments-back-compat",
      description: "Negative 'experiments-back-compat' option",
    },
    {
      name: "--experiments-build-http-allowed-uris",
      description:
        "Allowed URI pattern. Allowed URI (resp. the beginning of it)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--experiments-build-http-allowed-uris-reset",
      description:
        "Clear all items provided in 'experiments.buildHttp.allowedUris' configuration. List of allowed URIs (resp. the beginning of them)",
    },
    {
      name: "--experiments-build-http-cache-location",
      description:
        "Location where resource content is stored for lockfile entries. It's also possible to disable storing by passing false",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-experiments-build-http-cache-location",
      description: "Negative 'experiments-build-http-cache-location' option",
    },
    {
      name: "--experiments-build-http-frozen",
      description:
        "When set, anything that would lead to a modification of the lockfile or any resource content, will result in an error",
    },
    {
      name: "--no-experiments-build-http-frozen",
      description: "Negative 'experiments-build-http-frozen' option",
    },
    {
      name: "--experiments-build-http-lockfile-location",
      description: "Location of the lockfile",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-build-http-proxy",
      description:
        "Proxy configuration, which can be used to specify a proxy server to use for HTTP requests",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-build-http-upgrade",
      description:
        "When set, resources of existing lockfile entries will be fetched and entries will be upgraded when resource content has changed",
    },
    {
      name: "--no-experiments-build-http-upgrade",
      description: "Negative 'experiments-build-http-upgrade' option",
    },
    {
      name: "--experiments-cache-unaffected",
      description:
        "Enable additional in memory caching of modules that are unchanged and reference only unchanged modules",
    },
    {
      name: "--no-experiments-cache-unaffected",
      description: "Negative 'experiments-cache-unaffected' option",
    },
    {
      name: "--experiments-css",
      description: "Enable css support",
    },
    {
      name: "--no-experiments-css",
      description: "Negative 'experiments-css' option",
    },
    {
      name: "--experiments-css-exports-only",
      description:
        "Avoid generating and loading a stylesheet and only embed exports from css into output javascript files",
    },
    {
      name: "--no-experiments-css-exports-only",
      description: "Negative 'experiments-css-exports-only' option",
    },
    {
      name: "--experiments-future-defaults",
      description: "Apply defaults of next major version",
    },
    {
      name: "--no-experiments-future-defaults",
      description: "Negative 'experiments-future-defaults' option",
    },
    {
      name: "--experiments-layers",
      description: "Enable module layers",
    },
    {
      name: "--no-experiments-layers",
      description: "Negative 'experiments-layers' option",
    },
    {
      name: "--experiments-lazy-compilation",
      description:
        "Compile entrypoints and import()s only when they are accessed",
    },
    {
      name: "--no-experiments-lazy-compilation",
      description: "Negative 'experiments-lazy-compilation' option",
    },
    {
      name: "--experiments-lazy-compilation-backend-client",
      description: "A custom client",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-lazy-compilation-backend-listen",
      description: "A port",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-lazy-compilation-backend-listen-host",
      description: "A host",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-lazy-compilation-backend-listen-port",
      description: "A port",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-lazy-compilation-backend-protocol",
      description:
        "Specifies the protocol the client should use to connect to the server",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-lazy-compilation-entries",
      description: "Enable/disable lazy compilation for entries",
    },
    {
      name: "--no-experiments-lazy-compilation-entries",
      description: "Negative 'experiments-lazy-compilation-entries' option",
    },
    {
      name: "--experiments-lazy-compilation-imports",
      description: "Enable/disable lazy compilation for import() modules",
    },
    {
      name: "--no-experiments-lazy-compilation-imports",
      description: "Negative 'experiments-lazy-compilation-imports' option",
    },
    {
      name: "--experiments-lazy-compilation-test",
      description:
        "Specify which entrypoints or import()ed modules should be lazily compiled. This is matched with the imported module and not the entrypoint name",
      args: {
        name: "value",
      },
    },
    {
      name: "--experiments-output-module",
      description: "Allow output javascript files as module source type",
    },
    {
      name: "--no-experiments-output-module",
      description: "Negative 'experiments-output-module' option",
    },
    {
      name: "--experiments-sync-web-assembly",
      description:
        "Support WebAssembly as synchronous EcmaScript Module (outdated)",
    },
    {
      name: "--no-experiments-sync-web-assembly",
      description: "Negative 'experiments-sync-web-assembly' option",
    },
    {
      name: "--experiments-top-level-await",
      description: "Allow using top-level-await in EcmaScript Modules",
    },
    {
      name: "--no-experiments-top-level-await",
      description: "Negative 'experiments-top-level-await' option",
    },
    {
      name: "--externals",
      description:
        "Every matched dependency becomes external. An exact matched dependency becomes external. The same string is used as external dependency",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--externals-reset",
      description:
        "Clear all items provided in 'externals' configuration. Specify dependencies that shouldn't be resolved by webpack, but should become dependencies of the resulting bundle. The kind of the dependency depends on `output.libraryTarget`",
    },
    {
      name: "--externals-presets-electron",
      description:
        "Treat common electron built-in modules in main and preload context like 'electron', 'ipc' or 'shell' as external and load them via require() when used",
    },
    {
      name: "--no-externals-presets-electron",
      description: "Negative 'externals-presets-electron' option",
    },
    {
      name: "--externals-presets-electron-main",
      description:
        "Treat electron built-in modules in the main context like 'app', 'ipc-main' or 'shell' as external and load them via require() when used",
    },
    {
      name: "--no-externals-presets-electron-main",
      description: "Negative 'externals-presets-electron-main' option",
    },
    {
      name: "--externals-presets-electron-preload",
      description:
        "Treat electron built-in modules in the preload context like 'web-frame', 'ipc-renderer' or 'shell' as external and load them via require() when used",
    },
    {
      name: "--no-externals-presets-electron-preload",
      description: "Negative 'externals-presets-electron-preload' option",
    },
    {
      name: "--externals-presets-electron-renderer",
      description:
        "Treat electron built-in modules in the renderer context like 'web-frame', 'ipc-renderer' or 'shell' as external and load them via require() when used",
    },
    {
      name: "--no-externals-presets-electron-renderer",
      description: "Negative 'externals-presets-electron-renderer' option",
    },
    {
      name: "--externals-presets-node",
      description:
        "Treat node.js built-in modules like fs, path or vm as external and load them via require() when used",
    },
    {
      name: "--no-externals-presets-node",
      description: "Negative 'externals-presets-node' option",
    },
    {
      name: "--externals-presets-nwjs",
      description:
        "Treat NW.js legacy nw.gui module as external and load it via require() when used",
    },
    {
      name: "--no-externals-presets-nwjs",
      description: "Negative 'externals-presets-nwjs' option",
    },
    {
      name: "--externals-presets-web",
      description:
        "Treat references to 'http(s)://...' and 'std:...' as external and load them via import when used (Note that this changes execution order as externals are executed before any other code in the chunk)",
    },
    {
      name: "--no-externals-presets-web",
      description: "Negative 'externals-presets-web' option",
    },
    {
      name: "--externals-presets-web-async",
      description:
        "Treat references to 'http(s)://...' and 'std:...' as external and load them via async import() when used (Note that this external type is an async module, which has various effects on the execution)",
    },
    {
      name: "--no-externals-presets-web-async",
      description: "Negative 'externals-presets-web-async' option",
    },
    {
      name: "--externals-type",
      description:
        "Specifies the default type of externals ('amd*', 'umd*', 'system' and 'jsonp' depend on output.libraryTarget set to the same value)",
      args: {
        name: "value",
      },
    },
    {
      name: "--ignore-warnings",
      description: "A RegExp to select the warning message",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--ignore-warnings-file",
      description: "A RegExp to select the origin file for the warning",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--ignore-warnings-message",
      description: "A RegExp to select the warning message",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--ignore-warnings-module",
      description: "A RegExp to select the origin module for the warning",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--ignore-warnings-reset",
      description:
        "Clear all items provided in 'ignoreWarnings' configuration. Ignore specific warnings",
    },
    {
      name: "--infrastructure-logging-append-only",
      description:
        "Only appends lines to the output. Avoids updating existing output e. g. for status messages. This option is only used when no custom console is provided",
    },
    {
      name: "--no-infrastructure-logging-append-only",
      description: "Negative 'infrastructure-logging-append-only' option",
    },
    {
      name: "--infrastructure-logging-colors",
      description:
        "Enables/Disables colorful output. This option is only used when no custom console is provided",
    },
    {
      name: "--no-infrastructure-logging-colors",
      description: "Negative 'infrastructure-logging-colors' option",
    },
    {
      name: "--infrastructure-logging-debug",
      description:
        "Enable/Disable debug logging for all loggers. Enable debug logging for specific loggers",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-infrastructure-logging-debug",
      description: "Negative 'infrastructure-logging-debug' option",
    },
    {
      name: "--infrastructure-logging-debug-reset",
      description:
        "Clear all items provided in 'infrastructureLogging.debug' configuration. Enable debug logging for specific loggers",
    },
    {
      name: "--infrastructure-logging-level",
      description: "Log level",
      args: {
        name: "value",
      },
    },
    {
      name: "--mode",
      description: "Defines the mode to pass to webpack",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-expr-context-critical",
      description: "Enable warnings for full dynamic dependencies",
    },
    {
      name: "--no-module-expr-context-critical",
      description: "Negative 'module-expr-context-critical' option",
    },
    {
      name: "--module-expr-context-recursive",
      description:
        "Enable recursive directory lookup for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRecursive'",
      deprecated: true,
    },
    {
      name: "--no-module-expr-context-recursive",
      description: "Negative 'module-expr-context-recursive' option",
    },
    {
      name: "--module-expr-context-reg-exp",
      description:
        "Sets the default regular expression for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRegExp'",
      args: {
        name: "value",
        isOptional: true,
      },
      deprecated: true,
    },
    {
      name: "--no-module-expr-context-reg-exp",
      description: "Negative 'module-expr-context-reg-exp' option",
    },
    {
      name: "--module-expr-context-request",
      description:
        "Set the default request for full dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.exprContextRequest'",
      args: {
        name: "value",
      },
      deprecated: true,
    },
    {
      name: "--module-generator-asset-data-url-encoding",
      description: "Asset encoding (defaults to base64)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-generator-asset-data-url-encoding",
      description: "Negative 'module-generator-asset-data-url-encoding' option",
    },
    {
      name: "--module-generator-asset-data-url-mimetype",
      description: "Asset mimetype (getting from file extension by default)",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-asset-emit",
      description:
        "Emit an output asset from this asset module. This can be set to 'false' to omit emitting e. g. for SSR",
    },
    {
      name: "--no-module-generator-asset-emit",
      description: "Negative 'module-generator-asset-emit' option",
    },
    {
      name: "--module-generator-asset-filename",
      description:
        "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--module-generator-asset-output-path",
      description:
        "Emit the asset in the specified folder relative to 'output.path'. This should only be needed when custom 'publicPath' is specified to match the folder structure there",
      args: {
        name: "value",

        template: ["folders"],
      },
    },
    {
      name: "--module-generator-asset-public-path",
      description:
        "The 'publicPath' specifies the public URL address of the output files when referenced in a browser",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-asset-inline-data-url-encoding",
      description: "Asset encoding (defaults to base64)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-generator-asset-inline-data-url-encoding",
      description:
        "Negative 'module-generator-asset-inline-data-url-encoding' option",
    },
    {
      name: "--module-generator-asset-inline-data-url-mimetype",
      description: "Asset mimetype (getting from file extension by default)",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-generator-asset-resource-emit",
      description:
        "Emit an output asset from this asset module. This can be set to 'false' to omit emitting e. g. for SSR",
    },
    {
      name: "--no-module-generator-asset-resource-emit",
      description: "Negative 'module-generator-asset-resource-emit' option",
    },
    {
      name: "--module-generator-asset-resource-filename",
      description:
        "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--module-generator-asset-resource-output-path",
      description:
        "Emit the asset in the specified folder relative to 'output.path'. This should only be needed when custom 'publicPath' is specified to match the folder structure there",
      args: {
        name: "value",

        template: ["folders"],
      },
    },
    {
      name: "--module-generator-asset-resource-public-path",
      description:
        "The 'publicPath' specifies the public URL address of the output files when referenced in a browser",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-no-parse",
      description:
        "A regular expression, when matched the module is not parsed. An absolute path, when the module starts with this path it is not parsed",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-no-parse-reset",
      description:
        "Clear all items provided in 'module.noParse' configuration. Don't parse files matching. It's matched against the full resolved request",
    },
    {
      name: "--module-parser-asset-data-url-condition-max-size",
      description:
        "Maximum size of asset that should be inline as modules. Default: 8kb",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-amd",
      description: "Negative 'module-parser-javascript-amd' option",
    },
    {
      name: "--module-parser-javascript-browserify",
      description: "Enable/disable special handling for browserify bundles",
    },
    {
      name: "--no-module-parser-javascript-browserify",
      description: "Negative 'module-parser-javascript-browserify' option",
    },
    {
      name: "--module-parser-javascript-commonjs",
      description: "Enable/disable parsing of CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-commonjs",
      description: "Negative 'module-parser-javascript-commonjs' option",
    },
    {
      name: "--module-parser-javascript-commonjs-magic-comments",
      description:
        "Enable/disable parsing of magic comments in CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-commonjs-magic-comments",
      description:
        "Negative 'module-parser-javascript-commonjs-magic-comments' option",
    },
    {
      name: "--module-parser-javascript-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..." and "export ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-exports-presence",
      description:
        "Negative 'module-parser-javascript-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-expr-context-critical",
      description: "Enable warnings for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-expr-context-critical",
      description:
        "Negative 'module-parser-javascript-expr-context-critical' option",
    },
    {
      name: "--module-parser-javascript-expr-context-recursive",
      description:
        "Enable recursive directory lookup for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-expr-context-recursive",
      description:
        "Negative 'module-parser-javascript-expr-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-expr-context-reg-exp",
      description:
        "Sets the default regular expression for full dynamic dependencies",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-expr-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-expr-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-expr-context-request",
      description: "Set the default request for full dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-harmony",
      description: "Enable/disable parsing of EcmaScript Modules syntax",
    },
    {
      name: "--no-module-parser-javascript-harmony",
      description: "Negative 'module-parser-javascript-harmony' option",
    },
    {
      name: "--module-parser-javascript-import",
      description: "Enable/disable parsing of import() syntax",
    },
    {
      name: "--no-module-parser-javascript-import",
      description: "Negative 'module-parser-javascript-import' option",
    },
    {
      name: "--module-parser-javascript-import-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-import-exports-presence",
      description:
        "Negative 'module-parser-javascript-import-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-import-meta",
      description: "Enable/disable evaluating import.meta",
    },
    {
      name: "--no-module-parser-javascript-import-meta",
      description: "Negative 'module-parser-javascript-import-meta' option",
    },
    {
      name: "--module-parser-javascript-import-meta-context",
      description: "Enable/disable evaluating import.meta.webpackContext",
    },
    {
      name: "--no-module-parser-javascript-import-meta-context",
      description:
        "Negative 'module-parser-javascript-import-meta-context' option",
    },
    {
      name: "--no-module-parser-javascript-node",
      description: "Negative 'module-parser-javascript-node' option",
    },
    {
      name: "--module-parser-javascript-node-dirname",
      description: "Include a polyfill for the '__dirname' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-node-dirname",
      description: "Negative 'module-parser-javascript-node-dirname' option",
    },
    {
      name: "--module-parser-javascript-node-filename",
      description: "Include a polyfill for the '__filename' variable",
      args: {
        name: "value",
        isOptional: true,

        template: ["filepaths"],
      },
    },
    {
      name: "--no-module-parser-javascript-node-filename",
      description: "Negative 'module-parser-javascript-node-filename' option",
    },
    {
      name: "--module-parser-javascript-node-global",
      description: "Include a polyfill for the 'global' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-node-global",
      description: "Negative 'module-parser-javascript-node-global' option",
    },
    {
      name: "--module-parser-javascript-reexport-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "export ... from ...". This might be useful to disable during the migration from "export ... from ..." to "export type ... from ..." when reexporting types in TypeScript',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-reexport-exports-presence",
      description:
        "Negative 'module-parser-javascript-reexport-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-require-context",
      description: "Enable/disable parsing of require.context syntax",
    },
    {
      name: "--no-module-parser-javascript-require-context",
      description: "Negative 'module-parser-javascript-require-context' option",
    },
    {
      name: "--module-parser-javascript-require-ensure",
      description: "Enable/disable parsing of require.ensure syntax",
    },
    {
      name: "--no-module-parser-javascript-require-ensure",
      description: "Negative 'module-parser-javascript-require-ensure' option",
    },
    {
      name: "--module-parser-javascript-require-include",
      description: "Enable/disable parsing of require.include syntax",
    },
    {
      name: "--no-module-parser-javascript-require-include",
      description: "Negative 'module-parser-javascript-require-include' option",
    },
    {
      name: "--module-parser-javascript-require-js",
      description:
        "Enable/disable parsing of require.js special syntax like require.config, requirejs.config, require.version and requirejs.onError",
    },
    {
      name: "--no-module-parser-javascript-require-js",
      description: "Negative 'module-parser-javascript-require-js' option",
    },
    {
      name: "--module-parser-javascript-strict-export-presence",
      description:
        'Deprecated in favor of "exportsPresence". Emit errors instead of warnings when imported names don\'t exist in imported module',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-strict-export-presence",
      description:
        "Negative 'module-parser-javascript-strict-export-presence' option",
    },
    {
      name: "--module-parser-javascript-strict-this-context-on-imports",
      description:
        "Handle the this context correctly according to the spec for namespace objects",
    },
    {
      name: "--no-module-parser-javascript-strict-this-context-on-imports",
      description:
        "Negative 'module-parser-javascript-strict-this-context-on-imports' option",
    },
    {
      name: "--module-parser-javascript-system",
      description:
        "Enable/disable parsing of System.js special syntax like System.import, System.get, System.set and System.register",
    },
    {
      name: "--no-module-parser-javascript-system",
      description: "Negative 'module-parser-javascript-system' option",
    },
    {
      name: "--module-parser-javascript-unknown-context-critical",
      description:
        "Enable warnings when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-unknown-context-critical",
      description:
        "Negative 'module-parser-javascript-unknown-context-critical' option",
    },
    {
      name: "--module-parser-javascript-unknown-context-recursive",
      description:
        "Enable recursive directory lookup when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-unknown-context-recursive",
      description:
        "Negative 'module-parser-javascript-unknown-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-unknown-context-reg-exp",
      description:
        "Sets the regular expression when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-unknown-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-unknown-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-unknown-context-request",
      description:
        "Sets the request when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-url",
      description: "Enable/disable parsing of new URL() syntax",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-url",
      description: "Negative 'module-parser-javascript-url' option",
    },
    {
      name: "--module-parser-javascript-worker",
      description:
        "Specify a syntax that should be parsed as WebWorker reference. 'Abc' handles 'new Abc()', 'Abc from xyz' handles 'import { Abc } from \"xyz\"; new Abc()', 'abc()' handles 'abc()', and combinations are also possible. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-worker",
      description: "Negative 'module-parser-javascript-worker' option",
    },
    {
      name: "--module-parser-javascript-worker-reset",
      description:
        "Clear all items provided in 'module.parser.javascript.worker' configuration. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
    },
    {
      name: "--module-parser-javascript-wrapped-context-critical",
      description: "Enable warnings for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-wrapped-context-critical",
      description:
        "Negative 'module-parser-javascript-wrapped-context-critical' option",
    },
    {
      name: "--module-parser-javascript-wrapped-context-recursive",
      description:
        "Enable recursive directory lookup for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-wrapped-context-recursive",
      description:
        "Negative 'module-parser-javascript-wrapped-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-wrapped-context-reg-exp",
      description:
        "Set the inner regular expression for partial dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-auto-amd",
      description: "Negative 'module-parser-javascript-auto-amd' option",
    },
    {
      name: "--module-parser-javascript-auto-browserify",
      description: "Enable/disable special handling for browserify bundles",
    },
    {
      name: "--no-module-parser-javascript-auto-browserify",
      description: "Negative 'module-parser-javascript-auto-browserify' option",
    },
    {
      name: "--module-parser-javascript-auto-commonjs",
      description: "Enable/disable parsing of CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-commonjs",
      description: "Negative 'module-parser-javascript-auto-commonjs' option",
    },
    {
      name: "--module-parser-javascript-auto-commonjs-magic-comments",
      description:
        "Enable/disable parsing of magic comments in CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-commonjs-magic-comments",
      description:
        "Negative 'module-parser-javascript-auto-commonjs-magic-comments' option",
    },
    {
      name: "--module-parser-javascript-auto-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..." and "export ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-auto-exports-presence",
      description:
        "Negative 'module-parser-javascript-auto-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-auto-expr-context-critical",
      description: "Enable warnings for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-auto-expr-context-critical",
      description:
        "Negative 'module-parser-javascript-auto-expr-context-critical' option",
    },
    {
      name: "--module-parser-javascript-auto-expr-context-recursive",
      description:
        "Enable recursive directory lookup for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-auto-expr-context-recursive",
      description:
        "Negative 'module-parser-javascript-auto-expr-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-auto-expr-context-reg-exp",
      description:
        "Sets the default regular expression for full dynamic dependencies",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-expr-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-auto-expr-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-auto-expr-context-request",
      description: "Set the default request for full dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-auto-harmony",
      description: "Enable/disable parsing of EcmaScript Modules syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-harmony",
      description: "Negative 'module-parser-javascript-auto-harmony' option",
    },
    {
      name: "--module-parser-javascript-auto-import",
      description: "Enable/disable parsing of import() syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-import",
      description: "Negative 'module-parser-javascript-auto-import' option",
    },
    {
      name: "--module-parser-javascript-auto-import-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-auto-import-exports-presence",
      description:
        "Negative 'module-parser-javascript-auto-import-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-auto-import-meta",
      description: "Enable/disable evaluating import.meta",
    },
    {
      name: "--no-module-parser-javascript-auto-import-meta",
      description:
        "Negative 'module-parser-javascript-auto-import-meta' option",
    },
    {
      name: "--module-parser-javascript-auto-import-meta-context",
      description: "Enable/disable evaluating import.meta.webpackContext",
    },
    {
      name: "--no-module-parser-javascript-auto-import-meta-context",
      description:
        "Negative 'module-parser-javascript-auto-import-meta-context' option",
    },
    {
      name: "--no-module-parser-javascript-auto-node",
      description: "Negative 'module-parser-javascript-auto-node' option",
    },
    {
      name: "--module-parser-javascript-auto-node-dirname",
      description: "Include a polyfill for the '__dirname' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-node-dirname",
      description:
        "Negative 'module-parser-javascript-auto-node-dirname' option",
    },
    {
      name: "--module-parser-javascript-auto-node-filename",
      description: "Include a polyfill for the '__filename' variable",
      args: {
        name: "value",
        isOptional: true,

        template: ["filepaths"],
      },
    },
    {
      name: "--no-module-parser-javascript-auto-node-filename",
      description:
        "Negative 'module-parser-javascript-auto-node-filename' option",
    },
    {
      name: "--module-parser-javascript-auto-node-global",
      description: "Include a polyfill for the 'global' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-node-global",
      description:
        "Negative 'module-parser-javascript-auto-node-global' option",
    },
    {
      name: "--module-parser-javascript-auto-reexport-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "export ... from ...". This might be useful to disable during the migration from "export ... from ..." to "export type ... from ..." when reexporting types in TypeScript',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-auto-reexport-exports-presence",
      description:
        "Negative 'module-parser-javascript-auto-reexport-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-auto-require-context",
      description: "Enable/disable parsing of require.context syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-require-context",
      description:
        "Negative 'module-parser-javascript-auto-require-context' option",
    },
    {
      name: "--module-parser-javascript-auto-require-ensure",
      description: "Enable/disable parsing of require.ensure syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-require-ensure",
      description:
        "Negative 'module-parser-javascript-auto-require-ensure' option",
    },
    {
      name: "--module-parser-javascript-auto-require-include",
      description: "Enable/disable parsing of require.include syntax",
    },
    {
      name: "--no-module-parser-javascript-auto-require-include",
      description:
        "Negative 'module-parser-javascript-auto-require-include' option",
    },
    {
      name: "--module-parser-javascript-auto-require-js",
      description:
        "Enable/disable parsing of require.js special syntax like require.config, requirejs.config, require.version and requirejs.onError",
    },
    {
      name: "--no-module-parser-javascript-auto-require-js",
      description: "Negative 'module-parser-javascript-auto-require-js' option",
    },
    {
      name: "--module-parser-javascript-auto-strict-export-presence",
      description:
        'Deprecated in favor of "exportsPresence". Emit errors instead of warnings when imported names don\'t exist in imported module',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-auto-strict-export-presence",
      description:
        "Negative 'module-parser-javascript-auto-strict-export-presence' option",
    },
    {
      name: "--module-parser-javascript-auto-strict-this-context-on-imports",
      description:
        "Handle the this context correctly according to the spec for namespace objects",
    },
    {
      name: "--no-module-parser-javascript-auto-strict-this-context-on-imports",
      description:
        "Negative 'module-parser-javascript-auto-strict-this-context-on-imports' option",
    },
    {
      name: "--module-parser-javascript-auto-system",
      description:
        "Enable/disable parsing of System.js special syntax like System.import, System.get, System.set and System.register",
    },
    {
      name: "--no-module-parser-javascript-auto-system",
      description: "Negative 'module-parser-javascript-auto-system' option",
    },
    {
      name: "--module-parser-javascript-auto-unknown-context-critical",
      description:
        "Enable warnings when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-auto-unknown-context-critical",
      description:
        "Negative 'module-parser-javascript-auto-unknown-context-critical' option",
    },
    {
      name: "--module-parser-javascript-auto-unknown-context-recursive",
      description:
        "Enable recursive directory lookup when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-auto-unknown-context-recursive",
      description:
        "Negative 'module-parser-javascript-auto-unknown-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-auto-unknown-context-reg-exp",
      description:
        "Sets the regular expression when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-unknown-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-auto-unknown-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-auto-unknown-context-request",
      description:
        "Sets the request when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-auto-url",
      description: "Enable/disable parsing of new URL() syntax",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-url",
      description: "Negative 'module-parser-javascript-auto-url' option",
    },
    {
      name: "--module-parser-javascript-auto-worker",
      description:
        "Specify a syntax that should be parsed as WebWorker reference. 'Abc' handles 'new Abc()', 'Abc from xyz' handles 'import { Abc } from \"xyz\"; new Abc()', 'abc()' handles 'abc()', and combinations are also possible. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-auto-worker",
      description: "Negative 'module-parser-javascript-auto-worker' option",
    },
    {
      name: "--module-parser-javascript-auto-worker-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/auto.worker' configuration. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
    },
    {
      name: "--module-parser-javascript-auto-wrapped-context-critical",
      description: "Enable warnings for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-auto-wrapped-context-critical",
      description:
        "Negative 'module-parser-javascript-auto-wrapped-context-critical' option",
    },
    {
      name: "--module-parser-javascript-auto-wrapped-context-recursive",
      description:
        "Enable recursive directory lookup for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-auto-wrapped-context-recursive",
      description:
        "Negative 'module-parser-javascript-auto-wrapped-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-auto-wrapped-context-reg-exp",
      description:
        "Set the inner regular expression for partial dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-amd",
      description: "Negative 'module-parser-javascript-dynamic-amd' option",
    },
    {
      name: "--module-parser-javascript-dynamic-browserify",
      description: "Enable/disable special handling for browserify bundles",
    },
    {
      name: "--no-module-parser-javascript-dynamic-browserify",
      description:
        "Negative 'module-parser-javascript-dynamic-browserify' option",
    },
    {
      name: "--module-parser-javascript-dynamic-commonjs",
      description: "Enable/disable parsing of CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-commonjs",
      description:
        "Negative 'module-parser-javascript-dynamic-commonjs' option",
    },
    {
      name: "--module-parser-javascript-dynamic-commonjs-magic-comments",
      description:
        "Enable/disable parsing of magic comments in CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-commonjs-magic-comments",
      description:
        "Negative 'module-parser-javascript-dynamic-commonjs-magic-comments' option",
    },
    {
      name: "--module-parser-javascript-dynamic-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..." and "export ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-exports-presence",
      description:
        "Negative 'module-parser-javascript-dynamic-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-dynamic-expr-context-critical",
      description: "Enable warnings for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-dynamic-expr-context-critical",
      description:
        "Negative 'module-parser-javascript-dynamic-expr-context-critical' option",
    },
    {
      name: "--module-parser-javascript-dynamic-expr-context-recursive",
      description:
        "Enable recursive directory lookup for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-dynamic-expr-context-recursive",
      description:
        "Negative 'module-parser-javascript-dynamic-expr-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-dynamic-expr-context-reg-exp",
      description:
        "Sets the default regular expression for full dynamic dependencies",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-expr-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-dynamic-expr-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-dynamic-expr-context-request",
      description: "Set the default request for full dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-dynamic-harmony",
      description: "Enable/disable parsing of EcmaScript Modules syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-harmony",
      description: "Negative 'module-parser-javascript-dynamic-harmony' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import",
      description: "Enable/disable parsing of import() syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-import",
      description: "Negative 'module-parser-javascript-dynamic-import' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-exports-presence",
      description:
        "Negative 'module-parser-javascript-dynamic-import-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-meta",
      description: "Enable/disable evaluating import.meta",
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-meta",
      description:
        "Negative 'module-parser-javascript-dynamic-import-meta' option",
    },
    {
      name: "--module-parser-javascript-dynamic-import-meta-context",
      description: "Enable/disable evaluating import.meta.webpackContext",
    },
    {
      name: "--no-module-parser-javascript-dynamic-import-meta-context",
      description:
        "Negative 'module-parser-javascript-dynamic-import-meta-context' option",
    },
    {
      name: "--no-module-parser-javascript-dynamic-node",
      description: "Negative 'module-parser-javascript-dynamic-node' option",
    },
    {
      name: "--module-parser-javascript-dynamic-node-dirname",
      description: "Include a polyfill for the '__dirname' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-node-dirname",
      description:
        "Negative 'module-parser-javascript-dynamic-node-dirname' option",
    },
    {
      name: "--module-parser-javascript-dynamic-node-filename",
      description: "Include a polyfill for the '__filename' variable",
      args: {
        name: "value",
        isOptional: true,

        template: ["filepaths"],
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-node-filename",
      description:
        "Negative 'module-parser-javascript-dynamic-node-filename' option",
    },
    {
      name: "--module-parser-javascript-dynamic-node-global",
      description: "Include a polyfill for the 'global' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-node-global",
      description:
        "Negative 'module-parser-javascript-dynamic-node-global' option",
    },
    {
      name: "--module-parser-javascript-dynamic-reexport-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "export ... from ...". This might be useful to disable during the migration from "export ... from ..." to "export type ... from ..." when reexporting types in TypeScript',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-reexport-exports-presence",
      description:
        "Negative 'module-parser-javascript-dynamic-reexport-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-dynamic-require-context",
      description: "Enable/disable parsing of require.context syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-require-context",
      description:
        "Negative 'module-parser-javascript-dynamic-require-context' option",
    },
    {
      name: "--module-parser-javascript-dynamic-require-ensure",
      description: "Enable/disable parsing of require.ensure syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-require-ensure",
      description:
        "Negative 'module-parser-javascript-dynamic-require-ensure' option",
    },
    {
      name: "--module-parser-javascript-dynamic-require-include",
      description: "Enable/disable parsing of require.include syntax",
    },
    {
      name: "--no-module-parser-javascript-dynamic-require-include",
      description:
        "Negative 'module-parser-javascript-dynamic-require-include' option",
    },
    {
      name: "--module-parser-javascript-dynamic-require-js",
      description:
        "Enable/disable parsing of require.js special syntax like require.config, requirejs.config, require.version and requirejs.onError",
    },
    {
      name: "--no-module-parser-javascript-dynamic-require-js",
      description:
        "Negative 'module-parser-javascript-dynamic-require-js' option",
    },
    {
      name: "--module-parser-javascript-dynamic-strict-export-presence",
      description:
        'Deprecated in favor of "exportsPresence". Emit errors instead of warnings when imported names don\'t exist in imported module',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-dynamic-strict-export-presence",
      description:
        "Negative 'module-parser-javascript-dynamic-strict-export-presence' option",
    },
    {
      name: "--module-parser-javascript-dynamic-strict-this-context-on-imports",
      description:
        "Handle the this context correctly according to the spec for namespace objects",
    },
    {
      name: "--no-module-parser-javascript-dynamic-strict-this-context-on-imports",
      description:
        "Negative 'module-parser-javascript-dynamic-strict-this-context-on-imports' option",
    },
    {
      name: "--module-parser-javascript-dynamic-system",
      description:
        "Enable/disable parsing of System.js special syntax like System.import, System.get, System.set and System.register",
    },
    {
      name: "--no-module-parser-javascript-dynamic-system",
      description: "Negative 'module-parser-javascript-dynamic-system' option",
    },
    {
      name: "--module-parser-javascript-dynamic-unknown-context-critical",
      description:
        "Enable warnings when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-dynamic-unknown-context-critical",
      description:
        "Negative 'module-parser-javascript-dynamic-unknown-context-critical' option",
    },
    {
      name: "--module-parser-javascript-dynamic-unknown-context-recursive",
      description:
        "Enable recursive directory lookup when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-dynamic-unknown-context-recursive",
      description:
        "Negative 'module-parser-javascript-dynamic-unknown-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-dynamic-unknown-context-reg-exp",
      description:
        "Sets the regular expression when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-unknown-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-dynamic-unknown-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-dynamic-unknown-context-request",
      description:
        "Sets the request when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-dynamic-url",
      description: "Enable/disable parsing of new URL() syntax",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-url",
      description: "Negative 'module-parser-javascript-dynamic-url' option",
    },
    {
      name: "--module-parser-javascript-dynamic-worker",
      description:
        "Specify a syntax that should be parsed as WebWorker reference. 'Abc' handles 'new Abc()', 'Abc from xyz' handles 'import { Abc } from \"xyz\"; new Abc()', 'abc()' handles 'abc()', and combinations are also possible. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-dynamic-worker",
      description: "Negative 'module-parser-javascript-dynamic-worker' option",
    },
    {
      name: "--module-parser-javascript-dynamic-worker-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/dynamic.worker' configuration. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
    },
    {
      name: "--module-parser-javascript-dynamic-wrapped-context-critical",
      description: "Enable warnings for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-dynamic-wrapped-context-critical",
      description:
        "Negative 'module-parser-javascript-dynamic-wrapped-context-critical' option",
    },
    {
      name: "--module-parser-javascript-dynamic-wrapped-context-recursive",
      description:
        "Enable recursive directory lookup for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-dynamic-wrapped-context-recursive",
      description:
        "Negative 'module-parser-javascript-dynamic-wrapped-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-dynamic-wrapped-context-reg-exp",
      description:
        "Set the inner regular expression for partial dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-esm-amd",
      description: "Negative 'module-parser-javascript-esm-amd' option",
    },
    {
      name: "--module-parser-javascript-esm-browserify",
      description: "Enable/disable special handling for browserify bundles",
    },
    {
      name: "--no-module-parser-javascript-esm-browserify",
      description: "Negative 'module-parser-javascript-esm-browserify' option",
    },
    {
      name: "--module-parser-javascript-esm-commonjs",
      description: "Enable/disable parsing of CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-commonjs",
      description: "Negative 'module-parser-javascript-esm-commonjs' option",
    },
    {
      name: "--module-parser-javascript-esm-commonjs-magic-comments",
      description:
        "Enable/disable parsing of magic comments in CommonJs syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-commonjs-magic-comments",
      description:
        "Negative 'module-parser-javascript-esm-commonjs-magic-comments' option",
    },
    {
      name: "--module-parser-javascript-esm-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..." and "export ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-esm-exports-presence",
      description:
        "Negative 'module-parser-javascript-esm-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-esm-expr-context-critical",
      description: "Enable warnings for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-esm-expr-context-critical",
      description:
        "Negative 'module-parser-javascript-esm-expr-context-critical' option",
    },
    {
      name: "--module-parser-javascript-esm-expr-context-recursive",
      description:
        "Enable recursive directory lookup for full dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-esm-expr-context-recursive",
      description:
        "Negative 'module-parser-javascript-esm-expr-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-esm-expr-context-reg-exp",
      description:
        "Sets the default regular expression for full dynamic dependencies",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-expr-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-esm-expr-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-esm-expr-context-request",
      description: "Set the default request for full dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-esm-harmony",
      description: "Enable/disable parsing of EcmaScript Modules syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-harmony",
      description: "Negative 'module-parser-javascript-esm-harmony' option",
    },
    {
      name: "--module-parser-javascript-esm-import",
      description: "Enable/disable parsing of import() syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-import",
      description: "Negative 'module-parser-javascript-esm-import' option",
    },
    {
      name: "--module-parser-javascript-esm-import-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "import ... from ..."',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-esm-import-exports-presence",
      description:
        "Negative 'module-parser-javascript-esm-import-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-esm-import-meta",
      description: "Enable/disable evaluating import.meta",
    },
    {
      name: "--no-module-parser-javascript-esm-import-meta",
      description: "Negative 'module-parser-javascript-esm-import-meta' option",
    },
    {
      name: "--module-parser-javascript-esm-import-meta-context",
      description: "Enable/disable evaluating import.meta.webpackContext",
    },
    {
      name: "--no-module-parser-javascript-esm-import-meta-context",
      description:
        "Negative 'module-parser-javascript-esm-import-meta-context' option",
    },
    {
      name: "--no-module-parser-javascript-esm-node",
      description: "Negative 'module-parser-javascript-esm-node' option",
    },
    {
      name: "--module-parser-javascript-esm-node-dirname",
      description: "Include a polyfill for the '__dirname' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-node-dirname",
      description:
        "Negative 'module-parser-javascript-esm-node-dirname' option",
    },
    {
      name: "--module-parser-javascript-esm-node-filename",
      description: "Include a polyfill for the '__filename' variable",
      args: {
        name: "value",
        isOptional: true,

        template: ["filepaths"],
      },
    },
    {
      name: "--no-module-parser-javascript-esm-node-filename",
      description:
        "Negative 'module-parser-javascript-esm-node-filename' option",
    },
    {
      name: "--module-parser-javascript-esm-node-global",
      description: "Include a polyfill for the 'global' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-node-global",
      description: "Negative 'module-parser-javascript-esm-node-global' option",
    },
    {
      name: "--module-parser-javascript-esm-reexport-exports-presence",
      description:
        'Specifies the behavior of invalid export names in "export ... from ...". This might be useful to disable during the migration from "export ... from ..." to "export type ... from ..." when reexporting types in TypeScript',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-module-parser-javascript-esm-reexport-exports-presence",
      description:
        "Negative 'module-parser-javascript-esm-reexport-exports-presence' option",
    },
    {
      name: "--module-parser-javascript-esm-require-context",
      description: "Enable/disable parsing of require.context syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-require-context",
      description:
        "Negative 'module-parser-javascript-esm-require-context' option",
    },
    {
      name: "--module-parser-javascript-esm-require-ensure",
      description: "Enable/disable parsing of require.ensure syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-require-ensure",
      description:
        "Negative 'module-parser-javascript-esm-require-ensure' option",
    },
    {
      name: "--module-parser-javascript-esm-require-include",
      description: "Enable/disable parsing of require.include syntax",
    },
    {
      name: "--no-module-parser-javascript-esm-require-include",
      description:
        "Negative 'module-parser-javascript-esm-require-include' option",
    },
    {
      name: "--module-parser-javascript-esm-require-js",
      description:
        "Enable/disable parsing of require.js special syntax like require.config, requirejs.config, require.version and requirejs.onError",
    },
    {
      name: "--no-module-parser-javascript-esm-require-js",
      description: "Negative 'module-parser-javascript-esm-require-js' option",
    },
    {
      name: "--module-parser-javascript-esm-strict-export-presence",
      description:
        'Deprecated in favor of "exportsPresence". Emit errors instead of warnings when imported names don\'t exist in imported module',
      deprecated: true,
    },
    {
      name: "--no-module-parser-javascript-esm-strict-export-presence",
      description:
        "Negative 'module-parser-javascript-esm-strict-export-presence' option",
    },
    {
      name: "--module-parser-javascript-esm-strict-this-context-on-imports",
      description:
        "Handle the this context correctly according to the spec for namespace objects",
    },
    {
      name: "--no-module-parser-javascript-esm-strict-this-context-on-imports",
      description:
        "Negative 'module-parser-javascript-esm-strict-this-context-on-imports' option",
    },
    {
      name: "--module-parser-javascript-esm-system",
      description:
        "Enable/disable parsing of System.js special syntax like System.import, System.get, System.set and System.register",
    },
    {
      name: "--no-module-parser-javascript-esm-system",
      description: "Negative 'module-parser-javascript-esm-system' option",
    },
    {
      name: "--module-parser-javascript-esm-unknown-context-critical",
      description:
        "Enable warnings when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-esm-unknown-context-critical",
      description:
        "Negative 'module-parser-javascript-esm-unknown-context-critical' option",
    },
    {
      name: "--module-parser-javascript-esm-unknown-context-recursive",
      description:
        "Enable recursive directory lookup when using the require function in a not statically analyse-able way",
    },
    {
      name: "--no-module-parser-javascript-esm-unknown-context-recursive",
      description:
        "Negative 'module-parser-javascript-esm-unknown-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-esm-unknown-context-reg-exp",
      description:
        "Sets the regular expression when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-unknown-context-reg-exp",
      description:
        "Negative 'module-parser-javascript-esm-unknown-context-reg-exp' option",
    },
    {
      name: "--module-parser-javascript-esm-unknown-context-request",
      description:
        "Sets the request when using the require function in a not statically analyse-able way",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-parser-javascript-esm-url",
      description: "Enable/disable parsing of new URL() syntax",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-url",
      description: "Negative 'module-parser-javascript-esm-url' option",
    },
    {
      name: "--module-parser-javascript-esm-worker",
      description:
        "Specify a syntax that should be parsed as WebWorker reference. 'Abc' handles 'new Abc()', 'Abc from xyz' handles 'import { Abc } from \"xyz\"; new Abc()', 'abc()' handles 'abc()', and combinations are also possible. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-module-parser-javascript-esm-worker",
      description: "Negative 'module-parser-javascript-esm-worker' option",
    },
    {
      name: "--module-parser-javascript-esm-worker-reset",
      description:
        "Clear all items provided in 'module.parser.javascript/esm.worker' configuration. Disable or configure parsing of WebWorker syntax like new Worker() or navigator.serviceWorker.register()",
    },
    {
      name: "--module-parser-javascript-esm-wrapped-context-critical",
      description: "Enable warnings for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-esm-wrapped-context-critical",
      description:
        "Negative 'module-parser-javascript-esm-wrapped-context-critical' option",
    },
    {
      name: "--module-parser-javascript-esm-wrapped-context-recursive",
      description:
        "Enable recursive directory lookup for partial dynamic dependencies",
    },
    {
      name: "--no-module-parser-javascript-esm-wrapped-context-recursive",
      description:
        "Negative 'module-parser-javascript-esm-wrapped-context-recursive' option",
    },
    {
      name: "--module-parser-javascript-esm-wrapped-context-reg-exp",
      description:
        "Set the inner regular expression for partial dynamic dependencies",
      args: {
        name: "value",
      },
    },
    {
      name: "--module-rules-compiler",
      description: "Match the child compiler name",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-compiler-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-dependency",
      description: "Match dependency type",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-dependency-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-enforce",
      description: "Enforce this rule as pre or post step",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-exclude",
      description: "Shortcut for resource.exclude",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-exclude-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-include",
      description: "Shortcut for resource.include",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-include-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-issuer",
      description:
        "Match the issuer of the module (The module pointing to this module)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-issuer-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-issuer-layer",
      description:
        "Match layer of the issuer of this module (The module pointing to this module)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-issuer-layer-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-layer",
      description:
        "Specifies the layer in which the module should be placed in",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-loader",
      description: "A loader request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-mimetype",
      description: "Match module mimetype when load from Data URI",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-mimetype-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-real-resource",
      description: "Match the real resource path of the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-real-resource-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource",
      description: "Match the resource path of the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-fragment",
      description: "Match the resource fragment of the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-fragment-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-query",
      description: "Match the resource query of the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-resource-query-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-scheme",
      description: "Match module scheme",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-scheme-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-side-effects",
      description: "Flags a module as with or without side effects",
    },
    {
      name: "--no-module-rules-side-effects",
      description: "Negative 'module-rules-side-effects' option",
    },
    {
      name: "--module-rules-test",
      description: "Shortcut for resource.test",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-test-not",
      description: "Logical NOT",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-type",
      description: "Module type to use for the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-use-ident",
      description: "Unique loader options identifier",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-use-loader",
      description: "A loader request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-use-options",
      description: "Options passed to a loader",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-use",
      description: "A loader request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--module-rules-reset",
      description:
        "Clear all items provided in 'module.rules' configuration. A list of rules",
    },
    {
      name: "--module-strict-export-presence",
      description:
        "Emit errors instead of warnings when imported names don't exist in imported module. Deprecated: This option has moved to 'module.parser.javascript.strictExportPresence'",
      deprecated: true,
    },
    {
      name: "--no-module-strict-export-presence",
      description: "Negative 'module-strict-export-presence' option",
    },
    {
      name: "--module-strict-this-context-on-imports",
      description:
        "Handle the this context correctly according to the spec for namespace objects. Deprecated: This option has moved to 'module.parser.javascript.strictThisContextOnImports'",
      deprecated: true,
    },
    {
      name: "--no-module-strict-this-context-on-imports",
      description: "Negative 'module-strict-this-context-on-imports' option",
    },
    {
      name: "--module-unknown-context-critical",
      description:
        "Enable warnings when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextCritical'",
      deprecated: true,
    },
    {
      name: "--no-module-unknown-context-critical",
      description: "Negative 'module-unknown-context-critical' option",
    },
    {
      name: "--module-unknown-context-recursive",
      description:
        "Enable recursive directory lookup when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRecursive'",
      deprecated: true,
    },
    {
      name: "--no-module-unknown-context-recursive",
      description: "Negative 'module-unknown-context-recursive' option",
    },
    {
      name: "--module-unknown-context-reg-exp",
      description:
        "Sets the regular expression when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRegExp'",
      args: {
        name: "value",
        isOptional: true,
      },
      deprecated: true,
    },
    {
      name: "--no-module-unknown-context-reg-exp",
      description: "Negative 'module-unknown-context-reg-exp' option",
    },
    {
      name: "--module-unknown-context-request",
      description:
        "Sets the request when using the require function in a not statically analyse-able way. Deprecated: This option has moved to 'module.parser.javascript.unknownContextRequest'",
      args: {
        name: "value",
      },
      deprecated: true,
    },
    {
      name: "--module-unsafe-cache",
      description: "Cache the resolving of module requests",
    },
    {
      name: "--no-module-unsafe-cache",
      description: "Negative 'module-unsafe-cache' option",
    },
    {
      name: "--module-wrapped-context-critical",
      description:
        "Enable warnings for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextCritical'",
      deprecated: true,
    },
    {
      name: "--no-module-wrapped-context-critical",
      description: "Negative 'module-wrapped-context-critical' option",
    },
    {
      name: "--module-wrapped-context-recursive",
      description:
        "Enable recursive directory lookup for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRecursive'",
      deprecated: true,
    },
    {
      name: "--no-module-wrapped-context-recursive",
      description: "Negative 'module-wrapped-context-recursive' option",
    },
    {
      name: "--module-wrapped-context-reg-exp",
      description:
        "Set the inner regular expression for partial dynamic dependencies. Deprecated: This option has moved to 'module.parser.javascript.wrappedContextRegExp'",
      args: {
        name: "value",
      },
      deprecated: true,
    },
    {
      name: "--name",
      description:
        "Name of the configuration. Used when loading multiple configurations",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-node",
      description: "Negative 'node' option",
    },
    {
      name: "--node-dirname",
      description: "Include a polyfill for the '__dirname' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-node-dirname",
      description: "Negative 'node-dirname' option",
    },
    {
      name: "--node-filename",
      description: "Include a polyfill for the '__filename' variable",
      args: {
        name: "value",
        isOptional: true,

        template: ["filepaths"],
      },
    },
    {
      name: "--no-node-filename",
      description: "Negative 'node-filename' option",
    },
    {
      name: "--node-global",
      description: "Include a polyfill for the 'global' variable",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-node-global",
      description: "Negative 'node-global' option",
    },
    {
      name: "--optimization-check-wasm-types",
      description:
        "Check for incompatible wasm types when importing/exporting from/to ESM",
    },
    {
      name: "--no-optimization-check-wasm-types",
      description: "Negative 'optimization-check-wasm-types' option",
    },
    {
      name: "--optimization-chunk-ids",
      description:
        "Define the algorithm to choose chunk ids (named: readable ids for better debugging, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, total-size: numeric ids focused on minimal total download size, false: no algorithm used, as custom one can be provided via plugin)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-optimization-chunk-ids",
      description: "Negative 'optimization-chunk-ids' option",
    },
    {
      name: "--optimization-concatenate-modules",
      description:
        "Concatenate modules when possible to generate less modules, more efficient code and enable more optimizations by the minimizer",
    },
    {
      name: "--no-optimization-concatenate-modules",
      description: "Negative 'optimization-concatenate-modules' option",
    },
    {
      name: "--optimization-emit-on-errors",
      description:
        "Emit assets even when errors occur. Critical errors are emitted into the generated code and will cause errors at runtime",
    },
    {
      name: "--no-optimization-emit-on-errors",
      description: "Negative 'optimization-emit-on-errors' option",
    },
    {
      name: "--optimization-flag-included-chunks",
      description:
        "Also flag chunks as loaded which contain a subset of the modules",
    },
    {
      name: "--no-optimization-flag-included-chunks",
      description: "Negative 'optimization-flag-included-chunks' option",
    },
    {
      name: "--optimization-inner-graph",
      description:
        "Creates a module-internal dependency graph for top level symbols, exports and imports, to improve unused exports detection",
    },
    {
      name: "--no-optimization-inner-graph",
      description: "Negative 'optimization-inner-graph' option",
    },
    {
      name: "--optimization-mangle-exports",
      description:
        'Rename exports when possible to generate shorter code (depends on optimization.usedExports and optimization.providedExports, true/"deterministic": generate short deterministic names optimized for caching, "size": generate the shortest possible names)',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-mangle-exports",
      description: "Negative 'optimization-mangle-exports' option",
    },
    {
      name: "--optimization-mangle-wasm-imports",
      description: "Reduce size of WASM by changing imports to shorter strings",
    },
    {
      name: "--no-optimization-mangle-wasm-imports",
      description: "Negative 'optimization-mangle-wasm-imports' option",
    },
    {
      name: "--optimization-merge-duplicate-chunks",
      description: "Merge chunks which contain the same modules",
    },
    {
      name: "--no-optimization-merge-duplicate-chunks",
      description: "Negative 'optimization-merge-duplicate-chunks' option",
    },
    {
      name: "--optimization-minimize",
      description: "Enable minimizing the output. Uses optimization.minimizer",
    },
    {
      name: "--no-optimization-minimize",
      description: "Negative 'optimization-minimize' option",
    },
    {
      name: "--optimization-module-ids",
      description:
        "Define the algorithm to choose module ids (natural: numeric ids in order of usage, named: readable ids for better debugging, hashed: (deprecated) short hashes as ids for better long term caching, deterministic: numeric hash ids for better long term caching, size: numeric ids focused on minimal initial download size, false: no algorithm used, as custom one can be provided via plugin)",
      args: {
        name: "value",
      },
      deprecated: true,
    },
    {
      name: "--no-optimization-module-ids",
      description: "Negative 'optimization-module-ids' option",
    },
    {
      name: "--optimization-node-env",
      description: "Set process.env.NODE_ENV to a specific value",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-optimization-node-env",
      description: "Negative 'optimization-node-env' option",
    },
    {
      name: "--optimization-portable-records",
      description:
        "Generate records with relative paths to be able to move the context folder",
    },
    {
      name: "--no-optimization-portable-records",
      description: "Negative 'optimization-portable-records' option",
    },
    {
      name: "--optimization-provided-exports",
      description:
        "Figure out which exports are provided by modules to generate more efficient code",
    },
    {
      name: "--no-optimization-provided-exports",
      description: "Negative 'optimization-provided-exports' option",
    },
    {
      name: "--optimization-real-content-hash",
      description:
        "Use real [contenthash] based on final content of the assets",
    },
    {
      name: "--no-optimization-real-content-hash",
      description: "Negative 'optimization-real-content-hash' option",
    },
    {
      name: "--optimization-remove-available-modules",
      description:
        "Removes modules from chunks when these modules are already included in all parents",
    },
    {
      name: "--no-optimization-remove-available-modules",
      description: "Negative 'optimization-remove-available-modules' option",
    },
    {
      name: "--optimization-remove-empty-chunks",
      description: "Remove chunks which are empty",
    },
    {
      name: "--no-optimization-remove-empty-chunks",
      description: "Negative 'optimization-remove-empty-chunks' option",
    },
    {
      name: "--optimization-runtime-chunk",
      description:
        "Create an additional chunk which contains only the webpack runtime and chunk hash maps",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-runtime-chunk",
      description: "Negative 'optimization-runtime-chunk' option",
    },
    {
      name: "--optimization-runtime-chunk-name",
      description: "The name or name factory for the runtime chunks",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-side-effects",
      description:
        "Skip over modules which contain no side effects when exports are not used (false: disabled, 'flag': only use manually placed side effects flag, true: also analyse source code for side effects)",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-side-effects",
      description: "Negative 'optimization-side-effects' option",
    },
    {
      name: "--no-optimization-split-chunks",
      description: "Negative 'optimization-split-chunks' option",
    },
    {
      name: "--optimization-split-chunks-automatic-name-delimiter",
      description: "Sets the name delimiter for created chunks",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-chunks",
      description:
        'Select chunks for determining shared modules (defaults to "async", "initial" and "all" requires adding these chunks to the HTML)',
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-default-size-types",
      description: "Size type, like 'javascript', 'webassembly'",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--optimization-split-chunks-default-size-types-reset",
      description:
        "Clear all items provided in 'optimization.splitChunks.defaultSizeTypes' configuration. Sets the size types which are used when a number is used for sizes",
    },
    {
      name: "--optimization-split-chunks-enforce-size-threshold",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "",
      description: "Sets the name delimiter for created chunks",
    },
    {
      name: "--optimization-split-chunks-fallback-cache-group-chunks",
      description:
        'Select chunks for determining shared modules (defaults to "async", "initial" and "all" requires adding these chunks to the HTML)',
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-fallback-cache-group-max-async-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-fallback-cache-group-max-initial-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-fallback-cache-group-max-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-fallback-cache-group-min-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-fallback-cache-group-min-size-reduction",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-filename",
      description: "Sets the template for the filename for created chunks",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--optimization-split-chunks-hide-path-info",
      description:
        "Prevents exposing path info when creating names for parts splitted by maxSize",
    },
    {
      name: "--no-optimization-split-chunks-hide-path-info",
      description: "Negative 'optimization-split-chunks-hide-path-info' option",
    },
    {
      name: "--optimization-split-chunks-max-async-requests",
      description:
        "Maximum number of requests which are accepted for on-demand loading",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-max-async-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-max-initial-requests",
      description:
        "Maximum number of initial chunks which are accepted for an entry point",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-max-initial-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-max-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-min-chunks",
      description:
        "Minimum number of times a module has to be duplicated until it's considered for splitting",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-min-remaining-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-min-size",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-min-size-reduction",
      description: "Size of the javascript part of the chunk",
      args: {
        name: "value",
      },
    },
    {
      name: "--optimization-split-chunks-name",
      description:
        "Give chunks created a name (chunks with equal name are merged)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-optimization-split-chunks-name",
      description: "Negative 'optimization-split-chunks-name' option",
    },
    {
      name: "--optimization-split-chunks-used-exports",
      description:
        "Compare used exports when checking common modules. Modules will only be put in the same chunk when exports are equal",
    },
    {
      name: "--no-optimization-split-chunks-used-exports",
      description: "Negative 'optimization-split-chunks-used-exports' option",
    },
    {
      name: "--optimization-used-exports",
      description:
        'Figure out which exports are used by modules to mangle export names, omit unused exports and generate more efficient code (true: analyse used exports for each runtime, "global": analyse exports globally for all runtimes combined)',
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-optimization-used-exports",
      description: "Negative 'optimization-used-exports' option",
    },
    {
      name: "--output-asset-module-filename",
      description:
        "The filename of asset modules as relative path inside the 'output.path' directory",
      args: {
        name: "value",

        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--output-async-chunks",
      description:
        "Enable/disable creating async chunks that are loaded on demand",
    },
    {
      name: "--no-output-async-chunks",
      description: "Negative 'output-async-chunks' option",
    },
    {
      name: "--output-charset",
      description: "Add charset attribute for script tag",
    },
    {
      name: "--no-output-charset",
      description: "Negative 'output-charset' option",
    },
    {
      name: "--output-chunk-filename",
      description:
        "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--output-chunk-format",
      description:
        "The format of chunks (formats included by default are 'array-push' (web/WebWorker), 'commonjs' (node.js), 'module' (ESM), but others might be added by plugins)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-chunk-format",
      description: "Negative 'output-chunk-format' option",
    },
    {
      name: "--output-chunk-load-timeout",
      description: "Number of milliseconds before chunk request expires",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-chunk-loading",
      description:
        "The method of loading chunks (methods included by default are 'jsonp' (web), 'import' (ESM), 'importScripts' (WebWorker), 'require' (sync node.js), 'async-node' (async node.js), but others might be added by plugins)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-chunk-loading",
      description: "Negative 'output-chunk-loading' option",
    },
    {
      name: "--output-chunk-loading-global",
      description: "The global variable used by webpack for loading of chunks",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-clean",
      description: "Clean the output directory before emit",
    },
    {
      name: "--no-output-clean",
      description: "Negative 'output-clean' option",
    },
    {
      name: "--output-clean-dry",
      description:
        "Log the assets that should be removed instead of deleting them",
    },
    {
      name: "--no-output-clean-dry",
      description: "Negative 'output-clean-dry' option",
    },
    {
      name: "--output-clean-keep",
      description: "Keep these assets",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-compare-before-emit",
      description:
        "Check if to be emitted file already exists and have the same content before writing to output filesystem",
    },
    {
      name: "--no-output-compare-before-emit",
      description: "Negative 'output-compare-before-emit' option",
    },
    {
      name: "--output-cross-origin-loading",
      description: "This option enables cross-origin loading of chunks",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-cross-origin-loading",
      description: "Negative 'output-cross-origin-loading' option",
    },
    {
      name: "--output-css-chunk-filename",
      description:
        "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--output-css-filename",
      description:
        "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--output-devtool-fallback-module-filename-template",
      description:
        "Similar to `output.devtoolModuleFilenameTemplate`, but used in the case of duplicate module identifiers",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-devtool-module-filename-template",
      description:
        "Filename template string of function for the sources array in a generated SourceMap",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--output-devtool-namespace",
      description:
        "Module namespace to use when interpolating filename template string for the sources array in a generated SourceMap. Defaults to `output.library` if not set. It's useful for avoiding runtime collisions in sourcemaps from multiple webpack projects built as libraries",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--output-enabled-chunk-loading-types",
      description:
        "The method of loading chunks (methods included by default are 'jsonp' (web), 'import' (ESM), 'importScripts' (WebWorker), 'require' (sync node.js), 'async-node' (async node.js), but others might be added by plugins)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-enabled-chunk-loading-types-reset",
      description:
        "Clear all items provided in 'output.enabledChunkLoadingTypes' configuration. List of chunk loading types enabled for use by entry points",
    },
    {
      name: "--output-enabled-library-types",
      description:
        "Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-enabled-library-types-reset",
      description:
        "Clear all items provided in 'output.enabledLibraryTypes' configuration. List of library types enabled for use by entry points",
    },
    {
      name: "--output-enabled-wasm-loading-types",
      description:
        "The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-enabled-wasm-loading-types-reset",
      description:
        "Clear all items provided in 'output.enabledWasmLoadingTypes' configuration. List of wasm loading types enabled for use by entry points",
    },
    {
      name: "--output-environment-arrow-function",
      description: "The environment supports arrow functions ('() => { ... }')",
    },
    {
      name: "--no-output-environment-arrow-function",
      description: "Negative 'output-environment-arrow-function' option",
    },
    {
      name: "--output-environment-big-int-literal",
      description: "The environment supports BigInt as literal (123n)",
    },
    {
      name: "--no-output-environment-big-int-literal",
      description: "Negative 'output-environment-big-int-literal' option",
    },
    {
      name: "--output-environment-const",
      description:
        "The environment supports const and let for variable declarations",
    },
    {
      name: "--no-output-environment-const",
      description: "Negative 'output-environment-const' option",
    },
    {
      name: "--output-environment-destructuring",
      description: "The environment supports destructuring ('{ a, b } = obj')",
    },
    {
      name: "--no-output-environment-destructuring",
      description: "Negative 'output-environment-destructuring' option",
    },
    {
      name: "--output-environment-dynamic-import",
      description:
        "The environment supports an async import() function to import EcmaScript modules",
    },
    {
      name: "--no-output-environment-dynamic-import",
      description: "Negative 'output-environment-dynamic-import' option",
    },
    {
      name: "--output-environment-for-of",
      description:
        "The environment supports 'for of' iteration ('for (const x of array) { ... }')",
    },
    {
      name: "--no-output-environment-for-of",
      description: "Negative 'output-environment-for-of' option",
    },
    {
      name: "--output-environment-module",
      description:
        "The environment supports EcmaScript Module syntax to import EcmaScript modules (import ... from '...')",
    },
    {
      name: "--no-output-environment-module",
      description: "Negative 'output-environment-module' option",
    },
    {
      name: "--output-environment-optional-chaining",
      description:
        "The environment supports optional chaining ('obj?.a' or 'obj?.()')",
    },
    {
      name: "--no-output-environment-optional-chaining",
      description: "Negative 'output-environment-optional-chaining' option",
    },
    {
      name: "--output-environment-template-literal",
      description: "The environment supports template literals",
    },
    {
      name: "--no-output-environment-template-literal",
      description: "Negative 'output-environment-template-literal' option",
    },
    {
      name: "--output-filename",
      description:
        "Specifies the filename template of output files on disk. You must **not** specify an absolute path here, but the path may contain folders separated by '/'! The specified path is joined with the value of the 'output.path' option to determine the location on disk",
      args: {
        name: "value",

        template: ["filepaths"],
      },
    },
    {
      name: "--output-global-object",
      description:
        "An expression which is used to address the global object/scope in runtime code",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-hash-digest",
      description: "Digest type used for the hash",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-hash-digest-length",
      description: "Number of chars which are used for the hash",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-hash-function",
      description:
        "Algorithm used for generation the hash (see node.js crypto package)",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-hash-salt",
      description: "Any string which is added to the hash to salt it",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-hot-update-chunk-filename",
      description:
        "The filename of the Hot Update Chunks. They are inside the output.path directory",
      args: {
        name: "value",

        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--output-hot-update-global",
      description:
        "The global variable used by webpack for loading of hot update chunks",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-hot-update-main-filename",
      description:
        "The filename of the Hot Update Main File. It is inside the 'output.path' directory",
      args: {
        name: "value",

        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--output-iife",
      description:
        "Wrap javascript code into IIFE's to avoid leaking into global scope",
    },
    {
      name: "--no-output-iife",
      description: "Negative 'output-iife' option",
    },
    {
      name: "--output-import-function-name",
      description:
        "The name of the native import() function (can be exchanged for a polyfill)",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-import-meta-name",
      description:
        "The name of the native import.meta object (can be exchanged for a polyfill)",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library",
      description: "A part of the library name",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-library-reset",
      description:
        "Clear all items provided in 'output.library' configuration. The name of the library (some types allow unnamed libraries too)",
    },
    {
      name: "--output-library-amd",
      description: "Name of the exposed AMD library in the UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-commonjs",
      description: "Name of the exposed commonjs export in the UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-root",
      description:
        "Part of the name of the property exposed globally by a UMD library",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-library-root-reset",
      description:
        "Clear all items provided in 'output.library.root' configuration. Name of the property exposed globally by a UMD library",
    },
    {
      name: "--output-library-auxiliary-comment",
      description: "Append the same comment above each import style",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-auxiliary-comment-amd",
      description: "Set comment for `amd` section in UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-auxiliary-comment-commonjs",
      description: "Set comment for `commonjs` (exports) section in UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-auxiliary-comment-commonjs2",
      description:
        "Set comment for `commonjs2` (module.exports) section in UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-auxiliary-comment-root",
      description: "Set comment for `root` (global variable) section in UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-export",
      description: "Part of the export that should be exposed as library",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-library-export-reset",
      description:
        "Clear all items provided in 'output.library.export' configuration. Specify which export should be exposed as library",
    },
    {
      name: "--output-library-name",
      description: "A part of the library name",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-library-name-reset",
      description:
        "Clear all items provided in 'output.library.name' configuration. The name of the library (some types allow unnamed libraries too)",
    },
    {
      name: "--output-library-name-amd",
      description: "Name of the exposed AMD library in the UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-name-commonjs",
      description: "Name of the exposed commonjs export in the UMD",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-name-root",
      description:
        "Part of the name of the property exposed globally by a UMD library",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--output-library-name-root-reset",
      description:
        "Clear all items provided in 'output.library.name.root' configuration. Name of the property exposed globally by a UMD library",
    },
    {
      name: "--output-library-type",
      description:
        "Type of library (types included by default are 'var', 'module', 'assign', 'assign-properties', 'this', 'window', 'self', 'global', 'commonjs', 'commonjs2', 'commonjs-module', 'commonjs-static', 'amd', 'amd-require', 'umd', 'umd2', 'jsonp', 'system', but others might be added by plugins)",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-library-umd-named-define",
      description:
        "If `output.libraryTarget` is set to umd and `output.library` is set, setting this to true will name the AMD module",
    },
    {
      name: "--no-output-library-umd-named-define",
      description: "Negative 'output-library-umd-named-define' option",
    },
    {
      name: "--output-module",
      description: "Output javascript files as module source type",
    },
    {
      name: "--no-output-module",
      description: "Negative 'output-module' option",
    },
    {
      name: ["--output-path", "-o"],
      description:
        "Output location of the file generated by webpack e.g. ./dist/",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-pathinfo",
      description: "Include comments with information about the modules",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-output-pathinfo",
      description: "Negative 'output-pathinfo' option",
    },
    {
      name: "--output-public-path",
      description:
        "The 'publicPath' specifies the public URL address of the output files when referenced in a browser",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-script-type",
      description:
        'This option enables loading async chunks via a custom script type, such as script type="module"',
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-script-type",
      description: "Negative 'output-script-type' option",
    },
    {
      name: "--output-source-map-filename",
      description:
        "The filename of the SourceMaps for the JavaScript files. They are inside the 'output.path' directory",
      args: {
        name: "value",

        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--output-source-prefix",
      description:
        "Prefixes every line of the source in the bundle with this string",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-strict-module-error-handling",
      description:
        "Handles error in module loading correctly at a performance cost. This will handle module error compatible with the EcmaScript Modules spec",
    },
    {
      name: "--no-output-strict-module-error-handling",
      description: "Negative 'output-strict-module-error-handling' option",
    },
    {
      name: "--output-strict-module-exception-handling",
      description:
        "Handles exceptions in module loading correctly at a performance cost (Deprecated). This will handle module error compatible with the Node.js CommonJS way",
      deprecated: true,
    },
    {
      name: "--no-output-strict-module-exception-handling",
      description: "Negative 'output-strict-module-exception-handling' option",
    },
    {
      name: "--output-trusted-types",
      description:
        "Use a Trusted Types policy to create urls for chunks. 'output.uniqueName' is used a default policy name. Passing a string sets a custom policy name. The name of the Trusted Types policy created by webpack to serve bundle chunks",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--output-trusted-types-policy-name",
      description:
        "The name of the Trusted Types policy created by webpack to serve bundle chunks",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-unique-name",
      description:
        "A unique name of the webpack build to avoid multiple webpack runtimes to conflict when using globals",
      args: {
        name: "value",
      },
    },
    {
      name: "--output-wasm-loading",
      description:
        "The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-wasm-loading",
      description: "Negative 'output-wasm-loading' option",
    },
    {
      name: "--output-webassembly-module-filename",
      description:
        "The filename of WebAssembly modules as relative path inside the 'output.path' directory",
      args: {
        name: "value",

        template: ["filepaths", "folders"],
      },
    },
    {
      name: "--output-worker-chunk-loading",
      description:
        "The method of loading chunks (methods included by default are 'jsonp' (web), 'import' (ESM), 'importScripts' (WebWorker), 'require' (sync node.js), 'async-node' (async node.js), but others might be added by plugins)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-worker-chunk-loading",
      description: "Negative 'output-worker-chunk-loading' option",
    },
    {
      name: "--output-worker-wasm-loading",
      description:
        "The method of loading WebAssembly Modules (methods included by default are 'fetch' (web/WebWorker), 'async-node' (node.js), but others might be added by plugins)",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-output-worker-wasm-loading",
      description: "Negative 'output-worker-wasm-loading' option",
    },
    {
      name: "--parallelism",
      description:
        "The number of parallel processed modules in the compilation",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-performance",
      description: "Negative 'performance' option",
    },
    {
      name: "--performance-hints",
      description:
        "Sets the format of the hints: warnings, errors or nothing at all",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-performance-hints",
      description: "Negative 'performance-hints' option",
    },
    {
      name: "--performance-max-asset-size",
      description:
        "File size limit (in bytes) when exceeded, that webpack will provide performance hints",
      args: {
        name: "value",
      },
    },
    {
      name: "--performance-max-entrypoint-size",
      description: "Total size of an entry point (in bytes)",
      args: {
        name: "value",
      },
    },
    {
      name: "--profile",
      description: "Capture timing information for each module",
    },
    {
      name: "--no-profile",
      description: "Negative 'profile' option",
    },
    {
      name: "--records-input-path",
      description: "Store compiler state to a json file",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-records-input-path",
      description: "Negative 'records-input-path' option",
    },
    {
      name: "--records-output-path",
      description: "Load compiler state from a json file",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-records-output-path",
      description: "Negative 'records-output-path' option",
    },
    {
      name: "--records-path",
      description:
        "Store/Load compiler state from/to a json file. This will result in persistent ids of modules and chunks. An absolute path is expected. `recordsPath` is used for `recordsInputPath` and `recordsOutputPath` if they left undefined",
      args: {
        name: "value",
      },
    },
    {
      name: "--no-records-path",
      description: "Negative 'records-path' option",
    },
    {
      name: "--resolve-alias-alias",
      description: "Ignore request (replace with empty module). New request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--no-resolve-alias-alias",
      description: "Negative 'resolve-alias-alias' option",
    },
    {
      name: "--resolve-alias-name",
      description: "Request to be redirected",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-alias-only-module",
      description: "Redirect only exact matching request",
    },
    {
      name: "--no-resolve-alias-only-module",
      description: "Negative 'resolve-alias-only-module' option",
    },
    {
      name: "--resolve-alias-reset",
      description:
        "Clear all items provided in 'resolve.alias' configuration. Redirect module requests",
    },
    {
      name: "--resolve-alias-fields",
      description:
        "Field in the description file (usually package.json) which are used to redirect requests inside the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-alias-fields-reset",
      description:
        "Clear all items provided in 'resolve.aliasFields' configuration. Fields in the description file (usually package.json) which are used to redirect requests inside the module",
    },
    {
      name: "--resolve-cache",
      description:
        "Enable caching of successfully resolved requests (cache entries are revalidated)",
    },
    {
      name: "--no-resolve-cache",
      description: "Negative 'resolve-cache' option",
    },
    {
      name: "--resolve-cache-with-context",
      description:
        "Include the context information in the cache identifier when caching",
    },
    {
      name: "--no-resolve-cache-with-context",
      description: "Negative 'resolve-cache-with-context' option",
    },
    {
      name: "--resolve-condition-names",
      description: "Condition names for exports field entry point",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-condition-names-reset",
      description:
        "Clear all items provided in 'resolve.conditionNames' configuration. Condition names for exports field entry point",
    },
    {
      name: "--resolve-description-files",
      description:
        "Filename used to find a description file (like a package.json)",
      args: {
        name: "value",

        isVariadic: true,
        template: ["filepaths"],
      },
    },
    {
      name: "--resolve-description-files-reset",
      description:
        "Clear all items provided in 'resolve.descriptionFiles' configuration. Filenames used to find a description file (like a package.json)",
    },
    {
      name: "--resolve-enforce-extension",
      description:
        "Enforce the resolver to use one of the extensions from the extensions option (User must specify requests without extension)",
    },
    {
      name: "--no-resolve-enforce-extension",
      description: "Negative 'resolve-enforce-extension' option",
    },
    {
      name: "--resolve-exports-fields",
      description:
        "Field name from the description file (usually package.json) which is used to provide entry points of a package",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-exports-fields-reset",
      description:
        "Clear all items provided in 'resolve.exportsFields' configuration. Field names from the description file (usually package.json) which are used to provide entry points of a package",
    },
    {
      name: "--resolve-extensions",
      description:
        "Extension added to the request when trying to find the file",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-extensions-reset",
      description:
        "Clear all items provided in 'resolve.extensions' configuration. Extensions added to the request when trying to find the file",
    },
    {
      name: "--resolve-fallback-alias",
      description: "Ignore request (replace with empty module). New request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--no-resolve-fallback-alias",
      description: "Negative 'resolve-fallback-alias' option",
    },
    {
      name: "--resolve-fallback-name",
      description: "Request to be redirected",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-fallback-only-module",
      description: "Redirect only exact matching request",
    },
    {
      name: "--no-resolve-fallback-only-module",
      description: "Negative 'resolve-fallback-only-module' option",
    },
    {
      name: "--resolve-fallback-reset",
      description:
        "Clear all items provided in 'resolve.fallback' configuration. Redirect module requests",
    },
    {
      name: "--resolve-fully-specified",
      description:
        "Treats the request specified by the user as fully specified, meaning no extensions are added and the mainFiles in directories are not resolved (This doesn't affect requests from mainFields, aliasFields or aliases)",
    },
    {
      name: "--no-resolve-fully-specified",
      description: "Negative 'resolve-fully-specified' option",
    },
    {
      name: "--resolve-imports-fields",
      description:
        "Field name from the description file (usually package.json) which is used to provide internal request of a package (requests starting with # are considered as internal)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-imports-fields-reset",
      description:
        "Clear all items provided in 'resolve.importsFields' configuration. Field names from the description file (usually package.json) which are used to provide internal request of a package (requests starting with # are considered as internal)",
    },
    {
      name: "--resolve-main-fields",
      description:
        "Field name from the description file (package.json) which are used to find the default entry point",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-main-fields-reset",
      description:
        "Clear all items provided in 'resolve.mainFields' configuration. Field names from the description file (package.json) which are used to find the default entry point",
    },
    {
      name: "--resolve-main-files",
      description:
        "Filename used to find the default entry point if there is no description file or main field",
      args: {
        name: "value",

        isVariadic: true,
        template: ["filepaths"],
      },
    },
    {
      name: "--resolve-main-files-reset",
      description:
        "Clear all items provided in 'resolve.mainFiles' configuration. Filenames used to find the default entry point if there is no description file or main field",
    },
    {
      name: "--resolve-modules",
      description: "Folder name or directory path where to find modules",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--resolve-modules-reset",
      description:
        "Clear all items provided in 'resolve.modules' configuration. Folder names or directory paths where to find modules",
    },
    {
      name: "--resolve-prefer-absolute",
      description:
        "Prefer to resolve server-relative URLs (starting with '/') as absolute paths before falling back to resolve in 'resolve.roots'",
    },
    {
      name: "--no-resolve-prefer-absolute",
      description: "Negative 'resolve-prefer-absolute' option",
    },
    {
      name: "--resolve-prefer-relative",
      description:
        "Prefer to resolve module requests as relative request and fallback to resolving as module",
    },
    {
      name: "--no-resolve-prefer-relative",
      description: "Negative 'resolve-prefer-relative' option",
    },
    {
      name: "--resolve-restrictions",
      description:
        "Resolve restriction. Resolve result must fulfill this restriction",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-restrictions-reset",
      description:
        "Clear all items provided in 'resolve.restrictions' configuration. A list of resolve restrictions. Resolve results must fulfill all of these restrictions to resolve successfully. Other resolve paths are taken when restrictions are not met",
    },
    {
      name: "--resolve-roots",
      description:
        "Directory in which requests that are server-relative URLs (starting with '/') are resolved",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--resolve-roots-reset",
      description:
        "Clear all items provided in 'resolve.roots' configuration. A list of directories in which requests that are server-relative URLs (starting with '/') are resolved",
    },
    {
      name: "--resolve-symlinks",
      description: "Enable resolving symlinks to the original location",
    },
    {
      name: "--no-resolve-symlinks",
      description: "Negative 'resolve-symlinks' option",
    },
    {
      name: "--resolve-unsafe-cache",
      description:
        "Enable caching of successfully resolved requests (cache entries are not revalidated)",
    },
    {
      name: "--no-resolve-unsafe-cache",
      description: "Negative 'resolve-unsafe-cache' option",
    },
    {
      name: "--resolve-use-sync-file-system-calls",
      description: "Use synchronous filesystem calls for the resolver",
    },
    {
      name: "--no-resolve-use-sync-file-system-calls",
      description: "Negative 'resolve-use-sync-file-system-calls' option",
    },
    {
      name: "--resolve-loader-alias-alias",
      description: "Ignore request (replace with empty module). New request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--no-resolve-loader-alias-alias",
      description: "Negative 'resolve-loader-alias-alias' option",
    },
    {
      name: "--resolve-loader-alias-name",
      description: "Request to be redirected",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-alias-only-module",
      description: "Redirect only exact matching request",
    },
    {
      name: "--no-resolve-loader-alias-only-module",
      description: "Negative 'resolve-loader-alias-only-module' option",
    },
    {
      name: "--resolve-loader-alias-reset",
      description:
        "Clear all items provided in 'resolveLoader.alias' configuration. Redirect module requests",
    },
    {
      name: "--resolve-loader-alias-fields",
      description:
        "Field in the description file (usually package.json) which are used to redirect requests inside the module",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-alias-fields-reset",
      description:
        "Clear all items provided in 'resolveLoader.aliasFields' configuration. Fields in the description file (usually package.json) which are used to redirect requests inside the module",
    },
    {
      name: "--resolve-loader-cache",
      description:
        "Enable caching of successfully resolved requests (cache entries are revalidated)",
    },
    {
      name: "--no-resolve-loader-cache",
      description: "Negative 'resolve-loader-cache' option",
    },
    {
      name: "--resolve-loader-cache-with-context",
      description:
        "Include the context information in the cache identifier when caching",
    },
    {
      name: "--no-resolve-loader-cache-with-context",
      description: "Negative 'resolve-loader-cache-with-context' option",
    },
    {
      name: "--resolve-loader-condition-names",
      description: "Condition names for exports field entry point",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-condition-names-reset",
      description:
        "Clear all items provided in 'resolveLoader.conditionNames' configuration. Condition names for exports field entry point",
    },
    {
      name: "--resolve-loader-description-files",
      description:
        "Filename used to find a description file (like a package.json)",
      args: {
        name: "value",

        isVariadic: true,
        template: ["filepaths"],
      },
    },
    {
      name: "--resolve-loader-description-files-reset",
      description:
        "Clear all items provided in 'resolveLoader.descriptionFiles' configuration. Filenames used to find a description file (like a package.json)",
    },
    {
      name: "--resolve-loader-enforce-extension",
      description:
        "Enforce the resolver to use one of the extensions from the extensions option (User must specify requests without extension)",
    },
    {
      name: "--no-resolve-loader-enforce-extension",
      description: "Negative 'resolve-loader-enforce-extension' option",
    },
    {
      name: "--resolve-loader-exports-fields",
      description:
        "Field name from the description file (usually package.json) which is used to provide entry points of a package",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-exports-fields-reset",
      description:
        "Clear all items provided in 'resolveLoader.exportsFields' configuration. Field names from the description file (usually package.json) which are used to provide entry points of a package",
    },
    {
      name: "--resolve-loader-extensions",
      description:
        "Extension added to the request when trying to find the file",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-extensions-reset",
      description:
        "Clear all items provided in 'resolveLoader.extensions' configuration. Extensions added to the request when trying to find the file",
    },
    {
      name: "--resolve-loader-fallback-alias",
      description: "Ignore request (replace with empty module). New request",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--no-resolve-loader-fallback-alias",
      description: "Negative 'resolve-loader-fallback-alias' option",
    },
    {
      name: "--resolve-loader-fallback-name",
      description: "Request to be redirected",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-fallback-only-module",
      description: "Redirect only exact matching request",
    },
    {
      name: "--no-resolve-loader-fallback-only-module",
      description: "Negative 'resolve-loader-fallback-only-module' option",
    },
    {
      name: "--resolve-loader-fallback-reset",
      description:
        "Clear all items provided in 'resolveLoader.fallback' configuration. Redirect module requests",
    },
    {
      name: "--resolve-loader-fully-specified",
      description:
        "Treats the request specified by the user as fully specified, meaning no extensions are added and the mainFiles in directories are not resolved (This doesn't affect requests from mainFields, aliasFields or aliases)",
    },
    {
      name: "--no-resolve-loader-fully-specified",
      description: "Negative 'resolve-loader-fully-specified' option",
    },
    {
      name: "--resolve-loader-imports-fields",
      description:
        "Field name from the description file (usually package.json) which is used to provide internal request of a package (requests starting with # are considered as internal)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-imports-fields-reset",
      description:
        "Clear all items provided in 'resolveLoader.importsFields' configuration. Field names from the description file (usually package.json) which are used to provide internal request of a package (requests starting with # are considered as internal)",
    },
    {
      name: "--resolve-loader-main-fields",
      description:
        "Field name from the description file (package.json) which are used to find the default entry point",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-main-fields-reset",
      description:
        "Clear all items provided in 'resolveLoader.mainFields' configuration. Field names from the description file (package.json) which are used to find the default entry point",
    },
    {
      name: "--resolve-loader-main-files",
      description:
        "Filename used to find the default entry point if there is no description file or main field",
      args: {
        name: "value",

        isVariadic: true,
        template: ["filepaths"],
      },
    },
    {
      name: "--resolve-loader-main-files-reset",
      description:
        "Clear all items provided in 'resolveLoader.mainFiles' configuration. Filenames used to find the default entry point if there is no description file or main field",
    },
    {
      name: "--resolve-loader-modules",
      description: "Folder name or directory path where to find modules",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--resolve-loader-modules-reset",
      description:
        "Clear all items provided in 'resolveLoader.modules' configuration. Folder names or directory paths where to find modules",
    },
    {
      name: "--resolve-loader-prefer-absolute",
      description:
        "Prefer to resolve server-relative URLs (starting with '/') as absolute paths before falling back to resolve in 'resolve.roots'",
    },
    {
      name: "--no-resolve-loader-prefer-absolute",
      description: "Negative 'resolve-loader-prefer-absolute' option",
    },
    {
      name: "--resolve-loader-prefer-relative",
      description:
        "Prefer to resolve module requests as relative request and fallback to resolving as module",
    },
    {
      name: "--no-resolve-loader-prefer-relative",
      description: "Negative 'resolve-loader-prefer-relative' option",
    },
    {
      name: "--resolve-loader-restrictions",
      description:
        "Resolve restriction. Resolve result must fulfill this restriction",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--resolve-loader-restrictions-reset",
      description:
        "Clear all items provided in 'resolveLoader.restrictions' configuration. A list of resolve restrictions. Resolve results must fulfill all of these restrictions to resolve successfully. Other resolve paths are taken when restrictions are not met",
    },
    {
      name: "--resolve-loader-roots",
      description:
        "Directory in which requests that are server-relative URLs (starting with '/') are resolved",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--resolve-loader-roots-reset",
      description:
        "Clear all items provided in 'resolveLoader.roots' configuration. A list of directories in which requests that are server-relative URLs (starting with '/') are resolved",
    },
    {
      name: "--resolve-loader-symlinks",
      description: "Enable resolving symlinks to the original location",
    },
    {
      name: "--no-resolve-loader-symlinks",
      description: "Negative 'resolve-loader-symlinks' option",
    },
    {
      name: "--resolve-loader-unsafe-cache",
      description:
        "Enable caching of successfully resolved requests (cache entries are not revalidated)",
    },
    {
      name: "--no-resolve-loader-unsafe-cache",
      description: "Negative 'resolve-loader-unsafe-cache' option",
    },
    {
      name: "--resolve-loader-use-sync-file-system-calls",
      description: "Use synchronous filesystem calls for the resolver",
    },
    {
      name: "--no-resolve-loader-use-sync-file-system-calls",
      description:
        "Negative 'resolve-loader-use-sync-file-system-calls' option",
    },
    {
      name: "--snapshot-build-dependencies-hash",
      description:
        "Use hashes of the content of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-build-dependencies-hash",
      description: "Negative 'snapshot-build-dependencies-hash' option",
    },
    {
      name: "--snapshot-build-dependencies-timestamp",
      description:
        "Use timestamps of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-build-dependencies-timestamp",
      description: "Negative 'snapshot-build-dependencies-timestamp' option",
    },
    {
      name: "--snapshot-immutable-paths",
      description:
        "A RegExp matching an immutable directory (usually a package manager cache directory, including the tailing slash) A path to an immutable directory (usually a package manager cache directory)",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--snapshot-immutable-paths-reset",
      description:
        "Clear all items provided in 'snapshot.immutablePaths' configuration. List of paths that are managed by a package manager and contain a version or hash in its path so all files are immutable",
    },
    {
      name: "--snapshot-managed-paths",
      description:
        "A RegExp matching a managed directory (usually a node_modules directory, including the tailing slash) A path to a managed directory (usually a node_modules directory)",
      args: {
        name: "value",

        isVariadic: true,
        template: ["folders"],
      },
    },
    {
      name: "--snapshot-managed-paths-reset",
      description:
        "Clear all items provided in 'snapshot.managedPaths' configuration. List of paths that are managed by a package manager and can be trusted to not be modified otherwise",
    },
    {
      name: "--snapshot-module-hash",
      description:
        "Use hashes of the content of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-module-hash",
      description: "Negative 'snapshot-module-hash' option",
    },
    {
      name: "--snapshot-module-timestamp",
      description:
        "Use timestamps of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-module-timestamp",
      description: "Negative 'snapshot-module-timestamp' option",
    },
    {
      name: "--snapshot-resolve-hash",
      description:
        "Use hashes of the content of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-resolve-hash",
      description: "Negative 'snapshot-resolve-hash' option",
    },
    {
      name: "--snapshot-resolve-timestamp",
      description:
        "Use timestamps of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-resolve-timestamp",
      description: "Negative 'snapshot-resolve-timestamp' option",
    },
    {
      name: "--snapshot-resolve-build-dependencies-hash",
      description:
        "Use hashes of the content of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-resolve-build-dependencies-hash",
      description: "Negative 'snapshot-resolve-build-dependencies-hash' option",
    },
    {
      name: "--snapshot-resolve-build-dependencies-timestamp",
      description:
        "Use timestamps of the files/directories to determine invalidation",
    },
    {
      name: "--no-snapshot-resolve-build-dependencies-timestamp",
      description:
        "Negative 'snapshot-resolve-build-dependencies-timestamp' option",
    },
    {
      name: "--stats",
      description:
        "It instructs webpack on how to treat the stats e.g. verbose",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-stats",
      description: "Disable stats output",
    },
    {
      name: "--stats-all",
      description:
        "Fallback value for stats options when an option is not defined (has precedence over local webpack defaults)",
    },
    {
      name: "--no-stats-all",
      description: "Negative 'stats-all' option",
    },
    {
      name: "--stats-assets",
      description: "Add assets information",
    },
    {
      name: "--no-stats-assets",
      description: "Negative 'stats-assets' option",
    },
    {
      name: "--stats-assets-sort",
      description: "Sort the assets by that field",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-assets-space",
      description:
        "Space to display assets (groups will be collapsed to fit this space)",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-built-at",
      description: "Add built at time information",
    },
    {
      name: "--no-stats-built-at",
      description: "Negative 'stats-built-at' option",
    },
    {
      name: "--stats-cached",
      description:
        "Add information about cached (not built) modules (deprecated: use 'cachedModules' instead)",
      deprecated: true,
    },
    {
      name: "--no-stats-cached",
      description: "Negative 'stats-cached' option",
    },
    {
      name: "--stats-cached-assets",
      description:
        "Show cached assets (setting this to `false` only shows emitted files)",
    },
    {
      name: "--no-stats-cached-assets",
      description: "Negative 'stats-cached-assets' option",
    },
    {
      name: "--stats-cached-modules",
      description: "Add information about cached (not built) modules",
    },
    {
      name: "--no-stats-cached-modules",
      description: "Negative 'stats-cached-modules' option",
    },
    {
      name: "--stats-children",
      description: "Add children information",
    },
    {
      name: "--no-stats-children",
      description: "Negative 'stats-children' option",
    },
    {
      name: "--stats-chunk-group-auxiliary",
      description: "Display auxiliary assets in chunk groups",
    },
    {
      name: "--no-stats-chunk-group-auxiliary",
      description: "Negative 'stats-chunk-group-auxiliary' option",
    },
    {
      name: "--stats-chunk-group-children",
      description: "Display children of chunk groups",
    },
    {
      name: "--no-stats-chunk-group-children",
      description: "Negative 'stats-chunk-group-children' option",
    },
    {
      name: "--stats-chunk-group-max-assets",
      description: "Limit of assets displayed in chunk groups",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-chunk-groups",
      description: "Display all chunk groups with the corresponding bundles",
    },
    {
      name: "--no-stats-chunk-groups",
      description: "Negative 'stats-chunk-groups' option",
    },
    {
      name: "--stats-chunk-modules",
      description: "Add built modules information to chunk information",
    },
    {
      name: "--no-stats-chunk-modules",
      description: "Negative 'stats-chunk-modules' option",
    },
    {
      name: "--stats-chunk-modules-space",
      description:
        "Space to display chunk modules (groups will be collapsed to fit this space, value is in number of modules/group)",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-chunk-origins",
      description: "Add the origins of chunks and chunk merging info",
    },
    {
      name: "--no-stats-chunk-origins",
      description: "Negative 'stats-chunk-origins' option",
    },
    {
      name: "--stats-chunk-relations",
      description:
        "Add information about parent, children and sibling chunks to chunk information",
    },
    {
      name: "--no-stats-chunk-relations",
      description: "Negative 'stats-chunk-relations' option",
    },
    {
      name: "--stats-chunks",
      description: "Add chunk information",
    },
    {
      name: "--no-stats-chunks",
      description: "Negative 'stats-chunks' option",
    },
    {
      name: "--stats-chunks-sort",
      description: "Sort the chunks by that field",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-colors",
      description: "Enables/Disables colorful output",
    },
    {
      name: "--no-stats-colors",
      description: "Negative 'stats-colors' option",
    },
    {
      name: "--stats-colors-bold",
      description: "Custom color for bold text",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-colors-cyan",
      description: "Custom color for cyan text",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-colors-green",
      description: "Custom color for green text",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-colors-magenta",
      description: "Custom color for magenta text",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-colors-red",
      description: "Custom color for red text",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-colors-yellow",
      description: "Custom color for yellow text",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-context",
      description: "Context directory for request shortening",
      args: {
        name: "value",

        template: ["folders"],
      },
    },
    {
      name: "--stats-dependent-modules",
      description:
        "Show chunk modules that are dependencies of other modules of the chunk",
    },
    {
      name: "--no-stats-dependent-modules",
      description: "Negative 'stats-dependent-modules' option",
    },
    {
      name: "--stats-depth",
      description: "Add module depth in module graph",
    },
    {
      name: "--no-stats-depth",
      description: "Negative 'stats-depth' option",
    },
    {
      name: "--stats-entrypoints",
      description: "Display the entry points with the corresponding bundles",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-stats-entrypoints",
      description: "Negative 'stats-entrypoints' option",
    },
    {
      name: "--stats-env",
      description: "Add --env information",
    },
    {
      name: "--no-stats-env",
      description: "Negative 'stats-env' option",
    },
    {
      name: "--stats-error-details",
      description: "Add details to errors (like resolving log)",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-stats-error-details",
      description: "Negative 'stats-error-details' option",
    },
    {
      name: "--stats-error-stack",
      description: "Add internal stack trace to errors",
    },
    {
      name: "--no-stats-error-stack",
      description: "Negative 'stats-error-stack' option",
    },
    {
      name: "--stats-errors",
      description: "Add errors",
    },
    {
      name: "--no-stats-errors",
      description: "Negative 'stats-errors' option",
    },
    {
      name: "--stats-errors-count",
      description: "Add errors count",
    },
    {
      name: "--no-stats-errors-count",
      description: "Negative 'stats-errors-count' option",
    },
    {
      name: "--stats-exclude-assets",
      description:
        "Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--stats-exclude-assets-reset",
      description:
        "Clear all items provided in 'stats.excludeAssets' configuration. Suppress assets that match the specified filters. Filters can be Strings, RegExps or Functions",
    },
    {
      name: "--stats-exclude-modules",
      description:
        "Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-exclude-modules",
      description: "Negative 'stats-exclude-modules' option",
    },
    {
      name: "--stats-exclude-modules-reset",
      description:
        "Clear all items provided in 'stats.excludeModules' configuration. Suppress modules that match the specified filters. Filters can be Strings, RegExps, Booleans or Functions",
    },
    {
      name: "--stats-group-assets-by-chunk",
      description: "Group assets by how their are related to chunks",
    },
    {
      name: "--no-stats-group-assets-by-chunk",
      description: "Negative 'stats-group-assets-by-chunk' option",
    },
    {
      name: "--stats-group-assets-by-emit-status",
      description:
        "Group assets by their status (emitted, compared for emit or cached)",
    },
    {
      name: "--no-stats-group-assets-by-emit-status",
      description: "Negative 'stats-group-assets-by-emit-status' option",
    },
    {
      name: "--stats-group-assets-by-extension",
      description: "Group assets by their extension",
    },
    {
      name: "--no-stats-group-assets-by-extension",
      description: "Negative 'stats-group-assets-by-extension' option",
    },
    {
      name: "--stats-group-assets-by-info",
      description:
        "Group assets by their asset info (immutable, development, hotModuleReplacement, etc)",
    },
    {
      name: "--no-stats-group-assets-by-info",
      description: "Negative 'stats-group-assets-by-info' option",
    },
    {
      name: "--stats-group-assets-by-path",
      description: "Group assets by their path",
    },
    {
      name: "--no-stats-group-assets-by-path",
      description: "Negative 'stats-group-assets-by-path' option",
    },
    {
      name: "--stats-group-modules-by-attributes",
      description:
        "Group modules by their attributes (errors, warnings, assets, optional, orphan, or dependent)",
    },
    {
      name: "--no-stats-group-modules-by-attributes",
      description: "Negative 'stats-group-modules-by-attributes' option",
    },
    {
      name: "--stats-group-modules-by-cache-status",
      description:
        "Group modules by their status (cached or built and cacheable)",
    },
    {
      name: "--no-stats-group-modules-by-cache-status",
      description: "Negative 'stats-group-modules-by-cache-status' option",
    },
    {
      name: "--stats-group-modules-by-extension",
      description: "Group modules by their extension",
    },
    {
      name: "--no-stats-group-modules-by-extension",
      description: "Negative 'stats-group-modules-by-extension' option",
    },
    {
      name: "--stats-group-modules-by-layer",
      description: "Group modules by their layer",
    },
    {
      name: "--no-stats-group-modules-by-layer",
      description: "Negative 'stats-group-modules-by-layer' option",
    },
    {
      name: "--stats-group-modules-by-path",
      description: "Group modules by their path",
    },
    {
      name: "--no-stats-group-modules-by-path",
      description: "Negative 'stats-group-modules-by-path' option",
    },
    {
      name: "--stats-group-modules-by-type",
      description: "Group modules by their type",
    },
    {
      name: "--no-stats-group-modules-by-type",
      description: "Negative 'stats-group-modules-by-type' option",
    },
    {
      name: "--stats-group-reasons-by-origin",
      description: "Group reasons by their origin module",
    },
    {
      name: "--no-stats-group-reasons-by-origin",
      description: "Negative 'stats-group-reasons-by-origin' option",
    },
    {
      name: "--stats-hash",
      description: "Add the hash of the compilation",
    },
    {
      name: "--no-stats-hash",
      description: "Negative 'stats-hash' option",
    },
    {
      name: "--stats-ids",
      description: "Add ids",
    },
    {
      name: "--no-stats-ids",
      description: "Negative 'stats-ids' option",
    },
    {
      name: "--stats-logging",
      description:
        "Specify log level of logging output. Enable/disable logging output (`true`: shows normal logging output, loglevel: log)",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-stats-logging",
      description: "Negative 'stats-logging' option",
    },
    {
      name: "--stats-logging-debug",
      description:
        "Enable/Disable debug logging for all loggers. Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions",
      args: {
        name: "value",
        isOptional: true,
        isVariadic: true,
      },
    },
    {
      name: "--no-stats-logging-debug",
      description: "Negative 'stats-logging-debug' option",
    },
    {
      name: "--stats-logging-debug-reset",
      description:
        "Clear all items provided in 'stats.loggingDebug' configuration. Include debug logging of specified loggers (i. e. for plugins or loaders). Filters can be Strings, RegExps or Functions",
    },
    {
      name: "--stats-logging-trace",
      description: "Add stack traces to logging output",
    },
    {
      name: "--no-stats-logging-trace",
      description: "Negative 'stats-logging-trace' option",
    },
    {
      name: "--stats-module-assets",
      description: "Add information about assets inside modules",
    },
    {
      name: "--no-stats-module-assets",
      description: "Negative 'stats-module-assets' option",
    },
    {
      name: "--stats-module-trace",
      description: "Add dependencies and origin of warnings/errors",
    },
    {
      name: "--no-stats-module-trace",
      description: "Negative 'stats-module-trace' option",
    },
    {
      name: "--stats-modules",
      description: "Add built modules information",
    },
    {
      name: "--no-stats-modules",
      description: "Negative 'stats-modules' option",
    },
    {
      name: "--stats-modules-sort",
      description: "Sort the modules by that field",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-modules-space",
      description:
        "Space to display modules (groups will be collapsed to fit this space, value is in number of modules/groups)",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-nested-modules",
      description:
        "Add information about modules nested in other modules (like with module concatenation)",
    },
    {
      name: "--no-stats-nested-modules",
      description: "Negative 'stats-nested-modules' option",
    },
    {
      name: "--stats-nested-modules-space",
      description:
        "Space to display modules nested within other modules (groups will be collapsed to fit this space, value is in number of modules/group)",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-optimization-bailout",
      description: "Show reasons why optimization bailed out for modules",
    },
    {
      name: "--no-stats-optimization-bailout",
      description: "Negative 'stats-optimization-bailout' option",
    },
    {
      name: "--stats-orphan-modules",
      description: "Add information about orphan modules",
    },
    {
      name: "--no-stats-orphan-modules",
      description: "Negative 'stats-orphan-modules' option",
    },
    {
      name: "--stats-output-path",
      description: "Add output path information",
    },
    {
      name: "--no-stats-output-path",
      description: "Negative 'stats-output-path' option",
    },
    {
      name: "--stats-performance",
      description: "Add performance hint flags",
    },
    {
      name: "--no-stats-performance",
      description: "Negative 'stats-performance' option",
    },
    {
      name: "--stats-preset",
      description: "Preset for the default values",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-stats-preset",
      description: "Negative 'stats-preset' option",
    },
    {
      name: "--stats-provided-exports",
      description: "Show exports provided by modules",
    },
    {
      name: "--no-stats-provided-exports",
      description: "Negative 'stats-provided-exports' option",
    },
    {
      name: "--stats-public-path",
      description: "Add public path information",
    },
    {
      name: "--no-stats-public-path",
      description: "Negative 'stats-public-path' option",
    },
    {
      name: "--stats-reasons",
      description: "Add information about the reasons why modules are included",
    },
    {
      name: "--no-stats-reasons",
      description: "Negative 'stats-reasons' option",
    },
    {
      name: "--stats-reasons-space",
      description:
        "Space to display reasons (groups will be collapsed to fit this space)",
      args: {
        name: "value",
      },
    },
    {
      name: "--stats-related-assets",
      description:
        "Add information about assets that are related to other assets (like SourceMaps for assets)",
    },
    {
      name: "--no-stats-related-assets",
      description: "Negative 'stats-related-assets' option",
    },
    {
      name: "--stats-runtime",
      description:
        "Add information about runtime modules (deprecated: use 'runtimeModules' instead)",
      deprecated: true,
    },
    {
      name: "--no-stats-runtime",
      description: "Negative 'stats-runtime' option",
    },
    {
      name: "--stats-runtime-modules",
      description: "Add information about runtime modules",
    },
    {
      name: "--no-stats-runtime-modules",
      description: "Negative 'stats-runtime-modules' option",
    },
    {
      name: "--stats-source",
      description: "Add the source code of modules",
    },
    {
      name: "--no-stats-source",
      description: "Negative 'stats-source' option",
    },
    {
      name: "--stats-timings",
      description: "Add timing information",
    },
    {
      name: "--no-stats-timings",
      description: "Negative 'stats-timings' option",
    },
    {
      name: "--stats-used-exports",
      description: "Show exports used by modules",
    },
    {
      name: "--no-stats-used-exports",
      description: "Negative 'stats-used-exports' option",
    },
    {
      name: "--stats-version",
      description: "Add webpack version information",
    },
    {
      name: "--no-stats-version",
      description: "Negative 'stats-version' option",
    },
    {
      name: "--stats-warnings",
      description: "Add warnings",
    },
    {
      name: "--no-stats-warnings",
      description: "Negative 'stats-warnings' option",
    },
    {
      name: "--stats-warnings-count",
      description: "Add warnings count",
    },
    {
      name: "--no-stats-warnings-count",
      description: "Negative 'stats-warnings-count' option",
    },
    {
      name: "--stats-warnings-filter",
      description:
        "Suppress listing warnings that match the specified filters (they will still be counted). Filters can be Strings, RegExps or Functions",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--stats-warnings-filter-reset",
      description:
        "Clear all items provided in 'stats.warningsFilter' configuration. Suppress listing warnings that match the specified filters (they will still be counted). Filters can be Strings, RegExps or Functions",
    },
    {
      name: ["--target", "-t"],
      description: "Sets the build target e.g. node",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--no-target",
      description: "Negative 'target' option",
    },
    {
      name: "--target-reset",
      description:
        "Clear all items provided in 'target' configuration. Environment to build for. An array of environments to build for all of them when possible",
    },
    {
      name: ["--watch", "-w"],
      description: "Watch for files changes",
    },
    {
      name: "--no-watch",
      description: "Do not watch for file changes",
    },
    {
      name: "--watch-options-aggregate-timeout",
      description:
        "Delay the rebuilt after the first change. Value is a time in ms",
      args: {
        name: "value",
      },
    },
    {
      name: "--watch-options-follow-symlinks",
      description:
        "Resolve symlinks and watch symlink and real file. This is usually not needed as webpack already resolves symlinks ('resolve.symlinks')",
    },
    {
      name: "--no-watch-options-follow-symlinks",
      description: "Negative 'watch-options-follow-symlinks' option",
    },
    {
      name: "--watch-options-ignored",
      description:
        "A glob pattern for files that should be ignored from watching. Ignore some files from watching (glob pattern or regexp)",
      args: {
        name: "value",

        isVariadic: true,
      },
    },
    {
      name: "--watch-options-ignored-reset",
      description:
        "Clear all items provided in 'watchOptions.ignored' configuration. Ignore some files from watching (glob pattern or regexp)",
    },
    {
      name: "--watch-options-poll",
      description:
        "`number`: use polling with specified interval. `true`: use polling",
      args: {
        name: "value",
        isOptional: true,
      },
    },
    {
      name: "--no-watch-options-poll",
      description: "Negative 'watch-options-poll' option",
    },
    {
      name: "--watch-options-stdin",
      description: "Stop watching when stdin stream has ended",
    },
    {
      name: "--no-watch-options-stdin",
      description: "Do not stop watching when stdin stream has ended",
    },
  ],
  // Only uncomment if webpack takes an argument
  // args: {}
};
export default completionSpec;
