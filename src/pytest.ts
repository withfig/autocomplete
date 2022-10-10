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
      name: "--color",
      description: "Color terminal output",
      args: {
        name: "Color",
        description: "(yes/no/auto)",
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
      name: ["--disable-warnings", "--disable-pytest-warnings"],
      description: "Disable warnings summary",
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
      name: ["--new-first", "--nf"],
      description:
        "Run tests from new files first, then the rest of the tests sorted by file mtime",
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
      name: "--runxfail",
      description:
        "Report the results of xfail tests as if they were not marked",
    },
    {
      name: "-s",
      description: "Shortcut for --capture=no",
    },
    {
      name: "--show-capture",
      description:
        "Controls how captured stdout/stderr/log is shown on failed tests",
      args: {
        name: "Capture",
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
      name: "--tb",
      description: "Traceback print mode",
      args: {
        name: "Style",
        description: "(auto/long/short/line/native/no)",
      },
    },
    {
      name: "--trace",
      description: "Immediately break when running each test",
    },
    {
      name: ["--verbose", "-v"],
      description: "Increase verbosity",
    },
    {
      name: "--verbosity",
      description: "Set verbosity. Default is 0",
      args: {
        name: "verbosity",
        default: "0",
      },
    },
    {
      name: ["--version", "-V"],
      description:
        "Display pytest version and information about plugins. \
        When given twice, also display information about plugins",
    },
  ],
};
export default completionSpec;
