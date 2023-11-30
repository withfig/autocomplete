const completionSpec: Fig.Spec = {
  name: "mypy",
  description: "Mypy is a static type checker for Python",
  options: [
    {
      name: "--module",
      description: "Asks mypy to type check the provided module",
    },
    {
      name: "--package",
      description: "Asks mypy to type check the provided package",
    },
    {
      name: "--command",
      description: "Asks mypy to type check the provided string as a program",
    },
    {
      name: "--exclude",
      description:
        "A regular expression that matches file names, directory names and paths which mypy should ignore while recursively discovering files to check",
    },
    { name: "--help", description: "Show help message and exit" },
    { name: "--verbose", description: "More verbose messages" },
    {
      name: "--version",
      description: "Show program's version number and exit",
    },
    {
      name: "--config-file",
      description:
        "This flag makes mypy read configuration settings from the given file",
    },
    {
      name: "--warn-unused-configs",
      description:
        "This flag makes mypy warn about unused [mypy-<pattern>] config file sections",
    },
    {
      name: "--explicit-package-bases",
      description:
        "This flag tells mypy that top-level packages will be based in either the current directory, or a member of the MYPYPATH environment variable",
    },
    {
      name: "--ignore-missing-imports",
      description: "This flag makes mypy ignore all missing imports",
    },
    {
      name: "silent",
      description:
        "This flag adjusts how mypy follows imported modules that were not explicitly passed in via the command line",
    },
    {
      name: "--python-executable",
      description:
        "This flag will have mypy collect type information from PEP561 compliant packages installed for the Python executable EXECUTABLE",
    },
    {
      name: "--no-site-packages",
      description:
        "This flag will disable searching for PEP561 compliant packages",
    },
    {
      name: "--no-silence-site-packages",
      description:
        "By default, mypy will suppress any error messages generated within PEP561 compliant packages",
    },
    {
      name: "--fast-module-lookup",
      description:
        "The default logic used to scan through search paths to resolve imports has a quadratic worse-case behavior in some cases, which is for instance triggered by a large number of folders sharing",
    },
    {
      name: "--no-namespace-packages",
      description:
        "This flag disables import discovery of namespace packages (see PEP420)",
    },
    {
      name: "--python-version",
      description:
        "This flag will make mypy type check your code as if it were run under Python version X",
    },
    {
      name: "--platform",
      description:
        "This flag will make mypy type check your code as if it were run under the given operating system",
    },
    {
      name: "--always-true",
      description:
        "This flag will treat all variables named NAME as compile-time constants that are always true",
    },
    {
      name: "--always-false",
      description:
        "This flag will treat all variables named NAME as compile-time constants that are always false",
    },
    {
      name: "--disallow-any-unimported",
      description:
        "This flag disallows usage of types that come from unfollowed imports (such types become aliases for Any)",
    },
    {
      name: "--disallow-any-expr",
      description:
        "This flag disallows all expressions in the module that have type Any",
    },
    {
      name: "--disallow-any-decorated",
      description:
        "This flag disallows functions that have Any in their signature after decorator transformation",
    },
    {
      name: "--disallow-any-explicit",
      description:
        "This flag disallows explicit Any in type positions such as type annotations and generic type parameters",
    },
    {
      name: "--disallow-any-generics",
      description:
        "This flag disallows usage of generic types that do not specify explicit type parameters",
    },
    {
      name: "--disallow-subclassing-any",
      description:
        "This flag reports an error whenever a class subclasses a value of type Any",
    },
    {
      name: "--disallow-untyped-calls",
      description:
        "This flag reports an error whenever a function with type annotations calls a function defined without annotations",
    },
    {
      name: "--untyped-calls-exclude",
      description:
        "This flag allows to selectively disable option--disallow-untyped-calls for functions and methods defined in specific packages, modules, or classes",
    },
    {
      name: "--disallow-untyped-defs",
      description:
        "This flag reports an error whenever it encounters a function definition without type annotations or with incomplete type annotations",
    },
    {
      name: "--disallow-incomplete-defs",
      description:
        "This flag reports an error whenever it encounters a partly annotated function definition, while still allowing entirely unannotated definitions",
    },
    {
      name: "--check-untyped-defs",
      description:
        "This flag is less severe than the previous two options -- it type checks the body of every function, regardless of whether it has type annotations",
    },
    {
      name: "--disallow-untyped-decorators",
      description:
        "This flag reports an error whenever a function with type annotations is decorated with a decorator without annotations",
    },
    {
      name: "--implicit-optional",
      description:
        "This flag causes mypy to treat arguments with a None default value as having an implicit pydata~typing",
    },
    {
      name: "--no-strict-optional",
      description: "This flag disables strict checking of pydata~typing",
    },
    {
      name: "--warn-redundant-casts",
      description:
        "This flag will make mypy report an error whenever your code uses an unnecessary cast that can safely be removed",
    },
    {
      name: "--warn-unused-ignores",
      description:
        "This flag will make mypy report an error whenever your code uses a # type ignore comment on a line that is not actually generating an error message",
    },
    {
      name: "--no-warn-no-return",
      description:
        "By default, mypy will generate errors when a function is missing return statements in some execution paths",
    },
    {
      name: "--warn-return-any",
      description:
        "This flag causes mypy to generate a warning when returning a value with type Any from a function declared with a non-Any return type",
    },
    {
      name: "--warn-unreachable",
      description:
        "This flag will make mypy report an error whenever it encounters code determined to be unreachable or redundant after performing type analysis",
    },
    {
      name: "--allow-untyped-globals",
      description:
        "This flag causes mypy to suppress errors caused by not being able to fully infer the types of global and class variables",
    },
    {
      name: "--allow-redefinition",
      description:
        "By default, mypy won't allow a variable to be redefined with an unrelated type",
    },
    {
      name: "--local-partial-types",
      description:
        "In mypy, the most common cases for partial types are variables initialized using None, but without explicit Optional annotations",
    },
    {
      name: "--no-implicit-reexport",
      description:
        "By default, imported values to a module are treated as exported and mypy allows other modules to import them",
    },
    {
      name: "--strict-equality",
      description:
        "By default, mypy allows always-false comparisons like 42 == 'no'",
    },
    {
      name: "--extra-checks",
      description:
        "This flag enables additional checks that are technically correct but may be impractical in real code",
    },
    {
      name: "--strict",
      description: "This flag mode enables all optional error checking flags",
    },
    {
      name: "--disable-error-code",
      description:
        "This flag allows disabling one or multiple error codes globally",
    },
    {
      name: "--enable-error-code",
      description:
        "This flag allows enabling one or multiple error codes globally",
    },
    {
      name: "--show-error-context",
      description:
        "This flag will precede all errors with 'note' messages explaining the context of the error",
    },
    {
      name: "--show-column-numbers",
      description: "This flag will add column offsets to error messages",
    },
    {
      name: "--show-error-end",
      description:
        "This flag will make mypy show not just that start position where an error was detected, but also the end position of the relevant expression",
    },
    {
      name: "--hide-error-codes",
      description:
        "This flag will hide the error code [<code>] from error messages",
    },
    {
      name: "--pretty",
      description:
        "Use visually nicer output in error messages use soft word wrap, show source code snippets, and show error location markers",
    },
    {
      name: "--no-color-output",
      description:
        "This flag will disable color output in error messages, enabled by default",
    },
    {
      name: "--no-error-summary",
      description: "This flag will disable error summary",
    },
    {
      name: "--show-absolute-path",
      description: "Show absolute paths to files",
    },
    {
      name: "--soft-error-limit",
      description:
        "This flag will adjust the limit after which mypy will (sometimes) disable reporting most additional errors",
    },
    {
      name: "--no-incremental",
      description:
        "This flag disables incremental mode mypy will no longer reference the cache when re-run",
    },
    {
      name: "--cache-dir",
      description:
        "By default, mypy stores all cache data inside of a folder named",
    },
    {
      name: "--sqlite-cache",
      description: "Use an SQLite_ database to store the cache",
    },
    {
      name: "--cache-fine-grained",
      description:
        "Include fine-grained dependency information in the cache for the mypy daemon",
    },
    {
      name: "--skip-version-check",
      description:
        "By default, mypy will ignore cache data generated by a different version of mypy",
    },
    {
      name: "--skip-cache-mtime-checks",
      description: "Skip cache internal consistency checks based on mtime",
    },
    {
      name: "--pdb",
      description:
        "This flag will invoke the Python debugger when mypy encounters a fatal error",
    },
    {
      name: "--tb",
      description:
        "If set, this flag will display a full traceback when mypy encounters a fatal error",
    },
    {
      name: "--raise-exceptions",
      description: "Raise exception on fatal error",
    },
    {
      name: "--custom-typing-module",
      description:
        "This flag lets you use a custom module as a substitute for the pymodtyping module",
    },
    {
      name: "--custom-typeshed-dir",
      description:
        "This flag specifies the directory where mypy looks for standard library typeshed stubs, instead of the typeshed that ships with mypy",
    },
    {
      name: "--warn-incomplete-stub",
      description:
        "This flag modifies both the option--disallow-untyped-defs and option--disallow-incomplete-defs flags so they also report errors if stubs in typeshed are missing type annotations or has incomplete annotations",
    },
    {
      name: "--shadow-file",
      description:
        "When mypy is asked to type check SOURCE_FILE, this flag makes mypy read from and type check the contents of SHADOW_FILE instead",
    },
    {
      name: "--any-exprs-report",
      description:
        "Causes mypy to generate a text file report documenting how many expressions of type Any are present within your codebase",
    },
    {
      name: "--cobertura-xml-report",
      description:
        "Causes mypy to generate a Cobertura XML type checking coverage report",
    },
    {
      name: "--html-report",
      description:
        "Causes mypy to generate an HTML type checking coverage report",
    },
    {
      name: "--linecount-report",
      description:
        "Causes mypy to generate a text file report documenting the functions and lines that are typed and untyped within your codebase",
    },
    {
      name: "--linecoverage-report",
      description:
        "Causes mypy to generate a JSON file that maps each source file's absolute filename to a list of line numbers that belong to typed functions in that file",
    },
    {
      name: "--lineprecision-report",
      description:
        "Causes mypy to generate a flat text file report with per-module statistics of how many lines are typechecked etc",
    },
    {
      name: "--txt-report",
      description:
        "Causes mypy to generate a text file type checking coverage report",
    },
    {
      name: "--xml-report",
      description:
        "Causes mypy to generate an XML type checking coverage report",
    },
    {
      name: "--install-types",
      description:
        "This flag causes mypy to install known missing stub packages for third-party libraries using pip",
    },
    {
      name: "--non-interactive",
      description:
        "When used together with option--install-types <mypy --install-types>, this causes mypy to install all suggested stub packages using pip without asking for confirmation, and then continues to perform type checking using the installed stubs, if some files or modules are provided to type check",
    },
    {
      name: "--junit-xml",
      description:
        "Causes mypy to generate a JUnit XML test result document with type checking results",
    },
    {
      name: "--find-occurrences",
      description:
        "This flag will make mypy print out all usages of a class member based on static type information",
    },
    {
      name: "--scripts-are-modules",
      description:
        "This flag will give command line arguments that appear to be scripts",
    },
  ],
};

export default completionSpec;
