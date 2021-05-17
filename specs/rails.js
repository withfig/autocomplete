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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var RB_ICON = "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_ruby.svg";
var newCommand = {
    name: "new",
    description: "Create a new rails application",
    args: {
        name: "path",
        description: "Path to directory to be created containing the new application",
    },
    options: [
        {
            name: ["-skip-namespace"],
            description: "Skip namespace (affects only isolated applications)",
            args: {},
        },
        {
            name: ["-r", "--ruby"],
            description: "Path to the Ruby binary of your choice",
            args: {},
        },
        {
            name: ["-m"],
            description: "Path to some application template (can be a filesystem path or URL)",
        },
        {
            name: ["-d"],
            description: "Preconfigure for selected database - defaults to sqlite3",
            args: {
                name: "database",
                suggestions: [
                    "mysql",
                    "postgresql",
                    "sqlite3",
                    "oracle",
                    "frontbase",
                    "ibm_db",
                    "sqlserver",
                    "jdbcmysql",
                    "jdbcsqlite3",
                    "jdbcpostgresql",
                    "jdbc",
                ],
            },
        },
        {
            name: ["--skip-gemfile"],
            description: "Don't create a Gemfile",
        },
        {
            name: ["-G"],
            description: "Skip .gitignore file",
        },
        {
            name: ["--skip-keeps"],
            description: "Skip source control .keep files",
        },
        {
            name: ["-M"],
            description: "Skip Action Mailer files",
        },
        {
            name: ["--skip-action-mailbox"],
            description: "Skip Action Mailbox gem",
        },
        {
            name: ["--skip-action-text"],
            description: "Skip Action Text gem",
        },
        {
            name: ["-O"],
            description: "Skip Active Record files",
        },
        {
            name: ["--skip-active-storage"],
            description: "Skip Active Storage files",
        },
        {
            name: ["-P"],
            description: "Skip Puma related files",
        },
        {
            name: ["-C"],
            description: "Skip Action Cable files",
        },
        {
            name: ["-S"],
            description: "Skip Sprockets files",
        },
        {
            name: ["--skip-spring"],
            description: "Don't install Spring application preloader",
        },
        {
            name: ["--skip-listen"],
            description: "Don't generate configuration that depends on the listen gem",
        },
        {
            name: ["-J"],
            description: "Skip JavaScript files",
        },
        {
            name: ["--skip-turbolinks"],
            description: "Skip turbolinks gem",
        },
        {
            name: ["-T"],
            description: "Skip test files",
        },
        {
            name: ["--skip-system-test"],
            description: "Skip system test files",
        },
        {
            name: ["--skip-bootsnap"],
            description: "Skip bootsnap gem",
        },
        {
            name: ["--dev"],
            description: "Setup the application with Gemfile pointing to your Rails checkout",
        },
        {
            name: ["--edge"],
            description: "Setup the application with Gemfile pointing to Rails repository",
        },
        {
            name: ["--rc"],
            description: "Path to file containing extra configuration options for rails command",
            args: { name: "path" },
        },
        {
            name: ["--no-rc"],
            description: "Skip loading of extra configuration options from .railsrc file",
        },
        {
            name: ["--api"],
            description: "Preconfigure smaller stack for API only apps",
        },
        {
            name: ["-B"],
            description: "Don't run bundle install",
        },
        {
            name: ["--webpacker"],
            description: "Preconfigure Webpack with a particular framework",
            args: {
                name: "framework",
                suggestions: ["react", "vue", "angular", "elm", "stimulus"],
            },
        },
        {
            name: ["--skip-webpack-install]"],
            description: "Don't run Webpack install",
        },
        {
            name: ["--f", "--force"],
            description: "Overwrite files that already exist",
        },
        {
            name: ["--p", "--pretend"],
            description: "Run but do not make any changes",
        },
        {
            name: ["--q", "--quiet"],
            description: "Suppress status output",
        },
        {
            name: ["--s", "--skip"],
            description: "Skip files that already exist",
        },
        {
            name: ["--h", "--help"],
            description: "Show this help message and quit",
        },
        {
            name: ["--v", "--version"],
            description: "Show Rails version number and quit",
        },
    ],
};
var dbOptions = [
    {
        name: ["--backtrace"],
        description: "Enable full backtrace.  OUT can be stderr (default) or stdout.",
    },
    {
        name: ["--comments"],
        description: "Show commented tasks only",
    },
    {
        name: ["--job-stats"],
        description: "Display job statistics. LEVEL=history displays a complete job list",
    },
    {
        name: ["--rules"],
        description: "Trace the rules resolution.",
    },
    {
        name: ["--suppress-backtrace"],
        description: "Suppress backtrace lines matching regexp PATTERN. Ignored if --trace is on.",
        args: { name: "pattern" },
    },
    {
        name: ["-A", "--all"],
        description: "Show all tasks, even uncommented ones (in combination with -T or -D)",
    },
    {
        name: ["-B", "--build-all"],
        description: "Build all prerequisites, including those which are up-to-date.",
    },
    {
        name: ["-D", "--describe"],
        description: "Describe the tasks (matching optional PATTERN), then exit.",
        args: {
            name: "pattern",
            isOptional: true,
        },
    },
    {
        name: ["-e", "--execute"],
        description: "Execute some Ruby code and exit.",
        args: { name: "code" },
    },
    {
        name: ["-E", "--execute-continue"],
        description: "Execute some Ruby code, then continue with normal task processing.",
        args: { name: "code" },
    },
    {
        name: ["-f", "--rakefile"],
        description: "Use FILENAME as the rakefile to search for.",
        args: { name: "filename" },
    },
    {
        name: ["-G"],
        description: "Use standard project Rakefile search paths, ignore system wide rakefiles.",
    },
    {
        name: ["-g", "--system"],
        description: "Using system wide (global) rakefiles (usually '~/.rake/*.rake').",
    },
    {
        name: ["-I", "--libdir"],
        description: "Include LIBDIR in the search path for required modules.",
        args: { name: "libdir" },
    },
    {
        name: ["-j", "--jobs"],
        description: "Specifies the maximum number of tasks to execute in parallel. (default is number of CPU cores + 4)",
        args: { name: "number" },
    },
    {
        name: ["-m", "--multitask"],
        description: "Treat all tasks as multitasks.",
        args: {},
    },
    {
        name: ["-n", "--dry-run"],
        description: "Do a dry run without executing actions.",
        args: {},
    },
    {
        name: ["-N"],
        description: "Do not search parent directories for the Rakefile.",
        args: {},
    },
    {
        name: ["-P", "--prereqs"],
        description: "Display the tasks and dependencies, then exit.",
        args: {},
    },
    {
        name: ["-p", "--execute-print"],
        description: "Execute some Ruby code, print the result, then exit.",
        args: {},
    },
    {
        name: ["-q", "--quiet"],
        description: "Do not log messages to standard output.",
        args: {},
    },
    {
        name: ["-r", "--require"],
        description: "Require MODULE before executing rakefile.",
        args: { name: "module" },
    },
    {
        name: ["-R", "--rakelibdir"],
        description: "Auto-import any .rake files in RAKELIBDIR. (default is 'rakelib')",
        args: { name: "rakelibdir" },
    },
    {
        name: ["--rakelib"],
        description: "-s, --silent                     Like --quiet, but also suppresses the 'in directory' announcement.",
        args: {},
    },
    {
        name: ["-t", "--trace"],
        description: "Turn on invoke/execute tracing, enable full backtrace. OUT can be stderr (default) or stdout.",
        args: {},
    },
    {
        name: ["-T", "--tasks"],
        description: "Display the tasks (matching optional PATTERN) with descriptions, then exit. -AT combination displays all of tasks contained no description.",
        args: {},
    },
    {
        name: ["-v", "--verbose"],
        description: "Log message to standard output.",
        args: {},
    },
    {
        name: ["-V", "--version"],
        description: "Display the program version.",
        args: {},
    },
    {
        name: ["-W", "--where"],
        description: "Describe the tasks (matching optional PATTERN), then exit.",
        args: { name: "pattern" },
    },
    {
        name: ["-X", "--no-deprecation-warnings"],
        description: "Disable the deprecation warnings.",
        args: {},
    },
    {
        name: ["-h", "--help"],
        description: "Display this help message.",
        args: {},
    },
];
var defaultCommands = [
    {
        name: "console",
        description: "Interact with your Rails application from the command line.",
        options: [
            {
                name: ["-s", "--sandbox"],
                description: "Rollback database modifications on exit",
            },
            {
                name: ["-e", "--environment"],
                description: "Specifies the environment to run this console under",
                args: {
                    name: "environment",
                },
            },
        ],
    },
    {
        name: "server",
        description: "Launch a web server to access your application through a browser",
        options: [
            {
                name: ["-e", "--environment"],
                description: "Specifies the environment to run this server under (e.g. test/development/production).",
                args: { name: "environment" },
            },
            {
                name: ["-p", "--port"],
                description: "Runs Rails on the specified port - defaults to 3000.",
                args: { name: "port" },
            },
            {
                name: ["-b", "--binding"],
                description: "Binds Rails to the specified IP - defaults to 'localhost' in development and '0.0.0.0' in other environments'.",
                args: { name: "IP" },
            },
            {
                name: ["-c", "--config"],
                description: "Uses a custom rackup configuration - defaults to config.ru",
                args: { name: "file" },
            },
            {
                name: ["-d", "--daemon"],
                description: "Runs server as a Daemon.",
            },
            {
                name: ["-u", "--using"],
                description: "Specifies the Rack server used to run the application (thin/puma/webrick).",
                args: { name: "server" },
            },
            {
                name: ["-P", "--pid"],
                description: "Specifies the PID file - defaults to tmp/pids/server.pid",
                args: { name: "PID" },
            },
            {
                name: ["-C", "--dev-caching"],
                description: "Specifies whether to perform caching in development",
            },
            {
                name: ["--early-hints"],
                description: "Enables HTTP/2 early hints",
            },
            {
                name: ["--log-to-stdout"],
                description: "Whether to log to stdout. Enabled by default in development when not daemonized",
            },
        ],
    },
    {
        name: "db:create",
        description: "Create your database",
        options: dbOptions,
    },
    {
        name: "db:migrate",
        description: "Run any pending database migrations",
        options: dbOptions,
    },
    {
        name: "dbconsole",
        description: "Opens a console to your database (supports MySQL, PostgreSQL, and SQLite3)",
        options: [
            {
                name: ["-e"],
                description: "Specifies the environment to run this dbconsole under (e.g. test/development/production).",
                args: {},
            },
            {
                name: ["--mode"],
                description: "Automatically put the sqlite3 database in the specified mode",
                args: {
                    name: "mode",
                    suggestions: ["html", "list", "line", "column"],
                },
            },
            {
                name: ["-p"],
                description: "Automatically provide the password from database.yml",
                args: {},
            },
            {
                name: ["-c"],
                description: "Specifies the connection to use.",
                args: { name: "connection" },
            },
            {
                name: ["-db", "--database"],
                description: "Specifies the database to use.",
            },
        ],
    },
    {
        name: "generate",
        description: "Use templates to generate Rails resources",
        args: [
            {
                name: "generator",
                generators: {
                    script: "rails g --help",
                    postProcess: function (out) {
                        var lines = out.split("Rails:")[1].trim().split("\n");
                        var dict = __spreadArray(["Rails:"], lines).reduce(function (arr, line) {
                            if (line.endsWith(":"))
                                return __spreadArray(__spreadArray([], arr), [[line.replace(":", ""), []]]);
                            var trimmed = line.trim();
                            if (!trimmed.length)
                                return arr;
                            arr[arr.length - 1][1].push(line.trim());
                            return arr;
                        }, []);
                        return dict.reduce(function (arr, _a) {
                            var plugin = _a[0], commands = _a[1];
                            return __spreadArray(__spreadArray([], arr), commands.map(function (name) { return ({
                                insertValue: name,
                                name: name + " (" + plugin + ")",
                            }); }));
                        }, []);
                    },
                },
            },
            {
                name: "args",
                variadic: true,
            },
        ],
        options: [
            {
                name: ["-h"],
                description: "Print generator's options and usage",
                args: {},
            },
            {
                name: ["-p"],
                description: "Run but do not make any changes",
                args: {},
            },
            {
                name: ["-f"],
                description: "Overwrite files that already exist",
                args: {},
            },
            {
                name: ["-s"],
                description: "Skip files that already exist",
                args: {},
            },
            {
                name: ["-q"],
                description: "Suppress status output",
                args: {},
            },
        ],
    },
    {
        name: "routes",
        description: "List all of the routes defined in your application",
        options: [
            {
                name: ["-c"],
                description: "Filter by a specific controller, e.g. PostsController or Admin::PostsController.",
                args: {},
            },
            {
                name: ["-g"],
                description: "Grep routes by a specific pattern.",
                args: {},
            },
            {
                name: ["-E"],
                description: "Print routes expanded vertically with parts explained. ",
                args: {},
            },
        ],
    },
    {
        name: "test",
        description: "Run your test suite",
        args: {
            name: "files or directories",
            generators: {
                template: ["filepaths", "folders"],
                filterTemplateSuggestions: function (paths) {
                    return paths
                        .filter(function (file) {
                        var name = file.name;
                        return name.endsWith(".rb") || name.endsWith("/");
                    })
                        .map(function (file) { return (__assign(__assign({}, file), { icon: file.type === "file" ? RB_ICON : file.icon })); });
                },
            },
            isOptional: true,
        },
        generateSpec: function (_, executeShellCommand) {
            return __awaiter(this, void 0, void 0, function () {
                var helpText, argRegex, options;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, executeShellCommand("rails test --help")];
                        case 1:
                            helpText = _a.sent();
                            argRegex = /(?:(-[a-zA-Z]), )?(--[^ ]+?)[ =]([A-Z_]+)?[ \r\n]+([^\n]+)/g;
                            options = Array.from(helpText.matchAll(argRegex)).map(function (match) {
                                var _match = match[0], _short = match[1], long = match[2], arg = match[3], description = match[4];
                                return {
                                    name: [long.replace(/\[.+\]/g, "")],
                                    description: description,
                                    args: { name: arg },
                                };
                            });
                            return [2 /*return*/, { name: "test", options: options }];
                    }
                });
            });
        },
    },
    newCommand,
];
var completionSpec = {
    name: "rails",
    description: "Ruby on Rails CLI",
    generateSpec: function (_, executeShellCommand) {
        return __awaiter(this, void 0, void 0, function () {
            var gemfileMatch, isRails, helpText, defaultCommandNames, matches, commands;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, executeShellCommand("until [[ -f Gemfile ]] || [[ $PWD = '/' ]]; do cd ..; done; if [ -f Gemfile ]; then cat Gemfile | grep \"gem 'rails'\"; else echo \"\"; fi")];
                    case 1:
                        gemfileMatch = _a.sent();
                        isRails = !!gemfileMatch;
                        if (!isRails) {
                            return [2 /*return*/, {
                                    name: "rails",
                                    subcommands: [newCommand],
                                }];
                        }
                        return [4 /*yield*/, executeShellCommand("rails -T")];
                    case 2:
                        helpText = _a.sent();
                        defaultCommandNames = defaultCommands.map(function (c) { return c.name; });
                        matches = Array.from(helpText.matchAll(/rails ([^ ]+)/g));
                        commands = matches
                            .map(function (match) { return ({ name: match[1] }); })
                            .filter(function (cmd) { return !defaultCommandNames.includes(cmd.name); });
                        return [2 /*return*/, {
                                name: "rails",
                                subcommands: __spreadArray(__spreadArray([], defaultCommands), commands),
                            }];
                }
            });
        });
    },
};

