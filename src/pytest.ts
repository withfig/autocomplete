const completionSpec: Fig.Spec = {
  name: "pytest",
  args: {
    name: "File or Directory",
    description:
      "The test file or directory you want to run pytest on. If omitted, pytest will run all \
      of the files of the form test_*.py or *_test.py in the current directory \
      and its subdirectories",
    isOptional: true,
  },
  options: [
    {
      name: "--assert",
      description:
        "Control assertion debugging tools. \
                    'plain' performs no assertion debugging. \
                    'rewrite' (the default) rewrites assert statements in \
                    test modules on import to provide assert expression information",
      args: {
        name: "Mode",
      },
    },
    {
      name: "--basetemp",
      description:
        "Base temporary directory for this test run.(warning: this directory is removed if it exists)",
      args: {
        name: "Directory",
      },
    },
    {
      name: "-c",
      description:
        "Load configuration from `file` instead of trying to locate one of the implicit configuration files",
      args: {
        name: "File",
      },
    },
    {
      name: "--cache-clear",
      description: "Remove all cache contents at start of test run",
    },
    {
      name: "--cache-show",
      description: "",
      args: {
        name: "Glob",
        description: "",
        isOptional: true,
        default: "*",
      },
    },
    {
      name: "--capture",
      description: "Per-test capturing method",
      args: {
        name: "Method",
        description: "One of fd|sys|no|tee-sys",
      },
    },
    {
      name: "--code-highlight",
      description:
        "Whether code should be highlighted (only if --color is also enabled)",
      args: {
        name: "",
        description: "{yes,no}",
      },
    },
    {
      name: ["--co", "--collect-only"],
      description: "Only collect tests, don't execute them",
    },
    {
      name: "--collect-in-virtualenv",
      description: "Don't ignore tests in a local virtualenv directory",
    },
    {
      name: "--color",
      description: "Color terminal output",
      args: {
        name: "Color",
        description: "(yes/no/auto)",
      },
    },
    {
      name: "--confcutdir",
      description: "Only load conftest.py's relative to specified dir",
      args: {
        name: "Dir",
      },
    },

    {
      name: "--continue-on-collection-errors",
      description: "Force test execution even if collection errors occur",
    },
    {
      name: "--debug",
      description:
        "Store internal tracing debug information in this log file. \
                    This file is opened with 'w' and truncated as a result, care advised. \
                    Defaults to 'pytestdebug.log'",
      args: {
        name: "DEBUG_FILE_NAME",
        isOptional: true,
        default: "pytestdebug.log",
      },
    },
    {
      name: "--durations",
      description: "Show N slowest setup/test durations (N=0 for all)",
      args: {
        name: "N",
        description: "(N=0 for all)",
      },
    },
    {
      name: "--durations-min",
      description: "Minimal duration in seconds for inclusion in slowest list",
      args: {
        name: "N",
        default: "0.005",
      },
    },
    {
      name: "--deselect",
      description:
        "Deselect item (via node id prefix) during collection (multi-allowed)",
      args: {
        name: "nodeid_prefix",
      },
    },
    {
      name: ["--disable-warnings", "--disable-pytest-warnings"],
      description: "Disable warnings summary",
    },
    {
      name: "--doctest-continue-on-failure",
      description:
        "For a given doctest, continue to run after the first failure",
    },
    {
      name: "--doctest-ignore-import-errors",
      description: "Ignore doctest ImportErrors",
    },
    {
      name: "--doctest-modules",
      description: "Run doctests in all .py modules",
    },
    {
      name: "--doctest-report",
      description: "Choose another output format for diffs on doctest failure",
      args: {
        name: "Output format",
        description: "None,cdiff,ndiff,udiff,only_first_failure",
      },
    },
    {
      name: "--doctest-glob",
      description: "Doctests file matching pattern, default: test*.txt",
      args: {
        name: "Pattern",
      },
    },
    {
      name: ["--exitfirst", "-x"],
      description: "Exit instantly on first error or failed test",
    },
    {
      name: ["--failed-first", "--ff"],
      description: "Run all tests, but run the last failures first",
    },
    {
      name: "--fixtures",
      description:
        "Shows builtin and custom fixtures. \
        Note that this command omits fixtures with leading _ unless the -v option is added",
    },
    {
      name: "--fixtures-per-test",
      description: "Show fixtures per test",
    },
    {
      name: "--full-trace",
      description: "Don't cut any tracebacks (default is to cut)",
    },
    {
      name: ["--help", "-h"],
      description: "This shows help on command line and config-line options",
    },
    {
      name: "--ignore",
      description: "Ignore path during collection (multi-allowed)",
      args: {
        name: "Path",
      },
    },
    {
      name: "--ignore-glob",
      description: "Ignore path pattern during collection (multi-allowed)",
      args: {
        name: "Path",
      },
    },
    {
      name: "--import-mode",
      description:
        "Prepend/append to sys.path when importing test modules and conftest files, default is to prepend",
      args: {
        name: "Mode",
        default: "prepend",
      },
    },
    {
      name: "--junit-xml",
      description: "Create junit-xml style report file at given path",
      args: {
        name: "Path",
      },
    },
    {
      name: "--junit-prefix",
      description: "Prepend prefix to classnames in junit-xml output",
      args: {
        name: "Str",
        description: "String to prepend",
      },
    },
    {
      name: "-k",
      description:
        "Only run tests which match the given substring expression. An expression is a python evaluatable expression where all names are substring-matched against test names and their \
                    parent classes. Example: -k 'test_method or test_other' matches all test functions and classes whose name contains 'test_method' or 'test_other', while -k 'not test_method' \
                    matches those that don't contain 'test_method' in their names. -k 'not test_method and not test_other' will eliminate the matches. Additionally keywords are matched to \
                    classes and functions containing extra names in their 'extra_keyword_matches' set, as well as functions which have names assigned directly to them. The matching is case- \
                    insensitive",
      args: {
        name: "Expression",
        description: "Ex: 'test_method or test_other'",
      },
    },
    {
      name: "--keep-duplicates",
      description: "Keep duplicate tests",
    },
    {
      name: ["--showlocals", "-l"],
      description: "Show locals in tracebacks (disabled by default)",
    },

    {
      name: ["--last-failed-no-failures", "--lfnf"],
      description: "Which tests to run with no previously (known) failures",
      args: {
        name: "{all, none}",
        default: "all",
      },
    },
    {
      name: ["--last-failed", "--lf"],
      description:
        "Rerun only the tests that failed at the last run (or all if none failed)",
    },
    {
      name: "--log-auto-indent",
      description:
        "Auto-indent multiline messages passed to the logging module. \
                  Accepts true|on, false|off or an integer",
      args: {
        name: "Log Auto Indent Setting",
      },
    },
    {
      name: "--log-cli-level",
      description: "Cli logging level",
      args: {
        name: "Log CLI Level",
      },
    },
    {
      name: "--log-cli-format",
      description: "Log format as used by the logging module",
      args: {
        name: "Log CLI Format",
      },
    },
    {
      name: "--log-cli-date-format",
      description: "Log date format as used by the logging module",
      args: { name: "Log CLI Date Format" },
    },
    {
      name: "--log-date-format",
      description: "Log date format as used by the logging module",
      args: { name: "Log Date Format" },
    },
    {
      name: "--log-format",
      description: "Log format as used by the logging module",
      args: {
        name: "Log Format",
      },
    },
    {
      name: "--log-file",
      description: "Path to a file when logging will be written to",
      args: {
        name: "Log File Path",
      },
    },
    {
      name: "--log-file-level",
      description: "Log file logging level",
      args: {
        name: "Log File Level",
      },
    },
    {
      name: "--log-file-date-format",
      description: "Log date format as used by the logging module",
      args: { name: "Log File Date Format" },
    },
    {
      name: "--log-file-format",
      description: "Log format as used by the logging module",
      args: {
        name: "Log File Format",
      },
    },
    {
      name: "--log-level",
      description:
        "Level of messages to catch/display. \
          Not set by default, so it depends on the root/parent \
          log handler's effective level, where it is `WARNING` by default",
      args: {
        name: "Level",
      },
    },
    {
      name: "-m",
      description: "Only run tests matching given mark expression",
      args: {
        name: "Mark Expression",
      },
    },
    {
      name: "--markers",
      description: "Show markers (builtin, plugin and per-project ones)",
    },
    {
      name: "--maxfail",
      description: "Exit after first num failures or errors",
      args: {
        name: "num",
      },
    },
    {
      name: ["--new-first", "--nf"],
      description:
        "Run tests from new files first, then the rest of the tests sorted by file mtime",
    },
    {
      name: "--noconftest",
      description: "Don't load any conftest.py files",
    },
    {
      name: "--no-header",
      description: "Disable header",
    },
    {
      name: "--no-summary",
      description: "Disable summary",
    },
    {
      name: ["--override-ini", "-o"],
      description:
        "Override ini option with `option=value` style, e.g. `-o xfail_strict=True -o cache_dir=cache`",
      args: {
        name: "OVERRIDE_INI",
      },
    },
    {
      name: "-p",
      description:
        "Early-load given plugin module name or entry point (multi-allowed)",
      args: {
        name: "Plugin name",
      },
    },
    {
      name: "--pastebin",
      description: "Send failed|all info to bpaste.net pastebin service",
      args: {
        name: "mode",
      },
    },
    {
      name: "--pdb",
      description:
        "Start the interactive Python debugger on errors or KeyboardInterrupt",
    },
    {
      name: "--pdbcls",
      description:
        "Specify a custom interactive Python debugger for use with --pdb",
      args: {
        name: "modulename:classname",
        description: "Ex: --pdbcls=IPython.terminal.debugger:TerminalPdb",
      },
    },
    {
      name: "--pyargs",
      description: "Try to interpret all arguments as python packages",
    },
    {
      name: ["--quiet", "-q"],
      description: "Decrease verbosity",
    },
    {
      name: "-r",
      description:
        "Show extra test summary info as specified by chars: (f)ailed, (E)rror, (s)kipped, (x)failed, (X)passed, (p)assed, (P)assed with output, (a)ll except passed (p/P), or (A)ll. \
                    (w)arnings are enabled by default (see --disable-warnings), 'N' can be used to reset the list. (default: 'fE')",
      args: {
        name: "chars",
        description: "",
      },
    },
    {
      name: "--rootdir",
      description:
        "Define root directory for tests. Can be relative path: 'root_dir', './root_dir', 'root_dir/another_dir/'; absolute path: '/home/user/root_dir'; path with variables:\
                    '$HOME/root_dir'",
      args: {
        name: "Root Dir",
      },
    },
    {
      name: "--runxfail",
      description:
        "Report the results of xfail tests as if they were not marked",
    },
    {
      name: "-s",
      description: "Shortcut for --capture=no",
    },
    {
      name: "--setup-only",
      description: "Only setup fixtures, do not execute tests",
    },
    {
      name: "--setup-show",
      description: "Show setup of fixtures while executing tests",
    },
    {
      name: "--setup-plan",
      description:
        "Show what fixtures and tests would be executed but don't execute anything",
    },
    {
      name: "--show-capture",
      description:
        "Controls how captured stdout/stderr/log is shown on failed tests",
      args: {
        name: "Capture method",
        description: "No,stdout,stderr,log,all",
        default: "all",
      },
    },
    {
      name: ["--stepwise", "--sw"],
      description:
        "Exit on test failure and continue from last failing test next time",
    },
    {
      name: ["--stepwise-skip", "--sw-skip"],
      description:
        "Ignore the first failing test but stop on the next failing test",
    },
    {
      name: "--strict",
      description: "(deprecated) alias to --strict-markers",
    },
    {
      name: "--strict-config",
      description:
        "Any warnings encountered while parsing the `pytest` section of the configuration file raise errors",
    },
    {
      name: "--strict-markers",
      description:
        "Markers not registered in the `markers` section of the configuration file raise errors",
    },
    {
      name: "--tb",
      description: "Traceback print mode",
      args: {
        name: "Traceback print mode",
        description: "(auto/long/short/line/native/no)",
      },
    },
    {
      name: "--trace",
      description: "Immediately break when running each test",
    },
    {
      name: " --trace-config",
      description: "Trace considerations of conftest.py files",
    },
    {
      name: ["--verbose", "-v"],
      description: "Increase verbosity",
    },
    {
      name: "--verbosity",
      description: "Set verbosity. Default is 0",
      args: {
        name: "Verbosity level",
        default: "0",
      },
    },
    {
      name: ["--version", "-V"],
      description:
        "Display pytest version and information about plugins. \
        When given twice, also display information about plugins",
    },
    {
      name: "--pythonwarnings, -W",
      description:
        "Set which warnings to report, see -W option of python itself",
      args: {
        name: "Warnings to report",
      },
    },
  ],
};
export default completionSpec;
